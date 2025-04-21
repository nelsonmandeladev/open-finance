import { i18nConfig } from "@/locales";
import { clsx, type ClassValue } from "clsx";
import { createLoader, parseAsInteger, parseAsString } from "nuqs/server";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildPathNAme(locale: string, path: string) {
  if (locale === i18nConfig.defaultLocale) {
    return path;
  }

  if (path === "/") {
    return `/${locale}`;
  }

  return `/${locale}${path}`;
}

export const searchParams = {
  activePage: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(5),
  filter: parseAsString.withDefault("all"),
};
export const searchParamsLoader = createLoader(searchParams);

export const formatReturnPercentage = (
  state: InvestmentStat | string,
  returnValue: number,
) => {
  switch (state) {
    case "win":
      return `+${returnValue}%`;
    default:
      return `-${returnValue}%`;
  }
};
