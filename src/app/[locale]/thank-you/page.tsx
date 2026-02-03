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
    title: t("general.title"),
    description: t("general.description"),
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "thank-you" });

  return (
    <PlaceholderPage
      title={t("general.title")}
      description={t("general.description")}
      badge={t("general.badge")}
      requestDemoLabel={t("general.requestDemo")}
      backToHomeLabel={t("general.backToHome")}
    />
  );
}
