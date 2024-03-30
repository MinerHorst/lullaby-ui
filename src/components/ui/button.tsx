import React from "react";
import { ArrowLeft, LogIn, LogOut, Upload } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  display: "signup" | "signin" | "logout" | "back" | "upload" | "custom";
  action?: () => void;
  customIcon?: React.ReactNode;
  customText?: string;
  iconPosition?: "left" | "right";
}

const Button: React.FC<ButtonProps> = ({
  display,
  action,
  customIcon,
  customText,
  iconPosition = "left",
  ...props
}) => {
  let buttonText = "";
  let icon = null;

  switch (display) {
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
      {...props}
      className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-2 text-black disabled:cursor-not-allowed disabled:opacity-50"
      onClick={action}
    >
      {iconPosition === "left" && icon}
      {buttonText}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
