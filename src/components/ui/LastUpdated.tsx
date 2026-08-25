import { getTranslations } from "next-intl/server";

/** Visible "Last updated" date — pass the real date this page's content was last edited. */
export default async function LastUpdated({ date, locale }: { date: string; locale: string }) {
  const t = await getTranslations({ locale, namespace: "common" });
  const dateLocale = locale === "fr" ? "fr-FR" : "en-US";
  const formatted = new Date(date).toLocaleDateString(dateLocale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="text-center py-6 text-xs text-[var(--tertiary-label)]">
      {t("lastUpdated")}{" "}
      <time dateTime={date}>{formatted}</time>
    </div>
  );
}
