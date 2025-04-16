import { cn } from "@/lib";
import React from "react";

interface MainCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  card: CardType;
}
export function MainCardBody(props: MainCardBodyProps) {
  const { card, className, ...rest } = props;
  return (
    <div
      className={cn(
        "flex flex-col gap-2 p-6 bg-white border border-gray-lighter rounded-3xl min-w-[265px] md:min-w-[231px] xl:min-w-[350px] 2xl:min-w-[450px]",
        {
          "bg-primary": card.isPrimary,
        },
        className,
      )}
      {...rest}
    >
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
