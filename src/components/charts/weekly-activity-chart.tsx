"use client";

import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  SectionTitle,
} from "@/components";
import { WEEKLY_ACTIVITIES } from "@/mocks";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks";

const chartConfig = {
  deposit: {
    label: "Deposit",
    color: "hsl(var(--primary))",
  },
  withdraw: {
    label: "Withdraw",
    color: "hsl(var(--secondary))",
  },
} satisfies ChartConfig;

export function WeeklyActivityChart() {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  return (
    <div className="space-y-4">
      <SectionTitle sectionTitle="weekly_activities" />
      <div className="w-full h-auto bg-white py-5 pr-5 pl-2.5 rounded-3xl">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[300px] w-full"
        >
          <BarChart accessibilityLayer data={WEEKLY_ACTIVITIES}>
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
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              horizontal={true}
              stroke="rgba(0, 0, 0, 0.1)"
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="deposit"
              fill="var(--primary)"
              barSize={isMobile ? 10 : 15}
              radius={[10, 10, 10, 10]}
            />
            <Bar
              dataKey="withdraw"
              fill="var(--secondary)"
              barSize={isMobile ? 10 : 15}
              radius={[10, 10, 10, 10]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
