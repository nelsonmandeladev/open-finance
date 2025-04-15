import { Icon, LanguageSwitcher } from "@/components";
import { initTranslations, LOCALIZATION_NAMESPACES } from "@/locales";

interface HomeProps {
  params: Promise<{
    locale: string;
  }>;
}
export default async function Home(props: HomeProps) {
  const { locale } = await props.params;
  const { t } = await initTranslations(locale, LOCALIZATION_NAMESPACES);
  return (
    <main>
      <h1>{t("header")}</h1>
      <LanguageSwitcher />
      <Icon icon="service" className="fill-blue-500" />
    </main>
  );
}
