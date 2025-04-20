import {
  InvestmentStatList,
  MonthlyRevenueChart,
  YearlyTotalInvestmentChart,
} from "@/components";
import React from "react";

export default function InvestmentsPage() {
  return (
    <div className="p-6 lg:p-4 xl:p-7 2xl:p-10">
      <InvestmentStatList />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5 mt-5">
        <YearlyTotalInvestmentChart />
        <MonthlyRevenueChart />
      </div>
    </div>
  );
}
