"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui";
import { cn } from "@/lib";

type FilterType = {
  label: string;
  value: string;
};

interface TabFilterProps {
  filters: FilterType[];
  activeValue: string;
  onValueChange: (value: string) => void;
}

export function TabFilter(props: TabFilterProps) {
  const { filters, activeValue, onValueChange } = props;
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-2.5 md:gap-5 lg:gap-10 xl:gap-14 border-b flex-none">
      {filters.map((filter) => (
        <div className="group" key={filter.label}>
          <Button
            variant={"link"}
            className={cn(
              "text-dash-soft-blue text-sm font-medium hover:no-underline group-hover:text-primary",
            )}
            onClick={() => {
              onValueChange(filter.value);
            }}
          >
            {t(filter.label)}
          </Button>
          <div
            className={cn("h-1 bg-primary w-full rounded-t-full", {
              "bg-transparent": filter.value !== activeValue,
            })}
          />
        </div>
      ))}
    </div>
  );
}
