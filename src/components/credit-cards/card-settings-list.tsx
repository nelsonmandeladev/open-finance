import { cn } from "@/lib";
import React from "react";
import { SectionTitle } from "../common";
import { CardSettingItem } from "./card-setting-item";

export function CardSettingsList() {
  return (
    <div className={cn("flex flex-col gap-3 h-full")}>
      <SectionTitle sectionTitle="card_setting" />
      <div className="flex flex-col gap-4 justify-between h-full p-5 bg-white rounded-3xl">
        <CardSettingItem
          iconBoxed={{
            icon: "blocked-credit",
            color: "yellow",
          }}
          title="block_card"
          description="instantly_block_card"
        />
        <CardSettingItem
          iconBoxed={{
            icon: "key",
            color: "blue",
          }}
          title="chang_pic_code"
          description="withdraw_without_any_card"
        />
        <CardSettingItem
          iconBoxed={{
            icon: "google",
            color: "pink",
          }}
          title="add_to_google_pay"
          description="withdraw_without_any_card"
        />
        <CardSettingItem
          iconBoxed={{
            icon: "apple",
            color: "green",
          }}
          title="add_to_apple_pay"
          description="withdraw_without_any_card"
        />
        <CardSettingItem
          iconBoxed={{
            icon: "apple",
            color: "green",
          }}
          title="add_to_apple_store"
          description="withdraw_without_any_card"
        />
      </div>
    </div>
  );
}
