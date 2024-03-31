import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextGenerator = ({
  inputText,
  delay,
  color,
}: {
  inputText: string;
  delay: number;
  color: string;
}) => {
  const wordsArray = inputText.split(" ");

  return (
    <div>
      <AnimatePresence>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: delay * idx,
            }}
            style={{ display: "inline-block", color: color }}
            className={`pr-1 opacity-0 dark:text-white`}
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextGenerator;
