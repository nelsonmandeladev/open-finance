import { cn } from "@/lib";
import React from "react";
import { SectionTitle } from "../common";
import { MyInvestmentCard } from "./my-investment-card";

interface MyInvestmentsListProps extends React.HTMLAttributes<HTMLDivElement> {
  investments: InvestmentType[];
}

export function MyInvestmentsList(props: MyInvestmentsListProps) {
  const { investments, className, ...rest } = props;
  return (
    <div className={cn("flex flex-col gap-3", className)} {...rest}>
      <SectionTitle sectionTitle="recent_transaction" />
      <div className="flex flex-col gap-2.5 justify-between">
        {investments.map((investment) => (
          <MyInvestmentCard key={investment.id} investment={investment} />
        ))}
      </div>
    </div>
  );
}
