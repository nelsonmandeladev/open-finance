"use client";

import React from "react";
import { useGlobalUrlQueryParams } from "@/hooks";
import { TabFilter } from "../common/tab-filter";

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
  const {
    queryParams: { transaction_type },
    setQueryParams,
  } = useGlobalUrlQueryParams();
  return (
    <TabFilter
      filters={FILTERS}
      activeValue={transaction_type}
      onValueChange={(value) => {
        setQueryParams((prev) => ({
          ...prev,
          transaction_type: value,
        }));
      }}
    />
  );
}
