import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroV2 from "@/components/sections/v2/HeroV2";
import PlatformV2 from "@/components/sections/v2/PlatformV2";
import UseCasesV2 from "@/components/sections/v2/UseCasesV2";
import EnterpriseV2 from "@/components/sections/v2/EnterpriseV2";
import IntegrationsV2 from "@/components/sections/v2/IntegrationsV2";
import CTAV2 from "@/components/sections/v2/CTAV2";
import BackgroundV2 from "@/components/sections/v2/BackgroundV2";
import { JsonLd, organizationJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: { canonical: '/' },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: '/',
    },
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <JsonLd data={organizationJsonLd(locale)} />
      <BackgroundV2 />
      <HeroV2 />
      <PlatformV2 />
      <UseCasesV2 />
      <EnterpriseV2 />
      <IntegrationsV2 />
      <CTAV2 />
    </>
  );
}
