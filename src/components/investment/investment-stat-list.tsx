import React from "react";
import { StatCard } from "../common";

export function InvestmentStatList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <StatCard
        icon={"money-tag"}
        color={"green"}
        title={"total_invested"}
        description={"$150,000"}
      />
      <StatCard
        icon={"pie-chart"}
        color={"pink"}
        title={"number_of_investment"}
        description={"1,250"}
      />
      <StatCard
        icon={"repeat"}
        color={"blue"}
        title={"rate_of_return"}
        description={"+5.80%"}
      />
    </div>
  );
}
