import { cn } from "@/lib";
import React from "react";

interface CardNumberProps {
  cardNumber: CardType["cardNumber"];
  priority: CardType["priority"];
}
export function CardNumber(props: CardNumberProps) {
  const { cardNumber, priority } = props;
  return (
    <p
      className={cn("font-semibold text-base xl:text-xl text-white", {
        "text-dash-blue-darker": priority === "third",
      })}
    >
      {cardNumber}
    </p>
  );
}
