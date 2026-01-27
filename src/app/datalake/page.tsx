'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const cloudProviders = [
  { name: 'AWS S3', icon: '/images/community/partners/amazon-s3.svg' },
  { name: 'Google Cloud', icon: '/images/community/partners/google-cloud.svg' },
  { name: 'Azure', icon: '/images/community/partners/azure.svg' },
];


const capabilities = [
  {
    title: 'Data Aggregation',
    tagline: 'Connect everything',
    description: 'Consolidate visual data from any source into one unified repository. AWS, GCP, Azure, MinIO, or on-premise — all accessible from a single interface.',
    color: 'var(--system-blue)',
    icon: '/images/community/icons/datalake.svg',
    items: [
      { name: 'AWS S3', description: 'Native connector' },
      { name: 'Google Cloud', description: 'Full support' },
      { name: 'Azure Blob', description: 'Seamless sync' },
      { name: 'On-Premise', description: 'MinIO & more' },
    ],
  },
  {
    title: 'Format Support',
    tagline: 'Any visual data',
    description: 'Handle standard images, complex videos, DICOM medical files, satellite imagery, thermal captures, and proprietary formats at constant speed.',
    color: 'var(--system-orange)',
    icon: '/images/community/icons/data-management.svg',
    items: [
      { name: 'Images' },
      { name: 'Videos' },
      { name: 'DICOM' },
      { name: 'Thermal' },
      { name: 'Satellite' },
      { name: '3D Point Clouds' },
    ],
  },
  {
    title: 'Smart Organization',
    tagline: 'Structure & categorize',
    description: 'DataTags, rich metadata, and geolocation enable flexible, multi-dimensional data organization without moving files.',
    color: 'var(--picsellia-green)',
    icon: '/images/community/icons/annotation-campaigns.svg',
    items: [
      { name: 'DataTags' },
      { name: 'Metadata' },
      { name: 'Geolocation' },
      { name: 'Custom Fields' },
    ],
  },
  {
    title: 'Query Language',
    tagline: 'Search & filter',
    description: 'SQL-like queries with auto-completion for building pixel-perfect datasets in seconds.',
    color: 'var(--system-indigo)',
    icon: '/images/community/icons/experiment-tracking.svg',
    items: [
      { name: 'Pattern Matching' },
      { name: 'Numeric Filters' },
      { name: 'Logical Operators' },
      { name: 'Nested Queries' },
    ],
  },
  {
    title: 'Visual Search',
    tagline: 'AI-powered discovery',
    description: 'Find similar images, search by text, and visualize clusters with embeddings and UMAP projections.',
    color: 'var(--system-pink)',
    icon: '/images/community/icons/ai-laboratory.svg',
    items: [
      { name: 'Similarity Search' },
      { name: 'Text-to-Image' },
      { name: 'UMAP Clusters' },
      { name: 'Anomaly Detection' },
    ],
  },
  {
    title: 'Data Governance',
    tagline: 'Security & compliance',
    description: 'Enterprise-grade controls with user permissions, retention policies, and comprehensive audit trails.',
    color: 'var(--system-teal)',
    icon: '/images/community/icons/model-monitoring.svg',
    items: [
      { name: 'Permissions' },
      { name: 'Retention' },
      { name: 'Audit Logs' },
      { name: 'Compliance' },
    ],
  },
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
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden min-h-[90vh] flex items-center">
        <FloatingElements />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-blue)]/10 border border-[var(--system-blue)]/20 mb-8">
                <svg className="w-4 h-4 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                <span className="text-sm font-medium text-[var(--system-blue)]">
                  Data Management
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Your Visual Data<br />
                <span className="text-[var(--system-blue)]">Command Center</span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
                Aggregate, organize, and explore billions of images from any source.
                One unified repository for all your computer vision data.
              </p>

              {/* Cloud providers */}
              <div className="flex items-center gap-3 mb-10">
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

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            {/* Right - Video Demo */}
            <div className="relative hidden lg:block">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto rounded-xl"
                src="/videos/data layer view.mov"
              />

              {/* Floating tag panel */}
              <div className="absolute -bottom-6 -left-6 card p-4 shadow-xl max-w-[200px]">
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
              <div className="absolute -top-4 -right-4 card px-4 py-3 shadow-xl">
                <div className="text-xs text-[var(--tertiary-label)]">Storage</div>
                <div className="text-xl font-bold text-[var(--label)] font-mono">2.4 TB</div>
                <div className="text-[10px] text-[var(--system-blue)]">AWS S3 connected</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Bento Grid */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                One place for all your visual data
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                The Datalake is your centralized repository for managing images and their metadata,
                providing a unified interface for all computer vision projects.
              </p>
            </div>
            <Link href="https://documentation.picsellia.com/docs/datalake-3" className="btn-secondary whitespace-nowrap">
              View docs
            </Link>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, index) => (
              <div
                key={cap.title}
                className={`group ${index === 0 ? 'md:row-span-2' : ''}`}
              >
                <div className={`card p-0 overflow-hidden h-full ${index === 0 ? 'min-h-[420px]' : ''}`}>
                  {index === 0 ? (
                    // Featured card - Data Aggregation
                    <div className="h-full flex flex-col">
                      <div
                        className="p-8 flex-1 relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${cap.color} 10%, transparent), color-mix(in srgb, ${cap.color} 5%, transparent))` }}
                      >
                        {/* Decorative grid */}
                        <div className="absolute inset-0 opacity-[0.03]" style={{
                          backgroundImage: `linear-gradient(${cap.color} 1px, transparent 1px), linear-gradient(90deg, ${cap.color} 1px, transparent 1px)`,
                          backgroundSize: '32px 32px'
                        }} />

                        <div className="relative">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                            style={{ backgroundColor: `color-mix(in srgb, ${cap.color} 20%, transparent)` }}
                          >
                            <Image src={cap.icon} alt={cap.title} width={32} height={32} />
                          </div>
                          <div className="text-xs uppercase tracking-wider mb-2" style={{ color: cap.color }}>
                            {cap.tagline}
                          </div>
                          <h3 className="text-2xl font-semibold text-[var(--label)] mb-3">
                            {cap.title}
                          </h3>
                          <p className="text-[var(--secondary-label)] mb-6">
                            {cap.description}
                          </p>
                        </div>

                        {/* Decorative circles */}
                        <div className="absolute -bottom-16 -right-16 w-48 h-48 border rounded-full opacity-20" style={{ borderColor: cap.color }} />
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 border rounded-full opacity-30" style={{ borderColor: cap.color }} />
                      </div>
                      <div className="p-6 border-t border-[var(--border)]">
                        <ul className="grid grid-cols-2 gap-3">
                          {cap.items.map((item) => (
                            <li key={item.name} className="flex items-start gap-2">
                              <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: cap.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm text-[var(--secondary-label)]">{item.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    // Regular cards
                    <div className="p-6 h-full flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110"
                          style={{ backgroundColor: `color-mix(in srgb, ${cap.color} 15%, transparent)` }}
                        >
                          <Image src={cap.icon} alt={cap.title} width={28} height={28} />
                        </div>
                      </div>

                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: cap.color }}>
                        {cap.tagline}
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--label)] mb-2">
                        {cap.title}
                      </h3>
                      <p className="text-sm text-[var(--secondary-label)] mb-4 flex-1">
                        {cap.description}
                      </p>

                      <div className="pt-4 border-t border-[var(--border)]">
                        <ul className="flex flex-wrap gap-2">
                          {cap.items.map((item) => (
                            <li
                              key={item.name}
                              className="text-xs px-2 py-1 rounded-md bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]"
                            >
                              {item.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '100+', label: 'Data formats supported' },
              { value: '<50ms', label: 'Query response time' },
              { value: '10B+', label: 'Images managed' },
              { value: '99.9%', label: 'Platform uptime' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <div className="text-2xl md:text-3xl font-bold text-[var(--label)] mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Query Language Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-indigo) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Query Language
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Build pixel-perfect datasets<br />in seconds
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Use our SQL-like query language to filter and retrieve data based on any criteria.
                Search across all properties, metadata, tags, and linked objects with auto-completion support.
              </p>

              <div className="space-y-3">
                {[
                  'String operations with pattern matching',
                  'Numeric comparisons for dimensions and metrics',
                  'Logical AND/OR operators for complex filters',
                  'Nested object queries (datasets, experiments)',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[var(--system-indigo)]/20 flex items-center justify-center">
                      <svg className="w-3 h-3 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-[var(--secondary-label)]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Code example */}
            <div className="card p-0 overflow-hidden shadow-xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                <span className="ml-2 text-xs text-[var(--tertiary-label)]">query.pql</span>
              </div>
              <pre className="p-6 text-sm overflow-x-auto bg-[var(--black)]">
                <code>
                  <span className="text-[var(--tertiary-label)]"># Find high-resolution production images</span>{'\n'}
                  <span className="text-[var(--system-indigo)]">SELECT</span> <span className="text-[var(--label)]">*</span> <span className="text-[var(--system-indigo)]">FROM</span> <span className="text-[var(--label)]">datalake</span>{'\n'}
                  <span className="text-[var(--system-indigo)]">WHERE</span>{'\n'}
                  {'  '}<span className="text-[var(--system-blue)]">tags.name</span> <span className="text-[var(--label)]">=</span> <span className="text-[var(--picsellia-green)]">&quot;production&quot;</span>{'\n'}
                  {'  '}<span className="text-[var(--system-indigo)]">AND</span> <span className="text-[var(--system-blue)]">width</span> <span className="text-[var(--label)]">&gt;</span> <span className="text-[var(--system-orange)]">1920</span>{'\n'}
                  {'  '}<span className="text-[var(--system-indigo)]">AND</span> <span className="text-[var(--system-blue)]">metadata.validated</span> <span className="text-[var(--label)]">=</span> <span className="text-[var(--system-orange)]">true</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Results: 2,847 images matching criteria</span>{'\n'}
                  <span className="text-[var(--tertiary-label)]"># Query time: 23ms</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Search / Embeddings Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* UMAP Visualization */}
            <div className="order-2 lg:order-1">
              <div className="card p-0 overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                  <span className="text-xs text-[var(--tertiary-label)]">UMAP Projection</span>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--system-pink)]/10 text-[var(--system-pink)]">
                      DBSCAN clustering
                    </span>
                  </div>
                </div>
                <div className="h-[300px] p-4 bg-[var(--black)]">
                  <UMAPVisualization />
                </div>
                <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)] flex items-center justify-between">
                  <span className="text-xs text-[var(--tertiary-label)]">55 points in selection</span>
                  <button className="text-xs text-[var(--system-pink)] hover:underline">
                    Create dataset from selection
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-pink)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Visual Search
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Explore your data<br />with AI embeddings
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Leverage AI-powered embeddings to discover patterns, find similar images,
                and identify outliers in your visual data at scale.
              </p>

              <div className="space-y-4">
                <div className="card p-4 border-[var(--system-blue)]/30">
                  <h4 className="font-medium text-[var(--label)] mb-1">Similarity Search</h4>
                  <p className="text-sm text-[var(--secondary-label)]">
                    Find visually similar images to any reference in milliseconds.
                  </p>
                </div>
                <div className="card p-4 border-[var(--system-orange)]/30">
                  <h4 className="font-medium text-[var(--label)] mb-1">Text-to-Image</h4>
                  <p className="text-sm text-[var(--secondary-label)]">
                    Search your data using natural language descriptions.
                  </p>
                </div>
                <div className="card p-4 border-[var(--system-pink)]/30">
                  <h4 className="font-medium text-[var(--label)] mb-1">UMAP Projections</h4>
                  <p className="text-sm text-[var(--secondary-label)]">
                    Visualize clusters and detect anomalies with interactive scatter plots.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagging System */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--picsellia-green)]/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Organization
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                DataTags for flexible<br />data structuring
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Combat data chaos with multi-dimensional organization. Each piece of data can have
                multiple tags, enabling custom hierarchies without physically reorganizing storage.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {sampleTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)] border border-[var(--picsellia-green)]/20 hover:bg-[var(--picsellia-green)]/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-[var(--tertiary-label)]">
                <strong className="text-[var(--secondary-label)]">Note:</strong> DataTags are organizational markers,
                distinct from ML labels or annotations.
              </p>
            </div>

            {/* Visual */}
            <div className="card p-6">
              <div className="space-y-3">
                {[
                  { name: 'factory_inspection_001.jpg', tags: ['production', 'factory-A', 'validated'] },
                  { name: 'defect_sample_042.png', tags: ['training', 'edge-case'] },
                  { name: 'quality_check_2024.jpg', tags: ['Q1-2024', 'production'] },
                  { name: 'calibration_ref.tiff', tags: ['training', 'validated'] },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 p-3 rounded-lg bg-[var(--tertiary-system-background)] hover:bg-[var(--system-gray-4)] transition-colors"
                  >
                    <div className="w-10 h-10 rounded bg-[var(--system-blue)]/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-[var(--label)] truncate">{item.name}</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-1.5 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metadata Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-teal)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Metadata
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Rich context for every asset
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Attach comprehensive metadata including geolocation, acquisition details,
              technical properties, and custom business identifiers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                category: 'Geolocation',
                icon: '📍',
                fields: ['Latitude / Longitude', 'Altitude', 'Region of Interest'],
              },
              {
                category: 'Technical',
                icon: '⚙️',
                fields: ['Resolution (x, y)', 'Color Space', 'Compression Format'],
              },
              {
                category: 'Acquisition',
                icon: '📸',
                fields: ['Timestamp', 'Acquired By', 'Weather Conditions'],
              },
              {
                category: 'Imaging',
                icon: '🔬',
                fields: ['Focal Length', 'Sensor Width', 'Manufacturer'],
              },
              {
                category: 'Orientation',
                icon: '🧭',
                fields: ['Yaw / Pitch / Roll', 'Custom Reference', 'Brand ID'],
              },
              {
                category: 'Custom',
                icon: '🏷️',
                fields: ['Custom ID', 'Reference', 'Any Business Field'],
              },
            ].map((meta) => (
              <div key={meta.category} className="card p-5 hover:border-[var(--system-teal)]/30 transition-colors">
                <div className="text-2xl mb-3">{meta.icon}</div>
                <h3 className="font-semibold text-[var(--label)] mb-3">{meta.category}</h3>
                <ul className="space-y-2">
                  {meta.fields.map((field) => (
                    <li key={field} className="text-sm text-[var(--secondary-label)] flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-[var(--system-teal)]" />
                      {field}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--tertiary-label)]">
              Automatic EXIF extraction supported via SDK v6.9.0+
            </p>
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
