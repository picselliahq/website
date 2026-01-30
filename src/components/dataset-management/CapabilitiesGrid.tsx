const capabilities = [
  {
    id: 'versioning',
    title: 'Git-like Version Control',
    tagline: 'Never lose your data again',
    description: 'Track every change to your datasets. Compare versions, rollback mistakes, and branch for experiments. Full lineage from raw data to trained models.',
    color: 'var(--picsellia-blue)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    stats: { value: '100%', label: 'Reproducibility' },
  },
  {
    id: 'organization',
    title: 'Smart Data Organization',
    tagline: 'Structure without chaos',
    description: 'Tag, filter, and slice your data in seconds. Create custom views, save queries, and share collections. No more hunting through folders.',
    color: 'var(--system-orange)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
    stats: { value: '5x', label: 'Faster discovery' },
  },
  {
    id: 'collaboration',
    title: 'Team Collaboration',
    tagline: 'Work together, not in silos',
    description: 'Share datasets across teams with fine-grained permissions. Track who changed what, when, and why. Comments and reviews built-in.',
    color: 'var(--system-indigo)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    stats: { value: '60%', label: 'Less coordination' },
  },
  {
    id: 'traceability',
    title: 'Full Data Lineage',
    tagline: 'Know where your data comes from',
    description: 'Trace any prediction back to its training data. Audit-ready lineage for compliance. Understand model behavior through data.',
    color: 'var(--picsellia-green)',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    stats: { value: '100%', label: 'Audit compliance' },
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Capabilities
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Everything you need to manage datasets
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              Version, organize, and share your datasets. Everything connects to your experiments.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {capabilities.map((cap, index) => (
            <div
              key={cap.id}
              className={`card p-0 overflow-hidden group ${index === 0 ? 'md:row-span-2' : ''}`}
            >
              {index === 0 ? (
                // Featured card - Version Control
                <div className="h-full flex flex-col">
                  <div
                    className="p-8 flex-1 relative overflow-hidden min-h-[280px]"
                    style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${cap.color} 10%, transparent), color-mix(in srgb, ${cap.color} 5%, transparent))` }}
                  >
                    {/* Decorative grid */}
                    <div className="absolute inset-0 opacity-[0.03]" style={{
                      backgroundImage: `linear-gradient(${cap.color} 1px, transparent 1px), linear-gradient(90deg, ${cap.color} 1px, transparent 1px)`,
                      backgroundSize: '32px 32px'
                    }} />

                    <div className="relative">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6"
                        style={{ backgroundColor: cap.color }}
                      >
                        {cap.icon}
                      </div>
                      <div className="text-xs uppercase tracking-wider mb-2" style={{ color: cap.color }}>
                        {cap.tagline}
                      </div>
                      <h3 className="text-2xl font-semibold text-[var(--label)] mb-4">
                        {cap.title}
                      </h3>
                      <p className="text-[var(--secondary-label)]">
                        {cap.description}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -bottom-16 -right-16 w-48 h-48 border rounded-full opacity-20" style={{ borderColor: cap.color }} />
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 border rounded-full opacity-30" style={{ borderColor: cap.color }} />
                  </div>

                  {/* Video */}
                  <div className="h-48 overflow-hidden border-t border-[var(--border)]">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/videos/data ingestion.webm" />
                  </div>

                  <div className="p-6 border-t border-[var(--border)]">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[var(--secondary-label)]">Full audit trail included</div>
                      <div className="text-right">
                        <div className="text-xl font-bold" style={{ color: cap.color }}>{cap.stats.value}</div>
                        <div className="text-xs text-[var(--tertiary-label)]">{cap.stats.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Regular cards
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: cap.color }}
                    >
                      {cap.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold" style={{ color: cap.color }}>{cap.stats.value}</div>
                      <div className="text-[10px] text-[var(--tertiary-label)]">{cap.stats.label}</div>
                    </div>
                  </div>

                  <div className="text-xs uppercase tracking-wider mb-1" style={{ color: cap.color }}>
                    {cap.tagline}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[var(--secondary-label)] flex-1">
                    {cap.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
