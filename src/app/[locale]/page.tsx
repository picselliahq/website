import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroV2 from "@/components/sections/v2/HeroV2";
import AboutV2 from "@/components/sections/v2/AboutV2";
import PlatformV2 from "@/components/sections/v2/PlatformV2";
import UseCasesV2 from "@/components/sections/v2/UseCasesV2";
import EnterpriseV2 from "@/components/sections/v2/EnterpriseV2";
import IntegrationsV2 from "@/components/sections/v2/IntegrationsV2";
import CTAV2 from "@/components/sections/v2/CTAV2";
import BackgroundV2 from "@/components/sections/v2/BackgroundV2";
import { JsonLd, organizationJsonLd, softwareApplicationJsonLd, faqJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { localizedUrl, localizedAlternates } from "@/lib/seo";
import LastUpdated from "@/components/ui/LastUpdated";

const PAGE_LAST_UPDATED = "2026-08-25";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.metadata' });
  const canonical = localizedUrl("/", locale);
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical,
      languages: localizedAlternates("/"),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonical,
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tAbout = await getTranslations({ locale, namespace: 'home.about' });
  const aboutFaqs = ['q1', 'q2', 'q3'].map((key) => ({
    question: tAbout(`${key}.question`),
    answer: tAbout(`${key}.answer`),
  }));

  return (
    <>
      <JsonLd data={organizationJsonLd(locale)} />
      <JsonLd data={softwareApplicationJsonLd(locale)} />
      <JsonLd data={faqJsonLd(aboutFaqs, locale)} />
      <JsonLd data={webPageJsonLd("/", PAGE_LAST_UPDATED, locale)} />
      <BackgroundV2 />
      <HeroV2 />
      <PlatformV2 />
      <UseCasesV2 />
      <EnterpriseV2 />
      <IntegrationsV2 />
      <AboutV2 />
      <CTAV2 />
      <LastUpdated date={PAGE_LAST_UPDATED} locale={locale} />
    </>
  );
}
