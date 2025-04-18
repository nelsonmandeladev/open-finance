import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

interface UserItemProps {
  user: QuickTransferUserType;
}

export function QuickTransferUserItem(props: UserItemProps) {
  const {
    user: { image, name, role },
  } = props;
  return (
    <div className="flex flex-col justify-center items-center gap-1.5">
      <Avatar className="size-[50px] xl:size-[70px] rounded-full overflow-hidden">
        <AvatarImage src={`/avatars/${image}`} alt={name} />
        <AvatarFallback>{`${name.charAt(0)}${name.charAt(1)}`}</AvatarFallback>
      </Avatar>
      <p className="flex flex-col items-center justify-center gap-0 text-xs xl:text-sm text-dash-black font-medium text-nowrap">
        {name}
        <span className="text-[10px] xl:text-xs text-dash-soft-blue">
          {role}
        </span>
      </p>
    </div>
  );
}
