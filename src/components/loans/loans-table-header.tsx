"use client";

import React from "react";
import { TableHead, TableHeader, TableRow } from "../ui";
import { useTranslation } from "react-i18next";

export function LoansTableHeader() {
  const { t } = useTranslation();

  return (
    <TableHeader>
      <TableRow>
        <TableHead className="text-left">SL NO</TableHead>
        <TableHead className="text-left">{t("loan_money")}</TableHead>
        <TableHead className="text-left">{t("left_to_pay")}</TableHead>
        <TableHead className="text-left">{t("duration")}</TableHead>
        <TableHead className="text-left">{t("interest_rate")}</TableHead>
        <TableHead className="text-center">{t("installment")}</TableHead>
        <TableHead className="text-left w-[100px]">{t("repay")}</TableHead>
      </TableRow>
    </TableHeader>
  );
}
