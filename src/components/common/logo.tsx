import Image from "next/image";
import React from "react";

export function Logo() {
  return (
    <div className="w-auto h-auto aspect-auto object-cover flex items-center justify-center">
      <Image
        src={"/logo.svg"}
        alt="Bank Dash"
        width={183}
        height={36}
        className="block lg:hidden w-full h-full object-cover"
      />
      <Image
        src={"/logo-full.svg"}
        alt="Bank Dash"
        width={183}
        height={36}
        className="hidden lg:block w-full h-full object-cover"
      />
    </div>
  );
}
