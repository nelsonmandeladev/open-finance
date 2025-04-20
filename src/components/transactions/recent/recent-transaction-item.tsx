import React from "react";
import { formatCurrency } from "@/lib";
import { IconBoxed, TransactionAmount } from "@/components";

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
        <IconBoxed
          icon={icon}
          color={color}
          className="size-[50px] md:size-[40px] xl:size-[55px]"
        />
        <p className="flex flex-col gap-1 text-dash-black text-sm xl:text-base font-semibold">
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
