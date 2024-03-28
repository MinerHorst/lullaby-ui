import React, { useEffect, useRef, useState } from "react";
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
    <div className="relative flex h-full max-h-[50vh] w-full items-center justify-center rounded-md pt-8">
      <pre ref={codeRef} className="h-full min-h-fit w-full overflow-scroll">
        <code className={language}>{code.toString()}</code>
      </pre>
      {copied ? (
        <div
          style={{
            position: "absolute",
            top: "0px",
            right: "0",
            zIndex: 1,
            padding: "10px 10px",
            cursor: "pointer",
          }}
          className="flex w-full items-center justify-between gap-2 rounded-md bg-[rgb(17,18,27)] text-sm text-muted-foreground"
        >
          <p>Copied</p>
          <Check size={16} />
        </div>
      ) : (
        <button
          style={{
            position: "absolute",
            top: "0px",
            right: "0",
            zIndex: 1,
            padding: "10px 10px",
            cursor: "pointer",
          }}
          className="flex w-full items-center justify-between gap-2 rounded-md bg-[rgb(17,18,27)] text-sm text-muted-foreground"
          onClick={copyCodeToClipboard}
        >
          {language.split("-")[1]}
          <Clipboard size={16} />
        </button>
      )}
    </div>
  );
}
