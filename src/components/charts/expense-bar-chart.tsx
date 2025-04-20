"use client";

import React from "react";
import { SectionTitle } from "../common";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components";
import { Bar, BarChart, XAxis } from "recharts";
import { useIsMobile } from "@/hooks";

const chartData = [
  { month: "aug", amount: 69, fill: "var(--dash-gray-light)" },
  { month: "sep", amount: 111, fill: "var(--dash-gray-light)" },
  { month: "oct", amount: 74, fill: "var(--dash-gray-light)" },
  { month: "nov", amount: 39, fill: "var(--dash-gray-light)" },
  { month: "dec", amount: 99, fill: "var(--secondary)" },
  { month: "jan", amount: 85, fill: "var(--dash-gray-light)" },
];

const chartConfig = {
  amount: {
    label: "amount",
  },
  aug: {
    label: "Aug",
    color: "hsl(var(--dash-gray-light))",
  },
  sep: {
    label: "Sep",
    color: "hsl(var(--dash-gray-light))",
  },
  oct: {
    label: "Oct",
    color: "hsl(var(--dash-gray-light))",
  },
  nov: {
    label: "Nov",
    color: "hsl(var(--dash-gray-light))",
  },
  dec: {
    label: "Dec",
    color: "hsl(var(--primary))",
  },
  jan: {
    label: "Jan",
    color: "hsl(var(--dash-gray-light))",
  },
} satisfies ChartConfig;

export function ExpenseBarChart() {
  const isMobile = useIsMobile();
  return (
    <div className="space-y-4 flex flex-col px-4 md:px-5 md:pl-0">
      <SectionTitle sectionTitle="my_expense" />
      <div className="w-full h-full md:flex md:justify-center bg-white rounded-3xl md:px-2.5 xl:px-0 py-2.5 xl:py-0">
        <ChartContainer config={chartConfig} className="w-full max-h-[200px]">
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="amount"
              strokeWidth={2}
              radius={10}
              activeIndex={2}
              barSize={isMobile ? 22 : 30}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
