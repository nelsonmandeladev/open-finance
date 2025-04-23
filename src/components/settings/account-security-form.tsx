"use client";

import React from "react";
import { Button, Input, Label, Switch } from "../ui";
import { useTranslation } from "react-i18next";

export function AccountSecurityForm() {
  const { t } = useTranslation();

  return (
    <form className="flex flex-col gap-5 xl:gap-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4  xl:gap-6">
        <div className="space-y-4.5">
          <p className="text-base text-dash-blue-darker font-medium">
            {t("two_factor_auth")}
          </p>
          <div className="flex items-center space-x-2">
            <Switch
              id="enable_or_disable_two_factor_auth"
              defaultChecked={true}
            />
            <Label
              htmlFor="enable_or_disable_two_factor_auth"
              className="text-sm text-dash-black"
            >
              {t("enable_or_disable_two_factor_auth")}
            </Label>
          </div>
          <div className="space-y-4.5 mt-5">
            <p className="text-base text-dash-blue-darker font-medium">
              {t("change_password")}
            </p>

            <div className="space-y-2.5">
              <Label className="text-sm text-dash-black">
                {t("current_password")}
              </Label>
              <Input type="password" placeholder="******" />
            </div>
            <div className="space-y-2.5">
              <Label className="text-sm text-dash-black">
                {t("new_password")}
              </Label>
              <Input type="password" placeholder="******" />
            </div>
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
