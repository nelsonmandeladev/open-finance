"use client";

import React from "react";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { useActiveSidebarItem } from "@/hooks";
import { useTranslation } from "react-i18next";
import { UserAvatar } from "./user-avatar";
import { NotificationsDropdown } from "./notifications-dropdown";
import { SettingsDropdown } from "./settings-dropdown";
import { MobileDashboardSidebar } from "./mobile-dashboard-sidebar";
import { SearchBar } from "./search-bar";

export function DashboardHeader() {
  const { activeItem } = useActiveSidebarItem();
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[180px_1fr] lg:grid-cols-[200px_1fr] xl:grid-cols-[250px_1fr] w-full bg-white">
      <div className="border-r border-gray-lighter px-1 md:px-5 lg:px-8 py-2.5 flex items-center justify-center md:justify-start">
        <Logo />
      </div>
      <div className="flex items-center justify-between px-2.5 md:px-5 xl:8 py-2.5 md:py-3 lg:py-4">
        <div className="flex items-center gap-2.5 md:gap-4">
          <MobileDashboardSidebar />
          <h4 className="heading-one-semibold hidden md:block">
            {t(activeItem?.label ?? "dashboard")}
          </h4>
        </div>
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6 xl:gap-8">
          <div className="flex items-center gap-2.5">
            <SearchBar />
            <SettingsDropdown />
            <NotificationsDropdown />
            <LanguageSwitcher />
          </div>
          <UserAvatar />
        </div>
      </div>
    </div>
  );
}
