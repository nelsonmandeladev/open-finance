"use client";

import Link from "next/link";
import React from "react";
import { Icon } from "../ui";
import { buildPathNAme, cn } from "@/lib";
import { useTranslation } from "react-i18next";

export function SidebarItem({ item }: { item: SidebarItemType }) {
  const { icon, label, isActive = false, link } = item;
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.language;
  return (
    <Link
      href={buildPathNAme(currentLocale, link)}
      className={cn(
        "flex items-center gap-6 text-sidebar-primary text-lg font-medium hover:text-primary transition-all duration-300",
        {
          "text-primary": isActive,
        },
      )}
    >
      <div
        className={cn(
          "bg-transparent hover:bg-primary h-16 w-1.5 rounded-r-2xl",
          {
            "bg-current": isActive,
          },
        )}
      />
      <span className="flex items-center gap-2 p-2">
        <Icon icon={icon} className="fill-current" />
        {t(label)}
      </span>
    </Link>
  );
}
