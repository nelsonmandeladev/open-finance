"use client";

import { Pie, PieChart, Sector } from "recharts";
import { PieSectorDataItem } from "recharts/types/polar/Pie";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SectionTitle } from "../common";
const chartData = [
  { bank: "dbl_bank", visitors: 275, fill: "var(--secondary)" },
  { bank: "brc_bank", visitors: 200, fill: "var(--primary)" },
  { bank: "abm_bank", visitors: 187, fill: "var(--dash-yellow)" },
  { bank: "mcp_bank", visitors: 173, fill: "var(--dash-pink)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  dbl_bank: {
    label: "DBL Bank",
    color: "var(--secondary)",
  },
  brc_bank: {
    label: "BRC Bank",
    color: "var(--dash-pink)",
  },
  abm_bank: {
    label: "ABM Bank",
    color: "var(--dash-yellow)",
  },
  mcp_bank: {
    label: "MCP Bank",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export function CardExpenseStat() {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle sectionTitle="balance_history" />
      <div className="bg-white rounded-3xl px-5 h-full max-h-full p-5 flex flex-col items-center gap-5 md:gap-2.5 lg:gap-5">
        <div className="h-full w-full">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[160.11px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                outerRadius={40}
                innerRadius={30}
                opacity={0.8}
              />

              {[20, 12, 4, 0].map((offset, index) => (
                <Pie
                  key={index}
                  data={chartData}
                  dataKey="visitors"
                  nameKey="bank"
                  innerRadius={40}
                  strokeWidth={5}
                  activeIndex={index}
                  outerRadius={60}
                  activeShape={({
                    outerRadius = 90,
                    ...props
                  }: PieSectorDataItem) => (
                    <Sector {...props} outerRadius={outerRadius + offset} />
                  )}
                />
              ))}
            </PieChart>
          </ChartContainer>
        </div>
        <div className="grid grid-cols-2 gap-5">
          {chartData.map((item) => (
            <div key={item.bank} className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: item.fill }}
              />
              <span className="text-sm text-dash-soft-blue">
                {chartConfig[item.bank as keyof typeof chartConfig].label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
