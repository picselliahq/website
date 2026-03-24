import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import {
  DeploymentHero,
  DeploymentArchitecture,
  DeploymentSDK,
  DeploymentScaling,
  DeploymentFeatures,
  DeploymentCTA,
} from "@/components/model-deployment";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'modelDeployment.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: "/model-deployment",
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: "/model-deployment",
    },
  };
}

export default async function ModelDeploymentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Platform', url: '/product-overview' }, { name: 'Model Deployment', url: '/model-deployment' }], locale)} />
      <DeploymentHero />
      <DeploymentArchitecture />
      <DeploymentSDK />
      <DeploymentScaling />
      <DeploymentFeatures />
      <DeploymentCTA />
    </>
  );
}
