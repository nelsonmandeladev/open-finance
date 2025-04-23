import { AccountSettings } from "@/components/settings";
import { searchParamsLoader } from "@/lib";
import { SearchParams } from "nuqs";
import React from "react";

interface SettingsPageProps {
  searchParams: Promise<SearchParams>;
}

export default async function SettingsPage({
  searchParams,
}: SettingsPageProps) {
  const { account_setting } = await searchParamsLoader(searchParams);

  return (
    <div className="p-3 md:p-4 lg:p-5 xl:p-7 2xl:p-10">
      <AccountSettings activeSetting={account_setting} />
    </div>
  );
}
