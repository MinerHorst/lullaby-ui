import React from "react";
import useDrawer from "./drawer/useDrawer";
import Button from "./button";

export default function DrawerComponent() {
  const [showDrawer] = useDrawer();

  const openDrawer = () => {
    const drawerContent = {
      content: (
        <div>
          <h2>Hello World!</h2>
          <p>
            This is a fully customizable Drawer Component built ontop of React
            Portals.
          </p>
        </div>
      ),
    };
    showDrawer(drawerContent);
  };

  return (
    <Button display="custom" customText="Open Drawer" onClick={openDrawer}>
      Open Drawer
    </Button>
  );
}
