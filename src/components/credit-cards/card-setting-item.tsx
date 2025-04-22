"use client";

import React from "react";
import { IconBoxed } from "../common";
import { useTranslation } from "react-i18next";

interface CardSettingItemProps {
  iconBoxed: IconBoxType;
  title: string;
  description: string;
}
export function CardSettingItem(props: CardSettingItemProps) {
  const { iconBoxed, title, description } = props;
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3">
      <div className="">
        <IconBoxed
          iconBoxed={iconBoxed}
          className="rounded-[12px] !size-[45px]  lg:!size-10 xl:!size-[55px]"
        />
      </div>
      <div className="">
        <p className="text-xs xl:text-base font-medium text-dash-bla">
          {t(title)}
        </p>
        <p className="text-dash-soft-blue text-xs font-normal text-nowrap">
          {t(description)}
        </p>
      </div>
    </div>
  );
}
