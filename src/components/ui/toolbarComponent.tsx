import React from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Pen,
  Settings,
  Share,
} from "lucide-react";
import Toolbar, {
  ToolbarGroup,
  ToolbarButton,
  Separator,
} from "~/components/ui/toolbar";

export default function ToolbarComponent() {
  return (
    <Toolbar style="light">
      <ToolbarGroup separator={true}>
        <ToolbarButton>
          <Settings size={16} />
        </ToolbarButton>
        <ToolbarButton>
          <Pen size={16} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup separator={true}>
        <ToolbarButton>
          <Calendar size={16} />
        </ToolbarButton>
        <Separator />
        <ToolbarButton>
          <Share size={16} />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarGroup separator={false}>
        <ToolbarButton>
          <ChevronLeft size={24} />
        </ToolbarButton>
        <ToolbarButton>
          <ChevronRight size={24} />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  );
}
