"use client";

import { i18nConfig } from "@/locales";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  function handleChange(locale: string) {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${locale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.localeDetection
    ) {
      router.push("/" + locale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${locale}`));
    }

    router.refresh();
  }

  return (
    <Select
      value={currentLocale}
      onValueChange={(value) => handleChange(value)}
    >
      <SelectTrigger className="w-9 bg-transparent rounded-full border-primary-1 text-primary-1 text-xs 2xl:text-base text-center flex items-center justify-center font-medium p-0">
        <SelectValue className="text-xs 2xl:text-base" />
      </SelectTrigger>
      <SelectContent
        className="border-none shadow-2xl shadow-primary-1/10 !max-w-[10px]"
        align="end"
      >
        <SelectGroup>
          <SelectItem className="text-xs 2xl:text-base" value="fr">
            Fr
          </SelectItem>
          <SelectItem className="text-xs 2xl:text-base" value="en">
            En
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
