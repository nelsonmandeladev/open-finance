import React from "react";
import { StatCard } from "../common";

export function LoansStatList() {
  return (
    <div className="grid grid-cols-1 overflow-x-auto no-scrollbar">
      <div className="flex md:grid md:grid-cols-4 flex-nowrap xl:justify-between gap-4 px-3 lg:px-4 xl:px-7">
        <StatCard
          icon={"user"}
          color={"blue"}
          title={"personal_loan"}
          description={"$50,000"}
          className="xl:!px-5 2xl:!px-7"
        />
        <StatCard
          icon={"briefcase"}
          color={"yellow"}
          title={"corporate_loan"}
          description={"$100,000"}
          className="xl:!px-5 2xl:!px-7"
        />
        <StatCard
          icon={"investment-group"}
          color={"pink"}
          title={"business_loan"}
          description={"$500,000"}
          className="xl:!px-5 2xl:!px-7"
        />
        <StatCard
          icon={"service-2"}
          color={"green"}
          title={"custom_loan"}
          description={"Choose"}
          className="xl:!px-5 2xl:!px-7"
        />
      </div>
    </div>
  );
}
