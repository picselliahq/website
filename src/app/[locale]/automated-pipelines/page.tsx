'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

// CT/CD Pipeline visualization
const PipelineFlow = () => {
  const stages = [
    { id: 'production', label: 'Production', sublabel: 'Model serving', color: 'var(--system-blue)', active: false },
    { id: 'monitor', label: 'Monitor', sublabel: 'Anomaly detection', color: 'var(--system-orange)', active: false },
    { id: 'feedback', label: 'Feedback', sublabel: 'Review & label', color: 'var(--picsellia-green)', active: true },
    { id: 'retrain', label: 'Retrain', sublabel: 'Auto trigger', color: 'var(--picsellia-green)', active: false },
    { id: 'deploy', label: 'Deploy', sublabel: 'Shadow → Prod', color: 'var(--system-pink)', active: false },
  ];

  return (
    <div className="relative">
      {/* Connection line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[var(--border)] -translate-y-1/2 hidden md:block" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
        {stages.map((stage, index) => (
          <div key={stage.id} className="flex flex-col items-center text-center relative z-10">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center mb-3 border-2 transition-all ${
                stage.active
                  ? 'scale-110 shadow-lg'
                  : ''
              }`}
              style={{
                backgroundColor: `color-mix(in srgb, ${stage.color} 15%, transparent)`,
                borderColor: stage.active ? stage.color : 'transparent',
              }}
            >
              {stage.id === 'production' && (
                <svg className="w-7 h-7" style={{ color: stage.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              )}
              {stage.id === 'monitor' && (
                <svg className="w-7 h-7" style={{ color: stage.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              )}
              {stage.id === 'feedback' && (
                <svg className="w-7 h-7" style={{ color: stage.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              )}
              {stage.id === 'retrain' && (
                <svg className="w-7 h-7" style={{ color: stage.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )}
              {stage.id === 'deploy' && (
                <svg className="w-7 h-7" style={{ color: stage.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              )}
            </div>
            <span className="text-sm font-semibold text-[var(--label)]">{stage.label}</span>
            <span className="text-xs text-[var(--tertiary-label)]">{stage.sublabel}</span>

            {/* Arrow for mobile */}
            {index < stages.length - 1 && (
              <svg className="w-5 h-5 text-[var(--tertiary-label)] my-2 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Loop arrow */}
      <div className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2 text-xs text-[var(--tertiary-label)]">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Continuous loop</span>
        </div>
      </div>
    </div>
  );
};

// Trigger configuration UI
const TriggerConfig = () => {
  return (
    <div className="space-y-4">
      <div className="p-4 border border-[var(--border)] rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)]" />
            <span className="text-sm font-medium text-[var(--label)]">Review Threshold</span>
          </div>
          <span className="text-xs text-[var(--picsellia-green)]">Active</span>
        </div>
        <p className="text-xs text-[var(--tertiary-label)] mb-3">Trigger retraining when reviewed predictions reach threshold</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-[var(--tertiary-system-background)] rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-[var(--picsellia-green)] rounded-full" />
          </div>
          <span className="text-xs font-mono text-[var(--label)]">750/1000</span>
        </div>
      </div>

      <div className="p-4 border border-[var(--border)] rounded-lg">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
            <span className="text-sm font-medium text-[var(--label)]">Drift Alert</span>
          </div>
          <span className="text-xs text-[var(--system-orange)]">Monitoring</span>
        </div>
        <p className="text-xs text-[var(--tertiary-label)] mb-3">Trigger when distribution drift exceeds threshold</p>
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-[var(--tertiary-system-background)] rounded-full overflow-hidden">
            <div className="h-full w-1/4 bg-[var(--system-orange)] rounded-full" />
          </div>
          <span className="text-xs font-mono text-[var(--label)]">8%/15%</span>
        </div>
      </div>

      <div className="p-4 border border-[var(--border)] rounded-lg opacity-60">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--tertiary-label)]" />
            <span className="text-sm font-medium text-[var(--label)]">Scheduled</span>
          </div>
          <span className="text-xs text-[var(--tertiary-label)]">Disabled</span>
        </div>
        <p className="text-xs text-[var(--tertiary-label)]">Retrain on a fixed schedule (weekly, monthly)</p>
      </div>
    </div>
  );
};

// Shadow deployment comparison
const ShadowComparison = () => {
  const metrics = [
    { name: 'mAP', primary: 0.847, shadow: 0.892, better: 'shadow' },
    { name: 'Precision', primary: 0.91, shadow: 0.94, better: 'shadow' },
    { name: 'Recall', primary: 0.88, shadow: 0.86, better: 'primary' },
    { name: 'Latency', primary: 45, shadow: 52, better: 'primary', unit: 'ms' },
  ];

  return (
    <div className="space-y-3">
      {metrics.map((metric) => (
        <div key={metric.name} className="flex items-center gap-4">
          <span className="text-xs text-[var(--tertiary-label)] w-16">{metric.name}</span>
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-[var(--system-blue)]">Primary</span>
                <span className={`text-xs font-mono ${metric.better === 'primary' ? 'text-[var(--picsellia-green)]' : 'text-[var(--label)]'}`}>
                  {metric.unit ? metric.primary + metric.unit : (metric.primary * 100).toFixed(1) + '%'}
                </span>
              </div>
              <div className="h-1.5 bg-[var(--system-blue)]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--system-blue)] rounded-full"
                  style={{ width: metric.unit ? `${(metric.primary / 60) * 100}%` : `${metric.primary * 100}%` }}
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] text-[var(--system-pink)]">Shadow</span>
                <span className={`text-xs font-mono ${metric.better === 'shadow' ? 'text-[var(--picsellia-green)]' : 'text-[var(--label)]'}`}>
                  {metric.unit ? metric.shadow + metric.unit : (metric.shadow * 100).toFixed(1) + '%'}
                </span>
              </div>
              <div className="h-1.5 bg-[var(--system-pink)]/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--system-pink)] rounded-full"
                  style={{ width: metric.unit ? `${(metric.shadow / 60) * 100}%` : `${metric.shadow * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function AutomatedPipelinesPage() {
  const t = useTranslations('platform.automatedPipelines');
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--picsellia-green)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--picsellia-green)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">CT/CD Automation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto">
              Models That <span className="text-[var(--picsellia-green)]">Improve Themselves</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              Continuous Training and Continuous Deployment. Close the feedback loop,
              automate retraining, and deploy with confidence using shadow models.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/demo" className="btn-primary px-8 py-4 text-base">
                See It In Action
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
              <Link href="https://documentation.picsellia.com/reference/deployment" className="btn-secondary px-8 py-4 text-base">
                Documentation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { value: '0', label: 'Manual intervention' },
                { value: '24/7', label: 'Automated loop' },
                { value: '100%', label: 'Safe deployments' },
                { value: '∞', label: 'Model iterations' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 border border-[var(--border)] rounded-xl text-center">
                  <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">{stat.value}</div>
                  <div className="text-xs text-[var(--tertiary-label)] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Pipeline visualization */}
            <div className="card p-8 md:p-12">
              <PipelineFlow />
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Loop Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Feedback Loop
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Production data becomes training data
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Connect your deployment to your training pipeline. Reviewed predictions automatically
                flow into your training datasets, creating a continuous improvement cycle.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { title: 'Capture predictions', desc: 'Every inference logged automatically' },
                  { title: 'Review anomalies', desc: 'Flag and correct mispredictions' },
                  { title: 'Enrich datasets', desc: 'Add reviewed data to training sets' },
                  { title: 'Trigger retraining', desc: 'Automated based on thresholds' },
                ].map((item, i) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-[var(--picsellia-green)]">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--label)]">{item.title}</h4>
                      <p className="text-xs text-[var(--tertiary-label)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card p-0 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                  <span className="text-xs font-medium text-[var(--picsellia-green)]">SDK</span>
                </div>
                <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto bg-[var(--black)]">
                  <code>
                    <span className="text-[var(--tertiary-label)]"># Setup feedback loop</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.setup_feedback_loop()</span>{'\n\n'}
                    <span className="text-[var(--tertiary-label)]"># Attach dataset for enrichment</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.attach_dataset_version_to_feedback_loop(</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">dataset_version</span><span className="text-[var(--picsellia-green)]">=</span><span className="text-[var(--label)]">training_set</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>{'\n\n'}
                    <span className="text-[var(--tertiary-label)]"># Activate</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.toggle_feedback_loop(</span><span className="text-[var(--picsellia-green)]">True</span><span className="text-[var(--label)]">)</span>
                  </code>
                </pre>
              </div>
            </div>

            {/* Feedback visualization */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--label)]">Feedback Pipeline</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
                  <span className="text-xs text-[var(--picsellia-green)]">Active</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--label)]">Predictions logged</span>
                    <span className="text-sm font-mono text-[var(--label)]">12,847</span>
                  </div>
                  <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full w-full bg-[var(--system-blue)] rounded-full" />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--label)]">Reviewed</span>
                    <span className="text-sm font-mono text-[var(--label)]">2,156</span>
                  </div>
                  <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full w-[17%] bg-[var(--system-orange)] rounded-full" />
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-[var(--label)]">Added to training set</span>
                    <span className="text-sm font-mono text-[var(--label)]">1,892</span>
                  </div>
                  <div className="h-1.5 bg-[var(--border)] rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-[var(--picsellia-green)] rounded-full" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-[var(--picsellia-green)]/30 bg-[var(--picsellia-green)]/5">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <div className="text-sm font-medium text-[var(--label)]">Ready to trigger</div>
                    <div className="text-xs text-[var(--tertiary-label)]">1,892 / 2,000 threshold reached</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Orchestration Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Trigger config */}
            <div className="card p-6 order-2 lg:order-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--label)]">Retraining Triggers</h3>
                <span className="text-xs text-[var(--tertiary-label)]">Configure</span>
              </div>
              <TriggerConfig />
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Training Orchestration
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Automated retraining on your terms
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Define triggers based on review thresholds, drift detection, or schedules.
                When conditions are met, Picsellia automatically provisions GPUs and launches training.
              </p>

              <div className="space-y-4">
                {[
                  'Review threshold triggers',
                  'Distribution drift detection',
                  'Scheduled retraining',
                  'Automatic GPU provisioning',
                  'Full experiment tracking',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--label)]">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                <code className="text-xs font-mono text-[var(--secondary-label)]">
                  <span className="text-[var(--tertiary-label)]"># Setup continuous training</span><br />
                  deployment.setup_continuous_training(<br />
                  {'  '}trigger_threshold=<span className="text-[var(--picsellia-green)]">1000</span>,<br />
                  {'  '}experiment_name=<span className="text-[var(--picsellia-green)]">&quot;auto-retrain-v{'{'}n{'}'}&quot;</span>,<br />
                  {'  '}gpu_type=<span className="text-[var(--picsellia-green)]">&quot;A10G&quot;</span><br />
                  )
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shadow Deployment Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-pink)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Shadow Deployment
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Deploy with confidence
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Test new models in production without risk. Shadow models run alongside your primary model,
              comparing performance on real traffic before you promote.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* How it works */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-[var(--label)] mb-6">How Shadow Deployment Works</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[var(--system-blue)]">1</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Deploy shadow model</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">
                      New model version runs in parallel, processing the same inputs as production
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-pink)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[var(--system-pink)]">2</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Compare predictions</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">
                      Both models make predictions, but only primary results are returned to users
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-[var(--picsellia-green)]">3</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Promote when ready</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">
                      Once shadow outperforms primary, promote it with a single command
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison UI */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--label)]">Live Comparison</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded text-[10px] bg-[var(--system-blue)]/10 text-[var(--system-blue)]">Primary v2.1</span>
                  <span className="px-2 py-1 rounded text-[10px] bg-[var(--system-pink)]/10 text-[var(--system-pink)]">Shadow v2.2</span>
                </div>
              </div>
              <ShadowComparison />
              <div className="mt-6 pt-6 border-t border-[var(--border)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-xs text-[var(--picsellia-green)]">Shadow outperforming on 3/4 metrics</span>
                  </div>
                  <button className="text-xs text-[var(--system-pink)] hover:underline">Promote →</button>
                </div>
              </div>
            </div>
          </div>

          {/* SDK examples */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-pink)]">SHADOW DEPLOYMENT SDK</span>
              <span className="text-xs text-[var(--tertiary-label)]">Python</span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
              <div className="p-5">
                <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-[var(--tertiary-label)]"># Deploy shadow model</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.set_shadow_model(</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">model_version</span><span className="text-[var(--picsellia-green)]">=</span><span className="text-[var(--label)]">new_version</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>{'\n\n'}
                    <span className="text-[var(--tertiary-label)]"># Run shadow prediction</span>{'\n'}
                    <span className="text-[var(--label)]">prediction.predict_shadow()</span>
                  </code>
                </pre>
              </div>
              <div className="p-5">
                <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-[var(--tertiary-label)]"># Setup auto-promotion policy</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.setup_continuous_deployment(</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">promotion_threshold</span><span className="text-[var(--picsellia-green)]">=</span><span className="text-[var(--picsellia-green)]">0.05</span><span className="text-[var(--label)]">,</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">min_samples</span><span className="text-[var(--picsellia-green)]">=</span><span className="text-[var(--picsellia-green)]">1000</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>{'\n\n'}
                    <span className="text-[var(--label)]">deployment.toggle_continuous_deployment(</span><span className="text-[var(--picsellia-green)]">True</span><span className="text-[var(--label)]">)</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End-to-End Workflow */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              End-to-End
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              The complete automation stack
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              From data collection to model deployment, every step is connected
              and automated. Full lineage, full visibility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Continuous Training',
                description: 'Automatic retraining triggered by review thresholds or drift detection',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                color: 'var(--picsellia-green)',
                features: ['Review-based triggers', 'Drift detection', 'GPU auto-provisioning'],
              },
              {
                title: 'Continuous Deployment',
                description: 'Safe model promotion with shadow deployment and automated policies',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                ),
                color: 'var(--system-pink)',
                features: ['Shadow model testing', 'A/B comparison', 'One-click promotion'],
              },
              {
                title: 'Full Observability',
                description: 'Monitor every prediction, track every metric, trace every decision',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                color: 'var(--system-orange)',
                features: ['Real-time dashboards', 'Anomaly alerts', 'Complete lineage'],
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `color-mix(in srgb, ${item.color} 15%, transparent)`, color: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--label)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--tertiary-label)] mb-4">{item.description}</p>
                <div className="space-y-2">
                  {item.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-[var(--secondary-label)]">
                      <svg className="w-3 h-3" style={{ color: item.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="card p-0 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--picsellia-green) 1px, transparent 1px), linear-gradient(90deg, var(--picsellia-green) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }} />
            </div>

            <div className="relative z-10 p-12 md:p-16 text-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                Ready to automate your ML lifecycle?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                Set up continuous training and deployment in minutes.
                Let your models improve themselves.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/trial" className="btn-primary px-8 py-3">
                  Start Free Trial
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link href="/demo" className="btn-secondary px-8 py-3">
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
