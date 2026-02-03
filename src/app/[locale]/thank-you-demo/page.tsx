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
    title: t("demo.title"),
    description: t("demo.description"),
  };
}

export default async function ThankYouDemoPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "thank-you" });

  return (
    <PlaceholderPage
      title={t("demo.title")}
      description={t("demo.description")}
      badge={t("demo.badge")}
      requestDemoLabel={t("demo.requestDemo")}
      backToHomeLabel={t("demo.backToHome")}
    />
  );
}
