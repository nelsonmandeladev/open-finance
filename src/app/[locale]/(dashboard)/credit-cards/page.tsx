import { CardExpenseStat, MainCardBody, SectionTitle } from "@/components";
import { CARDS_LIST } from "@/mocks";
import React, { Fragment } from "react";

export default function CreditCardsPage() {
  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-3 pt-6 lg:pt-4 xl:pt-7 2xl:pt-10">
        <SectionTitle sectionTitle="my_cards" className="px-4 md:px-5" />
        <div className="grid grid-cols-1">
          <div className="flex flex-nowrap gap-5 overflow-x-auto no-scrollbar px-4 md:px-5 md:pr-0">
            {CARDS_LIST.map((card) => (
              <MainCardBody key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 md:px-5 space-y-5 mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[40%_1fr] xl:grid-cols-[30%_1fr]">
          <CardExpenseStat />
        </div>
      </div>
    </Fragment>
  );
}
