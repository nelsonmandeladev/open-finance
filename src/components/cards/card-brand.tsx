import { cn } from "@/lib";
import React from "react";

interface CardBrandProps {
  cardBrand: CardType["cardBrand"];
  isPrimary: CardType["isPrimary"];
}

export function CardBrand(props: CardBrandProps) {
  const { isPrimary } = props;
  return (
    <div className="relative flex items-center">
      <div
        className={cn(
          "size-[18.4px] rounded-full bg-white/50 translate-x-2.5",
          {
            "bg-[#9199AF80]": !isPrimary,
          },
        )}
      />
      <div
        className={cn("size-[18.4px] rounded-full bg-white/50", {
          "bg-[#9199AF80]": !isPrimary,
        })}
      />
    </div>
  );
}
