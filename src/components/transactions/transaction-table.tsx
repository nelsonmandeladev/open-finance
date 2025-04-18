"use client";

import React from "react";
import {
  Table,
  TableBody,
  TransactionTableHeader,
  TransactionTableRow,
} from "@/components";

interface TransactionsTableProps {
  transactions: TransactionType[];
}

export function TransactionsTable(props: TransactionsTableProps) {
  const { transactions } = props;
  return (
    <Table>
      <TransactionTableHeader />
      <TableBody>
        {transactions.map((transaction) => (
          <TransactionTableRow key={transaction.id} transaction={transaction} />
        ))}
      </TableBody>
    </Table>
  );
}
