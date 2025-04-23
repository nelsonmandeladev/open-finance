import React from "react";
import { AccountingSettingFilter } from "./account-setting-filter";
import { EditProfileForm } from "./edit-profile-form";
import { AccountPreferenceForm } from "./account-preference-form";
import { AccountSecurityForm } from "./account-security-form";

interface AccountSettingsProps {
  activeSetting: string;
}
export function AccountSettings(props: AccountSettingsProps) {
  const { activeSetting } = props;
  return (
    <div className="bg-white p-5 lg:p-6.25 xl:p-7.5 rounded-[15px] lg:rounded-[20px] xl:rounded-[25px] xl:space-y-13.75">
      <AccountingSettingFilter />
      <div className="mt-6.25">
        {activeSetting === "edit-profile" && <EditProfileForm />}
        {activeSetting === "preference" && <AccountPreferenceForm />}
        {activeSetting === "security" && <AccountSecurityForm />}
      </div>
    </div>
  );
}
