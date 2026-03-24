"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { track } from "@vercel/analytics";
import { captureEvent } from "@/lib/posthog";
import { useTranslations } from 'next-intl';

// Trial benefit keys for translation
const trialBenefitKeys = [
  { titleKey: 'benefits.daysTitle', descKey: 'benefits.daysDesc' },
  { titleKey: 'benefits.noCreditCardTitle', descKey: 'benefits.noCreditCardDesc' },
  { titleKey: 'benefits.imagesTitle', descKey: 'benefits.imagesDesc' },
  { titleKey: 'benefits.gpuTitle', descKey: 'benefits.gpuDesc' },
] as const;

// Included feature keys for translation
const includedFeatureKeys = [
  'included.datalake',
  'included.labeling',
  'included.experimentTracking',
  'included.modelTraining',
  'included.modelDeployment',
  'included.basicMonitoring',
] as const;

export default function TrialPage() {
  const t = useTranslations('trial');
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    acceptTerms: false,
  });

  const [submitError, setSubmitError] = useState(false);

  // Bot prevention: honeypot + timestamp
  const [honeypot, setHoneypot] = useState("");
  const formLoadedAt = useRef(Date.now());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);

    try {
      const response = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company,
          pageUri: window.location.href,
          website: honeypot,
          formLoadedAt: formLoadedAt.current,
        }),
      });

      if (response.ok) {
        track("trial_form_submitted", {
          company: formData.company || undefined,
        });
        captureEvent("trial_form_submitted", {
          company: formData.company || undefined,
        });
        const params = new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        });
        router.push(`/thank-you-trial?${params.toString()}`);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--picsellia-green)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[var(--system-indigo)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-5xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left column - Info */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <svg
                  className="w-4 h-4 text-[var(--picsellia-green)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <span className="text-sm font-medium text-[var(--picsellia-green)]">
                  {t('hero.badge')}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
                {t('hero.title')}
              </h1>

              <p className="text-lg text-[var(--secondary-label)] mb-10">
                {t('hero.subtitle')}
              </p>

              {/* Trial benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {trialBenefitKeys.map((benefit) => (
                  <div
                    key={benefit.titleKey}
                    className="p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]"
                  >
                    <div className="text-lg font-semibold text-[var(--picsellia-green)] mb-1">
                      {t(benefit.titleKey)}
                    </div>
                    <div className="text-xs text-[var(--tertiary-label)]">
                      {t(benefit.descKey)}
                    </div>
                  </div>
                ))}
              </div>

              {/* What's included */}
              <div className="pt-8 border-t border-[var(--border)]">
                <h3 className="text-sm font-semibold text-[var(--label)] mb-4">
                  {t('included.title')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {includedFeatureKeys.map((featureKey) => (
                    <div key={featureKey} className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4 text-[var(--picsellia-green)]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-[var(--secondary-label)]">
                        {t(featureKey)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <div className="card p-8">
                <h2 className="text-xl font-semibold text-[var(--label)] mb-6">
                  {t('form.title')}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-[var(--label)] mb-2"
                      >
                        {t('form.firstName')}{" "}
                        <span className="text-[var(--system-red)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                        placeholder={t('form.firstNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-[var(--label)] mb-2"
                      >
                        {t('form.lastName')}{" "}
                        <span className="text-[var(--system-red)]">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                        placeholder={t('form.lastNamePlaceholder')}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--label)] mb-2"
                    >
                      {t('form.workEmail')}{" "}
                      <span className="text-[var(--system-red)]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                      placeholder="john.doe@company.com"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-[var(--label)] mb-2"
                    >
                      {t('form.company')}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] text-sm focus:outline-none focus:border-[var(--picsellia-green)] focus:ring-1 focus:ring-[var(--picsellia-green)] transition-colors"
                      placeholder={t('form.companyPlaceholder')}
                    />
                  </div>

                  {/* Honeypot: hidden from humans, bots auto-fill it */}
                  <div aria-hidden="true" className="absolute opacity-0 h-0 overflow-hidden pointer-events-none" tabIndex={-1}>
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      autoComplete="off"
                      tabIndex={-1}
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="acceptTerms"
                      name="acceptTerms"
                      required
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 rounded border-[var(--border)] bg-[var(--tertiary-system-background)] text-[var(--picsellia-green)] focus:ring-[var(--picsellia-green)] focus:ring-offset-0"
                    />
                    <label
                      htmlFor="acceptTerms"
                      className="text-sm text-[var(--secondary-label)]"
                    >
                      {t('form.agreeToTerms')}{" "}
                      <Link
                        href="/privacy"
                        className="text-[var(--picsellia-green)] hover:underline"
                      >
                        {t('form.termsOfService')}
                      </Link>{" "}
                      {t('form.and')}{" "}
                      <Link
                        href="/privacy"
                        className="text-[var(--picsellia-green)] hover:underline"
                      >
                        {t('form.privacyPolicy')}
                      </Link>
                    </label>
                  </div>

                  {/* Error message */}
                  {submitError && (
                    <div className="p-3 rounded-lg bg-[var(--system-red)]/10 border border-[var(--system-red)]/20">
                      <p className="text-sm text-[var(--system-red)]">
                        {t('form.errorMessage')}{" "}
                        <a
                          href="mailto:contact@picsellia.com"
                          className="underline"
                        >
                          contact@picsellia.com
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t('form.submitting')}
                      </span>
                    ) : (
                      t('form.requestTrial')
                    )}
                  </button>

                  {/* Existing user link */}
                  <p className="text-sm text-[var(--tertiary-label)] text-center">
                    {t('form.alreadyUser')}{" "}
                    <a
                      href="https://app.picsellia.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--picsellia-green)] hover:underline"
                    >
                      {t('form.signIn')}
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-16 border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-[var(--tertiary-label)] mb-6">
            {t('socialProof.trustedBy')}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {["SGS", "PellencST", "Altaroad", "Abelio", "Ficha"].map(
              (company) => (
                <span
                  key={company}
                  className="text-lg font-medium text-[var(--secondary-label)]"
                >
                  {company}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
