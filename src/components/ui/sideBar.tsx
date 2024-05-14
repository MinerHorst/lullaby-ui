import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
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
      className={`m-4 h-[${items.length * 50}px] max-w-fit rounded-md bg-[#0d0d0d] py-[1px]`}
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
                className={`flex aspect-square w-[50px] items-center justify-center rounded-md border text-[#6c6c6c]`}
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
}
