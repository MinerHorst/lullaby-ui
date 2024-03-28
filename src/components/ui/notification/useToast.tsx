import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Define types for toast
type ToastType = "warning" | "danger" | "normal" | "info";

interface ToastData {
  message: string;
  type: ToastType;
  description?: string;
}

const useToast = (): [(toast: ToastData) => void] => {
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() => {
    if (toastData !== null) {
      const root = document.getElementById("toast-root")!;
      const timer = setTimeout(() => {
        setToastData(null);
      }, 3000);

      ReactDOM.render(
        <Portal node={root}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute right-0 top-0 z-[9999] m-2 flex w-[300px] rounded-md border p-2 text-white bg-${toastData.type}`}
            >
              <div>
                <div>{toastData.message}</div>
                {toastData.description && (
                  <div className="text-sm text-neutral-500">
                    {toastData.description}
                  </div>
                )}
              </div>
              <button
                onClick={() => setToastData(null)}
                className="absolute right-0 top-0 flex items-center p-2"
              >
                <X size={16} />
              </button>
            </motion.div>
          </AnimatePresence>
        </Portal>,
        root,
      );

      return () => {
        clearTimeout(timer);
        ReactDOM.unmountComponentAtNode(root);
      };
    }
  }, [toastData]);

  const showToast = (toast: ToastData) => {
    setToastData(toast);
  };

  return [showToast];
};

export default useToast;
