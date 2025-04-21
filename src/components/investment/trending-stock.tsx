import { cn } from "@/lib";
import React from "react";
import { SectionTitle } from "../common";
import { TrendingStockTable } from "./trending-stock-table";

interface TrendingStockProps extends React.HTMLAttributes<HTMLDivElement> {
  stocks: StockType[];
}

export function TrendingStock(props: TrendingStockProps) {
  const { stocks, className, ...rest } = props;
  return (
    <div className={cn("flex flex-col gap-3 h-full", className)} {...rest}>
      <SectionTitle sectionTitle="trending_stock" />
      <div className="h-full bg-white rounded-2xl lg:rounded-[20px] xl:rounded-3xl  p-5 md:p-4 xl:p-6">
        <TrendingStockTable stocks={stocks} />
      </div>
    </div>
  );
}
