import { cn } from "@/lib";
import React, { useMemo } from "react";

interface TransactionAmountProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: string;
  type: "income" | "expense";
}
export function TransactionAmount(props: TransactionAmountProps) {
  const { amount, type, className, ...rest } = props;

  const formattedAmount = useMemo(() => {
    switch (type) {
      case "expense":
        return `-${amount}`;
        break;
      default:
        return `+${amount}`;
        break;
    }
  }, [amount, type]);

  return (
    <p
      className={cn(
        "text-dash-color-success text-xs font-semibold",
        className,
        {
          "text-dash-color-error": type === "expense",
        },
      )}
      {...rest}
    >
      {formattedAmount}
    </p>
  );
}
