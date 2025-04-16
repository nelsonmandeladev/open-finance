import { cn } from "@/lib";
import React from "react";
import { MainCardBody } from "./main-card-body";
import { SectionTitle } from "../common";

interface CardsListProps extends React.HTMLAttributes<HTMLDivElement> {
  cards: CardType[];
}

export function CardsList(props: CardsListProps) {
  const { cards, className, ...rest } = props;

  return (
    <div className={cn("space-y-3", className)} {...rest}>
      <SectionTitle sectionTitle="my_cards" className="px-4 md:px-0" />

      <div className="grid grid-cols-1">
        <div className="flex flex-nowrap gap-5 overflow-x-auto no-scrollbar px-3 md:px-0">
          {cards.map((card) => (
            <MainCardBody key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
