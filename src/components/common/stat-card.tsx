"use client";

import { cn } from "@/lib";
import React from "react";
import { Icon } from "../ui";
import { useTranslation } from "react-i18next";

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
        <StatCartIcon icon={icon} color={color} />
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

interface StatCartIconPpops {
  icon: IconType;
  color: "yellow" | "blue" | "pink" | "green";
}
function StatCartIcon(props: StatCartIconPpops) {
  const { icon, color } = props;
  return (
    <div
      className={cn(
        "size-[45px] lg:size-[50px] xl:size-[70px] flex items-center justify-center rounded-full",
        {
          "bg-dash-yellow-light text-dash-yellow": color === "yellow",
          "bg-dash-blue-light text-dash-blue": color === "blue",
          "bg-dash-green-light text-dash-green": color === "green",
          "bg-dash-soft-pink-light text-dash-soft-pink": color === "pink",
        },
      )}
    >
      <Icon icon={icon} className="fill-current" />
    </div>
  );
}
