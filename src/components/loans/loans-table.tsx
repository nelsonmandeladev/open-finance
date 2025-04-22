"use client";

import React, { useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components";
import { LoansTableHeader } from "./loans-table-header";
import { LoansTableRow } from "./loans-table-row";
import { formatCurrency } from "@/lib";
import { useTranslation } from "react-i18next";

interface LoansTableProps {
  loans: LoanType[];
}

export function LoansTable(props: LoansTableProps) {
  const { loans } = props;
  const { t } = useTranslation();
  const sommeAmounts = useMemo(() => {
    return loans.reduce(
      (acc, curr) => ({
        loan_money: acc.loan_money + curr.loan_money,
        left_to_pay: acc.left_to_pay + curr.left_to_pay,
        installment: acc.installment + curr.installment,
      }),
      { loan_money: 0, left_to_pay: 0, installment: 0 },
    );
  }, [loans]);

  return (
    <Table>
      <LoansTableHeader />
      <TableBody>
        {loans.map((loan) => (
          <LoansTableRow key={loan.id} loan={loan} />
        ))}
      </TableBody>
      <TableFooter>
        <TableRow className="text-dash-red">
          <TableCell>Total</TableCell>
          <TableCell className="text-start">
            {formatCurrency(sommeAmounts.loan_money, "USD")}
          </TableCell>
          <TableCell className="text-start">
            {formatCurrency(sommeAmounts.left_to_pay, "USD")}
          </TableCell>
          <TableCell className="text-start"></TableCell>
          <TableCell className="text-start"></TableCell>
          <TableCell className="text-center">
            {formatCurrency(sommeAmounts.installment, "USD")} / {t("month")}
          </TableCell>
          <TableCell className="text-start"></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
