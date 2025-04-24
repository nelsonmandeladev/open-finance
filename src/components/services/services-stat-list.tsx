import React from "react";
import { StatCard } from "../common";

export function ServicesStatList() {
  return (
    <div className="grid grid-cols-1 overflow-x-auto no-scrollbar">
      <div className="flex md:grid md:grid-cols-3 flex-nowrap xl:justify-between gap-4 px-3 lg:px-4 xl:px-7">
        <StatCard
          icon={"life-insurance-filled"}
          color={"blue"}
          title={"unlimited_protection"}
          description={"life_insurance"}
          className="xl:!px-2.5 2xl:!px-7"
        />
        <StatCard
          icon={"shopping-bag"}
          color={"yellow"}
          title={"buy_think_grow"}
          description={"shopping"}
          className="xl:!px-2.5 2xl:!px-7"
        />
        <StatCard
          icon={"safety-check"}
          color={"green"}
          title={"we_are_your_allies"}
          description={"safety"}
          className="xl:!px-2.5 2xl:!px-7"
        />
      </div>
    </div>
  );
}
