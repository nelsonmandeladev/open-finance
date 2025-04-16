import React from "react";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardHeader } from "./dashboard-header";
import { SearchBar } from "./search-bar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout(props: DashboardLayoutProps) {
  const { children } = props;
  return (
    <div className="flex flex-col w-full h-full 3xl:rounded-2xl 3xl:p-5">
      <DashboardHeader />
      <div className="grid lg:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] w-full h-screen">
        <DashboardSidebar />
        <div className="md:p-5">
          <div className="bg-white px-4 py-5 md:hidden">
            <SearchBar />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
