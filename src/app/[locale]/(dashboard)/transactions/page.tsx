import { CardsList, ExpenseBarChart, TransactionsList } from "@/components";
import { searchParamsLoader } from "@/lib";
import { CARDS_LIST, TRANSACTIONS } from "@/mocks";
import { SearchParams } from "nuqs";
import React, { Fragment } from "react";

interface TransactionsPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function TransactionsPage({
  searchParams,
}: TransactionsPageProps) {
  const {
    activePage,
    perPage,
    filter: transactionType,
  } = await searchParamsLoader(searchParams);

  // Filter transactions based on transactionType
  const filteredTransactions =
    transactionType !== "all"
      ? TRANSACTIONS.filter(
          (transaction) => transaction.type == transactionType,
        )
      : TRANSACTIONS;

  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-[410px_1fr] lg:grid-cols-[450px_1fr] xl:grid-cols-[680px_1fr] 2xl:grid-cols-[950px_1fr] gap-4  md:gap-8 pt-4 md:pt-5">
        <CardsList cards={[CARDS_LIST[0], CARDS_LIST[2], CARDS_LIST[3]]} />
        <ExpenseBarChart />
      </div>
      <div className="px-4 md:px-5 space-y-5 mt-5">
        <TransactionsList
          transactions={filteredTransactions.slice(
            (activePage - 1) * perPage,
            activePage * perPage,
          )}
          totalPages={Math.ceil(filteredTransactions.length / perPage)}
        />
      </div>
    </Fragment>
  );
}
