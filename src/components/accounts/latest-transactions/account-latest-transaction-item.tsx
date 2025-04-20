"use client";

import { IconBoxed, TransactionAmount } from "@/components";
import { formatCurrency } from "@/lib";
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";

interface AccountLatestTransactionItemProps {
  transaction: TransactionType;
}
export function AccountLatestTransactionItem(
  props: AccountLatestTransactionItemProps,
) {
  const { transaction } = props;
  const { t } = useTranslation();

  const iconBoxed: IconBoxType = useMemo(() => {
    switch (transaction.raison) {
      case "shipping":
        return {
          icon: "ring-circular",
          color: "green",
        };
        break;

      case "service":
        return {
          icon: "settings-2",
          color: "blue",
        };
        break;

      default:
        return {
          icon: "user-outlined",
          color: "pink",
        };
        break;
    }
  }, [transaction]);

  return (
    <div className="w-full flex items-end xl:items-center justify-between lg:justify-start gap-4">
      <div className="flex items-center gap-3 lg:gap-4 xl:gap-6">
        <div className="">
          <IconBoxed
            iconBoxed={iconBoxed}
            className="rounded-[12px] !size-[45px]  lg:!size-10 xl:!size-[55px]"
          />
        </div>
        <p className="flex flex-col gap-1 text-dash-black text-sm xl:text-base font-semibold md:min-w-[100px] lg:min-w-[140px] md:max-w-[100px] xl:min-w-[170px] xl:max-w-full 2xl:min-w-[200px]">
          <span className="truncate">{transaction.description}</span>
          <span className="text-dash-soft-blue text-xs font-normal">
            {transaction.date}
          </span>
        </p>
      </div>

      <p className="w-full hidden md:flex items-center gap-5 xl:gap-8 text-dash-soft-blue text-xs">
        <span className="min-w-[60px]">{t(transaction.raison)}</span>
        <span className="hidden xl:block xl:min-w-[70px]">
          {transaction.card}
        </span>
        <span className="text-nowrap">{t(transaction.status)}</span>
      </p>
      <TransactionAmount
        amount={formatCurrency(transaction.amount, transaction.currency)}
        type={transaction.type}
      />
    </div>
  );
}
