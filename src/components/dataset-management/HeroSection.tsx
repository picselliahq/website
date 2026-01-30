import Image from 'next/image';
import Link from 'next/link';

const customerLogos = [
  { name: 'SGS', src: '/images/customers/sgs.svg' },
  { name: 'RTE', src: '/images/customers/rte.svg' },
  { name: 'Pellenc', src: '/images/customers/pellenc.svg' },
  { name: 'Skillcorner', src: '/images/customers/skillcorner.svg' },
];

const heroStats = [
  { value: '100%', label: 'Reproducibility' },
  { value: '0', label: 'Data loss' },
  { value: '5x', label: 'Faster iterations' },
  { value: '∞', label: 'Version history' },
];

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--picsellia-blue)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[var(--picsellia-green)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="badge">
            <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="text-sm font-medium text-[var(--picsellia-blue)]">Dataset Management</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
          Your datasets deserve <span className="text-[var(--picsellia-blue)]">version control</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
          Git for your computer vision data. Track changes, compare versions, and ensure every experiment is reproducible.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="/trial" className="btn-primary px-6 py-3">
            Start Free Trial
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="https://documentation.picsellia.com/docs/datasets" className="btn-secondary px-6 py-3">
            Read Documentation
          </Link>
        </div>

        {/* Video Demo */}
        <div className="mb-16 relative">
          <div className="rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--secondary-system-background)]">
            <video autoPlay muted loop playsInline className="w-full h-auto" src="/videos/dataset-management.mov" />
          </div>

          {/* Floating version card */}
          <div className="absolute -bottom-6 -left-6 card px-4 py-3 shadow-xl hidden lg:block">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-blue)]/20 flex items-center justify-center">
                <span className="text-sm font-mono text-[var(--picsellia-blue)] font-bold">v3</span>
              </div>
              <div>
                <div className="text-xs text-[var(--tertiary-label)]">Current Version</div>
                <div className="text-sm font-medium text-[var(--label)]">+2,340 images</div>
              </div>
            </div>
          </div>

          {/* Floating stats card */}
          <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-xl hidden lg:block">
            <div className="text-xs text-[var(--tertiary-label)]">Datasets</div>
            <div className="text-2xl font-bold text-[var(--label)] font-mono">24</div>
            <div className="text-[10px] text-[var(--picsellia-green)]">All versioned</div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16 pb-16 border-b border-[var(--border)]">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-blue)] mb-1">{stat.value}</div>
              <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Logos */}
        <div className="text-center">
          <p className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-8">
            Used by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {customerLogos.map((logo) => (
              <div
                key={logo.name}
                className="relative h-8 w-24 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <Image src={logo.src} alt={logo.name} fill className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
