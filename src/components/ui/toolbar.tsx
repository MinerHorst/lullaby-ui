import React, { ButtonHTMLAttributes, ReactNode } from "react";

export function ToolbarWrapper({
  children,
  style = "dark",
}: {
  children: ReactNode;
  style?: "light" | "dark";
}) {
  return (
    <div
      className={`flex w-fit items-center gap-3 rounded-xl border border-neutral-400 ${
        style === "light" ? "bg-white text-black" : "bg-black text-white"
      } px-4 py-2`}
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
}
