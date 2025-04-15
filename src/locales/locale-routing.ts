import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
import { LOCALES } from "./locales";

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: LOCALES[0],
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
