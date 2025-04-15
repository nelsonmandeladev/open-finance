import React from "react";
import { SidebarItems } from "./sidebar-items";

export function DashboardSidebar() {
  return (
    <div className="bg-white flex flex-col  w-full h-full border-r border-gray-200">
      <div className="">
        <SidebarItems />
      </div>
    </div>
  );
}
