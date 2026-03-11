"use client";

import Link from "next/link";

export default function DatalakeCTAV2() {
  return (
    <section className="py-28 border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="border border-[var(--border)] rounded-xl overflow-hidden">
          {/* Content */}
          <div className="relative py-20 px-8 md:px-16 text-center">
            {/* Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[var(--picsellia-blue)]/5 border border-[var(--picsellia-blue)]/15 mb-8">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-blue)] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--picsellia-blue)]" />
              </span>
              <span className="text-[10px] font-mono text-[var(--picsellia-blue)] uppercase tracking-wider">
                Ready to connect
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-semibold mb-5 tracking-tight">
              Centralize your
              <br />
              visual data
            </h2>

            <p className="text-[var(--secondary-label)] max-w-md mx-auto mb-10 text-lg leading-relaxed">
              Connect your storage, upload your data, and start querying.
              Free trial, no credit card.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link
                href="/trial"
                className="btn-primary px-10 py-3.5 text-[15px] group"
              >
                Start Free Trial
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/demo"
                className="btn-secondary px-10 py-3.5 text-[15px]"
              >
                Request Demo
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-[var(--tertiary-label)] font-mono">
              {["No credit card", "14-day trial", "S3 / GCS / Azure"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <svg
                      className="w-3 h-3 text-[var(--picsellia-blue)]"
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
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="border-t border-[var(--border)]">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
              {[
                { value: "2.4M+", label: "Assets" },
                { value: "<12ms", label: "Query" },
                { value: "8", label: "Formats" },
                { value: "3", label: "Cloud providers" },
              ].map((stat) => (
                <div key={stat.label} className="p-5 text-center">
                  <div className="text-lg font-bold text-[var(--label)] font-mono tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[var(--tertiary-label)] font-mono uppercase tracking-wider mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
