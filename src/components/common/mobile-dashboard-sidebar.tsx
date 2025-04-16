"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components";
import { Menu } from "lucide-react";
import { SidebarItems } from "./sidebar-items";

export function MobileDashboardSidebar() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden text-dash-soft-blue">
        <Menu size={30} />
      </SheetTrigger>
      <SheetContent side={"left"} className="w-[250px]">
        <SheetHeader className="hidden">
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="">
          <SidebarItems />
        </div>
      </SheetContent>
    </Sheet>
  );
}
