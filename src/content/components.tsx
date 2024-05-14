import React from "react";
import { Component } from "lucide-react";
import { toast } from "sonner";
import CodeBlockComponent from "~/components/codeBlock";
import Button from "~/components/ui/button";
import Input from "~/components/ui/input";
import OTPComponent from "~/components/ui/otpComponent";
import SocialButton from "~/components/ui/socialButton";
import Sonner from "~/components/ui/sonner";
import TextGenerator from "~/components/ui/textGenerator";
import TextPulse from "~/components/ui/textPulse";
import TextArea from "~/components/ui/textarea";
import DrawerComponent from "~/components/ui/drawer";
import ToolbarComponent from "~/components/ui/toolbarComponent";
import MentionComponent from "~/components/ui/mentionComponent";
import SignUpComponent from "~/components/ui/signupComponent";
import DialogueComponent from "~/components/ui/dialogue/dialogueComponent";
import SideBarComponent from "~/components/ui/sideBarComponent";

export interface ComponentLink {
  name: string;
  link: string;
}

export interface Property {
  propertyName: string;
  propertyType: string;
  propertyDescription: string;
}

interface ComponentProps {
  color: string;
  text: string;
  delay: number;
  Code: string;
  length: number;
  separatorIndex: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow additional properties
}

export interface Component<Props = ComponentProps> {
  id: number;
  name: string;
  slug: string;
  description: string;
  sampleCode: (props: Props) => string;
  component: (props: Props) => React.JSX.Element;
  image: string;
  image_alt: string;
  customization: boolean;
  customizations: string[];
  dependencies: string[];
  maintainer?: string;
  maintainerlink?: string;

  links: ComponentLink[];
  properties: Record<string, Property[]>;

  usage: (props: Props) => string;
}

const components: Component[] = [
  {
    id: 1,
    name: "Drawer",
    slug: "drawer",
    description: "Drawer Component utilizing React Portals.",
    sampleCode: () => {
      return `import { useState, useEffect, useRef } from "react";
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

interface DrawerData {
  closeButton?: boolean;
  content: React.ReactNode;
}

const DrawerComponent = ({
  drawerData,
  onClose,
  drawer,
  background,
}: {
  drawerData: DrawerData;
  onClose: () => void;
  drawer: AnimationControls;
  background: AnimationControls;
}) => {
  useEffect(() => {
    if (drawerData) {
      void drawer.start({
        y: 0,
        scale: 1,
        transition: { duration: 0.75, delay: 0.2, ease: easeOut },
      });
      void background.start({
        opacity: 1,
        transition: { duration: 0.2, delay: 0.8 },
      });
    }
  }, [drawerData, drawer, background]);

  return (
    <AnimatePresence>
      {drawerData && (
        <motion.div
          key="drawer"
          initial={{ y: "+100%", scale: 0.6 }}
          animate={drawer}
          className="absolute left-0 top-0 z-[9999] flex h-screen w-screen items-center justify-center overflow-hidden rounded-md text-white"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={background}
            className="absolute top-0 h-screen w-screen backdrop-blur-xl"
          >
            <button
              onClick={onClose}
              className="h-full w-full cursor-default"
            />
          </motion.div>
          <div className="relative mt-[20vh] h-[100vh] w-[60%] overflow-y-scroll rounded-t-xl bg-white text-black">
            <div className="sticky top-0 flex w-full items-center justify-end p-2">
              <button
                onClick={onClose}
                className="flex aspect-square w-6 items-center justify-center rounded-full bg-neutral-200"
              >
                <X size={16} />
              </button>
            </div>

            <div className="h-fit border-black p-4 text-center text-sm font-medium">
              {drawerData.content}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const useDrawer = (): [(drawer: DrawerData) => void, () => void] => {
  const [drawerData, setDrawerData] = useState<DrawerData | null>(null);
  const drawer = useAnimation();
  const background = useAnimation(); 

  const showDrawer = (data: DrawerData) => {
    setDrawerData(data);
  };

  const onClose = () => {
    void background.start({ opacity: 0, transition: { duration: 0.2 } });

    void drawer.start({
      y: "+100%",
      scale: 0.6,
      transition: { duration: 0.75, delay: 0.2, ease: easeInOut },
    });
  };

  useEffect(() => {
    if (drawerData !== null) {
      const root = document.getElementById("drawer-root");
      if (root) {
        ReactDOM.render(
          <DrawerComponent
            drawerData={drawerData}
            onClose={onClose}
            drawer={drawer}
            background={background}
          />,
          root,
        );
      }
    } else {
    }
  }, [drawerData]);

  return [showDrawer, onClose];
};

export default useDrawer;`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <DrawerComponent />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53622415917_08c832a304_h.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import Button from "~/components/ui/button";
import useDrawer from "./drawer/useDrawer";

const [showDrawer] = useDrawer();

const openDrawer = () => {
  const drawerContent = {
    content: (
      <div>
        <h2>Drawer Content</h2>
        <p>This is the content of the drawer.</p>
      </div>
    ),
  };
  showDrawer(drawerContent);
};


<Button display="custom" customText="Open Drawer" onClick={openDrawer}>
  Open Drawer
</Button>`;
    },
    properties: {
      Button: [
        {
          propertyName: "closeButton",
          propertyType: "boolean",
          propertyDescription: `Determines wether a Close Button should be rendered.`,
        },
        {
          propertyName: "content",
          propertyType: "React.ReactNode",
          propertyDescription: `The content of the Drawer.`,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Textpulse",
    slug: "textpulse",
    description: "Text that simulates a pulse from left to right.",
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
          <TextPulse text={props.text || "Hello, World!?"} delay={0.2} />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53623789120_d03ba3a981_c.jpg",
    image_alt: "Image",
    customization: true,
    customizations: ["text"],
    dependencies: ["tailwindcss", "framer-motion"],
    links: [],
    usage: (props: { color: string; text: string }) => {
      return ``;
    },
    properties: {
      Appearance: [
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
      ],
      Behavior: [
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
      ],
    },
  },

  {
    id: 5,
    name: "Codeblock",
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
    image: "",
    image_alt: "something",
    customization: true,
    customizations: ["Code"],
    dependencies: ["tailwindcss", "prismjs", "lucide-react"],
    links: [],
    usage: (props: { color: string; text: string }) => {
      return ``;
    },
    properties: {
      Codeblock: [
        {
          propertyName: "language",
          propertyType: "string",
          propertyDescription:
            "Language of the provided code - used for highlighting.",
        },
        {
          propertyName: "code",
          propertyType: "string",
          propertyDescription: "The code that is displayed.",
        },
      ],
    },
  },
  {
    id: 6,
    name: "OTP",
    slug: "otp",
    description: "A simple OTP (One-Time Password) Interface.",
    sampleCode: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => {
      return `import React, {
import React, {
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent,
  useEffect,
} from "react";

interface OTPProps {
  length: number;
  separatorIndex: number;
}

const OTP: React.FC<OTPProps> = ({
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

export default OTP;`;
    },
    component: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] text-center">
          <OTPComponent separatorIndex={3} length={6} />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53623479503_1c6f1079cf_h.jpg",
    image_alt: "something",
    customization: true,
    customizations: [],
    dependencies: ["tailwindcss"],
    links: [],
    usage: (props: { color: string; text: string }) => {
      return `Import OTP from "~/components/ui/otp"
      
      <OTPComponent length={6} separatorIndex={3} action={(otp) => console.log("OTP Filled:", otp)} />`;
    },
    properties: {
      OTP: [
        {
          propertyName: "length",
          propertyType: "number",
          propertyDescription: "Length of the OTP Component.",
        },
        {
          propertyName: "seperatorIndex",
          propertyType: "number",
          propertyDescription: "Index where a seperator is displayed.",
        },
        {
          propertyName: "action",
          propertyType: "function",
          propertyDescription:
            'The action that should be fire when the OTP is filled. action={(otp) => console.log("OTP Filled:", otp)}',
        },
      ],
    },
  },
  {
    id: 7,
    name: "Sonner",
    slug: "sonner",
    description: "A toast component build ontop of Sonner.",
    sampleCode: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => {
      return `import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "w-full rounded-md py-[1.2em] px-4 flex items-center",
          title: "text-white text-sm",
          description: "text-xs",
          loader: "bg-blue-400",
          closeButton:
            "text-xs px-2 py-2 h-fit border rounded-md border-[rgb(55,55,55)] text-white",
          cancelButton:
            "text-xs px-2 py-2 h-fit border rounded-md border-[rgb(55,55,55)] text-white",
          actionButton:
            "text-xs px-2 py-2 h-fit border rounded-md border-[rgb(55,55,55)] text-white",
          success:
            "px-2 gap-2 text-white border-[0.3px] border-green-400 px-2 gap-2",
          error:
            "px-2 gap-2 text-white border-[0.3px] border-red-400 px-2 gap-2",
          info: "px-2 gap-2 text-white border-[0.3px] border-blue-400 px-2 gap-2",
          warning:
            "px-2 gap-2 text-white border-[0.3px] border-red-400 px-2 gap-2",
          loading: "px-2 gap-2",
          default: "bg-[rgb(17,18,26)] border-[rgb(55,55,55)] text-white",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };`;
    },
    component: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] py-4 text-center">
          <Sonner />
        </div>
      </>
    ),
    image: "",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "tailwindcss", "framer-motion", "sonner"],
    maintainer: "Emil Kowalski",
    maintainerlink: "https://emilkowal.ski",
    links: [
      { name: "Docs", link: "https://example.com/docs" },
      { name: "GitHub Repo", link: "https://github.com/example/repo" },
    ],
    usage: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => {
      return `//Add a Toaster into the root of your project.
import { Toaster } from "~/components/ui/toaster";

<Toaster />


//Display a Toast
import { toast } from "sonner";


<button
className="rounded-md border px-2 py-1"
onClick={() =>
  toast.success("Event has been created", {
    description: "Sunday, December 03, 2023 at 9:00 AM",
    duration: 3000,
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  })
}
>
  Success
</button>`;
    },
    properties: {
      toast: [
        {
          propertyName: ".message",
          propertyType: "method",
          propertyDescription: `toast.message("Normal Toast")`,
        },
        {
          propertyName: ".success",
          propertyType: "method",
          propertyDescription: `toast.success("Success Toast")`,
        },

        {
          propertyName: ".info",
          propertyType: "method",
          propertyDescription: `toast.info("Info Toast")`,
        },
        {
          propertyName: ".loading",
          propertyType: "method",
          propertyDescription: `toast.loading("Success Toast")`,
        },
        {
          propertyName: ".warning",
          propertyType: "method",
          propertyDescription: `toast.warning("Warning Toast")`,
        },
        {
          propertyName: ".error",
          propertyType: "method",
          propertyDescription: `toast.error("Error Toast")`,
        },
        {
          propertyName: ".error",
          propertyType: "method",
          propertyDescription: `toast.error("Error Toast")`,
        },
        {
          propertyName: "description",
          propertyType: "string",
          propertyDescription: `toast("Toast", {description: "Description"})`,
        },
        {
          propertyName: "duration",
          propertyType: "number",
          propertyDescription: `toast("Toast", {duration: 3000})`,
        },
        {
          propertyName: "icon",
          propertyType: "React.ReactNode",
          propertyDescription: `toast("Toast", {icon: <Icon />})`,
        },
      ],
      Toaster: [
        {
          propertyName: "visibleToasts",
          propertyType: "number",
          propertyDescription: "Amount of visible toasts",
        },
        {
          propertyName: "position",
          propertyType: "string",
          propertyDescription:
            "Place where the toast is rendered: bottom-right",
        },
      ],
    },
  },
  {
    id: 8,
    name: "Social Button",
    slug: "socialButton",
    description: "An easy to use button to display socials.",
    sampleCode: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => {
      return `import React from "react";

interface IconType {
  [key: string]: React.ReactNode;
}

const Icons: IconType = {
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 512 512">
      <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 512 512">
      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
    </svg>
  ),
  instagram: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 448 512">
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
  ),
  tiktok: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 448 512">
      <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
    </svg>
  ),
  linkedin: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 448 512">
      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
    </svg>
  ),
  github: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 496 512">
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  ),
  discord: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 640 512">
      <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
    </svg>
  ),
  figma: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 384 512">
      <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" />
    </svg>
  ),
  youtube: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 576 512">
      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
    </svg>
  ),
  stripe: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 640 512">
      <path d="M165 144.7l-43.3 9.2-.2 142.4c0 26.3 19.8 43.3 46.1 43.3 14.6 0 25.3-2.7 31.2-5.9v-33.8c-5.7 2.3-33.7 10.5-33.7-15.7V221h33.7v-37.8h-33.7zm89.1 51.6l-2.7-13.1H213v153.2h44.3V233.3c10.5-13.8 28.2-11.1 33.9-9.3v-40.8c-6-2.1-26.7-6-37.1 13.1zm92.3-72.3l-44.6 9.5v36.2l44.6-9.5zM44.9 228.3c0-6.9 5.8-9.6 15.1-9.7 13.5 0 30.7 4.1 44.2 11.4v-41.8c-14.7-5.8-29.4-8.1-44.1-8.1-36 0-60 18.8-60 50.2 0 49.2 67.5 41.2 67.5 62.4 0 8.2-7.1 10.9-17 10.9-14.7 0-33.7-6.1-48.6-14.2v40c16.5 7.1 33.2 10.1 48.5 10.1 36.9 0 62.3-15.8 62.3-47.8 0-52.9-67.9-43.4-67.9-63.4zM640 261.6c0-45.5-22-81.4-64.2-81.4s-67.9 35.9-67.9 81.1c0 53.5 30.3 78.2 73.5 78.2 21.2 0 37.1-4.8 49.2-11.5v-33.4c-12.1 6.1-26 9.8-43.6 9.8-17.3 0-32.5-6.1-34.5-26.9h86.9c.2-2.3 .6-11.6 .6-15.9zm-87.9-16.8c0-20 12.3-28.4 23.4-28.4 10.9 0 22.5 8.4 22.5 28.4zm-112.9-64.6c-17.4 0-28.6 8.2-34.8 13.9l-2.3-11H363v204.8l44.4-9.4 .1-50.2c6.4 4.7 15.9 11.2 31.4 11.2 31.8 0 60.8-23.2 60.8-79.6 .1-51.6-29.3-79.7-60.5-79.7zm-10.6 122.5c-10.4 0-16.6-3.8-20.9-8.4l-.3-66c4.6-5.1 11-8.8 21.2-8.8 16.2 0 27.4 18.2 27.4 41.4 .1 23.9-10.9 41.8-27.4 41.8zm-126.7 33.7h44.6V183.2h-44.6z" />
    </svg>
  ),
};

const SocialButton = ({
  text,
  social,
  socialLink,
}: {
  text?: string;
  social?: string;
  socialLink?: string;
}) => {
  const selectedIcon = Icons[social];

  return (
    <a href={socialLink}>
      <div className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-black">
        {text}
        <div className="aspect-square w-[20px]">{selectedIcon}</div>
      </div>
    </a>
  );
};

export default SocialButton;`;
    },
    component: () => (
      <>
        <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] py-4 text-center">
          <SocialButton
            text="More posts on"
            social="twitter"
            socialLink="https://twitter.com"
          />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53622452667_2805b15638_c.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: (props: {
      color: string;
      text: string;
      Code: string;
      length: number;
      separatorIndex: number;
    }) => {
      return `import { toast } from "~/components/ui/socialButton";

<SocialButton
  text="More posts on"
  social="twitter"
  socialLink="https://twitter.com"
/>`;
    },
    properties: {
      Button: [
        {
          propertyName: "text",
          propertyType: "string",
          propertyDescription: `The text that is displayed.`,
        },
        {
          propertyName: "social",
          propertyType: "string",
          propertyDescription: `Social Input: twitter, youtube, google, instagram, linkedin, stripe, figma, discord, tiktok, facebook `,
        },

        {
          propertyName: "socialLink",
          propertyType: "string",
          propertyDescription: `A link, where the button should go.`,
        },
      ],
    },
  },
  {
    id: 9,
    name: "Button",
    slug: "button",
    description: "An easy to use button with different types.",
    sampleCode: () => {
      return `import React from "react";
import { ArrowLeft, LogIn, LogOut, Upload } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display: "signup" | "signin" | "logout" | "back" | "upload" | "custom";
  action?: () => void;
  customIcon?: React.ReactNode;
  customText?: string;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  display,
  action,
  customIcon,
  customText,
  iconPosition = "left",
  ...props
}) => {
  let buttonText = "";
  let icon = null;

  switch (display) {
    case "signup":
      buttonText = "Sign Up";
      icon = <LogIn size={16} />;
      break;
    case "signin":
      buttonText = "Sign In";
      icon = <LogIn size={16} />;
      break;
    case "logout":
      buttonText = "Log Out";
      icon = <LogOut size={16} />;
      break;
    case "back":
      buttonText = "Back";
      icon = <ArrowLeft size={16} />;
      break;
    case "upload":
      buttonText = "Upload";
      icon = <Upload size={16} />;
      break;
    case "custom":
      if (customIcon && customText) {
        icon = customIcon;
        buttonText = customText;
      } else {
        console.error(
          "Custom button type requires customIcon and customText props.",
        );
      }
      break;
    default:
      break;
  }

  return (
    <button
      {...props}
      className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-2 text-black"
      onClick={action}
    >
      {iconPosition === "left" && icon}
      {buttonText}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] py-4 text-center">
          <Button
            display="upload"
            onClick={() =>
              toast.success("The file was uploaded.", { closeButton: true })
            }
            iconPosition="left"
          />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53623668814_a7692805e0_c.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "react", "lucide-react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import Button from "~/components/ui/button";

const handleSignUp = () => {
  console.log("Sign Up action");
};

<Button
  display="signup"
  iconPosition="right"
  action={handleSingUp}
/>`;
    },
    properties: {
      Button: [
        {
          propertyName: "display",
          propertyType: "string",
          propertyDescription: `"signup"; "signin"; "logout"; "back"; "upload"; "custom"`,
        },
        {
          propertyName: "onClick",
          propertyType: "void",
          propertyDescription: `The action that should be triggered once the button is pressed.`,
        },
        {
          propertyName: "iconPosition",
          propertyType: "string",
          propertyDescription: `iconPosition="left" (default) other: "right"`,
        },
        {
          propertyName: "customIcon",
          propertyType: "React.ReactNode",
          propertyDescription: `customIcon={<Heart />} Be sure to specify type="custom"`,
        },
        {
          propertyName: "customText",
          propertyType: "string",
          propertyDescription: `customText="Custom Button" Be sure to specify type="custom"`,
        },
      ],
    },
  },
  {
    id: 10,
    name: "Input",
    slug: "input",
    description:
      "Displays an input field, that works just like an HTML-Input but looks nicer.",
    sampleCode: () => {
      return `import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }) => {
  return (
    <input
      {...props}
      className="flex h-10 w-full rounded-md border border-neutral-400 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus-within:placeholder-transparent focus-visible:outline-none focus-visible:ring-[0.5px] focus-visible:ring-[#d4d4d8] disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
});

export { Input };`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <Input type="text" placeholder="Input Component" />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53622455267_2cd1809597_c.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import Input from "~/components/ui/input";

<Input type="text" placeholder="Input Component" />`;
    },
    properties: {
      Button: [
        {
          propertyName: "type",
          propertyType: "string",
          propertyDescription: `The type of the Button: "signup"; "signin"; "logout"; "back"; "upload"; "custom"`,
        },
        {
          propertyName: "action",
          propertyType: "void",
          propertyDescription: `The action that should be triggered once the button is pressed.`,
        },
        {
          propertyName: "iconPosition",
          propertyType: "string",
          propertyDescription: `iconPosition="left" (default) other: "right"`,
        },
        {
          propertyName: "customIcon",
          propertyType: "React.ReactNode",
          propertyDescription: `customIcon={<Heart />} Be sure to specify type="custom"`,
        },
        {
          propertyName: "customText",
          propertyType: "string",
          propertyDescription: `customText="Custom Button" Be sure to specify type="custom"`,
        },
      ],
    },
  },
  {
    id: 11,
    name: "Textarea",
    slug: "textarea",
    description:
      "Displays a Textarea, that works just like an HTML-Textarea but looks nicer.",
    sampleCode: () => {
      return `import React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...props }) => {
    return (
      <textarea
        {...props}
        className="flex h-10 min-h-[80px] w-full rounded-md border-[0.5px] border-neutral-400 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus-within:placeholder-transparent focus-visible:outline-none focus-visible:ring-[0.5px] focus-visible:ring-[#d4d4d8] disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  },
);

export { TextArea };`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <TextArea placeholder="Textarea Component" />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53623542858_d512063925_c.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import TextArea from "~/components/ui/textarea";

<TextArea placeholder="Textarea Component" />`;
    },
    properties: {
      Button: [
        {
          propertyName: "type",
          propertyType: "string",
          propertyDescription: `The type of the Button: "signup"; "signin"; "logout"; "back"; "upload"; "custom"`,
        },
        {
          propertyName: "action",
          propertyType: "void",
          propertyDescription: `The action that should be triggered once the button is pressed.`,
        },
        {
          propertyName: "iconPosition",
          propertyType: "string",
          propertyDescription: `iconPosition="left" (default) other: "right"`,
        },
        {
          propertyName: "customIcon",
          propertyType: "React.ReactNode",
          propertyDescription: `customIcon={<Heart />} Be sure to specify type="custom"`,
        },
        {
          propertyName: "customText",
          propertyType: "string",
          propertyDescription: `customText="Custom Button" Be sure to specify type="custom"`,
        },
      ],
    },
  },

  {
    id: 12,
    name: "Text Generate",
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
      <div className="flex h-full items-center justify-center rounded-md bg-[rgb(17,18,26)] p-4 text-center">
        <TextGenerator
          inputText={"Text Generator Effect. It takes words one by one."}
          delay={0.1}
        ></TextGenerator>
      </div>
    ),
    image: "https://live.staticflickr.com/65535/53623348141_b26882b76d_c.jpg",
    image_alt: "Button Image",
    customization: true,
    customizations: [],
    dependencies: ["tailwindcss", "framer-motion"],
    links: [],
    usage: (props: { color: string; text: string }) => {
      return ``;
    },
    properties: {
      Appearance: [
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
      ],
      Behavior: [
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
        {
          propertyName: "",
          propertyType: "",
          propertyDescription: "",
        },
      ],
    },
  },
  {
    id: 14,
    name: "Toolbar",
    slug: "toolbar",
    description:
      "A simple customizable toolbar component available in dark and lightmode.",
    sampleCode: () => {
      return `import React, { ButtonHTMLAttributes, ReactNode } from "react";

export function ToolbarWrapper({
  children,
  style = "dark",
}: {
  children: ReactNode;
  style?: "light" | "dark";
}) {
  return (
    <div
    className={\`flex w-fit items-center gap-3 rounded-xl border border-neutral-400"} \${
      style === "light" ? "bg-white text-black" : "bg-black text-white"
    } px-4 py-2\`}
    >
      {children}
    </div>
  );
}

export function ToolbarGroup({
  separator,
  children,
}: {
  separator: boolean;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4">
      {children}
      {separator && <Separator />}
    </div>
  );
}

type ToolbarButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ToolbarButton({
  style = "dark",
  ...props
}: ToolbarButtonProps & { style?: "light" | "dark" }) {
  return <button {...props} />;
}

export function Separator() {
  return <div className="h-6 w-[1px] bg-neutral-400/50"></div>;
}

export default function Toolbar({
  children,
  style = "dark",
}: {
  children: ReactNode;
  style?: "light" | "dark";
}) {
  return <ToolbarWrapper style={style}>{children}</ToolbarWrapper>;
}`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <ToolbarComponent />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53625755142_06f5c75e64_c.jpg",
    image_alt: "Screenshot of the Toolbar Component",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "lucide-react", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import React from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Pen,
  Settings,
  Share,
} from "lucide-react";
import Toolbar, {
  ToolbarGroup,
  ToolbarButton,
  Separator,
} from "~/components/ui/toolbar";

export default function ToolbarComponent() {
  return (
    <Toolbar style="light">
      <ToolbarGroup separator={true}>
        <ToolbarButton>
          <Settings size={16} />
        </ToolbarButton>
        <ToolbarButton>
          <Pen size={16} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup separator={true}>
        <ToolbarButton>
          <Calendar size={16} />
        </ToolbarButton>
        <Separator />
        <ToolbarButton>
          <Share size={16} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup separator={false}>
        <ToolbarButton>
          <ChevronLeft size={24} />
        </ToolbarButton>
        <ToolbarButton>
          <ChevronRight size={24} />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  );
}`;
    },
    properties: {
      Toolbar: [
        {
          propertyName: "style",
          propertyType: "string",
          propertyDescription: `"light" | "dark"`,
        },
      ],
      ToolbarGroup: [
        {
          propertyName: "separator",
          propertyType: "boolean",
          propertyDescription: `Wether or not a separator should be displayed at the right of the group.`,
        },
      ],
    },
  },
  {
    id: 15,
    name: "Mention",
    slug: "mention",
    description:
      "A simple @mention component that, when hovered, displays additional information.",
    sampleCode: () => {
      return `import { AnimatePresence, animate, motion, spring } from "framer-motion";
import React, { useState } from "react";

export function MentionButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-fit cursor-pointer text-neutral-400">{children}</div>
  );
}

export function MentionDisplay({
  children,
  style = "dark",
}: {
  children: React.ReactNode;
  style?: "light" | "dark";
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, rotate: [-1, -3, 5, 3, 1, 0] }}
        transition={{ duration: 0.6 }}
        className={\`z-10 flex h-fit min-w-[270px] items-center justify-between gap-4 rounded-xl border border-neutral-400 px-4 py-2 text-start \${
          style === "light" ? "bg-white text-black" : "bg-black text-white"
        }\`}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

type MentionProfileProps = React.ImgHTMLAttributes<HTMLImageElement>;

export function MentionProfile({
  rounded,
  ...props
}: MentionProfileProps & { rounded?: boolean }) {
  return (
    <img
      {...props}
      className={\`h-10 w-10 \${rounded === true ? "rounded-full" : "rounded-none"}\`}
    />
  );
}

export function MentionEmail({ children }: { children: React.ReactNode }) {
  return <div className="text-neutral-400">{children}</div>;
}
export function MentionName({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function MentionSocials({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-col">{children}</div>;
}

export function MentionWrapper({
  children,
  style = "light",
}: {
  children: React.ReactNode;
  style?: "light" | "dark";
}) {
  const [isHovered, setIsHovered] = useState(false);
  const firstChild = React.Children.toArray(children)[0];
  const secondChild = React.Children.toArray(children)[1];

  return (
    <div
      className={\`fit relative flex h-[95px] w-full max-w-[290px] flex-col items-center justify-end space-y-2\`}
    >
      {isHovered && <div>{secondChild}</div>}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {firstChild}
      </div>
    </div>
  );
}

export default MentionWrapper;`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <MentionComponent />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53626591212_dd894716e5_c.jpg",
    image_alt: "Screenshot of the Toolbar Component",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "lucide-react", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import React from "react";
import {
  MentionButton,
  MentionDisplay,
  MentionEmail,
  MentionName,
  MentionProfile,
  MentionWrapper,
} from "~/components/ui/mention";

export default function MentionComponent() {
  return (
    <MentionWrapper>
      <MentionButton>@John</MentionButton>
      <MentionDisplay style="light">
        <MentionProfile src="https://www.pngkey.com/png/full/503-5035055_a-festival-celebrating-tractors-profile-picture-placeholder-round.png" rounded alt="Profile" />
        <MentionEmail>johndoe@acmeinc.com</MentionEmail>
        <MentionName>John Doe</MentionName>
      </MentionDisplay>
    </MentionWrapper>
  );
}`;
    },
    properties: {
      MentionDisplay: [
        {
          propertyName: "style",
          propertyType: "string",
          propertyDescription: `"light" | "dark"`,
        },
      ],
      MentionProfile: [
        {
          propertyName: "rounded",
          propertyType: "boolean",
          propertyDescription: `Wether or not the image should be rounded.`,
        },
        {
          propertyName: "Default Image Props",
          propertyType: "/",
          propertyDescription: `The default Image props.`,
        },
      ],
    },
  },
  {
    id: 16,
    name: "OAuth-Signup",
    slug: "signup1",
    description:
      "A simple signup component, that is customizable to work with multiple OAuth providers.",
    sampleCode: () => {
      return `import { ChevronDown, ChevronUp } from "lucide-react";
import React, {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
  useAnimation,
} from "framer-motion";

type SignUpFormProps = FormHTMLAttributes<HTMLFormElement>;

export default function SignUpWrapper({
  children,
  style = "dark",
  ...props
}: {
  children: ReactNode;
  style?: "light" | "dark";
  props?: SignUpFormProps;
}) {
  return (
    <AnimatePresence>
      <motion.div
        layout
        className={\`flex flex-col items-center space-y-8 rounded-xl border border-neutral-400/50 lg:max-w-[35vw] \${
          style === "light" ? "bg-white text-black" : "bg-black text-white"
        } p-4\`}
        {...props}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function SignUpOauthWrapper({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      controls.start({ height: !collapsed ? "100px" : "auto" });
    }
  }, [collapsed, controls]);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <motion.div
        className="flex w-full flex-col space-y-4 overflow-hidden border-neutral-400/50"
        layout
        animate={controls}
        initial={false}
        ref={containerRef}
        transition={{ duration: 0.3 }}
      >
        {React.Children.toArray(children)[0]}
        <div className="h-[0.3px] w-full bg-neutral-400/50"></div>
        {React.Children.count(children) > 1 && (
          <button
            type="button"
            className="mt-2 text-white"
            onClick={handleToggleCollapse}
          >
            {collapsed ? (
              <p className="flex items-center justify-center gap-2">
                More Options
                <ChevronDown size={16} />
              </p>
            ) : (
              <p className="flex items-center justify-center gap-2">
                More Options
                <ChevronUp size={16} />
              </p>
            )}
          </button>
        )}
        {React.Children.toArray(children).splice(1)}
      </motion.div>
    </>
  );
}

export function SignUpTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full text-start leading-none [font-size:_clamp(2em,2vw,8em)]">
      {children}
    </h2>
  );
}

export function SignUpDescription({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="text-neutral-400">{children}</div>
    </>
  );
}
export function SignUpFooter({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex-none text-start text-xs text-neutral-400">
        {children}
      </div>
    </>
  );
}

type SignUpButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type IconType = Record<string, React.ReactNode>;

export function OAuthButton({
  children,
  service,
  ...props
}: SignUpButtonProps & {
  children?: ReactNode;
  service:
    | "twitter"
    | "github"
    | "discord"
    | "google"
    | "notion"
    | "figma"
    | "apple";
}) {
  const Icons: IconType = {
    twitter: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        viewBox="0 0 512 512"
      >
        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
      </svg>
    ),

    github: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        viewBox="0 0 512 512"
      >
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
      </svg>
    ),
    discord: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        viewBox="0 0 512 512"
      >
        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
      </svg>
    ),
    google: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
      </svg>
    ),
    apple: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
      </svg>
    ),
    notion: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 512 512"
      >
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z"
          clip-rule="evenodd"
        ></path>
        <path
          fill="#424242"
          fill-rule="evenodd"
          d="M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z"
          clip-rule="evenodd"
        ></path>
      </svg>
    ),
    figma: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        viewBox="0 0 384 512"
      >
        <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z" />
      </svg>
    ),
  };

  const selectedIcon = Icons[service];

  return (
    <button
      type="button"
      className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-4 py-2 text-center text-black"
      {...props}
    >
      <div className="h-5 w-5">{selectedIcon}</div>
      Continue with {service.charAt(0).toUpperCase() + service.slice(1)}
    </button>
  );
}`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <SignUpComponent />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53626591212_dd894716e5_c.jpg",
    image_alt: "Screenshot of the Toolbar Component",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "lucide-react", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import React from "react";
import SignUpWrapper, {
  OAuthButton,
  SignUpDescription,
  SignUpFooter,
  SignUpOauthWrapper,
  SignUpTitle,
} from "~/components/ui/signup";

const handleAppleOAuth () {
  console.log("OAuth Logic")
}

const handleGitHubOAuth () {
  console.log("OAuth Logic")
}

const handleGoogleOAuth () {
  console.log("OAuth Logic")
}

export default function SignUpComponent() {
  return (
    <SignUpWrapper style="dark">
      <SignUpTitle>Sign In</SignUpTitle>
      <SignUpDescription>Sign up to Acme Inc.</SignUpDescription>
      <SignUpOauthWrapper>
        <OAuthButton service={"apple"} onClick={() => handleAppleOAuth()}/>
        <OAuthButton service={"github"} onClick={() => handleGitHubOAuth()}/>
        <OAuthButton service={"google"} onClick={() => handleGoogleOAuth()}/>
      </SignUpOauthWrapper>
      <SignUpFooter>
        By clicking continue, you acknowledge that you have read and agree to
        the <span className="underline">Terms of Service</span> and{" "}
        <span className="underline">Privacy Policy </span>
      </SignUpFooter>
    </SignUpWrapper>
  );
}`;
    },
    properties: {
      SignUpWrapper: [
        {
          propertyName: "style",
          propertyType: "string",
          propertyDescription: `"light" | "dark"`,
        },
      ],
      OAuthButton: [
        {
          propertyName: "service",
          propertyType: "string",
          propertyDescription: `"twitter" | "github" | "discord" | "google" | "notion" | "figma" | "apple"`,
        },
        {
          propertyName: "Default Button Props",
          propertyType: "/",
          propertyDescription: `The default Button props.`,
        },
      ],
    },
  },
  {
    id: 17,
    name: "Dialogue",
    slug: "dialogue",
    description: "Dialogue Component utilizing React Portals.",
    sampleCode: () => {
      return `import { useState, useEffect, useRef } from "react";
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
}: {
  dialogueData: dialogueData;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialogue: AnimationControls;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) => {
  useEffect(() => {
    if (dialogueData) {
      void dialogue.start({
        y: 0,
        transition: { duration: 0.75 },
      });
    }
  }, [dialogueData, dialogue]);

  return (
    <AnimatePresence>
      {dialogueData && (
        <motion.div
          key="dialogue"
          initial={{ y: "+200% " }}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          animate={dialogue}
          className={\`fixed left-0 top-0 flex h-screen w-screen items-center justify-center overflow-hidden rounded-md text-white\`}
        >
          <motion.div
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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

  const showDialogue = (data: dialogueData) => {
    setdialogueData(data);
  };

  const onClose = () => {
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
          />,
          root,
        );
      }
    } else {
    }
  }, [dialogueData]);

  return [showDialogue, onClose];
};

export default useDialogue;`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <DialogueComponent />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53622415917_08c832a304_h.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import Button from "~/components/ui/button";
import useDrawer from "./drawer/useDrawer";

const [showDrawer] = useDrawer();

const openDrawer = () => {
  const drawerContent = {
    content: (
      <div>
        <h2>Drawer Content</h2>
        <p>This is the content of the drawer.</p>
      </div>
    ),
  };
  showDrawer(drawerContent);
};


<Button display="custom" customText="Open Drawer" onClick={openDrawer}>
  Open Drawer
</Button>`;
    },
    properties: {
      Button: [
        {
          propertyName: "closeButton",
          propertyType: "boolean",
          propertyDescription: `Determines wether a Close Button should be rendered.`,
        },
        {
          propertyName: "content",
          propertyType: "React.ReactNode",
          propertyDescription: `The content of the Dialogue.`,
        },
      ],
    },
  },
  {
    id: 17,
    name: "Sidebar",
    slug: "sidebar",
    description: "A sidebar component featuring Framer Motion Animations.",
    sampleCode: () => {
      return `import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import React, { useState } from "react";

interface itemInterface {
  itemName: string;
  itemIcon: JSX.Element;
  itemURL?: string;
}

export default function SideBar({ items }: { items: itemInterface[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  function handleHovered(item: string) {
    setIsHovered(true);
    setHoveredItem(item);
  }
  function handleIsNotHovered() {
    setIsHovered(false);
    setHoveredItem("");
  }

  return (
    <motion.div
      initial={{
        opacity: 0.3,
        width: "0px",
      }}
      exit={{ opacity: 0.3, width: "68px" }}
      animate={{
        width: isHovered ? "auto" : "68px",
        opacity: 1,
      }}
      transition={{
        ease: easeInOut,
        mass: 0.4,
        bounce: 0.3,
      }}
      className={\`m-4 h-[\${items.length * 50}px] max-w-fit rounded-md bg-[#0d0d0d] py-[1px]\`}
    >
      <>
        {items.map((item, idx) => (
          <motion.div
            onHoverStart={(e) => handleHovered(item.itemName)}
            onHoverEnd={handleIsNotHovered}
            key={idx}
            initial={{ opacity: 0, borderColor: "#0d0d0d" }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeIn }}
            className="m-2 flex h-[50px] rounded-md border"
          >
            <a href={item.itemURL} className="flex">
              <motion.div
                initial={{ borderColor: "#0d0d0d" }}
                animate={
                  hoveredItem === item.itemName
                    ? {
                        boxShadow: "0px 0px 10px 0px rgba(255,255,255,0.5)",
                        color: "#fff",
                        borderColor: "#83838a",
                      }
                    : {
                        borderColor: "#0d0d0d",
                      }
                }
                className={\`flex aspect-square w-[50px] items-center justify-center rounded-md border text-[#6c6c6c]\`}
              >
                {item.itemIcon}
              </motion.div>

              <AnimatePresence>
                {hoveredItem === item.itemName && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex w-[200px] items-center justify-center whitespace-nowrap text-nowrap text-gray-200"
                  >
                    {item.itemName}
                  </motion.div>
                )}
              </AnimatePresence>
            </a>
          </motion.div>
        ))}
      </>
    </motion.div>
  );
}`;
    },
    component: () => (
      <>
        <div className="flex h-full flex-col items-center justify-center space-y-2 rounded-md bg-[rgb(17,18,26)] p-4 text-center">
          <SideBarComponent />
        </div>
      </>
    ),
    image: "https://live.staticflickr.com/65535/53622415917_08c832a304_h.jpg",
    image_alt: "something",
    customization: false,
    customizations: [],
    dependencies: ["tailwindcss", "framer-motion", "lucide-react"],
    maintainer: "",
    maintainerlink: "",
    links: [],
    usage: () => {
      return `import React from "react";
import SideBar from "./sideBar";
import {
  User,
  CalendarRange,
} from "lucide-react";


const items = [
  {
    itemName: "Account Settings",
    itemIcon: <User size={16} />,
  },
  {
    itemName: "Calendar",
    itemIcon: <CalendarRange size={16} />,
  }
];

<SideBar items={items} />
`;
    },
    properties: {
      "items = []": [
        {
          propertyName: "itemName",
          propertyType: "string",
          propertyDescription: `The items name.`,
        },
        {
          propertyName: "itemIcon",
          propertyType: "JSX.Element",
          propertyDescription: `The items Icon.`,
        },
        {
          propertyName: "itemURL",
          propertyType: "string",
          propertyDescription: `The URL the item should point to..`,
        },
      ],
    },
  },
];

export default components;
