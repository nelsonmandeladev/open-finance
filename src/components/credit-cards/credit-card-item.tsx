"use client";

import { cn } from "@/lib";
import React from "react";
import { IconBoxed } from "../common";
import { useTranslation } from "react-i18next";
import Link from "next/link";

interface CreditCardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  card: CardType;
}
export function CreditCardItem(props: CreditCardItemProps) {
  const { card, className, ...rest } = props;
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        "bg-white w-full flex items-end lg:items-center justify-between gap-5 lg:gap-2 xl:gap-5 rounded-[10px] p-3 ",
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-3 xl:gap-6">
        <div className="">
          <IconBoxed
            iconBoxed={{
              icon: "credit-card",
              color:
                card.priority === "primary"
                  ? "blue"
                  : card.priority === "secondary"
                    ? "pink"
                    : "yellow",
            }}
            className="rounded-[12px] !size-[45px]  lg:!size-10 xl:!size-[55px]"
          />
        </div>
        <p className="flex flex-col gap-0 text-dash-black text-sm xl:text-base font-semibold">
          <span className="truncate">{t("card_type")}</span>
          <span className="text-dash-soft-blue text-xs font-normal flex items-center gap-1.5">
            {t(card.priority)}
          </span>
        </p>
      </div>

      <div className="md:hidden xl:block">
        <p className="text-xs xl:text-base font-medium text-dash-bla">
          {t("bank")}
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          {card.bank}
        </p>
      </div>
      <div className="hidden md:block">
        <p className="text-xs xl:text-base font-medium text-dash-bla text-nowrap">
          {t("card_number")}
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          {card.cardNumber.slice(4)}
        </p>
      </div>
      <div className="hidden lg:block">
        <p className="text-xs xl:text-base font-medium text-dash-bla">
          {t("card_holder")}
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          {card.cardHolder}
        </p>
      </div>
      <div className="text-nowrap">
        <Link
          href={"#"}
          className="text-primary text-xs font-medium underline-offset-2 transition-all hover:underline"
        >
          {t("view_details")}
        </Link>
      </div>
    </div>
  );
}
