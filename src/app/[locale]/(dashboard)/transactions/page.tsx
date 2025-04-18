import { CardsList, ExpenseBarChart } from "@/components";
import { CARDS_LIST } from "@/mocks";
import React from "react";

export default function TransactionsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[410px_1fr] lg:grid-cols-[450px_1fr] xl:grid-cols-[680px_1fr] 2xl:grid-cols-[950px_1fr] gap-4  md:gap-8 pt-4 md:pt-5">
      <CardsList cards={CARDS_LIST.slice(0, 3)} />
      <ExpenseBarChart />
    </div>
  );
}
