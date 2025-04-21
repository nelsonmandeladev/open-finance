"use client";

import React, { useMemo } from "react";
import { IconBoxed } from "../common";
import { cn, formatCurrency, formatReturnPercentage } from "@/lib";
import { useTranslation } from "react-i18next";

interface MyInvestmentCardProps {
  investment: InvestmentType;
}

export function MyInvestmentCard(props: MyInvestmentCardProps) {
  const { investment } = props;
  const { t } = useTranslation();

  const iconBoxed: IconBoxType = useMemo(() => {
    switch (investment.plate_form) {
      case "apple":
        return {
          icon: "apple",
          color: "pink",
        };
        break;

      case "google":
        return {
          icon: "google",
          color: "blue",
        };
        break;

      default:
        return {
          icon: "tesla",
          color: "yellow",
        };
        break;
    }
  }, [investment]);

  return (
    <div className="bg-white w-full flex items-end xl:items-center justify-between lg:justify-start gap-5 rounded-[10px] p-3 ">
      <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 xl:w-[500px]">
        <div className="">
          <IconBoxed
            iconBoxed={{
              icon: iconBoxed.icon,
              color: iconBoxed.color,
            }}
            className="rounded-[12px] !size-[45px]  lg:!size-10 xl:!size-[55px]"
          />
        </div>
        <p className="flex flex-col gap-1 text-dash-black text-sm xl:text-base font-semibold lg:min-w-[140px] xl:min-w-auto lg:max-w-[140px] xl:max-w-auto">
          <span className="truncate">{investment.title}</span>
          <span className="text-dash-soft-blue text-xs font-normal flex items-center gap-1.5">
            {investment.categories.map((category) => (
              <span className="text-nowrap" key={category.title}>
                {category.title},
              </span>
            ))}
          </span>
        </p>
      </div>

      <div className="hidden lg:block xl:w-[300px]">
        <p className="text-xs lg:text-sm xl:text-base font-medium text-dash-bla">
          {formatCurrency(investment.amount, "USD")}
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          {t("investment_value")}
        </p>
      </div>
      <div className="">
        <p
          className={cn("text-base font-medium text-dash-green", {
            "text-dash-red": investment.state === "loss",
          })}
        >
          {formatReturnPercentage(investment.state, investment.return)}
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          {t("return_value")}
        </p>
      </div>
    </div>
  );
}
