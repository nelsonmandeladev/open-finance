"use client";

import { Bar, BarChart, Tooltip, XAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  SectionTitle,
} from "@/components";
import { DEBIT_CREDIT_OVERVIEW } from "@/mocks";
import { Trans, useTranslation } from "react-i18next";
import { useResponsive } from "@/hooks";
import { useMemo } from "react";
import { formatCurrency } from "@/lib";

const chartConfig = {
  credit: {
    label: "Credit",
    color: "hsl(var(--primary))",
  },
  debit: {
    label: "Debit",
    color: "hsl(var(--dash-yellow))",
  },
} satisfies ChartConfig;

export function DebitCreditOverviewChart() {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLarge } = useResponsive();

  const barSize = useMemo(() => {
    switch (true) {
      case isMobile:
        return 10;
      case isTablet:
        return 20;
      case isLarge:
        return 20;
      default:
        return 30;
    }
  }, [isMobile, isTablet, isLarge]);

  const sommeAmounts = useMemo(() => {
    return DEBIT_CREDIT_OVERVIEW.reduce(
      (acc, curr) => ({
        debit: acc.debit + curr.debit,
        credit: acc.credit + curr.credit,
      }),
      { debit: 0, credit: 0 },
    );
  }, []);

  return (
    <div className="space-y-4">
      <SectionTitle sectionTitle="debit_credit_overview" />
      <div className="w-full h-auto bg-white p-5 rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3.5 text-dash-soft-blue text-xs">
          <p className="">
            <Trans
              i18nKey={"debit_credit_overview_detail"}
              components={[
                <span key={1} className="text-dash-black font-medium"></span>,
                <span key={2} className="text-dash-black font-medium"></span>,
              ]}
              values={{
                credited_amount: formatCurrency(sommeAmounts.credit, "USD"),
                debited_amount: formatCurrency(sommeAmounts.debit, "USD"),
              }}
            />
          </p>
          <div className="flex items-center gap-3.5">
            <div className="flex items-center gap-2.5">
              <div className="size-3 rounded bg-primary" />
              <span>{t("debit")}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="size-3 rounded bg-dash-yellow" />
              <span>{t("credit")}</span>
            </div>
          </div>
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] xl:h-[300px] w-full"
        >
          <BarChart accessibilityLayer data={DEBIT_CREDIT_OVERVIEW}>
            <Tooltip
              cursor={false}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.60)",
                backdropFilter: "blur(8px)",
                border: "none",
                borderRadius: "8px",
                padding: "8px 12px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value, name) => [
                `$${value}`,
                t(name as unknown as string),
              ]}
              labelFormatter={(label) => label}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="debit"
              fill="var(--primary)"
              barSize={barSize}
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="credit"
              fill="var(--dash-yellow)"
              barSize={barSize}
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
