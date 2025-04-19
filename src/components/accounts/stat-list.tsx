import React from "react";
import { StatCard } from "../common";
import { formatCurrency } from "@/lib";

interface StatListProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: AccountStatType[];
}
export function AccountStatList(props: StatListProps) {
  const { stats } = props;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-6 md:9">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          icon={stat.icon}
          color={stat.color}
          title={stat.title}
          description={formatCurrency(stat.amount, "USD")}
        />
      ))}
    </div>
  );
}
