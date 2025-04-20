import { SectionTitle } from "@/components";
import { cn } from "@/lib";
import React from "react";
import { AccountLatestTransactionItem } from "./account-latest-transaction-item";

interface AccountLatestTransactionsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  transactions: TransactionType[];
}
export function AccountLatestTransactions(
  props: AccountLatestTransactionsProps,
) {
  const { transactions, className, ...rest } = props;
  return (
    <div className={cn("space-y-3", className)} {...rest}>
      <SectionTitle sectionTitle="last_transaction" />
      <div className="grid grid-cols-1 gap-5 bg-white rounded-2xl lg:rounded-[20px] xl:rounded-3xl  p-5 md:p-4 xl:p-6">
        {transactions.map((transaction) => (
          <AccountLatestTransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </div>
    </div>
  );
}
