import { cn } from "@/lib";
import React, { useMemo } from "react";

interface TransactionAmountProps {
  amount: string;
  type: "income" | "expense";
}
export function TransactionAmount(props: TransactionAmountProps) {
  const { amount, type } = props;

  const formattedAmount = useMemo(() => {
    switch (type) {
      case "expense":
        return `-$${amount}`;
        break;
      default:
        return `+$${amount}`;
        break;
    }
  }, [amount, type]);

  return (
    <p
      className={cn("text-dash-color-success text-xs font-semibold", {
        "text-dash-color-error": type === "expense",
      })}
    >
      {formattedAmount}
    </p>
  );
}
