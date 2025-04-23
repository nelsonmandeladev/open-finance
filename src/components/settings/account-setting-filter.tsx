"use client";

import React from "react";
import { useGlobalUrlQueryParams } from "@/hooks";
import { TabFilter } from "../common/tab-filter";

const FILTERS = [
  {
    label: "edit_profile",
    value: "edit-profile",
  },
  {
    label: "preference",
    value: "preference",
  },
  {
    label: "security",
    value: "security",
  },
];
export function AccountingSettingFilter() {
  const {
    queryParams: { account_setting },
    setQueryParams,
  } = useGlobalUrlQueryParams();
  return (
    <TabFilter
      filters={FILTERS}
      activeValue={account_setting}
      onValueChange={(value) => {
        setQueryParams((prev) => ({
          ...prev,
          account_setting: value,
        }));
      }}
    />
  );
}
