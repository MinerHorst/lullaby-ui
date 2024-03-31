import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import React from "react";
import { X } from "lucide-react";
import {
  AnimatePresence,
  AnimationControls,
  easeInOut,
  easeOut,
  motion,
  useAnimation,
} from "framer-motion";

interface DrawerData {
  closeButton?: boolean;
  content: React.ReactNode;
}

const DrawerComponent = ({
  drawerData,
  onClose,
  drawer,
  background,
}: {
  drawerData: DrawerData;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  drawer: AnimationControls;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  background: AnimationControls;
}) => {
  useEffect(() => {
    if (drawerData) {
      void drawer.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.75, delay: 0.2, ease: easeOut },
      });
      void background.start({
        opacity: 1,
        transition: { duration: 0.2, delay: 0.8 },
      });
    }
  }, [drawerData, drawer, background]);

  return (
    <AnimatePresence>
      {drawerData && (
        <motion.div
          key="drawer"
          initial={{ y: "+100%", scale: 0.6 }}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          animate={drawer}
          className={`absolute left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden rounded-md text-white`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            animate={background}
            className="absolute top-0 h-screen w-screen backdrop-blur-xl"
          >
            <button
              onClick={onClose}
              className="h-full w-full cursor-default"
            />
          </motion.div>
          <div className="relative mt-[20vh] h-[100vh] w-[60%] overflow-y-scroll rounded-t-xl bg-white text-black">
            <div className="sticky top-0 flex w-full items-center justify-end p-2">
              <button
                onClick={onClose}
                className="flex aspect-square w-6 items-center justify-center rounded-full bg-neutral-200"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-fit border-black p-4 text-center text-sm font-medium">
              {drawerData.content}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const useDrawer = (): [(drawer: DrawerData) => void, () => void] => {
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);
  const drawer = useAnimation();
  const background = useAnimation();

  const showDrawer = (data: DrawerData) => {
    setDrawerData(data);
  };

  const onClose = () => {
    void background.start({ opacity: 0, transition: { duration: 0.2 } });

    void drawer.start({
      y: "+100%",
      scale: 0.6,
      transition: { duration: 0.75, delay: 0.2, ease: easeInOut },
    });
  };

  useEffect(() => {
    if (drawerData !== null) {
      const root = document.getElementById("drawer-root");
      if (root) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.render(
          <DrawerComponent
            drawerData={drawerData}
            onClose={onClose}
            drawer={drawer}
            background={background}
          />,
          root,
        );
      }
    } else {
    }
  }, [drawerData]);

  return [showDrawer, onClose];
};

export default useDrawer;
