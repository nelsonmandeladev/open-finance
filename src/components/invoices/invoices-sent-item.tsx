import React from "react";
import { IconBoxed } from "../common";
import { formatCurrency } from "@/lib";

interface InvoiceSentItemProps {
  icon: IconType;
  title: string;
  time: string;
  amount: number;
  color: ColorType;
}
export function InvoiceSentItem(props: InvoiceSentItemProps) {
  const { icon, title, time, amount, color } = props;
  return (
    <div className="flex items-center justify-between gap-3.5">
      <div className="flex items-center gap-3">
        <IconBoxed
          iconBoxed={{
            icon,
            color,
          }}
          className="rounded-[12px] !size-[45px]  lg:!size-10 xl:!size-[55px]"
        />
        <p className="flex flex-col gap-1 text-dash-black text-sm xl:text-base font-semibold md:min-w-[100px] lg:min-w-[140px] md:max-w-[100px] xl:min-w-[170px] xl:max-w-full 2xl:min-w-[200px]">
          <span className="truncate">{title}</span>
          <span className="text-dash-soft-blue text-xs font-normal">
            {time}
          </span>
        </p>
      </div>
      <p className="text-xs lg:text-sm xl:text-base font-medium text-dash-soft-blue">
        {formatCurrency(amount, "USD")}
      </p>
    </div>
  );
}
