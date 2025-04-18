"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Icon, Input } from "../ui";

export function QuickTrackForm() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-2.5 w-full">
      <p className="text-dash-soft-blue text-xs text-nowrap">{t("amount")}</p>
      <div className="flex items-center justify-end relative w-full">
        <Input
          type="number"
          placeholder={"525.50"}
          className="!px-5 !h-14 md:!h-10 lg:!h-12 xl:!h-[50px] text-dash-black placeholder:text-dash-soft-blue bg-background border-none rounded-full translate-x-10  xl:translate-x-14 z-0"
        />
        <Button className="!h-14 md:!h-10 lg:!h-12 xl:!h-[50px] rounded-full text-white z-10">
          {t("send")}
          <Icon icon="send-icon" className="fill-current" />
        </Button>
      </div>
    </div>
  );
}
