"use client";

import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui";
import { useTranslation } from "react-i18next";

export function TransactionTableHeader() {
  const { t } = useTranslation();

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="text-left">{t("description")}</TableHead>
        <TableHead className="text-left">{t("transaction_id")}</TableHead>
        <TableHead className="text-left">{t("type")}</TableHead>
        <TableHead className="text-left">{t("card")}</TableHead>
        <TableHead className="text-left">{t("date")}</TableHead>
        <TableHead className="text-center">{t("amount")}</TableHead>
        <TableHead className="text-left w-[100px]">{t("receipt")}</TableHead>
      </TableRow>
    </TableHeader>
  );
}
