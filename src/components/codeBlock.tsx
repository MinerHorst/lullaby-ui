import React, { useEffect, useRef, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import { Check, Clipboard } from "lucide-react";

export default function CodeBlockComponent({ code }: { code: string }) {
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
    <div style={{ position: "relative" }}>
      <pre className="h-full" ref={codeRef}>
        <code className="language-jsx">{code}</code>
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
          className="text-muted-foreground flex items-center gap-2 text-sm"
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
}