import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TextPulse = ({ text, delay }: { text: string; delay: number }) => {
  const characters = [...text];

  return (
    <div>
      <AnimatePresence>
        {characters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              delay: (delay * index) / 2,
              repeat: Infinity,
              repeatDelay: 0.1 * characters.length * 1,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextPulse;
