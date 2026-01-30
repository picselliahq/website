'use client';

import Link from 'next/link';

export default function DeploymentHero() {
  return (
    <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[var(--system-indigo)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-blue)]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-indigo)]/10 border border-[var(--system-indigo)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-sm font-medium text-[var(--system-indigo)]">Deployment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Deploy Models<br />
              <span className="text-[var(--system-indigo)]">To Production</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
              Ship computer vision models to serverless infrastructure.
              Auto-scaling, zero cold starts, and full observability out of the box.
            </p>

            {/* Key metrics */}
            <div className="flex items-center gap-6 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--label)] font-mono">99.9%</div>
                <div className="text-xs text-[var(--tertiary-label)]">Uptime SLA</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--system-indigo)] font-mono">&lt;100ms</div>
                <div className="text-xs text-[var(--tertiary-label)]">Latency P95</div>
              </div>
              <div className="w-px h-10 bg-[var(--border)]" />
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--picsellia-green)] font-mono">0→∞</div>
                <div className="text-xs text-[var(--tertiary-label)]">Auto-scaling</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                Deploy Your First Model
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="https://documentation.picsellia.com/reference/deployment" className="btn-secondary px-8 py-4 text-base">
                Documentation
              </Link>
            </div>
          </div>

          {/* Right - Deployment visualization */}
          <div className="relative hidden lg:block">
            <div className="card p-6 space-y-4">
              {/* Deployment status header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                  <span className="text-xs text-[var(--picsellia-green)]">Live</span>
                </div>
                <span className="text-xs text-[var(--tertiary-label)]">us-east-1</span>
              </div>

              {/* Model info */}
              <div className="p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[var(--label)]">defect-detection-v3</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Serving</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[var(--tertiary-label)]">
                  <span>YOLOv8</span>
                  <span>ONNX Runtime</span>
                  <span>GPU T4</span>
                </div>
              </div>

              {/* Live metrics */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 rounded-lg bg-[var(--black)] text-center">
                  <div className="text-lg font-bold font-mono text-[var(--label)]">2.4k</div>
                  <div className="text-[10px] text-[var(--tertiary-label)]">req/min</div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--black)] text-center">
                  <div className="text-lg font-bold font-mono text-[var(--system-indigo)]">47ms</div>
                  <div className="text-[10px] text-[var(--tertiary-label)]">latency</div>
                </div>
                <div className="p-3 rounded-lg bg-[var(--black)] text-center">
                  <div className="text-lg font-bold font-mono text-[var(--picsellia-green)]">3</div>
                  <div className="text-[10px] text-[var(--tertiary-label)]">replicas</div>
                </div>
              </div>

              {/* Throughput bars */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--tertiary-label)]">Throughput</span>
                  <span className="text-[var(--label)] font-mono">Last 60s</span>
                </div>
                <div className="flex items-end gap-1 h-16">
                  {[35, 42, 38, 55, 48, 62, 58, 72, 65, 78, 85, 70, 88, 92, 80, 95, 88, 75, 82, 90].map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all"
                      style={{
                        height: `${v}%`,
                        backgroundColor: 'var(--system-indigo)',
                        opacity: 0.4 + (i / 20) * 0.6,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating uptime card */}
            <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-medium text-[var(--picsellia-green)]">99.97% Uptime</div>
                  <div className="text-[10px] text-[var(--tertiary-label)]">Last 30 days</div>
                </div>
              </div>
            </div>

            {/* Floating scaling card */}
            <div className="absolute -top-4 -right-4 card px-3 py-2 shadow-xl">
              <div className="flex items-center gap-2 text-xs">
                <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span className="text-[var(--tertiary-label)]">Scaling:</span>
                <span className="text-[var(--system-indigo)] font-mono">3 → 5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
