import { cn } from "@/lib";
import React from "react";

interface CardNumberProps {
  cardNumber: CardType["cardNumber"];
  isPrimary: CardType["isPrimary"];
}
export function CardNumber(props: CardNumberProps) {
  const { cardNumber, isPrimary } = props;
  return (
    <p
      className={cn("font-semibold text-base xl:text-xl text-white", {
        "text-dash-blue-darker": !isPrimary,
      })}
    >
      {cardNumber}
    </p>
  );
}
