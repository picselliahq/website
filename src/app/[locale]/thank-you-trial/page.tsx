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
    title: t("trial.title"),
    description: t("trial.description"),
  };
}

export default async function ThankYouTrialPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "thank-you" });

  return (
    <PlaceholderPage
      title={t("trial.title")}
      description={t("trial.description")}
      badge={t("trial.badge")}
      requestDemoLabel={t("trial.requestDemo")}
      backToHomeLabel={t("trial.backToHome")}
    />
  );
}
