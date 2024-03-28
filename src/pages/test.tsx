import React from "react";
import Toaster from "~/components/ui/notification/toaster";
import useToast from "~/components/ui/notification/useToast";

export default function Home() {
  const [toast] = useToast();

  const handleShowToast = () => {
    toast({
      message: "This is a sample toast message",
      type: "info",
      description: "This is a description for the toast.",
    });
  };
  return (
    <div className="relative z-[999] text-white">
      <button onClick={handleShowToast}>Show Toast</button>
      <Toaster />
    </div>
  );
}
