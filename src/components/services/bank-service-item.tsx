"use client";

import { cn } from "@/lib";
import React from "react";
import { useTranslation } from "react-i18next";
import { IconBoxed } from "../common";
import Link from "next/link";

interface BankServiceItemProps {
  iconBoxed: IconBoxType;
  title: string;
}

export default function BankServiceItem(props: BankServiceItemProps) {
  const { iconBoxed, title } = props;
  const { t } = useTranslation();
  return (
    <div
      className={cn(
        "bg-white w-full flex items-center justify-between gap-5 lg:gap-2 xl:gap-5 rounded-[10px] p-3 ",
      )}
    >
      <div className="flex items-center gap-3 xl:gap-6">
        <div className="">
          <IconBoxed
            iconBoxed={iconBoxed}
            className="rounded-[12px] !size-[45px]  lg:!size-10 xl:!size-[55px]"
          />
        </div>
        <p className="flex flex-col gap-0 text-dash-black text-sm xl:text-base font-semibold text-nowrap">
          <span className="truncate">{t(title)}</span>
          <span className="text-dash-soft-blue text-xs font-normal flex items-center gap-1.5">
            It is a long established
          </span>
        </p>
      </div>

      <div className="hidden md:block">
        <p className="text-xs xl:text-base font-medium text-dash-black">
          Lorem Ipsum
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          Many publishing
        </p>
      </div>
      <div className="hidden md:block">
        <p className="text-xs xl:text-base font-medium text-dash-black text-nowrap">
          Lorem Ipsum
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          Many publishing
        </p>
      </div>
      <div className="hidden lg:block">
        <p className="text-xs xl:text-base font-medium text-dash-black">
          Lorem Ipsum
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          Many publishing
        </p>
      </div>
      <div className="text-nowrap">
        <Link
          href={"#"}
          className="border-1 border-dash-soft-blue px-5 py-1.5 rounded-full text-dash-soft-blue hover:text-primary hover:border-primary text-xs font-medium transition-all duration-300"
        >
          {t("view_details")}
        </Link>
      </div>
    </div>
  );
}
