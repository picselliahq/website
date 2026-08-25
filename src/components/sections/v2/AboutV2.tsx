"use client";

import { useTranslations } from "next-intl";

export default function AboutV2() {
  const t = useTranslations("home.about");
  const questionKeys = ["q1", "q2", "q3"] as const;

  return (
    <section className="py-20 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {t("title")}
        </h2>
        <p className="text-[var(--secondary-label)] leading-relaxed mb-12">
          {t("body")}
        </p>

        <div className="space-y-4">
          {questionKeys.map((key) => (
            <div key={key} className="card p-6">
              <h3 className="text-sm font-semibold text-[var(--label)] mb-2">
                {t(`${key}.question`)}
              </h3>
              <p className="text-sm text-[var(--secondary-label)] leading-relaxed">
                {t(`${key}.answer`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
