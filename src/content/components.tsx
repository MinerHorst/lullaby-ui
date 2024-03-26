import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import TextPulse from "~/components/ui/textPulse";
import TextAppear from "~/components/ui/textPulse";
import Typewriter from "~/components/ui/typewriter";

export interface Component {
  id: number;
  name: string;
  slug: string;
  description: string;
  sampleCode: (color: string, delay: number) => string;
  component: (color: string, text: string, delay: number) => React.ReactNode; // Include text parameter here
  image: string;
  image_alt: string;
}

const components: Component[] = [
  {
    id: 1,
    name: "Text Generate Effect",
    slug: "button",
    description: "The popular text generating Effect from ChatGPT",
    sampleCode: (color: string, delay: number) => {
      return `somethig`;
    },
    component: () => (
      <button onClick={() => console.log("Button clicked")}>Click me</button>
    ),
    image: "button-image-url.jpg",
    image_alt: "Button Image",
  },
  {
    id: 2,
    name: "Typewriter Effect",
    slug: "input",
    description: "A text input component.",
    sampleCode: (color: string, delay: number) => {
      return `import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

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
            transition={{ delay: delay * index }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Typewriter;`;
    },
    component: (color: string) => (
      <>
        <div className="items-center justify-center bg-gray-900">
          <Typewriter text="Hello, World!" delay={0.1} color={color} />
        </div>
      </>
    ),
    image: "input-image-url.jpg",
    image_alt: "Input Image",
  },
  {
    id: 3,
    name: "Textpulse Effect",
    slug: "textpulse",
    description: "Text-Effect that simulates a pulse from left to right.",
    sampleCode: (color: string, delay: number) => {
      return `import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TextPulse = ({
  text,
  delay = ${delay},
}: {
  text: string;
  delay: number;
}) => {
  const characters = [...text];

  return (
    <div style={{ color: ${color} }}>
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

export default TextPulse;`;
    },
    component: (color: string, text: string, delay: number) => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] text-center [font-size:_clamp(2.5em,3vw,8em)]">
          <TextPulse text={text} delay={0.2} color={color} />
        </div>
      </>
    ),
    image: "input-image-url.jpg",
    image_alt: "Input Image",
  },
];

export default components;
