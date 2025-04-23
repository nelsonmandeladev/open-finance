"use client";

import React from "react";
import { Button, Icon, Input, Label } from "../ui";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export function EditProfileForm() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-5.5 lg:gap-11 xl:gap-13.5">
      <div className="relative flex">
        <div className="size-42.5 lg:size-28 xl:size-33 rounded-full overflow-hidden object-cover aspect-auto">
          <Image
            src={"/avatars/av-5.jpg"}
            alt="SN.mandela"
            width={200}
            height={200}
            className="w-full h-full object-cover aspect-auto"
          />
        </div>
        <Button
          size={"icon"}
          className="rounded-full absolute right-0 bottom-0"
        >
          <Icon icon="pencel-alt" className="fill-current" />
        </Button>
      </div>
      <form className="flex flex-col gap-5 xl:gap-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  xl:gap-6">
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">{t("your_name")}</Label>
            <Input placeholder="Sonfack Nelson Mandela" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">{t("user_name")}</Label>
            <Input placeholder="@sn_mandela" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">{t("email")}</Label>
            <Input type="email" placeholder="sonfacknelsonmandela@gmail.com" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">{t("password")}</Label>
            <Input type="password" placeholder="*********" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">
              {t("date_of_birth")}
            </Label>
            <Input type="text" placeholder="01 Jan 2025" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">
              {t("present_address")}
            </Label>
            <Input type="text" placeholder="Yaounde, Cameroon" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">
              {t("permanent_address")}
            </Label>
            <Input type="text" placeholder="Yaounde, Cameroon" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">{t("city")}</Label>
            <Input type="text" placeholder="Yaounde" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">
              {t("postal_code")}
            </Label>
            <Input type="text" placeholder="4242424" />
          </div>
          <div className="space-y-2.5">
            <Label className="text-sm text-dash-black">{t("country")}</Label>
            <Input type="text" placeholder="Cameroon" />
          </div>
        </div>
        <div className="mt-4 flex justify-end w-full">
          <Button className="text-base xl:text-lg font-medium px-7 md:px-12 xl:px-18.5 w-full md:w-auto">
            {t("save")}
          </Button>
        </div>
      </form>
    </div>
  );
}
