"use client";

import { SIDEBAR_ITEMS } from "@/mocks";
import React, { Fragment } from "react";
import { SidebarItem } from "./sidebar-item";
import { useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import { buildPathNAme } from "@/lib";

export function SidebarItems() {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <Fragment>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.label}
          item={{
            ...item,
            icon: item.icon,
            isActive: buildPathNAme(currentLocale, item.link) === pathname,
          }}
        />
      ))}
    </Fragment>
  );
}
