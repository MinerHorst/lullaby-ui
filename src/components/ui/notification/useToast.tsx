import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Portal } from "react-portal";
import React from "react";
import { X } from "lucide-react";
import { AnimatePresence, color, motion } from "framer-motion";

// Define types for toast
type ToastType = "muted" | "danger" | "normal" | "info";

interface ToastData {
  message: string;
  type: ToastType;
  description?: string;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getStylesByType = (type: any) => {
  switch (type) {
    case "muted":
      return {
        backgroundColor: "#CCCCCC",
        textColor: "#CCCCCC",
        borderColor: "#CCCCCC",
        descriptionColor: "#CCCCCC",
      };
    case "danger":
      return {
        backgroundColor: "#e53935",
        textColor: "#fff",
        borderColor: "#FF0000",
        descriptionColor: "#CCCCCC",
      };
    case "normal":
      return {
        backgroundColor: "#000",
        textColor: "#fff",
        borderColor: "rgb(55,55,55)",
        descriptionColor: "#CCCCCC",
      };
    case "info":
      return {
        backgroundColor: "#659952",
        textColor: "#000",
        borderColor: "rgb(131,131,139)",
        descriptionColor: "#CCCCCC",
      };
    default:
      return {
        backgroundColor: "transparent",
        textColor: "#333",
        borderColor: "#333",
        descriptionColor: "#CCCCCC",
      };
  }
};

const useToast = (): [(toast: ToastData) => void] => {
  const [toastData, setToastData] = useState<ToastData | null>(null);

  useEffect(() => {
    if (toastData !== null) {
      const root = document.getElementById("toast-root")!;
      const timer = setTimeout(() => {
        setToastData(null);
      }, 3000000);

      const styles = getStylesByType(toastData.type);
      // eslint-disable-next-line react/no-deprecated
      ReactDOM.render(
        <Portal node={root}>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`absolute right-0 top-0 z-[9999] m-2 flex w-[300px] rounded-md border-[0.3px] p-2`}
              style={{
                backgroundColor: styles.backgroundColor,
                color: styles.textColor,
                borderColor: styles.borderColor,
              }}
            >
              <div>
                <div className="text-sm font-medium">{toastData.message}</div>
                {toastData.description && (
                  <div
                    className="text-sm"
                    style={{ color: styles.descriptionColor }}
                  >
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
        // eslint-disable-next-line react/no-deprecated
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
