import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

interface DrawerData {
  closeButton?: boolean;
  content: React.ReactNode;
}

const useDrawer = (): [(drawer: DrawerData) => void] => {
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);
  const drawer = useAnimation();
  const bg = useAnimation();

  const showDrawer = (data: DrawerData) => {
    setDrawerData(data);
  };

  const onClose = () => {
    setDrawerData(null);
  };

  useEffect(() => {
    if (drawerData !== null) {
      const root = document.getElementById("drawer-root")!;
      drawer.start({ y: 0, opacity: 1, transition: { duration: 0.75 } });
      bg.start({ opacity: 1, transition: { duration: 0.75 } });
      ReactDOM.render(
        <AnimatePresence>
          <motion.div
            key="drawer"
            initial={{ y: "+100%", opacity: 0 }}
            animate={drawer}
            className={`absolute left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden rounded-md text-white`}
          >
            <motion.div
              animate={bg}
              className="absolute h-screen w-screen backdrop-blur-xl"
            ></motion.div>
            <div className="relative mt-[20vh] h-[100vh] w-[60%] overflow-y-scroll rounded-t-xl bg-white text-black">
              <div className="sticky top-0 flex w-full items-center justify-end p-2">
                <button
                  onClick={onClose}
                  className="flex aspect-square w-6 items-center justify-center rounded-full bg-neutral-200"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="h-[120vh] border-black p-4 text-center text-sm font-medium">
                {drawerData && drawerData.content}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>,
        root,
      );
      return () => {
        drawer.start({
          y: "+100%",
          transition: { duration: 0.75 },
        });
        bg.start({ opacity: 0 });
        ReactDOM.unmountComponentAtNode(root);
      };
    }
  }, [drawerData]);

  return [showDrawer];
};

export default useDrawer;
