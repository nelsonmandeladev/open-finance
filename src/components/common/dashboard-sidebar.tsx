import React from "react";
import { SidebarItems } from "./sidebar-items";

export function DashboardSidebar() {
  return (
    <div className="bg-white hidden lg:flex flex-col  w-full h-full border-r border-gray-lighter">
      <div className="">
        <SidebarItems />
      </div>
    </div>
  );
}
