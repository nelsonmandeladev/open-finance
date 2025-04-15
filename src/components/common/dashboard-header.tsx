import React from "react";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";

export function DashboardHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] w-full bg-white">
      <div className="border-r border-gray-200 px-8 py-5 flex items-center justify-center">
        <Logo />
      </div>
      <div className="flex items-center justify-between px-8 py-5">
        <div className=""></div>
        <div className="">
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}
