import { QUICK_TRANSFER_USER_LIST } from "@/mocks";
import React from "react";
import { QuickTransferUserItem } from "./user-item";
import { SectionTitle } from "../common";
import { QuickTrackForm } from "./quick-transfer-form";

export function QuickTransferUserList() {
  return (
    <div className="flex flex-col gap-5">
      <SectionTitle sectionTitle="quick_transfer" />
      <div className="bg-white rounded-3xl px-5 py-8 space-y-10">
        <div className="grid grid-cols-4 gap-5 lg:gap-3.5">
          {QUICK_TRANSFER_USER_LIST.map((user) => (
            <QuickTransferUserItem key={user.id} user={user} />
          ))}
        </div>
        <QuickTrackForm />
      </div>
    </div>
  );
}
