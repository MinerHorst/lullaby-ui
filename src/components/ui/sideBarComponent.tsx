import React from "react";
import SideBar from "./sideBar";
import {
  CalendarRange,
  CloudUpload,
  Inbox,
  Settings,
  User,
} from "lucide-react";

export default function SideBarComponent() {
  const items = [
    {
      itemName: "Account Settings",
      itemIcon: <User size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "Calendar",
      itemIcon: <CalendarRange size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "File Upload",
      itemIcon: <CloudUpload size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "Inbox",
      itemIcon: <Inbox size={16} />,
      secondaryPopover: false,
    },
    {
      itemName: "Settings",
      itemIcon: <Settings size={16} />,
      secondaryPopover: true,
    },
  ];
  return (
    <div className="md:w-full">
      <SideBar items={items} />
    </div>
  );
}
