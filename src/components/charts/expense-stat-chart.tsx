"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components";
import { SectionTitle } from "../common";
import { useTranslation } from "react-i18next";

const chartData = [
  { label: "entertainment", value: 30, fill: "var(--dash-gray-darker)" },
  { label: "bill_expense", value: 15, fill: "var(--dash-orange)" },
  { label: "other", value: 20, fill: "var(--primary)" },
  { label: "investment", value: 35, fill: "var(--dash-pink)" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  entertainment: {
    label: "entertainment",
    color: "hsl(var(--dash-gray-darker))",
  },
  bill_expense: {
    label: "bill_expense",
    color: "hsl(var(--dash-orange))",
  },
  other: {
    label: "other",
    color: "hsl(var(--primary))",
  },
  investment: {
    label: "investment",
    color: "hsl(var(--dash-pink))",
  },
} satisfies ChartConfig;

export function ExpenseStatisticsChart() {
  const { t } = useTranslation();
  return (
    <div className="space-y-4 flex flex-col">
      <SectionTitle sectionTitle="expense_statistics" />
      <div className="w-full h-full md:flex md:justify-center bg-white py-5 pr-5 pl-2.5 rounded-3xl">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[320px] md:max-h-[250px] lg:max-h-[320px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="value" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              outerRadius={150}
              innerRadius={10}
              paddingAngle={5}
              cornerRadius={10}
            >
              <LabelList
                dataKey="label"
                className="fill-background font-semibold text-base"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  t(chartConfig[value]?.label)
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
