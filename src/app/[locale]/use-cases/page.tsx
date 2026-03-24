import { getTranslations, setRequestLocale } from 'next-intl/server';
import PageContent from './PageContent';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'useCases.index.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: '/use-cases',
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: '/use-cases',
    },
  };
}

export default async function UseCasesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }], locale)} />
      <PageContent />
    </>
  );
}
