import {
  AccountLatestTransactions,
  AccountStatList,
  DebitCreditOverviewChart,
  InvoicesSendList,
  MainCardBody,
  SectionTitle,
} from "@/components";
import { ACCOUNT_STATS, CARDS_LIST, TRANSACTIONS } from "@/mocks";
import React from "react";

export default function AccountsPage() {
  return (
    <div className="p-6 lg:p-4 xl:p-7 2xl:p-10">
      <AccountStatList stats={ACCOUNT_STATS} />
      <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] xl:grid-cols-[65%_1fr] 2xl:grid-cols-[70%_1fr] mt-5 gap-4">
        <AccountLatestTransactions transactions={TRANSACTIONS.slice(0, 3)} />
        <div className="space-y-3 flex flex-col">
          <SectionTitle sectionTitle="my_card" seeAllLink="/cards" />
          <MainCardBody card={CARDS_LIST[1]} className="h-full" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_1fr] xl:grid-cols-[65%_1fr] 2xl:grid-cols-[70%_1fr] mt-5 gap-4 xl:gap-5">
        <DebitCreditOverviewChart />
        <InvoicesSendList />
      </div>
    </div>
  );
}
