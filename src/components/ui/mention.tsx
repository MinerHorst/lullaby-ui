import { AnimatePresence, animate, motion, spring } from "framer-motion";
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
        className={` z-10 flex h-fit min-w-[270px] items-center justify-between gap-4 rounded-xl border border-neutral-400 px-4 py-2 text-start ${
          style === "light" ? "bg-white text-black" : "bg-black text-white"
        }`}
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
      className={`h-10 w-10 ${rounded === true ? "rounded-full" : "rounded-none"}`}
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
      className={`fit relative flex h-[95px] w-full max-w-[290px] flex-col items-center justify-end space-y-2`}
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

export default MentionWrapper;
