import { cn, formatCurrency } from "@/lib";
import React from "react";

interface CardBalanceProps {
  balance: CardType["balance"];
  isPrimary: CardType["isPrimary"];
  currency: CardType["currency"];
}

export function CardBalance(props: CardBalanceProps) {
  const { balance, isPrimary, currency } = props;
  return (
    <p
      className={cn("text-dash-soft-blue flex flex-col text-xs", {
        "text-white": isPrimary,
      })}
    >
      Balance
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
