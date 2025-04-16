import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { buildPathNAme } from "@/lib";
import { SIDEBAR_ITEMS } from "@/mocks";
import { useMemo } from "react";

export function useActiveSidebarItem(like?: string) {
  const pathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const activeItem = useMemo(() => {
    return SIDEBAR_ITEMS.find(
      (item) => buildPathNAme(currentLocale, item.link) === pathname,
    );
  }, [pathname, currentLocale]);

  return {
    activeItem: activeItem,
    pathname: buildPathNAme(currentLocale, like || ""),
  };
}
