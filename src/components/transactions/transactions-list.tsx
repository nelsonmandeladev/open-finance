import React from "react";
import { GlobalPagination, SectionTitle } from "../common";
import { TransactionsTable } from "./transaction-table";
import { TransactionsFilter } from "./transaction-filter";

interface TransactionsListProps {
  transactions: TransactionType[];
  totalPages: number;
}

export function TransactionsList(props: TransactionsListProps) {
  const { totalPages, transactions } = props;

  return (
    <div className="w-full flex flex-col gap-4 md:gap-5 mt-5">
      <SectionTitle sectionTitle="recent_transactions" />
      <div className="grid grid-cols-1 overflow-x-auto no-scrollbar">
        <TransactionsFilter />
      </div>
      <div className="bg-white rounded-[20px] h-full p-4 grid grid-cols-1 overflow-x-auto no-scrollbar">
        <TransactionsTable transactions={transactions} />
      </div>
      <GlobalPagination totalPages={totalPages} />
    </div>
  );
}
