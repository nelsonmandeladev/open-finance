import { cn } from "@/lib";
import React from "react";
import { SectionTitle } from "../common";
import BankServiceItem from "./bank-service-item";

export function BankServicesList() {
  return (
    <div className={cn("flex flex-col gap-3 h-full")}>
      <SectionTitle sectionTitle="bank_services_list" />
      <div className="flex flex-col gap-2.5 justify-between h-full">
        <BankServiceItem
          iconBoxed={{
            icon: "money-loan",
            color: "pink",
          }}
          title="business_loan"
        />
        <BankServiceItem
          iconBoxed={{
            icon: "briefcase",
            color: "yellow",
          }}
          title="checking_account"
        />
        <BankServiceItem
          iconBoxed={{
            icon: "investment-group",
            color: "pink",
          }}
          title="saving_account"
        />
        <BankServiceItem
          iconBoxed={{
            icon: "user",
            color: "blue",
          }}
          title="debit_and_credit_card"
        />
        <BankServiceItem
          iconBoxed={{
            icon: "safety-check",
            color: "green",
          }}
          title="life_insurance"
        />
        <BankServiceItem
          iconBoxed={{
            icon: "money-loan",
            color: "pink",
          }}
          title="business_loan"
        />
      </div>
    </div>
  );
}
