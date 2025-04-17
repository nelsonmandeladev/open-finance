"use client";

import { buildPathNAme, cn } from "@/lib";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

interface SectionTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  sectionTitle: string | React.ReactNode;
  seeAllLink?: string;
}

export function SectionTitle(props: SectionTitleProps) {
  const { sectionTitle, className, seeAllLink, ...rest } = props;
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  return (
    <h4
      className={cn(
        "text-base md:text-lg xl:text-[22px] font-semibold text-dash-blue-darker flex items-center justify-between gap-2.5",
        className,
      )}
      {...rest}
    >
      {typeof sectionTitle === "string" ? t(sectionTitle) : sectionTitle}

      {seeAllLink && (
        <Link
          href={buildPathNAme(currentLocale, seeAllLink)}
          className="text-sm hover:text-secondary hover:underline transition underline-offset-2 duration-300 capitalize"
        >
          {t("see_all")}
        </Link>
      )}
    </h4>
  );
}
