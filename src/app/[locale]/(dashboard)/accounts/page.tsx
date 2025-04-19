import { AccountStatList } from "@/components";
import { ACCOUNT_STATS } from "@/mocks";
import React from "react";

export default function AccountsPage() {
  return (
    <div className="p-6 lg:p-4 xl:p-7 2xl:p-10">
      <AccountStatList stats={ACCOUNT_STATS} />
    </div>
  );
}
