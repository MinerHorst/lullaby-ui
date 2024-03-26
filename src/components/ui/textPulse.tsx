import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TextPulse = ({
  text,
  delay,
  color,
}: {
  text: string;
  delay: number;
  color: string;
}) => {
  const characters = [...text];

  return (
    <div style={{ color: color }}>
      <AnimatePresence>
        {characters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{
              delay: delay * index,
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
