// import React from "react";

// export function CardValidTo() {
//   return <div>CardValidTo</div>;
// }

import { cn } from "@/lib";
import React from "react";

interface CardValidToprops {
  expirationDate: CardType["expirationDate"];
  isPrimary: CardType["isPrimary"];
}

export function CardValidTo(props: CardValidToprops) {
  const { expirationDate, isPrimary } = props;
  return (
    <p
      className={cn("text-[10px] text-dash-soft-blue flex flex-col", {
        "text-white/70": isPrimary,
      })}
    >
      VALID THRU
      <span
        className={cn("font-semibold text-base xl:text-xl text-white", {
          "text-dash-blue-darker": !isPrimary,
        })}
      >
        {expirationDate}
      </span>
    </p>
  );
}
