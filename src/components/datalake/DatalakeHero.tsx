import Image from 'next/image';
import Link from 'next/link';

const cloudProviders = [
  { name: 'AWS S3', icon: '/images/community/partners/amazon-s3.svg' },
  { name: 'Google Cloud', icon: '/images/community/partners/google-cloud.svg' },
  { name: 'Azure', icon: '/images/community/partners/azure.svg' },
];

const sampleTags = ['training', 'production', 'validated', 'edge-case', 'Q1-2024', 'factory-A'];

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient mesh background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-30">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--picsellia-blue)]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--picsellia-green)]/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[var(--system-indigo)]/10 rounded-full blur-[80px]" />
    </div>

    {/* Floating data cards */}
    <div className="absolute top-32 right-[15%] px-3 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] shadow-xl animate-bounce hidden lg:block" style={{ animationDuration: '4s' }}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-[var(--picsellia-blue)]/20" />
        <div className="text-xs">
          <div className="text-[var(--label)] font-medium">IMG_0042.jpg</div>
          <div className="text-[var(--tertiary-label)]">4032 × 3024</div>
        </div>
      </div>
    </div>

    <div className="absolute top-56 left-[8%] px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 text-xs font-medium text-[var(--picsellia-green)] animate-bounce hidden lg:block" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
      production
    </div>

    <div className="absolute bottom-40 right-[12%] px-3 py-1.5 rounded-full bg-[var(--system-orange)]/10 border border-[var(--system-orange)]/20 text-xs font-medium text-[var(--system-orange)] animate-bounce hidden lg:block" style={{ animationDuration: '3s', animationDelay: '1s' }}>
      validated
    </div>

    {/* Grid pattern */}
    <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
      backgroundImage: `linear-gradient(var(--label) 1px, transparent 1px), linear-gradient(90deg, var(--label) 1px, transparent 1px)`,
      backgroundSize: '64px 64px',
    }} />
  </div>
);

export default function DatalakeHero() {
  return (
    <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
      <FloatingElements />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-blue)]/10 border border-[var(--picsellia-blue)]/20 mb-8">
            <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
            <span className="text-sm font-medium text-[var(--picsellia-blue)]">
              Data Management
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto">
            All Your Images. <span className="text-[var(--picsellia-blue)]">One Place.</span>
          </h1>

          <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
            Aggregate, organize, and explore billions of images from any source.
            One unified repository for all your computer vision data.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/demo" className="btn-primary px-8 py-4 text-base">
              See It In Action
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
            <Link href="https://documentation.picsellia.com/docs/datalake-3" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 text-base">
              Documentation
            </Link>
          </div>

          {/* Cloud providers */}
          <div className="flex items-center justify-center gap-3">
            <span className="text-sm text-[var(--tertiary-label)]">Connect:</span>
            <div className="flex items-center gap-4">
              {cloudProviders.map((provider) => (
                <div
                  key={provider.name}
                  className="w-10 h-10 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--picsellia-blue)]/50 transition-colors"
                  title={provider.name}
                >
                  <Image src={provider.icon} alt={provider.name} width={24} height={24} />
                </div>
              ))}
              <div className="w-10 h-10 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] border-dashed flex items-center justify-center text-[var(--tertiary-label)] text-xs">
                +
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Video Demo */}
        <div className="relative">
          <div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              src="/videos/datalake.mov"
            />
          </div>

          {/* Floating tag panel */}
          <div className="absolute -bottom-6 left-6 card p-4 shadow-xl max-w-[200px] hidden lg:block">
            <div className="text-xs text-[var(--tertiary-label)] mb-2">DataTags</div>
            <div className="flex flex-wrap gap-1.5">
              {sampleTags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-[10px] font-medium bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)] border border-[var(--picsellia-green)]/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Floating stats */}
          <div className="absolute -top-4 right-6 card px-4 py-3 shadow-xl hidden lg:block">
            <div className="text-xs text-[var(--tertiary-label)]">Storage</div>
            <div className="text-xl font-bold text-[var(--label)] font-mono">2.4 TB</div>
            <div className="text-[10px] text-[var(--picsellia-blue)]">AWS S3 connected</div>
          </div>
        </div>
      </div>
    </section>
  );
}
