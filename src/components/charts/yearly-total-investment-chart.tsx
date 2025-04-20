"use client";

import React from "react";
import { SectionTitle } from "../common";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components";
import { formatCurrency } from "@/lib";

const chartData = [
  { year: "2020", value: 8000 },
  { year: "2021", value: 21000 },
  { year: "2022", value: 18000 },
  { year: "2023", value: 37000 },
  { year: "2024", value: 20000 },
  { year: "2025", value: 30000 },
];

const chartConfig = {
  value: {
    label: "Value",
    color: "var(--dash-yellow)",
  },
} satisfies ChartConfig;

export function YearlyTotalInvestmentChart() {
  return (
    <div className="space-y-4 flex flex-col">
      <SectionTitle sectionTitle="yearly_total_investment" />
      <div className="w-full h-full md:flex md:justify-center bg-white py-5 pr-5 pl-2.5 rounded-3xl">
        <ChartContainer
          config={chartConfig}
          className="min-h-full md:min-h-[300px] w-full"
        >
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" vertical={false} />
            <YAxis
              dataKey="value"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => formatCurrency(value, "USD")}
            />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="linear"
              stroke="var(--dash-yellow)"
              strokeWidth={2}
              dot={{
                fill: "var(--dash-yellow)",
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
}
