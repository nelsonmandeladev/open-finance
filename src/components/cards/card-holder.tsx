import { cn } from "@/lib";
import React from "react";

interface CardHolderProps {
  cardHolder: CardType["cardHolder"];
  isPrimary: CardType["isPrimary"];
}
export function CardHolder(props: CardHolderProps) {
  const { cardHolder, isPrimary } = props;
  return (
    <p
      className={cn("text-[10px] text-dash-soft-blue flex flex-col", {
        "text-white/70": isPrimary,
      })}
    >
      CARD HOLDER
      <span
        className={cn("font-semibold text-base xl:text-xl text-white", {
          "text-dash-blue-darker": !isPrimary,
        })}
      >
        {cardHolder}
      </span>
    </p>
  );
}
