import { toast } from "sonner";
import React from "react";

export default function Sonner() {
  return (
    <div className="grid h-full w-full grid-cols-2 gap-3 px-4">
      <button
        className="rounded-md border-[0.3px] px-2 py-1"
        onClick={() =>
          toast.message("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 3000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Message
      </button>
      <button
        className="rounded-md border-[0.3px] px-2 py-1"
        onClick={() =>
          toast.info("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 3000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Info
      </button>
      <button
        className="rounded-md border-[0.3px] px-2 py-1"
        onClick={() =>
          toast.loading("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 3000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Loading
      </button>{" "}
      <button
        className="rounded-md border-[0.3px] px-2 py-1"
        onClick={() =>
          toast.error("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 3000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Error
      </button>
      <button
        className="rounded-md border-[0.3px] px-2 py-1"
        onClick={() =>
          toast.warning("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 3000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Warning
      </button>
      <button
        className="rounded-md border-[0.3px] px-2 py-1"
        onClick={() =>
          toast.success("Event has been created", {
            description: "Sunday, December 03, 2023 at 9:00 AM",
            duration: 3000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          })
        }
      >
        Success
      </button>
    </div>
  );
}
