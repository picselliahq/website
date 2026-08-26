import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import PostHogProvider from "@/components/providers/PostHogProvider";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://www.picsellia.com"),
    title: {
      default: t("title"),
      template: "%s | Picsellia",
    },
    description: t("description"),
    keywords: [
      "MLOps",
      "Computer Vision",
      "Machine Learning",
      "AI Platform",
      "Model Deployment",
      "Data Management",
      "Model Monitoring",
      "Image Annotation",
      "Deep Learning",
    ],
    authors: [{ name: "Picsellia" }],
    creator: "Picsellia",
    openGraph: {
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
      url: "https://www.picsellia.com",
      siteName: "Picsellia",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      site: "@picsellia",
      creator: "@picsellia",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/icon.svg",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://eu.i.posthog.com" />
        <link rel="preconnect" href="https://eu-assets.i.posthog.com" />
        <link rel="dns-prefetch" href="https://eu.i.posthog.com" />
        <link rel="dns-prefetch" href="https://eu-assets.i.posthog.com" />
      </head>
      <body>
        <NextIntlClientProvider>
          <PostHogProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </PostHogProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
