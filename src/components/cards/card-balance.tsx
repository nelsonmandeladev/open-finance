"use client";

import { cn, formatCurrency } from "@/lib";
import React from "react";
import { useTranslation } from "react-i18next";

interface CardBalanceProps {
  balance: CardType["balance"];
  isPrimary: CardType["isPrimary"];
  currency: CardType["currency"];
}

export function CardBalance(props: CardBalanceProps) {
  const { balance, isPrimary, currency } = props;
  const { t } = useTranslation();
  return (
    <p
      className={cn("text-dash-soft-blue flex flex-col text-xs", {
        "text-white": isPrimary,
      })}
    >
      {t("balance")}
      <span
        className={cn("font-semibold text-base xl:text-xl", {
          "text-dash-blue-darker": !isPrimary,
        })}
      >
        {formatCurrency(balance, currency)}
      </span>
    </p>
  );
}
