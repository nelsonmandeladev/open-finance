import { BankServicesList, ServicesStatList } from "@/components";
import React, { Fragment } from "react";

export default function ServicesPage() {
  return (
    <Fragment>
      <div className="pt-6 lg:pt-4 xl:pt-7 2xl:pt-10 space-y-5 pl">
        <ServicesStatList />
      </div>
      <div className="px-3 lg:px-4 xl:px-7 mt-5">
        <BankServicesList />
      </div>
    </Fragment>
  );
}
