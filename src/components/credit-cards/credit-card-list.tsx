import { cn } from "@/lib";
import React from "react";
import { SectionTitle } from "../common";
import { CreditCardItem } from "./credit-card-item";

interface CreditCardListProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardType[];
}
export function CreditCardList(props: CreditCardListProps) {
  const { cards, className, ...rest } = props;

  return (
    <div className={cn("flex flex-col gap-3 h-full", className)} {...rest}>
      <SectionTitle sectionTitle="card_list" />
      <div className="flex flex-col gap-2.5 justify-between h-full">
        {cards.map((card) => (
          <CreditCardItem key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}
