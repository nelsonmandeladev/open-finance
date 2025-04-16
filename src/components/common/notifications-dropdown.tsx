import React from "react";
import { Button, Icon } from "../ui";

export function NotificationsDropdown() {
  return (
    <Button
      size={"icon"}
      className="!size-8 md:!size-10 xl:!size-[50px] bg-background rounded-full text-xs 2xl:text-base text-center flex items-center justify-center font-medium p-0 text-dash-red hover:bg-dash-red/20 hover:text-dash-red shadow-none"
    >
      <Icon icon="notification-outlined" className="fill-current" />
    </Button>
  );
}
