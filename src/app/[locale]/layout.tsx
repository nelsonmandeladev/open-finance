import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalizationProvider } from "@/providers";
import { initTranslations, LOCALIZATION_NAMESPACES } from "@/locales";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Open finance",
  description: "An open-source ready to use template for banking applications",
};

interface RootLayoutProps {
  params: Promise<{
    locale: string;
  }>;
  children: React.ReactNode;
}

export default async function RootLayout(props: RootLayoutProps) {
  const { children } = props;
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, LOCALIZATION_NAMESPACES);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased max-w-[1680px] h-screen max-h-screen mx-auto`}
        suppressHydrationWarning
      >
        <LocalizationProvider locale={locale} resources={resources}>
          <NuqsAdapter>{children}</NuqsAdapter>
        </LocalizationProvider>
      </body>
    </html>
  );
}
