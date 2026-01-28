'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const cloudProviders = [
  { name: 'AWS S3', icon: '/images/community/partners/amazon-s3.svg' },
  { name: 'Google Cloud', icon: '/images/community/partners/google-cloud.svg' },
  { name: 'Azure', icon: '/images/community/partners/azure.svg' },
];

const sampleTags = ['training', 'production', 'validated', 'edge-case', 'Q1-2024', 'factory-A'];


// Floating decorative elements
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Gradient mesh background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-30">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[var(--system-blue)]/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--picsellia-green)]/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-[var(--system-indigo)]/10 rounded-full blur-[80px]" />
    </div>

    {/* Floating data cards */}
    <div className="absolute top-32 right-[15%] px-3 py-2 rounded-lg bg-[var(--card)] border border-[var(--border)] shadow-xl animate-bounce hidden lg:block" style={{ animationDuration: '4s' }}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-[var(--system-blue)]/20" />
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

// UMAP scatter plot visualization
const UMAPVisualization = () => {
  const [points] = useState(() => {
    const clusters = [
      { cx: 25, cy: 30, color: 'var(--picsellia-green)', count: 15 },
      { cx: 70, cy: 25, color: 'var(--system-blue)', count: 12 },
      { cx: 45, cy: 65, color: 'var(--system-orange)', count: 18 },
      { cx: 80, cy: 70, color: 'var(--system-indigo)', count: 10 },
    ];

    const allPoints: { x: number; y: number; color: string; size: number }[] = [];
    clusters.forEach(cluster => {
      for (let i = 0; i < cluster.count; i++) {
        allPoints.push({
          x: cluster.cx + (Math.random() - 0.5) * 20,
          y: cluster.cy + (Math.random() - 0.5) * 20,
          color: cluster.color,
          size: 3 + Math.random() * 3,
        });
      }
    });
    return allPoints;
  });

  return (
    <div className="relative w-full h-full bg-[var(--black)] rounded-lg overflow-hidden">
      {/* Axis labels */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-[var(--tertiary-label)]">UMAP-1</div>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-[var(--tertiary-label)]">UMAP-2</div>

      {/* Points */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {points.map((point, i) => (
          <circle
            key={i}
            cx={point.x}
            cy={point.y}
            r={point.size}
            fill={point.color}
            opacity={0.7}
            className="transition-all duration-300 hover:opacity-100"
            style={{ filter: 'blur(0.5px)' }}
          />
        ))}
        {/* Selection area */}
        <rect
          x={35}
          y={55}
          width={25}
          height={22}
          fill="var(--picsellia-green)"
          fillOpacity={0.1}
          stroke="var(--picsellia-green)"
          strokeWidth={0.5}
          strokeDasharray="2,2"
          rx={2}
        />
      </svg>

      {/* Legend */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 text-[9px] text-[var(--secondary-label)]">
          <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
          Cluster A
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-[var(--secondary-label)]">
          <div className="w-2 h-2 rounded-full bg-[var(--system-blue)]" />
          Cluster B
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-[var(--secondary-label)]">
          <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
          Cluster C
        </div>
      </div>
    </div>
  );
};

export default function DatalakePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <FloatingElements />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              <span className="text-sm font-medium text-[var(--system-blue)]">
                Data Management
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto">
              Your Visual Data <span className="text-[var(--system-blue)]">Command Center</span>
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
              <Link href="https://documentation.picsellia.com/docs/datalake-3" className="btn-secondary px-8 py-4 text-base">
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
                    className="w-10 h-10 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--system-blue)]/50 transition-colors"
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
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl">
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
              <div className="text-[10px] text-[var(--system-blue)]">AWS S3 connected</div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities - Technical Deep Dive */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Architecture
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Built for scale and flexibility
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              A unified data layer that connects to any storage, handles any format,
              and scales to billions of assets.
            </p>
          </div>

          {/* Data Flow Architecture */}
          <div className="mb-20">
            <div className="card p-8 relative overflow-hidden">
              {/* Animated connection lines background */}
              <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--system-blue)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--system-blue)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--system-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="20%" y1="70%" x2="40%" y2="50%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="60%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGradient)" strokeWidth="1" />
                <line x1="60%" y1="50%" x2="80%" y2="70%" stroke="url(#lineGradient)" strokeWidth="1" />
              </svg>

              <div className="relative grid md:grid-cols-5 gap-4 items-center">
                {/* Sources */}
                <div className="space-y-3">
                  <div className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-4">Sources</div>
                  {[
                    { name: 'AWS S3', icon: '/images/community/partners/amazon-s3.svg', status: 'connected' },
                    { name: 'GCP', icon: '/images/community/partners/google-cloud.svg', status: 'connected' },
                    { name: 'Azure', icon: '/images/community/partners/azure.svg', status: 'idle' },
                  ].map((source) => (
                    <div key={source.name} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--black)] border border-[var(--border)]">
                      <Image src={source.icon} alt={source.name} width={20} height={20} />
                      <span className="text-xs text-[var(--label)] flex-1">{source.name}</span>
                      <div className={`w-2 h-2 rounded-full ${source.status === 'connected' ? 'bg-[var(--picsellia-green)]' : 'bg-[var(--system-gray)]'}`} />
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="flex items-center gap-2 text-[var(--system-blue)]">
                    <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--system-blue)]" />
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>

                {/* Datalake Core */}
                <div className="md:col-span-1">
                  <div className="p-6 rounded-xl bg-gradient-to-br from-[var(--system-blue)]/20 to-[var(--system-blue)]/5 border border-[var(--system-blue)]/30 relative">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[var(--system-blue)] text-[10px] font-medium text-white">
                      DATALAKE
                    </div>
                    <div className="text-center pt-4">
                      <div className="text-3xl font-bold text-[var(--label)] font-mono">2.4M</div>
                      <div className="text-xs text-[var(--tertiary-label)]">assets indexed</div>
                      <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
                        <div className="p-2 rounded bg-[var(--black)]/50">
                          <div className="text-[var(--system-blue)] font-mono">847GB</div>
                          <div className="text-[var(--tertiary-label)]">storage</div>
                        </div>
                        <div className="p-2 rounded bg-[var(--black)]/50">
                          <div className="text-[var(--picsellia-green)] font-mono">12ms</div>
                          <div className="text-[var(--tertiary-label)]">latency</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="flex items-center gap-2 text-[var(--system-blue)]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="h-px w-8 bg-gradient-to-r from-[var(--system-blue)] to-transparent" />
                  </div>
                </div>

                {/* Outputs */}
                <div className="space-y-3">
                  <div className="text-xs text-[var(--tertiary-label)] uppercase tracking-wider mb-4">Outputs</div>
                  {[
                    { name: 'Datasets', count: '24', color: 'var(--picsellia-green)' },
                    { name: 'Experiments', count: '156', color: 'var(--system-orange)' },
                    { name: 'Deployments', count: '8', color: 'var(--system-indigo)' },
                  ].map((output) => (
                    <div key={output.name} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--black)] border border-[var(--border)]">
                      <div className="w-5 h-5 rounded flex items-center justify-center" style={{ backgroundColor: `color-mix(in srgb, ${output.color} 20%, transparent)` }}>
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: output.color }} />
                      </div>
                      <span className="text-xs text-[var(--label)] flex-1">{output.name}</span>
                      <span className="text-xs font-mono text-[var(--secondary-label)]">{output.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Features Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* SDK Integration */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                </div>
                <span className="text-xs text-[var(--tertiary-label)]">upload.py</span>
              </div>
              <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
                <code>
                  <span className="text-[var(--system-indigo)]">from</span> <span className="text-[var(--label)]">picsellia</span> <span className="text-[var(--system-indigo)]">import</span> <span className="text-[var(--label)]">Client</span>{'\n\n'}
                  <span className="text-[var(--label)]">client</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">Client()</span>{'\n'}
                  <span className="text-[var(--label)]">datalake</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_datalake()</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Upload with metadata</span>{'\n'}
                  <span className="text-[var(--label)]">datalake.upload(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">paths</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;./images/*.jpg&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;production&quot;</span><span className="text-[var(--label)]">,</span> <span className="text-[var(--picsellia-green)]">&quot;batch-42&quot;</span><span className="text-[var(--label)]">],</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">metadata</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">{'{'}</span><span className="text-[var(--picsellia-green)]">&quot;source&quot;</span><span className="text-[var(--label)]">:</span> <span className="text-[var(--picsellia-green)]">&quot;factory-A&quot;</span><span className="text-[var(--label)]">{'}'}</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Query with filters</span>{'\n'}
                  <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;production&quot;</span><span className="text-[var(--label)]">]</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>
                </code>
              </pre>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] text-[var(--tertiary-label)]">Python SDK v6.9.0</span>
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] text-[var(--picsellia-green)]">Auto EXIF extraction</span>
                    <span className="text-[10px] text-[var(--system-blue)]">Batch upload</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Query Terminal */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                </div>
                <span className="text-xs text-[var(--tertiary-label)]">query.py</span>
              </div>
              <pre className="p-5 bg-[var(--black)] font-mono text-xs overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-[var(--tertiary-label)]"># Query with tags</span>{'\n'}
                  <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;defects&quot;</span><span className="text-[var(--label)]">]</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>{'\n'}
                  <span className="text-[var(--picsellia-green)]"># ✓ 2,847 results</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Query with metadata filter</span>{'\n'}
                  <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">metadata</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">{'{'}</span><span className="text-[var(--picsellia-green)]">&quot;location&quot;</span><span className="text-[var(--label)]">:</span> <span className="text-[var(--picsellia-green)]">&quot;factory-A&quot;</span><span className="text-[var(--label)]">{'}'}</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>{'\n'}
                  <span className="text-[var(--picsellia-green)]"># ✓ 1,245 results</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Combine tags and dimensions</span>{'\n'}
                  <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;production&quot;</span><span className="text-[var(--label)]">,</span> <span className="text-[var(--picsellia-green)]">&quot;validated&quot;</span><span className="text-[var(--label)]">],</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">limit</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--system-orange)]">1000</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>
                </code>
              </pre>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[var(--tertiary-label)]">Python SDK</span>
                  <div className="flex gap-3">
                    <span className="px-2 py-0.5 rounded bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">tags</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--system-orange)]/10 text-[var(--system-orange)]">metadata</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">filters</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Format Support */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Universal Format Support</h3>
                  <p className="text-sm text-[var(--tertiary-label)]">Ingest any visual data type at constant speed</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold font-mono text-[var(--system-orange)]">100+</div>
                  <div className="text-[10px] text-[var(--tertiary-label)]">formats</div>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { ext: 'JPG', type: 'image', color: 'var(--system-blue)' },
                  { ext: 'PNG', type: 'image', color: 'var(--system-blue)' },
                  { ext: 'TIFF', type: 'image', color: 'var(--system-blue)' },
                  { ext: 'WebP', type: 'image', color: 'var(--system-blue)' },
                  { ext: 'MP4', type: 'video', color: 'var(--system-orange)' },
                  { ext: 'MOV', type: 'video', color: 'var(--system-orange)' },
                  { ext: 'DICOM', type: 'medical', color: 'var(--system-pink)' },
                  { ext: 'NIfTI', type: 'medical', color: 'var(--system-pink)' },
                  { ext: 'GeoTIFF', type: 'geo', color: 'var(--picsellia-green)' },
                  { ext: 'COG', type: 'geo', color: 'var(--picsellia-green)' },
                  { ext: 'PCD', type: '3D', color: 'var(--system-indigo)' },
                  { ext: 'PLY', type: '3D', color: 'var(--system-indigo)' },
                ].map((format) => (
                  <div
                    key={format.ext}
                    className="p-3 rounded-lg bg-[var(--black)] border border-[var(--border)] text-center group hover:border-[var(--system-blue)]/50 transition-colors"
                  >
                    <div className="text-sm font-mono font-bold text-[var(--label)]">.{format.ext.toLowerCase()}</div>
                    <div className="text-[9px] mt-1" style={{ color: format.color }}>{format.type}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Real-time Processing</h3>
                  <p className="text-sm text-[var(--tertiary-label)]">Live ingestion and indexing metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                  <span className="text-xs text-[var(--picsellia-green)]">Live</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { label: 'Ingestion Rate', value: '2,847', unit: 'img/min', percent: 85, color: 'var(--system-blue)' },
                  { label: 'Index Speed', value: '12', unit: 'ms/img', percent: 95, color: 'var(--picsellia-green)' },
                  { label: 'Embedding Gen', value: '156', unit: 'vec/sec', percent: 72, color: 'var(--system-indigo)' },
                  { label: 'Storage Sync', value: '99.9', unit: '%', percent: 99, color: 'var(--system-orange)' },
                ].map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-[var(--secondary-label)]">{metric.label}</span>
                      <span className="text-sm font-mono text-[var(--label)]">
                        {metric.value} <span className="text-[var(--tertiary-label)] text-xs">{metric.unit}</span>
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--black)] overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{ width: `${metric.percent}%`, backgroundColor: metric.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Query Language Section - Technical Deep Dive */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(var(--system-indigo) 1px, transparent 1px), linear-gradient(90deg, var(--system-indigo) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Python SDK
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Powerful Data Querying
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Query your datalake programmatically with the Python SDK.
              Filter by tags, metadata, and more with full type hints and auto-completion.
            </p>
          </div>

          {/* Query Parameters Reference */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* list_data params */}
            <div className="card p-0 overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-indigo)]">list_data() PARAMS</span>
              </div>
              <div className="p-4 bg-[var(--black)] font-mono text-xs space-y-2">
                <div className="flex justify-between"><span className="text-[var(--label)]">tags</span><span className="text-[var(--tertiary-label)]">List[str]</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">metadata</span><span className="text-[var(--tertiary-label)]">Dict[str, Any]</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">limit</span><span className="text-[var(--tertiary-label)]">int</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">offset</span><span className="text-[var(--tertiary-label)]">int</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">order_by</span><span className="text-[var(--tertiary-label)]">str</span></div>
              </div>
            </div>

            {/* Tag Operations */}
            <div className="card p-0 overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-orange)]">TAG OPERATIONS</span>
              </div>
              <div className="p-4 bg-[var(--black)] font-mono text-xs space-y-2">
                <div className="flex justify-between"><span className="text-[var(--label)]">add_tags()</span><span className="text-[var(--tertiary-label)]">add to data</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">remove_tags()</span><span className="text-[var(--tertiary-label)]">remove from data</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">list_tags()</span><span className="text-[var(--tertiary-label)]">get all tags</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">create_tag()</span><span className="text-[var(--tertiary-label)]">create new tag</span></div>
              </div>
            </div>

            {/* Filterable Properties */}
            <div className="card p-0 overflow-hidden">
              <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--picsellia-green)]">FILTERABLE</span>
              </div>
              <div className="p-4 bg-[var(--black)] font-mono text-xs space-y-2">
                <div className="flex justify-between"><span className="text-[var(--label)]">tags</span><span className="text-[var(--tertiary-label)]">DataTags</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">metadata</span><span className="text-[var(--tertiary-label)]">custom fields</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">filename</span><span className="text-[var(--tertiary-label)]">asset name</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">created_at</span><span className="text-[var(--tertiary-label)]">timestamps</span></div>
                <div className="flex justify-between"><span className="text-[var(--label)]">type</span><span className="text-[var(--tertiary-label)]">image/video</span></div>
              </div>
            </div>
          </div>

          {/* Interactive Query Builder */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                <span className="text-xs text-[var(--tertiary-label)]">advanced_query.py</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">auto-complete</span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-blue)]/10 text-[var(--system-blue)]">type hints</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--border)]">
              {/* Query Input */}
              <div className="p-6 bg-[var(--black)]">
                <pre className="font-mono text-sm leading-relaxed">
                  <code>
                    <span className="text-[var(--tertiary-label)]"># Advanced data query</span>{'\n'}
                    <span className="text-[var(--label)]">data</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">datalake.list_data(</span>{'\n'}
                    {'  '}<span className="text-[var(--tertiary-label)]"># Filter by tags</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span>{'\n'}
                    {'    '}<span className="text-[var(--picsellia-green)]">&quot;production&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                    {'    '}<span className="text-[var(--picsellia-green)]">&quot;validated&quot;</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">],</span>{'\n'}
                    {'  '}<span className="text-[var(--tertiary-label)]"># Filter by metadata</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">metadata</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">{'{'}</span>{'\n'}
                    {'    '}<span className="text-[var(--picsellia-green)]">&quot;location&quot;</span><span className="text-[var(--label)]">:</span> <span className="text-[var(--picsellia-green)]">&quot;factory-A&quot;</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">{'}'},</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">limit</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--system-orange)]">1000</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>{'\n\n'}
                    <span className="text-[var(--system-indigo)]">for</span> <span className="text-[var(--label)]">item</span> <span className="text-[var(--system-indigo)]">in</span> <span className="text-[var(--label)]">data:</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">print(item.filename)</span>
                  </code>
                </pre>
              </div>
              {/* Results */}
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="mb-4">
                  <div className="text-xs text-[var(--tertiary-label)] mb-2">EXECUTION</div>
                  <div className="flex items-center gap-6 text-sm">
                    <div>
                      <span className="text-[var(--picsellia-green)] font-mono font-bold">2,847</span>
                      <span className="text-[var(--tertiary-label)] ml-1">results</span>
                    </div>
                    <div>
                      <span className="text-[var(--system-blue)] font-mono font-bold">23ms</span>
                      <span className="text-[var(--tertiary-label)] ml-1">query time</span>
                    </div>
                    <div>
                      <span className="text-[var(--system-orange)] font-mono font-bold">847MB</span>
                      <span className="text-[var(--tertiary-label)] ml-1">scanned</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-xs text-[var(--tertiary-label)]">MATCHED TAGS</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">production (1,892)</span>
                    <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">validated (2,103)</span>
                    <span className="px-2 py-1 rounded text-xs bg-[var(--system-blue)]/10 text-[var(--system-blue)]">factory-A (1,245)</span>
                    <span className="px-2 py-1 rounded text-xs bg-[var(--system-blue)]/10 text-[var(--system-blue)]">factory-B (892)</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--tertiary-label)]">Ready to create dataset</span>
                    <button className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[var(--system-indigo)] text-white">
                      Create Dataset →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Search / Embeddings Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Visual Search
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              AI-Powered Data Exploration
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Leverage OpenCLIP embeddings and vector search to discover patterns,
              find similar images, and identify outliers at scale.
            </p>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { value: 'ViT-B/16', label: 'Default Model' },
              { value: '512-dim', label: 'Vector Size' },
              { value: 'QDrant', label: 'Vector DB' },
              { value: '<10ms', label: 'Search Latency' },
            ].map((spec) => (
              <div key={spec.label} className="p-4 border border-[var(--border)] rounded-xl text-center">
                <div className="text-xl font-bold font-mono text-[var(--label)]">{spec.value}</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">{spec.label}</div>
              </div>
            ))}
          </div>

          {/* Main content */}
          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {/* Embeddings Viewer Video */}
            <div className="border border-[var(--border)] rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)]">
                <span className="text-sm font-medium text-[var(--label)]">Embeddings Viewer</span>
                <div className="flex items-center gap-2 text-xs text-[var(--tertiary-label)]">
                  <span>UMAP</span>
                  <span>•</span>
                  <span>DBSCAN</span>
                </div>
              </div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                src="/videos/embeddings viewer.webm"
              />
            </div>

            {/* Search Methods */}
            <div className="space-y-4">
              {/* Similarity Search */}
              <div className="p-5 border border-[var(--border)] rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-[var(--label)]">Similarity Search</h3>
                  <span className="text-xs text-[var(--system-indigo)]">Image → Images</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-lg border border-[var(--border)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-[var(--label)] font-mono">IMG_4521.jpg</div>
                    <div className="text-xs text-[var(--tertiary-label)] mt-0.5">cosine similarity &gt; 0.85</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">847</div>
                    <div className="text-xs text-[var(--tertiary-label)]">matches</div>
                  </div>
                </div>
              </div>

              {/* Text-to-Image */}
              <div className="p-5 border border-[var(--border)] rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-[var(--label)]">Text-to-Image Search</h3>
                  <span className="text-xs text-[var(--system-indigo)]">Text → Images</span>
                </div>
                <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-[var(--border)] mb-3">
                  <svg className="w-4 h-4 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">&quot;damaged surface with rust&quot;</span>
                </div>
                <div className="flex items-center justify-between text-xs text-[var(--tertiary-label)]">
                  <span>CLIP text encoder</span>
                  <span className="font-mono text-[var(--system-indigo)]">156 results • 8ms</span>
                </div>
              </div>

              {/* Anomaly Detection */}
              <div className="p-5 border border-[var(--border)] rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-[var(--label)]">Anomaly Detection</h3>
                  <span className="text-xs text-[var(--system-indigo)]">Isolation Forest</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-[var(--tertiary-label)]">contamination: 0.01</div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-xl font-bold font-mono text-[var(--label)]">23</div>
                      <div className="text-xs text-[var(--tertiary-label)]">corrupted</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold font-mono text-[var(--label)]">89</div>
                      <div className="text-xs text-[var(--tertiary-label)]">outliers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Custom CLIP Fine-tuning */}
          <div className="p-6 border border-[var(--system-indigo)]/30 rounded-xl bg-[var(--system-indigo)]/5">
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-[var(--label)]">Fine-tune Your Own CLIP Model</h3>
                </div>
                <p className="text-sm text-[var(--secondary-label)]">
                  Generic embeddings not cutting it? Fine-tune a custom CLIP model on your domain-specific data
                  for dramatically better similarity search and clustering results tailored to your use case.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center px-4">
                  <div className="text-2xl font-bold font-mono text-[var(--system-indigo)]">+40%</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Better accuracy</div>
                </div>
                <Link href="/demo" className="btn-secondary whitespace-nowrap">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagging & Metadata Section - Combined Technical Deep Dive */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--picsellia-green) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Organization
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              DataTags & Metadata Schema
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Multi-dimensional organization with flexible tagging and comprehensive metadata support.
              Structure your data without moving files.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* DataTags System */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--picsellia-green)]">DATATAGS SYSTEM</span>
                <span className="text-xs text-[var(--tertiary-label)]">organization ≠ annotation</span>
              </div>
              <div className="p-6">
                {/* Tag hierarchy visualization */}
                <div className="mb-6">
                  <div className="text-xs text-[var(--tertiary-label)] mb-3">TAG HIERARCHY</div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--tertiary-label)]">├──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--system-blue)]/10 text-[var(--system-blue)]">source</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-[var(--tertiary-label)]">├──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--system-blue)]/10 text-[var(--system-blue)]">factory-A</span>
                      <span className="text-[var(--tertiary-label)]">(1,245)</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-[var(--tertiary-label)]">└──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--system-blue)]/10 text-[var(--system-blue)]">factory-B</span>
                      <span className="text-[var(--tertiary-label)]">(892)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--tertiary-label)]">├──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">status</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-[var(--tertiary-label)]">├──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">production</span>
                      <span className="text-[var(--tertiary-label)]">(1,892)</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-[var(--tertiary-label)]">├──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">training</span>
                      <span className="text-[var(--tertiary-label)]">(3,456)</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="text-[var(--tertiary-label)]">└──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--system-orange)]/10 text-[var(--system-orange)]">edge-case</span>
                      <span className="text-[var(--tertiary-label)]">(234)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--tertiary-label)]">└──</span>
                      <span className="px-2 py-0.5 rounded bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">validated</span>
                      <span className="text-[var(--tertiary-label)]">(2,103)</span>
                    </div>
                  </div>
                </div>

                {/* Multi-tag example */}
                <div className="p-4 rounded-lg bg-[var(--black)] border border-[var(--border)]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded bg-[var(--system-blue)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-mono text-[var(--label)]">inspection_042.tiff</div>
                      <div className="text-xs text-[var(--tertiary-label)]">4032×3024 • 12.4MB</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-blue)]/10 text-[var(--system-blue)]">factory-A</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">production</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-indigo)]/10 text-[var(--system-indigo)]">validated</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-orange)]/10 text-[var(--system-orange)]">Q1-2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metadata Schema */}
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-teal)]">METADATA SCHEMA</span>
                <span className="text-xs text-[var(--tertiary-label)]">SDK v6.9.0+ auto-EXIF</span>
              </div>
              <div className="p-4 bg-[var(--black)] font-mono text-xs overflow-x-auto">
                <pre className="text-[var(--label)]">
{`{
  `}<span className="text-[var(--system-teal)]">&quot;geolocation&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;latitude&quot;</span>{`: `}<span className="text-[var(--system-orange)]">48.8566</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;longitude&quot;</span>{`: `}<span className="text-[var(--system-orange)]">2.3522</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;altitude&quot;</span>{`: `}<span className="text-[var(--system-orange)]">35.2</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;acquisition&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;acquired_at&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;2024-03-15T14:32:00Z&quot;</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;acquired_by&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;drone-unit-7&quot;</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;weather&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;clear, 18°C&quot;</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;imaging&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;focal_length&quot;</span>{`: `}<span className="text-[var(--system-orange)]">24.0</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;sensor_width&quot;</span>{`: `}<span className="text-[var(--system-orange)]">36.0</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;manufacturer&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;DJI&quot;</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;orientation&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;yaw&quot;</span>{`: `}<span className="text-[var(--system-orange)]">127.5</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;pitch&quot;</span>{`: `}<span className="text-[var(--system-orange)]">-45.0</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;roll&quot;</span>{`: `}<span className="text-[var(--system-orange)]">0.0</span>{`
  },
  `}<span className="text-[var(--system-teal)]">&quot;custom&quot;</span>{`: {
    `}<span className="text-[var(--secondary-label)]">&quot;inspection_id&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;INS-2024-0042&quot;</span>{`,
    `}<span className="text-[var(--secondary-label)]">&quot;batch_ref&quot;</span>{`: `}<span className="text-[var(--picsellia-green)]">&quot;B-789&quot;</span>{`
  }
}`}
                </pre>
              </div>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--tertiary-label)]">All fields queryable via PQL</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 rounded bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">EXIF</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--system-blue)]/10 text-[var(--system-blue)]">GPS</span>
                    <span className="px-2 py-0.5 rounded bg-[var(--system-orange)]/10 text-[var(--system-orange)]">XMP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-blue)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-blue)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to centralize your data?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Start managing billions of visual assets with enterprise-grade
                organization, search, and governance.
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
    </>
  );
}
