'use client';

import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// Agriculture-specific use cases
const useCases = [
  {
    title: 'Crop Health Monitoring',
    description: "Track plant health across entire fields with drone and satellite imagery. Detect stress, nutrient deficiencies, and growth anomalies before they spread.",
    image: '/images/use-cases/agriculture/crop-monitoring.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: { value: '500ha', label: 'Per flight coverage' },
  },
  {
    title: 'Disease Detection',
    description: "Identify fungal infections, bacterial diseases, and pest damage at early stages. Geo-tagged alerts for precise treatment application.",
    image: '/images/use-cases/agriculture/disease-detection.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
      </svg>
    ),
    stats: { value: '14 days', label: 'Earlier detection' },
  },
  {
    title: 'Yield Estimation',
    description: "Count fruits, measure crop density, and predict harvest volumes from aerial imagery. Plan logistics with accurate forecasts.",
    image: '/images/use-cases/agriculture/yield-estimation.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    stats: { value: '±5%', label: 'Forecast accuracy' },
  },
  {
    title: 'Soil Analysis',
    description: "Map soil variability, moisture levels, and organic matter content. Create prescription maps for variable-rate application.",
    image: '/images/use-cases/agriculture/soil-health-analysis.jpg',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    stats: { value: '10m', label: 'Resolution' },
  },
];

// Data layer capabilities
const dataCapabilities = [
  {
    title: 'Orthomosaic support',
    description: 'Upload multi-gigabyte stitched maps. Automatic tiling for efficient viewing and annotation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'GPS metadata extraction',
    description: 'Automatic parsing of EXIF coordinates, altitude, heading. Every annotation is geo-referenced.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Multi-spectral layers',
    description: 'RGB, NIR, thermal, NDVI — all linked to the same capture. Switch views during annotation.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Field & plot hierarchy',
    description: 'Organize imagery by farm, field, plot, and season. Query across time to track changes.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
];

export default function AgriculturePage() {
  const t = useTranslations('industries.agriculture');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-teal)]/5 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="badge">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Agriculture</span>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-center max-w-4xl mx-auto mb-6 tracking-tight">
            Precision agriculture built on <span className="text-[var(--picsellia-green)]">geo-referenced data</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[var(--secondary-label)] text-center max-w-2xl mx-auto mb-10">
            Manage massive drone datasets with GPS metadata intact. Train models on multi-spectral imagery. Validate with agronomist expertise.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/demo" className="btn-primary px-6 py-3">
              Request Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/use-cases" className="btn-secondary px-6 py-3">
              See Use Cases
            </Link>
          </div>

          {/* Hero Image */}
          <div className="mb-16 relative">
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]">
              <div className="relative h-[400px]">
                <Image
                  src="/images/use-cases/agriculture/field-2.jpg"
                  alt="Aerial view of agricultural fields"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/60 via-transparent to-transparent" />

                {/* Floating cards */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-4">
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Max File Size</div>
                        <div className="text-lg font-bold text-[var(--picsellia-green)]">10GB+</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">GPS Precision</div>
                        <div className="text-lg font-bold text-[var(--system-blue)]">RTK/PPK</div>
                      </div>
                    </div>
                  </div>
                  <div className="card px-4 py-3 bg-[var(--card)]/90 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/20 flex items-center justify-center">
                        <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-[var(--tertiary-label)]">Expert Review</div>
                        <div className="text-lg font-bold text-[var(--system-orange)]">In-Loop</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { value: '10GB+', label: 'Single file support' },
              { value: 'RTK', label: 'GPS precision' },
              { value: '5 bands', label: 'Multi-spectral' },
              { value: '98%', label: 'Expert-validated' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-semibold text-[var(--picsellia-green)] mb-1">{stat.value}</div>
                <div className="text-sm text-[var(--tertiary-label)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Layer Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Data Layer
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Built for drone-scale imagery
              </h2>
              <p className="text-[var(--secondary-label)] text-lg mb-8">
                Agricultural imagery is different. Orthomosaics stretch into gigabytes. Every pixel has GPS coordinates.
                Multi-spectral bands reveal what RGB cannot. Picsellia handles it all — no compromises on data fidelity.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {dataCapabilities.map((capability) => (
                  <div key={capability.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0 text-[var(--system-blue)]">
                      {capability.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-[var(--label)] mb-1">{capability.title}</h3>
                      <p className="text-sm text-[var(--secondary-label)]">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="card p-6">
                {/* File upload visualization */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[var(--label)]">Data Ingestion</h3>
                  <span className="px-3 py-1 rounded-full bg-[var(--picsellia-green)]/10 text-xs font-medium text-[var(--picsellia-green)]">
                    Processing
                  </span>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Large file */}
                  <div className="p-4 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[var(--label)]">field_north_orthomosaic.tif</div>
                          <div className="text-xs text-[var(--tertiary-label)]">8.4 GB • GeoTIFF</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-[var(--picsellia-green)]">100%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[var(--quaternary-system-fill)]">
                      <div className="h-1.5 rounded-full bg-[var(--picsellia-green)]" style={{ width: '100%' }} />
                    </div>
                  </div>

                  {/* Metadata extraction */}
                  <div className="p-4 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                    <div className="text-sm font-medium text-[var(--label)] mb-3">Extracted Metadata</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="text-xs text-[var(--secondary-label)]">45.7640°N, 4.8357°E</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-xs text-[var(--secondary-label)]">2024-07-15 10:32 UTC</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                        </svg>
                        <span className="text-xs text-[var(--secondary-label)]">Vineyard A / Block 3</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <span className="text-xs text-[var(--secondary-label)]">5 bands (RGB+NIR+RE)</span>
                      </div>
                    </div>
                  </div>

                  {/* Tiling status */}
                  <div className="p-4 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-[var(--label)]">Auto-tiling for annotation</div>
                      <span className="text-xs font-mono text-[var(--system-orange)]">In progress</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--secondary-label)]">
                      <svg className="w-4 h-4 text-[var(--system-orange)] animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Generating 256 tiles at 2048×2048px...</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[var(--tertiary-label)]">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Original file preserved. Tiles generated for efficient annotation.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Human-in-the-Loop Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Human-in-the-Loop
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Agronomist expertise in every prediction
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              AI spots the patterns. Experts confirm the diagnosis. This loop ensures your disease detection
              and yield models reach the precision agriculture demands.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Review Workflow Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--system-orange)]/10 flex items-center justify-center">
                    <Image src="/images/community/icons/labeling-tool.svg" alt="Review" width={32} height={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--label)]">Expert Review Workflows</h3>
                    <p className="text-sm text-[var(--tertiary-label)]">Agronomists validate AI predictions</p>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6">
                  Route low-confidence detections to your agronomists. They confirm disease identifications,
                  correct misclassifications, and add domain knowledge the model lacks.
                </p>
                <div className="space-y-3">
                  {[
                    'Disease confirmation by plant pathologists',
                    'Phenological stage validation',
                    'Nutrient deficiency verification',
                    'False positive filtering',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-[var(--label)]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[var(--system-blue)] flex items-center justify-center text-white text-xs font-medium border-2 border-[var(--card)]">JD</div>
                      <div className="w-8 h-8 rounded-full bg-[var(--system-orange)] flex items-center justify-center text-white text-xs font-medium border-2 border-[var(--card)]">ML</div>
                      <div className="w-8 h-8 rounded-full bg-[var(--picsellia-green)] flex items-center justify-center text-white text-xs font-medium border-2 border-[var(--card)]">PB</div>
                    </div>
                    <span className="text-sm text-[var(--secondary-label)]">3 agronomists active</span>
                  </div>
                  <span className="text-xs font-mono text-[var(--picsellia-green)]">47 pending reviews</span>
                </div>
              </div>
            </div>

            {/* Active Learning Card */}
            <div className="card p-0 overflow-hidden">
              <div className="p-8 border-b border-[var(--border)]">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--system-indigo)]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--label)]">Active Learning</h3>
                    <p className="text-sm text-[var(--tertiary-label)]">Smart sampling for maximum impact</p>
                  </div>
                </div>
                <p className="text-[var(--secondary-label)] mb-6">
                  Not all samples need expert review. Picsellia identifies the edge cases — unusual disease presentations,
                  ambiguous growth stages, rare conditions — and routes only those for annotation.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-[var(--tertiary-system-background)]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[var(--label)]">Uncertainty threshold</span>
                      <span className="text-sm font-mono text-[var(--system-indigo)]">0.65</span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--quaternary-system-fill)]">
                      <div className="h-2 rounded-full bg-[var(--system-indigo)]" style={{ width: '65%' }} />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--secondary-label)]">Samples requiring review</span>
                    <span className="font-medium text-[var(--label)]">12% of predictions</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--secondary-label)]">Labeling effort saved</span>
                    <span className="font-medium text-[var(--picsellia-green)]">88%</span>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-[var(--secondary-label)]">
                    Focus expert time on samples that improve model accuracy most
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Precision metrics */}
          <div className="mt-12 card p-8">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--picsellia-green)] mb-1">98.2%</div>
                <div className="text-sm text-[var(--secondary-label)]">Disease ID accuracy</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">After expert review</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--system-blue)] mb-1">0.3%</div>
                <div className="text-sm text-[var(--secondary-label)]">False positive rate</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">Agronomist-validated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--system-orange)] mb-1">4.2h</div>
                <div className="text-sm text-[var(--secondary-label)]">Avg review time</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">Per 1000 samples</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--system-indigo)] mb-1">12×</div>
                <div className="text-sm text-[var(--secondary-label)]">Throughput increase</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">vs manual scouting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="text-[var(--system-teal)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Applications
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                From vineyard to broadacre
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl">
                Picsellia powers precision agriculture across crop types, from high-value vineyards to large-scale row crops.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="card p-0 overflow-hidden group">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={useCase.image}
                    alt={useCase.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)]/80 via-[var(--black)]/20 to-transparent" />

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="text-2xl font-bold text-white">{useCase.stats.value}</div>
                    <div className="text-xs text-white/70">{useCase.stats.label}</div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-[var(--picsellia-green)] flex items-center justify-center text-white">
                    {useCase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2">{useCase.title}</h3>
                  <p className="text-sm text-[var(--secondary-label)]">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Management Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Data Management
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Organize seasons of imagery
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Agricultural data compounds over time. Query across years, compare seasonal patterns, track field evolution.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Temporal Organization */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Temporal tracking</h3>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Link captures to growth stages. Compare same plot across weeks, months, years. Time-series analysis built in.
              </p>
              <div className="space-y-2">
                {['2024 Season', '2023 Season', '2022 Season'].map((season, i) => (
                  <div key={season} className="flex items-center justify-between p-2 rounded-lg bg-[var(--tertiary-system-background)]">
                    <span className="text-sm text-[var(--label)]">{season}</span>
                    <span className="text-xs text-[var(--tertiary-label)]">{2400 - i * 400} flights</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Spatial Organization */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Spatial hierarchy</h3>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Farm → Field → Plot → Row. Organize imagery to match your physical layout. Filter and search by location.
              </p>
              <div className="space-y-2">
                <div className="p-2 rounded-lg bg-[var(--tertiary-system-background)]">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-sm text-[var(--label)]">Domaine du Château</span>
                  </div>
                  <div className="ml-6 mt-2 space-y-1">
                    <div className="text-xs text-[var(--secondary-label)]">├── Parcelle Nord (12 ha)</div>
                    <div className="text-xs text-[var(--secondary-label)]">├── Parcelle Sud (8 ha)</div>
                    <div className="text-xs text-[var(--secondary-label)]">└── Parcelle Est (15 ha)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Query & Export */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Smart queries</h3>
              <p className="text-sm text-[var(--secondary-label)] mb-4">
                Find all disease detections from July 2024 in Block A. Export with GPS for precision spraying.
              </p>
              <div className="p-3 rounded-lg bg-[var(--black)] font-mono text-xs">
                <div className="text-[var(--tertiary-label)]"># Query example</div>
                <div className="text-[var(--picsellia-green)]">field: "Block A"</div>
                <div className="text-[var(--system-blue)]">date: 2024-07*</div>
                <div className="text-[var(--system-orange)]">label: "powdery_mildew"</div>
                <div className="text-[var(--tertiary-label)] mt-2">→ 147 detections found</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            {/* Background */}
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-green)] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-green)]"></span>
                </span>
                <span className="text-xs font-mono text-[var(--picsellia-green)]">PRECISION_AGRICULTURE</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">
                Ready to scale your farm analytics?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                See how Picsellia handles drone-scale imagery with GPS precision and expert validation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/demo" className="btn-primary px-8 py-3 text-base">
                  Request Demo
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn-secondary px-8 py-3 text-base">
                  Contact Sales
                </Link>
              </div>
            </div>

            {/* Bottom Stats */}
            <div className="relative z-10 border-t border-[var(--border)] bg-[var(--secondary-system-background)]/50 backdrop-blur-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--border)]">
                {[
                  { value: '10GB+', label: 'File support' },
                  { value: 'RTK/PPK', label: 'GPS precision' },
                  { value: '98%', label: 'Validated accuracy' },
                  { value: '12×', label: 'Faster than scouting' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 md:p-6 text-center">
                    <div className="text-lg md:text-xl font-bold text-[var(--label)] font-mono">{stat.value}</div>
                    <div className="text-xs text-[var(--tertiary-label)]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
