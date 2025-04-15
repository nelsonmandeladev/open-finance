import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <div className="w-auto h-7 aspect-auto object-cover flex items-center justify-center">
      <Image
        src={"/logo-full.svg"}
        alt="Bank Dash"
        width={183}
        height={36}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
