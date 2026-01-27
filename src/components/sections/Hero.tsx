'use client';

import Image from 'next/image';
import Link from 'next/link';

const customerLogos = [
  { name: 'Airbus', src: '/images/customers/airbus.svg' },
  { name: 'Capgemini', src: '/images/customers/capgemini.svg' },
  { name: 'SGS', src: '/images/customers/sgs.svg' },
  { name: 'RTE', src: '/images/customers/rte.svg' },
  { name: 'PellencST', src: '/images/customers/pellenc.svg' },
  { name: 'Abelio', src: '/images/customers/abelio.png' },
  { name: 'Altaroad', src: '/images/customers/altaroad.png' },
  { name: 'Geredis', src: '/images/customers/geredis.png' },
  { name: 'Maneva', src: '/images/customers/maneva.png' },
  { name: 'Shinkei', src: '/images/customers/shinkei.png' },
  { name: 'SightCall', src: '/images/customers/sightcall.png' },
  { name: 'Valvan', src: '/images/customers/valvan.png' },
  { name: 'Ficha', src: '/images/customers/ficha.png' },
  { name: 'VOX', src: '/images/customers/vox.png' },
  { name: 'SupAirVision', src: '/images/customers/supairvision.png' },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-20 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="badge">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--picsellia-green)]"></span>
            ISO 27001 Certified
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
          Everything you need to ship <span className="text-[var(--picsellia-green)]">Vision AI</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
          Build, deploy, and monitor vision AI applications at scale.
          From data management to production monitoring, all in one platform.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/trial" className="btn-primary px-6 py-3">
            Start Free Trial
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/demo" className="btn-secondary px-6 py-3">
            Request Demo
          </Link>
        </div>

        {/* Video Demo */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--secondary-system-background)]">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              src="/videos/data layer view.mov"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-[var(--border)]">
          {[
            { value: '50M+', label: 'Images Processed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<100ms', label: 'Inference' },
            { value: '50+', label: 'Enterprise Customers' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-[var(--label)] mb-1">{stat.value}</div>
              <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="text-center">
          <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {customerLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-8 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
