import { SectionTitle } from "@/components/common";
import { cn } from "@/lib";
import React from "react";
import { RecentTransactionItem } from "./recent-transaction-item";

interface RecentTransactionsList extends React.HTMLAttributes<HTMLDivElement> {
  transactions: [];
}
export function RecentTransactionsList(props: RecentTransactionsList) {
  const { className, ...rest } = props;
  return (
    <div className={cn("flex flex-col gap-3", className)} {...rest}>
      <SectionTitle sectionTitle="recent_transaction" />
      <div className="bg-white rounded-[20px] h-full flex flex-col gap-3 justify-between p-4">
        <RecentTransactionItem
          icon="business-finance-money"
          title={"Deposit from my"}
          date={"28 January 2021"}
          amount={850}
          type={"expense"}
          color={"yellow"}
          currency="USD"
        />
        <RecentTransactionItem
          icon="paypal"
          title={"Deposit from my"}
          date={"25 January 2021"}
          amount={25.4}
          type={"income"}
          color={"blue"}
          currency="EUR"
        />
        <RecentTransactionItem
          icon="money-circle"
          title={"Deposit from my"}
          date={"21 January 2021"}
          amount={5400}
          type={"income"}
          color={"green"}
          currency="USD"
        />
      </div>
    </div>
  );
}
