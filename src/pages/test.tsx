import {
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
  motion,
} from "framer-motion";
import {
  Calendar,
  CloudUpload,
  Inbox,
  Phone,
  Settings,
  User,
} from "lucide-react";
import React, { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("");

  const items = [
    {
      itemName: "Account Settings",
      itemURL: "",
      itemIcon: <User size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "Calendar",
      itemURL: "",
      itemIcon: <Calendar size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "File Upload",
      itemURL: "",
      itemIcon: <CloudUpload size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "Inbox",
      itemURL: "",
      itemIcon: <Inbox size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "Settings",
      itemURL: "",
      itemIcon: <Settings size={16} />,
      secondaryPopover: true,
    },
  ];

  function handleHovered(item: string) {
    setIsHovered(true);
    setHoveredItem(item);
  }
  function handleIsNotHovered() {
    setIsHovered(false);
    setHoveredItem("");
  }

  function handlePopOverOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative flex h-screen flex-col items-center justify-center">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{
                opacity: 0.3,
                width: "0px",
              }}
              exit={{ opacity: 0.3, width: isOpen ? "0px" : "68px" }}
              animate={{
                width: isHovered ? "auto" : "68px",
                opacity: 1,
              }}
              transition={{
                ease: easeInOut,
                mass: 0.4,
                bounce: 0.3,
              }}
              className={`absolute left-0 top-0 m-4 h-[${items.length * 50}px] rounded-md bg-[#0d0d0d]`}
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
                                boxShadow:
                                  "0px 0px 10px 0px rgba(255,255,255,0.5)",
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
          </>
        )}
      </AnimatePresence>

      <button
        onClick={() => handlePopOverOpen()}
        className="flex w-fit items-center justify-between gap-3 rounded-xl bg-white px-4 py-2 text-black disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isOpen ? "Close Toolbar" : "Open Toolbar"}
      </button>
    </div>
  );
}
