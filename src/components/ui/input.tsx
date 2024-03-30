import React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ ...props }) => {
  return (
    <input
      {...props}
      className="flex h-10 w-full rounded-md border border-neutral-400 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus-within:placeholder-transparent focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-[#d4d4d8] disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
});

export { Input };
