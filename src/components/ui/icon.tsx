"use client";

import React from "react";

export function Icon({ icon, size = 24, ...props }: IconProps) {
  return (
    <svg width={size} height={size} {...props}>
      <use href={`/icons/svg/generals.svg#${icon}`} />
    </svg>
  );
}
