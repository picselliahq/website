"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { track } from "@vercel/analytics";
import { captureEvent, identifyUser } from "@/lib/posthog";
import { getAttribution } from "@/lib/attribution";

export default function NewsletterSignup() {
  const t = useTranslations('blog.newsletter');
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      const attribution = getAttribution();
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, pageUri: window.location.href, attribution }),
      });

      if (res.ok) {
        track("newsletter_subscribed");
        identifyUser(email);
        captureEvent("newsletter_subscribed", {
          form: "Blog Newsletter",
          last_touch_channel: attribution.last?.channel,
        });
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div
      className="rounded-2xl p-8"
      style={{
        backgroundColor: "var(--secondary-system-background)",
        border: "1px solid var(--border)",
      }}
    >
      <h3 className="text-lg font-semibold text-label mb-2">{t('title')}</h3>
      <p className="text-sm text-secondary mb-4">
        {t('description')}
      </p>

      {status === "success" ? (
        <p
          className="text-sm font-medium"
          style={{ color: "var(--picsellia-green)" }}
        >
          {t('success')}
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('placeholder')}
            required
            className="flex-1 px-4 py-2.5 rounded-lg text-sm text-label placeholder:text-tertiary focus:outline-none focus:ring-2"
            style={{
              backgroundColor: "var(--tertiary-system-background)",
              border: "1px solid var(--border)",
            }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-primary whitespace-nowrap"
            style={{ backgroundColor: "var(--picsellia-green)" }}
          >
            {status === "loading" ? t('subscribing') : t('subscribe')}
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="text-sm mt-2" style={{ color: "var(--system-red)" }}>
          {t('error')}
        </p>
      )}
    </div>
  );
}
