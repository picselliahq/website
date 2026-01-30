import VersionTimeline from './VersionTimeline';

const features = [
  {
    title: 'Immutable snapshots',
    description: 'Every dataset version is a permanent snapshot. Reference exact data states in experiments.',
  },
  {
    title: 'Label management',
    description: 'Create, rename, and merge labels across your dataset. Keep your taxonomy clean and consistent.',
  },
  {
    title: 'Fork for experiments',
    description: 'Fork dataset versions to test hypotheses without affecting production data.',
  },
  {
    title: 'Audit-ready history',
    description: 'Complete changelog with who changed what, when, and why. Perfect for compliance.',
  },
];

export default function VersionControlSection() {
  return (
    <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(var(--picsellia-blue) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-blue) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-[var(--picsellia-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Version Control
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              Track every change, reproduce any result
            </h2>
            <p className="text-[var(--secondary-label)] mb-8">
              Your datasets evolve constantly—new images, corrected labels, filtered samples. Without version control, you're flying blind.
            </p>

            <div className="space-y-6">
              {features.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[var(--picsellia-blue)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-[var(--picsellia-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-[var(--label)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--secondary-label)]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Interactive Timeline */}
          <div className="card p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-[var(--label)]">Version Timeline</h3>
              <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-blue)]/10 text-[var(--picsellia-blue)]">Interactive</span>
            </div>
            <VersionTimeline />
          </div>
        </div>
      </div>
    </section>
  );
}
