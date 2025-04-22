"use client";

import React from "react";
import { SectionTitle } from "../common";
import { cn } from "@/lib";
import { useTranslation } from "react-i18next";
import { AddNewCardForm } from "./add-new-card-form";

export function AddNewCard() {
  const { t } = useTranslation();
  return (
    <div className={cn("flex flex-col gap-3 h-full")}>
      <SectionTitle sectionTitle="add_new_card" />
      <div className="flex flex-col gap-3 lg:gap-4 xl:gap-7 justify-between h-full p-5 bg-white rounded-3xl">
        <p className="text-xs xl:text-base text-dash-soft-blue">
          {t("create_new_card_message")}
        </p>
        <AddNewCardForm />
      </div>
    </div>
  );
}
