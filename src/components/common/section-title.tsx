"use client";

import React from "react";
import { useTranslation } from "react-i18next";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  sectionTitle: string | React.ReactNode;
}

export function SectionTitle(props: SectionTitleProps) {
  const { sectionTitle, ...rest } = props;
  const { t } = useTranslation();

  return (
    <h4
      className="text-base md:text-lg xl:text-[22px] font-semibold text-dash-blue-darker"
      {...rest}
    >
      {typeof sectionTitle === "string" ? t(sectionTitle) : sectionTitle}
    </h4>
  );
}
