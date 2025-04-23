"use client";

import React from "react";
import { Button, Input, Label, Switch } from "../ui";
import { useTranslation } from "react-i18next";

export function AccountPreferenceForm() {
  const { t } = useTranslation();
  return (
    <form className="flex flex-col gap-5 xl:gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  xl:gap-6">
        <div className="space-y-2.5">
          <Label className="text-sm text-dash-black">{t("currency")}</Label>
          <Input placeholder="XAF" />
        </div>
        <div className="space-y-2.5">
          <Label className="text-sm text-dash-black">{t("time_zone")}</Label>
          <Input placeholder="(GMT-12:00) International Date Line West" />
        </div>
        <div className="space-y-4.5">
          <p className="">{t("notification")}</p>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" defaultChecked={true} />
            <Label htmlFor="airplane-mode" className="text-sm text-dash-black">
              {t("send_receive_currency")}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="receive_merchant_order" />
            <Label
              htmlFor="receive_merchant_order"
              className="text-sm text-dash-black"
            >
              {t("receive_merchant_order")}
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="account_recommendation" defaultChecked={true} />
            <Label
              htmlFor="account_recommendation"
              className="text-sm text-dash-black"
            >
              {t("account_recommendation")}
            </Label>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-end w-full">
        <Button className="text-base xl:text-lg font-medium px-7 md:px-12 xl:px-18.5 w-full md:w-auto">
          {t("save")}
        </Button>
      </div>
    </form>
  );
}
