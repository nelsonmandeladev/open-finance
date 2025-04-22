import { ActiveLoansList, LoansStatList } from "@/components";
import { LOANS } from "@/mocks";
import React from "react";

export default function LoansPage() {
  return (
    <div className="p-6 lg:p-4 xl:p-7 2xl:p-10 space-y-5">
      <LoansStatList />
      <ActiveLoansList loans={LOANS} />
    </div>
  );
}
