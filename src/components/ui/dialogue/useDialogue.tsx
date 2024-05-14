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

interface dialogueData {
  closeButton?: boolean;
  content: React.ReactNode;
}

const DialogueComponent = ({
  dialogueData,
  onClose,
  dialogue,
  background,
}: {
  dialogueData: dialogueData;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialogue: AnimationControls;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  background: AnimationControls;
}) => {
  useEffect(() => {
    if (dialogueData) {
      void dialogue.start({
        y: 0,
        transition: { duration: 0.75 },
      });
      void background.start({
        opacity: 1,
        transition: { duration: 0.2, delay: 0.8 },
      });
    }
  }, [dialogueData, dialogue, background]);

  return (
    <AnimatePresence>
      {dialogueData && (
        <motion.div
          key="dialogue"
          initial={{ y: "+200% " }}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          animate={dialogue}
          className={`fixed left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden rounded-md text-white`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            animate={background}
            className="absolute top-0 h-screen w-screen backdrop-blur-sm"
          >
            <button
              onClick={onClose}
              className="h-full w-full cursor-default"
            />
          </motion.div>
          <div className="relative min-h-[30vh] min-w-[90%] overflow-y-scroll rounded-xl bg-white text-black md:min-w-[40%] md:max-w-[60%]">
            <div className="sticky top-0 flex w-full items-center justify-end p-2">
              <button
                onClick={onClose}
                className="flex aspect-square w-6 items-center justify-center rounded-full bg-neutral-200"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-fit border-black p-4 text-center text-sm font-medium">
              {dialogueData.content}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const useDialogue = (): [(dialogue: dialogueData) => void, () => void] => {
  const [dialogueData, setdialogueData] = useState<dialogueData | null>(null);
  const dialogue = useAnimation();
  const background = useAnimation();

  const showDialogue = (data: dialogueData) => {
    setdialogueData(data);
  };

  const onClose = () => {
    void background.start({ opacity: 0, transition: { duration: 0.2 } });
    void dialogue.start({
      y: "+200%",
      transition: { duration: 1.5, delay: 0.2 },
    });
  };

  useEffect(() => {
    if (dialogueData !== null) {
      const root = document.getElementById("dialogue-root");
      if (root) {
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.render(
          <DialogueComponent
            dialogueData={dialogueData}
            onClose={onClose}
            dialogue={dialogue}
            background={background}
          />,
          root,
        );
      }
    } else {
    }
  }, [dialogueData]);

  return [showDialogue, onClose];
};

export default useDialogue;
