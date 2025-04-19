"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../ui";
import { cn } from "@/lib";
import { useGlobalUrlQueryParams } from "@/hooks";

const FILTERS = [
  {
    label: "all_transactions",
    value: "all",
  },
  {
    label: "income",
    value: "income",
  },
  {
    label: "expense",
    value: "expense",
  },
];

export function TransactionsFilter() {
  const { t } = useTranslation();
  const {
    queryParams: { filter: queryFilter },
    setQueryParams,
  } = useGlobalUrlQueryParams();
  return (
    <div className="flex items-center gap-2.5 md:gap-5 lg:gap-10 xl:gap-14 border-b flex-none">
      {FILTERS.map((filter) => (
        <div className="group" key={filter.label}>
          <Button
            variant={"link"}
            className={cn(
              "text-dash-soft-blue text-sm font-medium hover:no-underline group-hover:text-primary",
            )}
            onClick={() => {
              setQueryParams((prev) => ({
                ...prev,
                filter: filter.value,
              }));
            }}
          >
            {t(filter.label)}
          </Button>
          <div
            className={cn("h-1 bg-primary w-full rounded-t-full", {
              "bg-transparent": filter.value !== queryFilter,
            })}
          />
        </div>
      ))}
    </div>
  );
}
