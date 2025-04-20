import { cn } from "@/lib";
import React from "react";
import { Icon } from "../ui";

interface IconBoxedProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  color?: "yellow" | "blue" | "pink" | "green";
}
export function IconBoxed(props: IconBoxedProps) {
  const { icon, color, className, ...rest } = props;
  return (
    <div
      className={cn(
        "size-[45px] lg:size-[50px] xl:size-[70px] flex items-center justify-center rounded-full",
        {
          "bg-dash-yellow-light text-dash-yellow": color === "yellow",
          "bg-dash-blue-light text-dash-blue": color === "blue",
          "bg-dash-green-light text-dash-green": color === "green",
          "bg-dash-soft-pink-light text-dash-soft-pink": color === "pink",
        },
        className,
      )}
      {...rest}
    >
      <Icon icon={icon} className="fill-current" />
    </div>
  );
}
