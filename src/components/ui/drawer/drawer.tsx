import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  handleClose: () => void;
  content: React.ReactNode;
  closeButton: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  handleClose,
  content,
  closeButton,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`absolute right-0 top-0 z-[9999] m-2 flex w-[300px] rounded-md border-[0.3px] p-2`}
        >
          <div>{content}</div>
          {closeButton && (
            <button
              onClick={handleClose}
              className="absolute right-0 top-0 flex items-center p-2"
            >
              <X size={16} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
