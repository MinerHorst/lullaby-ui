import React, { Dispatch, ReactElement, SetStateAction, useState } from "react";
import CodeBlockComponent from "~/components/codeBlock";
import ProductComponent from "~/components/ui/ProductComponent";
import OTPComponent from "~/components/ui/otpComponent";
import TextGenerator from "~/components/ui/textGenerator";
import TextPulse from "~/components/ui/textPulse";
import Typewriter from "~/components/ui/typeWriter";

export interface Component<Props = any> {
  id: number;
  name: string;
  slug: string;
  description: string;
  sampleCode: (props: Props) => string;
  component: (props: Props) => React.ReactNode; // Updated signature to accept any props
  image: string;
  image_alt: string;
  customization: boolean;
  customizations: string[];
  dependencies: string[];
}

const components: Component[] = [
  {
    id: 1,
    name: "Text Generate Effect",
    slug: "text-generator",
    description: "The popular text generating effect from ChatGPT",
    sampleCode: (props: { color: string; text: string }) => {
      return `import React from "react";
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
  let wordsArray = inputText.split(" ");

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
            style={{ display: "inline-block", color: ${props.color} }}
            className="pr-1 opacity-0"
          >
            {word}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TextGenerator;`;
    },
    component: (props: { color: string; text: string; delay: number }) => (
      <div className="flex h-full items-start justify-start rounded-md bg-[rgb(17,18,26)] p-4 text-start">
        <TextGenerator
          inputText={
            "Hello, World! My name is Luis and I'm 16 years old. Lullaby UI is really more of a passion project for me, but be sure to share it on social media, if you like it!"
          }
          color={props.color}
          delay={0.1}
        ></TextGenerator>
      </div>
    ),
    image: "button-image-url.jpg",
    image_alt: "Button Image",
    customization: true,
    customizations: [],
    dependencies: [],
  },
  {
    id: 2,
    name: "Typewriter Effect",
    slug: "input",
    description: "A text input component.",
    sampleCode: (props: { color: string; text: string }) => {
      return `import React from "react";
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
        <div className="relative flex h-full items-start justify-start rounded-md bg-[rgb(17,18,26)] p-4 text-start">
          <Typewriter
            text="Hello, World! This is a Typewriter Effect."
            delay={0.1}
            color={color}
          />
        </div>
      </>
    ),
    image: "input-image-url.jpg",
    image_alt: "Input Image",
    customization: true,
    customizations: [],
    dependencies: [],
  },
  {
    id: 3,
    name: "Textpulse Effect",
    slug: "textpulse",
    description: "Text-Effect that simulates a pulse from left to right.",
    sampleCode: (props: { color: string; text: string; delay: number }) => {
      return `import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const TextPulse = ({
  text,
  delay = ${props.delay},
}: {
  text: string;
  delay: number;
}) => {
  const characters = [...text];

  return (
    <div style={{ color: ${props.color} }}>
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
    component: (props: { color: string; text: string }) => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] text-center [font-size:_clamp(2.5em,3vw,8em)]">
          <TextPulse
            text={props.text || "Hello, World!?"}
            delay={0.2}
            color={props.color}
          />
        </div>
      </>
    ),
    image: "input-image-url.jpg",
    image_alt: "Input Image",
    customization: true,
    customizations: ["text"],
    dependencies: [],
  },
  {
    id: 4,
    name: "Product Cell Component",
    slug: "productcell",
    description: "A product cell from apples website.",
    sampleCode: (props: { color: string; text: string }) => {
      return `import React, { useState } from "react";

export interface Product {
  id: number;
  name: string;
  description: string;
  image: string[];
  colorvalues: string[];
  colors: string[];
  price: string;
}

export default function ProductComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productData: Product[] = [
    {
      id: 1,
      name: "iPhone 15 Silicone Case with MagSafe -",
      description: "iPhone 15 Silicone Case with Magsafe",
      image: [
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNC3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708125476826",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNA3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708123923316",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWND3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708125477348",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0N3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692999418841",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MT0Q3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1692999652464",
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWN93?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1708123923139",
      ],
      colorvalues: [
        "rgb(213,233,213)",
        "rgb(246,206,103)",
        "rgb(179,195,216)",
        "rgb(81,89,100)",
        "rgb(169,162,152)",
        "rgb(239,143,163)",
      ],
      colors: [
        "Soft Mint",
        "Sunshine",
        "Light Blue",
        "Storm Blue",
        "Clay",
        "Pink",
      ],
      price: "$69.00",
    },
  ];

  return (
    <div className="h-full w-[90%] rounded-md bg-white text-black">
      {productData.map((product) => (
        <div
          key={product.id}
          className="flex h-full w-full flex-col items-center justify-around"
        >
          <img
            src={product.image[currentIndex]}
            alt={product.name}
            className="h-[45%]"
          />
          <div className="flex gap-3">
            {product.colors.map((color, index) => (
              <button
                key={index}
                style={{ backgroundColor: product.colorvalues[index] }}
                className="h-4 w-4 rounded-full"
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
          <div>
            <h2 className="flex flex-col font-medium">
              {product.name}
              {product.colors[currentIndex]}
            </h2>
          </div>
          <h2>{product.price}</h2>
        </div>
      ))}
    </div>
  );
}`;
    },
    component: () => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] py-4 text-center">
          <ProductComponent />
        </div>
      </>
    ),
    image: "input-image-url.jpg",
    image_alt: "Input Image",
    customization: false,
    customizations: [],
    dependencies: [],
  },
  {
    id: 5,
    name: "Codeblock Component",
    slug: "codeblock",
    description: "A simple Code-Block Component based on the Prism-js Library.",
    sampleCode: (props: { color: string; text: string }) => {
      return `import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { Check, Clipboard } from "lucide-react";

export default function CodeBlockComponent({
  language = "language-jsx",
  code,
}: {
  language?: string;
  code: string;
}) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  const copyCodeToClipboard = () => {
    if (codeRef.current) {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch((error) => {
          console.error("Failed to copy code to clipboard:", error);
        });
    }
  };

  return (
    <div className="relative flex h-full max-h-[50vh] w-full items-center justify-center rounded-md">
      <pre ref={codeRef} className="h-full min-h-fit w-full overflow-scroll">
        <code className={language}>{code.toString()}</code>
      </pre>
      {copied ? (
        <div
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: 1,
            padding: "10px 10px",
            cursor: "pointer",
            borderRadius: "0 0 0 5px",
          }}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          <p>Copied</p>
          <Check size={16} />
        </div>
      ) : (
        <button
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            zIndex: 1,
            padding: "10px 10px",
            cursor: "pointer",
            borderRadius: "0 0 0 5px",
          }}
          className="text-muted-foreground"
          onClick={copyCodeToClipboard}
        >
          <Clipboard size={16} />
        </button>
      )}
    </div>
  );
}`;
    },
    component: (props: { color: string; Code: string }) => (
      <>
        {!props.Code ? (
          <CodeBlockComponent
            code={`import React from "react";
            
export default function ButtonComponent() {
  // Your code here
}`}
          />
        ) : (
          <CodeBlockComponent code={props.Code} />
        )}
      </>
    ),
    image: "something.jpg",
    image_alt: "something",
    customization: true,
    customizations: ["Code"],
    dependencies: ["prismjs", "lucide-react"],
  },
  {
    id: 6,
    name: "OTP Component",
    slug: "otp",
    description: "A simple OTP (One-Time Password) Interface.",
    sampleCode: (props: { length: number; separatorIndex: number }) => {
      return `import React, {
import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";

interface OTPComponentProps {
  length: number;
  separatorIndex: number;
}

const OTPComponent: React.FC<OTPComponentProps> = ({
  length,
  separatorIndex,
}) => {
  const [otp, setOTP] = useState<string[]>(Array(length).fill(""));
  const otpInputs = useRef<HTMLInputElement[]>(Array(length).fill(undefined));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!isNaN(Number(value)) && value.length <= 1) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);
      if (value !== "" && index < length - 1 && otpInputs.current[index + 1]) {
        otpInputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      otpInputs.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    if (otp.every((digit) => digit !== "")) {
      console.log("All inputs are filled:", otp.join("")); //You can handle an action once the OTP is filled here.
    }
  }, [otp]);

  return (
    <div>
      {otp.map((digit, index) => (
        <React.Fragment>
          <input
            key={index}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyUp={(e) => handleKeyUp(e, index)}
            ref={(input) => {
              if (input && otpInputs.current) {
                otpInputs.current[index] = input;
                otpInputs.current = otpInputs.current.filter(
                  (item) => item !== undefined,
                );
              }
            }}
            className="aspect-square items-center rounded-md border border-neutral-400 bg-transparent text-center text-white"
            style={{ width: "30px", marginRight: "5px" }}
          />
          {index === separatorIndex - 1 && index !== length - 1 && (
            <span
              style={{ marginRight: "5px" }}
              className="h-9 border-[0.3px] border-neutral-400"
            ></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default OTPComponent;`;
    },
    component: (props: { length: number; separatorIndex: number }) => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] text-center">
          <OTPComponent
            separatorIndex={props.separatorIndex}
            length={props.length}
          />
          <div>{props.length}</div>
          <div>{props.separatorIndex}</div>
        </div>
      </>
    ),
    image: "something.jpg",
    image_alt: "something",
    customization: true,
    customizations: [],
    dependencies: [],
  },
  {
    id: 7,
    name: "Notification",
    slug: "notification",
    description: "A simple OTP (One-Time Password) Interface.",
    sampleCode: (props: { length: number; separatorIndex: number }) => {
      return ``;
    },
    component: (props: { length: number; separatorIndex: number }) => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] text-center"></div>
      </>
    ),
    image: "something.jpg",
    image_alt: "something",
    customization: true,
    customizations: [],
    dependencies: [],
  },
];

export default components;
