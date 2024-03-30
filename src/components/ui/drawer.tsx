import React, { useState } from "react";
import useDrawer from "./drawer/useDrawer";

export default function DrawerComponent() {
  const [showDrawer] = useDrawer();

  const handleOpenDrawer = () => {
    showDrawer({
      content: (
        <>
          <div className="">Hello World!</div>
        </>
      ),
    });
  };

  return (
    <div>
      <button onClick={handleOpenDrawer}>Open Drawer</button>
    </div>
  );
}
