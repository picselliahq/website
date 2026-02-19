import Link from 'next/link';
import { annotationTypes } from './data';

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--picsellia-blue)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--picsellia-green)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-blue)]/10 border border-[var(--picsellia-blue)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-blue)]">Annotation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Precision Labeling<br />
              <span className="text-[var(--picsellia-blue)]">AI-Assisted</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
              Turn your data into annotated datasets with precision and speed.
              Support for bounding boxes, polygons, segmentation, keypoints, and more.
            </p>

            {/* Annotation types mini preview */}
            <div className="flex items-center gap-3 mb-10">
              {annotationTypes.slice(0, 4).map((type) => (
                <div
                  key={type.name}
                  className="w-10 h-10 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center transition-colors hover:border-[var(--picsellia-blue)]/50"
                  style={{ color: type.color }}
                  title={type.name}
                >
                  {type.icon}
                </div>
              ))}
              <div className="text-xs text-[var(--tertiary-label)]">+{annotationTypes.length - 4} more</div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                See It In Action
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link href="https://documentation.picsellia.com/docs/dataset-annotation-tool" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 text-base">
                Documentation
              </Link>
            </div>
          </div>

          {/* Right - Video Demo */}
          <div className="relative hidden lg:block">
            <div className="rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                src="/videos/labeling tool animation.webm"
              />
            </div>

            {/* Floating AI assist badge */}
            <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-xl">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--system-indigo)] to-[var(--system-pink)] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--label)]">SAM + DINOv2</div>
                  <div className="text-[10px] text-[var(--tertiary-label)]">AI-assisted labeling</div>
                </div>
              </div>
            </div>

            {/* Floating shortcut hint */}
            <div className="absolute -bottom-4 -left-4 card px-3 py-2 shadow-xl">
              <div className="flex items-center gap-3 text-xs">
                <kbd className="px-1.5 py-0.5 rounded bg-[var(--tertiary-system-background)] text-[var(--secondary-label)] font-mono text-[10px]">D</kbd>
                <span className="text-[var(--tertiary-label)]">Draw mode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
