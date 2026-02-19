'use client';

import { useEffect, useRef, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

interface ThankYouDemoContentProps {
  meetingsUrl: string;
}

export default function ThankYouDemoContent({ meetingsUrl }: ThankYouDemoContentProps) {
  const scriptLoaded = useRef(false);
  const searchParams = useSearchParams();

  const embeddedUrl = useMemo(() => {
    if (!meetingsUrl) return '';
    const params = new URLSearchParams();
    params.set('embed', 'true');
    const firstName = searchParams.get('firstName');
    const lastName = searchParams.get('lastName');
    const email = searchParams.get('email');
    if (firstName) params.set('firstName', firstName);
    if (lastName) params.set('lastName', lastName);
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
            <span className="text-sm font-medium text-[var(--picsellia-green)]">Request received</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
            Pick a time for your demo
          </h1>
          <p className="text-lg text-[var(--secondary-label)] max-w-xl mx-auto">
            Choose a slot that works for you and we&apos;ll walk you through the platform.
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
          <div className="card p-8 mb-12 text-center">
            <div className="w-12 h-12 rounded-full bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-[var(--label)] mb-2">We&apos;ll be in touch shortly</h2>
            <p className="text-[var(--secondary-label)] mb-6">
              Our team will reach out within 24 hours to schedule your personalized demo.
            </p>
            <Link href="/" className="btn-secondary inline-flex">
              Back to Home
            </Link>
          </div>
        )}

        {/* What to expect */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold text-[var(--label)] mb-4 text-center">What to expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: '30-45 minutes',
                description: 'Tailored to your use case and technical questions',
              },
              {
                title: 'Live walkthrough',
                description: 'See the full platform from data to deployment',
              },
              {
                title: 'Next steps',
                description: 'Get a custom plan and trial setup for your team',
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
