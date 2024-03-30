import React from "react";

import { ArrowLeft, LogIn, LogOut, Upload } from "lucide-react";

interface ButtonProps {
  type: "signup" | "signin" | "logout" | "back" | "upload" | "custom";
  action?: () => void;
  customIcon?: React.ReactNode;
  customText?: string;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  type,
  action,
  customIcon,
  customText,
  iconPosition = "left",
}) => {
  let buttonText = "";
  let icon = null;

  switch (type) {
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
      className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-2 text-black"
      onClick={action}
    >
      {iconPosition === "left" && icon}
      {buttonText}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
