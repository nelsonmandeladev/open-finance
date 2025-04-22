import { ActiveLoansList, LoansStatList } from "@/components";
import { LOANS } from "@/mocks";
import React, { Fragment } from "react";

export default function LoansPage() {
  return (
    <Fragment>
      <div className="pt-6 lg:pt-4 xl:pt-7 2xl:pt-10">
        <LoansStatList />
      </div>
      <div className="px-3 lg:px-4 xl:px-7 mt-5">
        <ActiveLoansList loans={LOANS} />
      </div>
    </Fragment>
  );
}
