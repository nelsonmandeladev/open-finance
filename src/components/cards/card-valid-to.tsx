"use client";

import { cn } from "@/lib";
import React from "react";
import { useTranslation } from "react-i18next";

interface CardValidToprops {
  expirationDate: CardType["expirationDate"];
  isPrimary: CardType["isPrimary"];
}

export function CardValidTo(props: CardValidToprops) {
  const { expirationDate, isPrimary } = props;
  const { t } = useTranslation();
  return (
    <p
      className={cn("text-[10px] text-dash-soft-blue flex flex-col", {
        "text-white/70": isPrimary,
      })}
    >
      <span className="uppercase">{t("valid_thru")}</span>
      <span
        className={cn("font-semibold text-base xl:text-xl text-white", {
          "text-dash-blue-darker": !isPrimary,
        })}
      >
        {expirationDate}
      </span>
    </p>
  );
}
