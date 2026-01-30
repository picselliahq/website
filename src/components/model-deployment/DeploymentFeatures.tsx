'use client';

export default function DeploymentFeatures() {
  const features = [
    {
      title: 'Model Registry Integration',
      description: 'Deploy any model version from your registry. Full lineage from experiment to production endpoint.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      color: 'var(--system-indigo)',
      items: ['Version management', 'Artifact tracking', 'Rollback support'],
    },
    {
      title: 'Runtime Optimization',
      description: 'Automatic model optimization with ONNX Runtime, TensorRT, or custom serving containers.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'var(--system-orange)',
      items: ['ONNX Runtime', 'TensorRT acceleration', 'Custom containers'],
    },
    {
      title: 'Monitoring Built-In',
      description: 'Every prediction is logged. Track latency, throughput, and anomalies from day one.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'var(--system-blue)',
      items: ['Real-time dashboards', 'Anomaly detection', 'Drift tracking'],
    },
  ];

  return (
    <section className="py-24 border-b border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
            Built for Production
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Everything you need to serve models
          </h2>
          <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
            From model registry to production endpoint, Picsellia handles the entire
            deployment lifecycle with enterprise-grade reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card p-6">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `color-mix(in srgb, ${feature.color} 15%, transparent)`, color: feature.color }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{feature.title}</h3>
              <p className="text-sm text-[var(--tertiary-label)] mb-4">{feature.description}</p>
              <div className="space-y-2">
                {feature.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-[var(--secondary-label)]">
                    <svg className="w-3 h-3" style={{ color: feature.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
