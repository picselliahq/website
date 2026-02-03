import PlaceholderPage from "@/components/ui/PlaceholderPage";
import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "thank-you" });
  return {
    title: t("pricing.title"),
    description: t("pricing.description"),
  };
}

export default async function ThankYouPricingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "thank-you" });

  return (
    <PlaceholderPage
      title={t("pricing.title")}
      description={t("pricing.description")}
      badge={t("pricing.badge")}
      requestDemoLabel={t("pricing.requestDemo")}
      backToHomeLabel={t("pricing.backToHome")}
    />
  );
}
