import React from "react";
import { TransactionAmount } from "../transaction-amount";
import { cn, formatCurrency } from "@/lib";
import { Icon } from "@/components";

interface RecentTransactionItemProps {
  icon: IconType;
  title: string;
  date: string;
  amount: number;
  currency: string;
  type: "income" | "expense";
  color: "yellow" | "blue" | "green";
}

export function RecentTransactionItem(props: RecentTransactionItemProps) {
  const { icon, color, amount, type, date, title, currency } = props;
  return (
    <div className="flex justify-between items-center gap-2">
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "size-[50px] md:size-[40px] xl:size-[55px] flex items-center justify-center rounded-full",
            {
              "bg-dash-yellow-light": color === "yellow",
              "bg-dash-blue-light": color === "blue",
              "bg-dash-green-light": color === "green",
            },
          )}
        >
          <Icon
            icon={icon}
            className={cn({
              "fill-dash-yellow": color === "yellow",
              "fill-dash-green": color === "green",
              "fill-dash-blue": color === "blue",
            })}
          />
        </div>
        <p className="flex flex-col gap-1 text-sm xl:text-base font-semibold">
          {title}
          <span className="text-dash-soft-blue text-xs font-normal">
            {date}
          </span>
        </p>
      </div>
      <TransactionAmount
        amount={formatCurrency(amount, currency)}
        type={type}
        className="xl:text-base"
      />
    </div>
  );
}
