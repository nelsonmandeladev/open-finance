"use client";

import React, { Fragment } from "react";
import { Button, Icon, Input } from "../ui";
import { useTranslation } from "react-i18next";

export function SearchBar() {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="relative hidden lg:flex items-center justify-center w-64 transition-all duration-200 ease-in-out">
        <Icon
          icon="search-icon"
          className="absolute left-5 top-1/2 -translate-y-1/2 h-4 w-4 fill-dash-soft-blue"
        />
        <Input
          type="search"
          placeholder={t("search_for_something")}
          className="pl-12 !h-8 md:!h-10 xl:!h-[50px] text-dash-soft-blue placeholder:text-dash-soft-blue bg-background border-none"
        />
      </div>
      <Button
        size={"icon"}
        className="flex items-center justify-center lg:hidden !size-8 md:!size-10 xl:!size-[50px] bg-background rounded-full text-xs 2xl:text-base text-center font-medium p-0 shadow-none hover:bg-background"
      >
        <Icon icon="search-icon" className="fill-dash-soft-blue" />
      </Button>
    </Fragment>
  );
}
