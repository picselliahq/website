'use client';

import Link from 'next/link';

export default function DeploymentCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-indigo)]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-indigo)]/20">
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="w-full h-full" style={{
              backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
              backgroundSize: '32px 32px',
            }} />
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6">
              Ready to deploy your models?
            </h2>
            <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
              Go from trained model to production endpoint in minutes.
              Serverless, scalable, and fully managed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/trial" className="btn-primary px-10 py-4 text-base">
                Start Free Trial
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/demo" className="btn-secondary px-10 py-4 text-base">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
