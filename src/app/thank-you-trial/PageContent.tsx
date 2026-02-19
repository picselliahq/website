'use client';

import { useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface ThankYouTrialContentProps {
  meetingsUrl: string;
}

export default function ThankYouTrialContent({ meetingsUrl }: ThankYouTrialContentProps) {
  const scriptLoaded = useRef(false);
  const searchParams = useSearchParams();

  const firstName = searchParams.get('firstName') || '';

  const embeddedUrl = useMemo(() => {
    if (!meetingsUrl) return '';
    const params = new URLSearchParams();
    params.set('embed', 'true');
    const fn = searchParams.get('firstName');
    const ln = searchParams.get('lastName');
    const email = searchParams.get('email');
    if (fn) params.set('firstName', fn);
    if (ln) params.set('lastName', ln);
    if (email) params.set('email', email);
    return `${meetingsUrl}?${params.toString()}`;
  }, [meetingsUrl, searchParams]);

  useEffect(() => {
    if (!meetingsUrl || scriptLoaded.current) return;

    const script = document.createElement('script');
    script.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';
    script.async = true;
    document.body.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      document.body.removeChild(script);
    };
  }, [meetingsUrl]);

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--picsellia-green)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Success header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
            <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-[var(--picsellia-green)]">Trial activated</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            {firstName ? `Welcome ${firstName}!` : 'Your trial is ready!'}
          </h1>
          <p className="text-lg text-[var(--secondary-label)] max-w-xl mx-auto">
            Check your email for login instructions. Want a quick onboarding call? Pick a time below.
          </p>
        </div>

        {/* HubSpot Meetings embed */}
        {meetingsUrl ? (
          <div className="mb-12 -mx-6 sm:mx-0">
            <div
              className="meetings-iframe-container"
              data-src={embeddedUrl}
              style={{
                transform: 'scale(0.75)',
                transformOrigin: 'top center',
                width: '133.3%',
                marginLeft: '-16.65%',
                height: 1100,
                marginBottom: -275,
              }}
            />
          </div>
        ) : (
          <div className="card p-8 mb-12 text-center max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-full bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[var(--label)] mb-2">You&apos;re all set</h2>
            <p className="text-[var(--secondary-label)] mb-6">
              Check your email for login credentials and start exploring the platform.
            </p>
            <Link href="https://app.picsellia.com" target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex">
              Go to Picsellia
            </Link>
          </div>
        )}

        {/* Getting started steps */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold text-[var(--label)] mb-4 text-center">Getting started</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: '1. Check your email',
                description: 'Login credentials are on their way',
              },
              {
                title: '2. Upload your data',
                description: 'Try the Datalake with up to 10K images',
              },
              {
                title: '3. Train a model',
                description: 'Use your 100 GPU hours to experiment',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-4">
                <div className="text-sm font-semibold text-[var(--picsellia-green)] mb-1">{item.title}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
