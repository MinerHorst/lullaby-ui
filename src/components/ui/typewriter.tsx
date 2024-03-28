import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Typewriter = ({
  text,
  delay = 0.2,
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
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              delay: delay * index,
              duration: 0.1,
            }}
            className="inline-block"
          >
            <div>{letter === " " ? "\u00A0" : letter} </div>{" "}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;
