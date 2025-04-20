"use client";

import { cn } from "@/lib";
import React from "react";
import { useTranslation } from "react-i18next";
import { IconBoxed } from "./icon-boxed";

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  color: "yellow" | "blue" | "pink" | "green";
  title: string;
  description: string;
}
export function StatCard(props: StatCardProps) {
  const { icon, color, title, description, className, ...rest } = props;
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "bg-white flex items-center gap-5 xl:gap-2.5 2xl:gap-10 rounded-[15px] lg:rounded-[20px] px-4 py-5 lg:p-5 xl:px-7 xl:py-6",
        className,
      )}
      {...rest}
    >
      <div className="">
        <IconBoxed icon={icon} color={color} />
      </div>
      <div className="">
        <p className="text-dash-soft-blue text-xs xl:text-base text-nowrap">
          {t(title)}
        </p>
        <h4 className="text-dash-black text-base xl:text-2xl font-semibold">
          {t(description)}
        </h4>
      </div>
    </div>
  );
}
