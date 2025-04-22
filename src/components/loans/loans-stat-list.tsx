import React from "react";
import { StatCard } from "../common";

export function LoansStatList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <StatCard
        icon={"user"}
        color={"blue"}
        title={"personal_loan"}
        description={"$50,000"}
        className="xl:!px-2.5 2xl:!px-7"
      />
      <StatCard
        icon={"briefcase"}
        color={"yellow"}
        title={"corporate_loan"}
        description={"$100,000"}
        className="xl:!px-2.5 2xl:!px-7"
      />
      <StatCard
        icon={"investment-group"}
        color={"pink"}
        title={"business_loan"}
        description={"$500,000"}
        className="xl:!px-2.5 2xl:!px-7"
      />
      <StatCard
        icon={"service-2"}
        color={"green"}
        title={"custom_loan"}
        description={"Choose"}
        className="xl:!px-2.5 2xl:!px-7"
      />
    </div>
  );
}
