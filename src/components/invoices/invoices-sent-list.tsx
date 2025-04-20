import React from "react";
import { SectionTitle } from "../common";
import { InvoiceSentItem } from "./invoices-sent-item";

export function InvoicesSendList() {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-5">
      <SectionTitle sectionTitle="invoices_sent" />
      <div className="flex flex-col justify-between gap-3.5 bg-white h-full rounded-2xl lg:rounded-[20px] xl:rounded-3xl  p-5 md:p-4 xl:p-6">
        <InvoiceSentItem
          icon={"apple"}
          title={"Apple Store"}
          time={"5h ago"}
          amount={450}
          color={"green"}
        />
        <InvoiceSentItem
          icon={"user-outlined"}
          title={"Michael"}
          time={"2 days ago"}
          amount={160}
          color={"yellow"}
        />
        <InvoiceSentItem
          icon={"play-station"}
          title={"Playstation"}
          time={"5 days ago"}
          amount={1085}
          color={"blue"}
        />
        <InvoiceSentItem
          icon={"user-outlined"}
          title={"William"}
          time={"10 days ago"}
          amount={90}
          color={"pink"}
        />
      </div>
    </div>
  );
}
