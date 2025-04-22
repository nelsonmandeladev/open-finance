"use client";

import React from "react";
import { TableCell, TableRow } from "../ui";
import { formatCurrency } from "@/lib";
import Link from "next/link";
import { useTranslation } from "react-i18next";

interface LoansTableRowProps {
  loan: LoanType;
}
export function LoansTableRow(props: LoansTableRowProps) {
  const { loan } = props;
  const { t } = useTranslation();
  return (
    <TableRow className="[&>td]:py-5">
      <TableCell className="font-medium flex items-center gap-2.5">
        {loan.id}
      </TableCell>
      <TableCell className="font-medium">
        {formatCurrency(loan.loan_money, "USD")}
      </TableCell>
      <TableCell className="text-left">
        {formatCurrency(loan.left_to_pay, "USD")}
      </TableCell>
      <TableCell>
        {loan.duration} / {t("months")}
      </TableCell>
      <TableCell className="text-left">{loan.interest_rate}%</TableCell>
      <TableCell className="text-center">
        {formatCurrency(loan.installment, "USD")} / {t("month")}
      </TableCell>
      <TableCell className="text-left">
        <Link
          href={""}
          className="border border-dash-blue-darker text-dash-blue-darker text-xs rounded-full px-3 py-2 transition-colors duration-300 hover:text-primary hover:border-primary"
        >
          {t("repay")}
        </Link>
      </TableCell>
    </TableRow>
  );
}
