import { cn } from "@/lib";
import React from "react";
import { CardBalance } from "./card-balance";
import Image from "next/image";
import { CardHolder } from "./card-holder";
import { CardValidTo } from "./card-valid-to";
import { CardNumber } from "./card-number";
import { CardBrand } from "./card-brand";

interface MainCardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  card: CardType;
}
export function MainCardBody(props: MainCardBodyProps) {
  const { card, className, ...rest } = props;
  return (
    <div
      className={cn(
        "flex flex-col gap-4 bg-white pt-6 border border-gray-lighter rounded-3xl min-w-[265px] lg:min-w-[250px] xl:min-w-[350px] 2xl:min-w-[450px] overflow-hidden",
        {
          "bg-primary": card.isPrimary,
        },
        className,
      )}
      {...rest}
      style={{
        background: card.isPrimary
          ? "linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)"
          : "",
      }}
    >
      <div className="space-y-6 px-4">
        <div className="flex items-center justify-between gap-2.5">
          <CardBalance {...card} />
          <div className="size-7 xl:size-9 aspect-auto">
            <Image
              src={
                card.isPrimary
                  ? "/images/Chip_Card.png"
                  : "/images/Chip_Card-black.png"
              }
              alt=""
              width={120}
              height={120}
              className="w-full h-full aspect-auto object-cover"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-2.5">
          <CardHolder {...card} />
          <CardValidTo {...card} />
        </div>
      </div>
      <div
        className={cn("px-5 py-4 flex items-center justify-between gap-2.5", {
          "border-t border-gray-lighter": !card.isPrimary,
        })}
        style={{
          background: card.isPrimary
            ? "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)"
            : "",
        }}
      >
        <CardNumber {...card} />
        <CardBrand {...card} />
      </div>
    </div>
  );
}
