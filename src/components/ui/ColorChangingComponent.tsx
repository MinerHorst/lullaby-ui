import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRightFromSquare } from "lucide-react";

const ColorChangingComponent = ({ color }: { color: string }) => {
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [showImage, setShowImage] = useState(false);
  const mouseRef = useRef(null);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const x = clientX - 50;
      const y = clientY - 50;

      setImagePosition({ x, y });

      const cursorElement = cursorRef.current;
      if (cursorElement) {
        const { left, top, right, bottom } =
          cursorElement.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;
        setShowImage(
          x >= 0 && y >= 0 && x <= right - left && y <= bottom - top,
        );
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="relative z-[90] h-full w-full cursor-none"
      ></div>
      {showImage && (
        <div
          className="fixed h-full w-full"
          style={{
            left: imagePosition.x,
            top: imagePosition.y,
            pointerEvents: "none",
          }}
        >
          <div
            className={`flex aspect-square h-[100px] cursor-none items-center justify-center gap-4 rounded-full bg-[#333333] text-black`}
            style={{ backgroundColor: color, opacity: 0.3 }}
          >
            {color}
          </div>
        </div>
      )}
    </>
  );
};

export default ColorChangingComponent;
