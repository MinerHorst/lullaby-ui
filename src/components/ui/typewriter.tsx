import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const TextAppear = ({
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
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextAppear;
