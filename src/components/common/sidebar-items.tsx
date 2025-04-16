"use client";

import { SIDEBAR_ITEMS } from "@/mocks";
import React, { Fragment } from "react";
import { SidebarItem } from "./sidebar-item";
import { useActiveSidebarItem } from "@/hooks";

export function SidebarItems() {
  const { activeItem } = useActiveSidebarItem();

  return (
    <Fragment>
      {SIDEBAR_ITEMS.map((item) => (
        <SidebarItem
          key={item.label}
          item={{
            ...item,
            icon: item.icon,
            isActive: activeItem?.link === item.link,
          }}
        />
      ))}
    </Fragment>
  );
}
