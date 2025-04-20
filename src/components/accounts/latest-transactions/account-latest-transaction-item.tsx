"use client";

import { IconBoxed, TransactionAmount } from "@/components";
import { formatCurrency } from "@/lib";
import React from "react";
import { useTranslation } from "react-i18next";

interface AccountLatestTransactionItemProps {
  transaction: TransactionType;
}
export function AccountLatestTransactionItem(
  props: AccountLatestTransactionItemProps,
) {
  const { transaction } = props;
  const { t } = useTranslation();
  return (
    <div className="w-full flex items-center justify-between md:justify-start">
      <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
        <IconBoxed icon="notification-outlined" color="green" />
        <p className="flex flex-col gap-1 text-dash-black text-sm xl:text-base font-semibold">
          {transaction.description}
          <span className="text-dash-soft-blue text-xs font-normal">
            {transaction.date}
          </span>
        </p>
      </div>

      <p className="hidden md:flex items-center gap-5 xl:gap-10 text-dash-soft-blue text-xs">
        <span>{t(transaction.raison)}</span>
        <span>{transaction.card}</span>
        <span>{t(transaction.status)}</span>
      </p>
      <TransactionAmount
        amount={formatCurrency(transaction.amount, transaction.currency)}
        type={transaction.type}
      />
    </div>
  );
}
