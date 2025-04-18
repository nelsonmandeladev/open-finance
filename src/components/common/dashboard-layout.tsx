import React from "react";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { ScrollArea } from "../ui";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;
  return (
    <div className="flex flex-col w-full h-full 3xl:rounded-2xl 3xl:p-5 max-h-dvh overflow-hidden">
      <DashboardHeader />
      <div className="grid lg:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] w-full h-full">
        <DashboardSidebar />
        <ScrollArea className="h-full overflow-y-auto pb-24">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
