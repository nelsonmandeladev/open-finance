"use client";
import React from "react";
import { Table, TableBody } from "@/components";
import { TrendingStockTableHeader } from "./trending-stock-table-header";
import { TrendingStockTableRow } from "./trending-stock-table-row";
import { cn } from "@/lib";

interface TrendingStockTableProps extends React.HTMLAttributes<HTMLDivElement> {
  stocks: StockType[];
}

export function TrendingStockTable(props: TrendingStockTableProps) {
  const { stocks, className, ...rest } = props;
  return (
    <Table className={cn(className)} {...rest}>
      <TrendingStockTableHeader />
      <TableBody>
        {stocks.map((stock) => (
          <TrendingStockTableRow key={stock.sl_no} stock={stock} />
        ))}
      </TableBody>
    </Table>
  );
}
