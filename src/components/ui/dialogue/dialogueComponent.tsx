import React from "react";
import useDialogue from "./useDialogue";
import Button from "../button";

export default function DialogueComponent() {
  const [showDialogue] = useDialogue();

  const openDrawer = () => {
    const dialogueContent = {
      content: (
        <div>
          <h2>Hello World!</h2>
          <p>
            This is a fully customizable Dialogue Component built ontop of React
            Portals.
          </p>
        </div>
      ),
    };
    showDialogue(dialogueContent);
  };

  return (
    <Button
      display="custom"
      customText="Open Dialogue"
      onClick={openDrawer}
    ></Button>
  );
}
