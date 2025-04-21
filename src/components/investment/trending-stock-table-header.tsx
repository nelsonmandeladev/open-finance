"use client";

import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui";
import { useTranslation } from "react-i18next";

export function TrendingStockTableHeader() {
  const { t } = useTranslation();

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="text-left">SL NO</TableHead>
        <TableHead className="text-left">{t("name")}</TableHead>
        <TableHead className="text-left">{t("price")}</TableHead>
        <TableHead className="text-left">{t("return")}</TableHead>
      </TableRow>
    </TableHeader>
  );
}
