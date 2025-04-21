import { cn } from "@/lib";
import React from "react";

interface CardBrandProps {
  cardBrand: CardType["cardBrand"];
  priority: CardType["priority"];
}

export function CardBrand(props: CardBrandProps) {
  const { priority } = props;
  return (
    <div className="relative flex items-center">
      <div
        className={cn(
          "size-[18.4px] rounded-full bg-white/50 translate-x-2.5",
          {
            "bg-[#9199AF80]": priority === "third",
          },
        )}
      />
      <div
        className={cn("size-[18.4px] rounded-full bg-white/50", {
          "bg-[#9199AF80]": priority === "third",
        })}
      />
    </div>
  );
}
