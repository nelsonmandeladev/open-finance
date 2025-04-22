"use client";

import React from "react";
import { Button, Input, Label } from "../ui";
import { useTranslation } from "react-i18next";

export function AddNewCardForm() {
  const { t } = useTranslation();
  return (
    <form className="flex flex-col gap-5 xl:gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  xl:gap-6">
        <div className="space-y-2.5">
          <Label className="text-sm text-dash-black">{t("card_type")}</Label>
          <Input placeholder="Classic" />
        </div>
        <div className="space-y-2.5">
          <Label className="text-sm text-dash-black">{t("name_on_card")}</Label>
          <Input placeholder="SN.Mandela" />
        </div>
        <div className="space-y-2.5">
          <Label className="text-sm text-dash-black">{t("card_number")}</Label>
          <Input placeholder="**** **** **** ****" />
        </div>
        <div className="space-y-2.5">
          <Label className="text-sm text-dash-black">
            {t("expiration_date")}
          </Label>
          <Input placeholder="25 January 2028" />
        </div>
      </div>
      <div className="">
        <Button className="text-base xl:text-lg font-medium px-7">
          {t("add_card")}
        </Button>
      </div>
    </form>
  );
}
