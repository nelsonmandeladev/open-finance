import React from "react";
import { Button, Icon } from "../ui";

export function SettingsDropdown() {
  return (
    <Button
      size={"icon"}
      className="!size-8 md:!size-10 xl:!size-[50px] bg-background rounded-full text-xs 2xl:text-base text-center flex items-center justify-center font-medium p-0 text-dash-soft-blue hover:bg-dash-soft-blue/20 hover:text-dash-soft-blue"
    >
      <Icon icon="setting-outlined" className="fill-current" />
    </Button>
  );
}
