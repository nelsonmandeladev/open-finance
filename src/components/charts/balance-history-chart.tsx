"use client";

import React from "react";
import { XAxis, CartesianGrid, AreaChart, Area } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui";
import { SectionTitle } from "../common";

const data = [
  { name: "Jul", value: 0 },
  { name: "Aug", value: 500 },
  { name: "Sep", value: 100 },
  { name: "Oct", value: 700 },
  { name: "Nov", value: 200 },
  { name: "Dec", value: 400 },
  { name: "Jan", value: 50 },
];

const chartConfig = {
  desktop: {
    label: "Month",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export function BalanceHistoryChart() {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitle sectionTitle="balance_history" />
      <div className="bg-white rounded-3xl px-5 h-full max-h-full">
        <ChartContainer config={chartConfig} className="xl:h-[250px] w-full">
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--primary)"
                  stopOpacity={0.5}
                />
                <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Area
              type="natural"
              dataKey="value"
              stroke="var(--primary)"
              fill="url(#colorValue)"
              fillOpacity={1}
              width={3}
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </div>
    </div>
  );
}
