import React from "react";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ ...props }) => {
    return (
      <textarea
        {...props}
        className="flex h-10 min-h-[80px] w-full rounded-md border border-neutral-400 bg-transparent px-3 py-2 text-sm text-white placeholder:text-neutral-400 focus-within:placeholder-transparent focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-[#d4d4d8] disabled:cursor-not-allowed disabled:opacity-50"
      />
    );
  },
);

export { TextArea };
