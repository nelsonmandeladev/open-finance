import React from "react";
import { TableCell, TableRow } from "../ui";
import { cn, formatCurrency, formatReturnPercentage } from "@/lib";

interface TrendingStockTableRowProps {
  stock: StockType;
}
export function TrendingStockTableRow(props: TrendingStockTableRowProps) {
  const { stock } = props;
  return (
    <TableRow className="border-none [&>td]:py-2.5">
      <TableCell className="font-medium flex items-center gap-2.5">
        {stock.sl_no}
      </TableCell>
      <TableCell className="font-medium">{stock.name}</TableCell>
      <TableCell className="text-left">
        {formatCurrency(stock.price, "USD")}
      </TableCell>
      <TableCell
        className={cn("text-dash-green", {
          "text-dash-red": stock.state === "loss",
        })}
      >
        {formatReturnPercentage(stock.state, stock.return)}
      </TableCell>
    </TableRow>
  );
}
