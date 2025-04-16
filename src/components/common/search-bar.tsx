"use client";

import React from "react";
import { Icon, Input } from "../ui";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib";

interface SearchBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "className"> {
  className?: string;
}

export function SearchBar(props: SearchBarProps) {
  const { className, ...rest } = props;
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "relative flex items-center justify-center w-full md:w-52 lg:w-64 transition-all duration-200 ease-in-out",
        className,
      )}
      {...rest}
    >
      <Icon
        icon="search-icon"
        className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 fill-dash-soft-blue"
      />
      <Input
        type="search"
        placeholder={t("search_for_something")}
        className="pl-12 !h-14 md:!h-10 lg:!h-12 xl:!h-[50px] text-dash-soft-blue placeholder:text-dash-soft-blue bg-background border-none"
      />
    </div>
  );
}
