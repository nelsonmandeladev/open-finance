import { cn } from "@/lib";
import React from "react";
import { SectionTitle } from "../common";
import { LoansTable } from "./loans-table";
import { ScrollArea, ScrollBar } from "../ui";

interface ActiveLoansListProps {
  loans: LoanType[];
}
export function ActiveLoansList(props: ActiveLoansListProps) {
  const { loans } = props;
  return (
    <div className={cn("flex flex-col gap-3 h-full")}>
      <SectionTitle sectionTitle="active_loan_overview" />
      <div className="flex flex-col gap-3 lg:gap-4 xl:gap-7 justify-between h-full p-5 bg-white rounded-3xl">
        <ScrollArea className="grid grid-cols-1 overflow-x-auto no-scrollbar">
          <LoansTable loans={loans} />
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
