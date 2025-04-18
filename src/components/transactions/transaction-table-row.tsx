"use client";

import React from "react";
import { TableCell, TableRow } from "../ui";
import { formatCurrency } from "@/lib";
import { TransactionAmount } from "./transaction-amount";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";

interface TransactionTableRowProps {
  transaction: TransactionType;
}
export function TransactionTableRow(props: TransactionTableRowProps) {
  const { transaction } = props;
  const { t } = useTranslation();
  return (
    <TableRow key={transaction.id}>
      <TableCell className="font-medium flex items-center gap-2.5">
        {transaction.type === "expense" ? (
          <ArrowDownCircle className="text-dash-soft-blue stroke-1" />
        ) : (
          <ArrowUpCircle className="text-dash-soft-blue stroke-1" />
        )}
        {transaction.description}
      </TableCell>
      <TableCell className="font-medium">{transaction.id}</TableCell>
      <TableCell className="text-left">{t(transaction.raison)}</TableCell>
      <TableCell>{transaction.card}</TableCell>
      <TableCell className="text-left">{transaction.date}</TableCell>
      <TableCell className="text-center">
        <TransactionAmount
          amount={formatCurrency(transaction.amount, transaction.currency)}
          type={transaction.type}
        />
      </TableCell>
      <TableCell className="text-left">
        <Link
          href={transaction.receipt}
          className="border border-dash-blue-darker text-dash-blue-darker text-xs rounded-full px-3 py-2 transition-colors duration-300 hover:text-primary hover:border-primary"
        >
          {t("download")}
        </Link>
      </TableCell>
    </TableRow>
  );
}
