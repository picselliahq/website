'use client';

import Link from 'next/link';

// Real-time metrics visualization
const LiveMetricsChart = () => {
  // Simulated real-time inference data
  const dataPoints = [
    { time: '00:00', inferences: 1245, anomalies: 12, latency: 45 },
    { time: '04:00', inferences: 890, anomalies: 8, latency: 42 },
    { time: '08:00', inferences: 2340, anomalies: 23, latency: 48 },
    { time: '12:00', inferences: 3120, anomalies: 31, latency: 52 },
    { time: '16:00', inferences: 2890, anomalies: 28, latency: 47 },
    { time: '20:00', inferences: 1560, anomalies: 15, latency: 44 },
    { time: 'Now', inferences: 1890, anomalies: 18, latency: 46 },
  ];

  const maxInferences = Math.max(...dataPoints.map((d) => d.inferences));

  return (
    <div className="relative w-full h-full bg-[var(--black)] rounded-lg overflow-hidden p-4">
      {/* Header stats */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[var(--picsellia-green)] animate-pulse" />
          <span className="text-xs text-[var(--picsellia-green)]">Live</span>
        </div>
        <div className="flex items-center gap-4 text-[10px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[var(--system-blue)]" />
            <span className="text-[var(--tertiary-label)]">Inferences</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[var(--system-red)]" />
            <span className="text-[var(--tertiary-label)]">Anomalies</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[calc(100%-60px)] flex items-end gap-2">
        {dataPoints.map((point, i) => (
          <div key={point.time} className="flex-1 flex flex-col items-center gap-1">
            <div className="w-full flex flex-col items-center gap-0.5" style={{ height: '140px' }}>
              {/* Inference bar */}
              <div
                className="w-full rounded-t transition-all hover:opacity-80"
                style={{
                  height: `${(point.inferences / maxInferences) * 100}%`,
                  backgroundColor: 'var(--system-blue)',
                  opacity: i === dataPoints.length - 1 ? 1 : 0.6,
                }}
              />
              {/* Anomaly indicator */}
              {point.anomalies > 20 && (
                <div className="absolute -top-1 w-1.5 h-1.5 rounded-full bg-[var(--system-red)]" />
              )}
            </div>
            <span className="text-[8px] text-[var(--tertiary-label)]">{point.time}</span>
          </div>
        ))}
      </div>

      {/* Bottom stats */}
      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
        <div className="text-xs">
          <span className="text-[var(--tertiary-label)]">Today: </span>
          <span className="text-[var(--label)] font-mono">14,935</span>
          <span className="text-[var(--tertiary-label)]"> inferences</span>
        </div>
        <div className="text-xs">
          <span className="text-[var(--system-red)]">135</span>
          <span className="text-[var(--tertiary-label)]"> anomalies (0.9%)</span>
        </div>
      </div>
    </div>
  );
};

// Anomaly detection visualization
const AnomalyGrid = () => {
  const anomalies = [
    { id: 1, confidence: 0.23, type: 'low_confidence', severity: 'high' },
    { id: 2, confidence: 0.45, type: 'distribution_shift', severity: 'medium' },
    { id: 3, confidence: 0.31, type: 'low_confidence', severity: 'high' },
    { id: 4, confidence: 0.89, type: 'novel_class', severity: 'low' },
    { id: 5, confidence: 0.18, type: 'low_confidence', severity: 'high' },
    { id: 6, confidence: 0.52, type: 'edge_case', severity: 'medium' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {anomalies.map((anomaly) => (
        <div
          key={anomaly.id}
          className={`aspect-square rounded-lg border-2 relative overflow-hidden ${
            anomaly.severity === 'high'
              ? 'border-[var(--system-red)]/50 bg-[var(--system-red)]/5'
              : anomaly.severity === 'medium'
              ? 'border-[var(--system-orange)]/50 bg-[var(--system-orange)]/5'
              : 'border-[var(--system-yellow)]/50 bg-[var(--system-yellow)]/5'
          }`}
        >
          {/* Placeholder for image */}
          <div className="absolute inset-0 bg-[var(--tertiary-system-background)]" />

          {/* Confidence badge */}
          <div className="absolute bottom-1 left-1 right-1">
            <div
              className={`px-1.5 py-0.5 rounded text-[9px] font-mono text-center ${
                anomaly.confidence < 0.3
                  ? 'bg-[var(--system-red)] text-white'
                  : anomaly.confidence < 0.5
                  ? 'bg-[var(--system-orange)] text-white'
                  : 'bg-[var(--system-yellow)] text-black'
              }`}
            >
              {(anomaly.confidence * 100).toFixed(0)}%
            </div>
          </div>

          {/* Alert icon */}
          {anomaly.severity === 'high' && (
            <div className="absolute top-1 right-1">
              <svg className="w-3 h-3 text-[var(--system-red)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Drift indicator component
const DriftIndicator = ({ label, current, baseline, unit = '%' }: { label: string; current: number; baseline: number; unit?: string }) => {
  const drift = ((current - baseline) / baseline) * 100;
  const isNegative = drift < 0;
  const isDanger = Math.abs(drift) > 10;

  return (
    <div className="flex items-center justify-between py-3 border-b border-[var(--border)] last:border-0">
      <span className="text-sm text-[var(--label)]">{label}</span>
      <div className="flex items-center gap-3">
        <span className="text-sm font-mono text-[var(--secondary-label)]">
          {current.toFixed(1)}{unit}
        </span>
        <div
          className={`flex items-center gap-1 px-2 py-0.5 rounded text-xs font-mono ${
            isDanger
              ? isNegative
                ? 'bg-[var(--system-red)]/10 text-[var(--system-red)]'
                : 'bg-[var(--system-orange)]/10 text-[var(--system-orange)]'
              : 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]'
          }`}
        >
          {isNegative ? '↓' : '↑'} {Math.abs(drift).toFixed(1)}%
        </div>
      </div>
    </div>
  );
};

export default function ModelMonitoringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-[var(--system-red)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[var(--system-orange)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-red)]/10 border border-[var(--system-red)]/20 mb-8">
                <svg className="w-4 h-4 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span className="text-sm font-medium text-[var(--system-red)]">Observability</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Monitor Models<br />
                <span className="text-[var(--system-red)]">In Production</span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
                Real-time observability for computer vision models. Detect anomalies,
                track drift, and close the feedback loop automatically.
              </p>

              {/* Key metrics preview */}
              <div className="flex items-center gap-6 mb-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--label)] font-mono">24/7</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Monitoring</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--system-red)] font-mono">&lt;1%</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Anomaly Rate</div>
                </div>
                <div className="w-px h-10 bg-[var(--border)]" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-[var(--picsellia-green)] font-mono">&lt;50ms</div>
                  <div className="text-xs text-[var(--tertiary-label)]">Latency P99</div>
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
                <Link href="https://documentation.picsellia.com/docs/deployment" className="btn-secondary px-8 py-4 text-base">
                  Documentation
                </Link>
              </div>
            </div>

            {/* Right - Live Metrics Chart */}
            <div className="relative hidden lg:block">
              <div className="h-[350px] rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
                <LiveMetricsChart />
              </div>

              {/* Floating alert card */}
              <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-xl border-[var(--system-red)]/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-red)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[var(--system-red)]">Anomaly Detected</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">Low confidence spike at 12:34</div>
                  </div>
                </div>
              </div>

              {/* Floating latency card */}
              <div className="absolute -top-4 -right-4 card px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[var(--tertiary-label)]">Avg latency:</span>
                  <span className="text-[var(--picsellia-green)] font-mono">46ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Anomaly Detection Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-red) 1px, transparent 1px), linear-gradient(90deg, var(--system-red) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-red)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Anomaly Detection
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Catch failures before users do
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Automatic 24/7 monitoring flags anomalous inputs and low-confidence predictions.
                Reveal blindspots and discover edge cases in production data.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-red)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Low Confidence Alerts</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Flag predictions below confidence thresholds automatically</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Distribution Shift</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Detect when production data drifts from training data</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-yellow)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--system-yellow)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)] mb-1">Novel Patterns</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Discover previously unseen data patterns and edge cases</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Anomaly Grid */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-[var(--system-red)]">FLAGGED PREDICTIONS</span>
                <span className="text-xs text-[var(--tertiary-label)]">Last hour</span>
              </div>
              <AnomalyGrid />
              <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-xs text-[var(--tertiary-label)]">6 anomalies detected</span>
                <button className="text-xs text-[var(--system-red)] hover:underline">Review all →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--system-blue)]/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Live Dashboard
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Real-time prediction insights
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Filter millions of inferences to identify the top anomalies.
              From edge case detection to training dataset integration in seconds.
            </p>
          </div>

          {/* Dashboard cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-3xl font-bold font-mono text-[var(--label)]">1.2M</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Total Inferences</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Last 24 hours</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold font-mono text-[var(--label)]">47ms</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Avg Latency</h3>
              <p className="text-xs text-[var(--tertiary-label)]">P50 response time</p>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-3xl font-bold font-mono text-[var(--label)]">99.1%</span>
              </div>
              <h3 className="text-sm font-semibold text-[var(--label)] mb-1">Accuracy</h3>
              <p className="text-xs text-[var(--tertiary-label)]">Based on reviewed predictions</p>
            </div>
          </div>

          {/* Prediction methods */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <span className="text-xs font-medium text-[var(--system-blue)]">MONITORING METHODS</span>
              <span className="text-xs text-[var(--tertiary-label)]">Python SDK</span>
            </div>
            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
              <div className="p-5">
                <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-[var(--tertiary-label)]"># Monitor from file</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.monitor(</span>{'\n'}
                    {'  '}<span className="text-[var(--picsellia-green)]">&quot;image.jpg&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">tags</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--label)]">[</span><span className="text-[var(--picsellia-green)]">&quot;production&quot;</span><span className="text-[var(--label)]">]</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>{'\n\n'}
                    <span className="text-[var(--tertiary-label)]"># Monitor from bytes</span>{'\n'}
                    <span className="text-[var(--label)]">deployment.monitor_bytes(</span>{'\n'}
                    {'  '}<span className="text-[var(--picsellia-green)]">&quot;frame.jpg&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">raw_bytes</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>
                  </code>
                </pre>
              </div>
              <div className="p-5">
                <pre className="text-xs font-mono leading-relaxed overflow-x-auto">
                  <code>
                    <span className="text-[var(--tertiary-label)]"># Get deployment stats</span>{'\n'}
                    <span className="text-[var(--label)]">stats</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">deployment.get_stats(</span>{'\n'}
                    {'  '}<span className="text-[var(--label)]">window</span><span className="text-[var(--system-indigo)]">=</span><span className="text-[var(--picsellia-green)]">&quot;24h&quot;</span>{'\n'}
                    <span className="text-[var(--label)]">)</span>{'\n\n'}
                    <span className="text-[var(--tertiary-label)]"># Access metrics</span>{'\n'}
                    <span className="text-[var(--label)]">print(stats.predictions)</span>{'\n'}
                    <span className="text-[var(--label)]">print(stats.reviews)</span>{'\n'}
                    <span className="text-[var(--label)]">print(stats.latency_p99)</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drift Detection Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-orange) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Drift metrics */}
            <div className="card p-0 overflow-hidden order-2 lg:order-1">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-orange)]">DRIFT DETECTION</span>
                <span className="text-xs text-[var(--tertiary-label)]">vs. training baseline</span>
              </div>
              <div className="p-4">
                <DriftIndicator label="Mean Brightness" current={127.3} baseline={118.5} unit="" />
                <DriftIndicator label="Contrast" current={0.42} baseline={0.45} unit="" />
                <DriftIndicator label="Class Distribution" current={23.1} baseline={25.8} />
                <DriftIndicator label="Object Size (avg)" current={156} baseline={142} unit="px" />
                <DriftIndicator label="Confidence (avg)" current={0.84} baseline={0.91} unit="" />
              </div>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--system-orange)]" />
                    <span className="text-[var(--system-orange)]">2 metrics drifting</span>
                  </div>
                  <span className="text-[var(--tertiary-label)]">Last 7 days</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Data Drift
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Track distribution changes
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Compare production data against your training baseline.
                Get alerted when distributions shift beyond acceptable thresholds.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Image statistics (brightness, contrast, blur)</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Class distribution changes</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Confidence score degradation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Custom threshold alerts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Loop Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Continuous Improvement
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Close the feedback loop
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Convert production failures into training data. Review predictions,
              attach to datasets, and trigger retraining automatically.
            </p>
          </div>

          {/* Feedback loop diagram */}
          <div className="card p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--label)]">Monitor</span>
                <span className="text-xs text-[var(--tertiary-label)]">Production inference</span>
              </div>

              <svg className="w-8 h-8 text-[var(--tertiary-label)] rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-[var(--system-red)]/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[var(--system-red)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--label)]">Detect</span>
                <span className="text-xs text-[var(--tertiary-label)]">Anomalies & drift</span>
              </div>

              <svg className="w-8 h-8 text-[var(--tertiary-label)] rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--label)]">Review</span>
                <span className="text-xs text-[var(--tertiary-label)]">Verify & label</span>
              </div>

              <svg className="w-8 h-8 text-[var(--tertiary-label)] rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-3">
                  <svg className="w-8 h-8 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <span className="text-sm font-medium text-[var(--label)]">Retrain</span>
                <span className="text-xs text-[var(--tertiary-label)]">Improve model</span>
              </div>
            </div>
          </div>

          {/* Continuous features */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Continuous Training</h3>
                  <p className="text-sm text-[var(--tertiary-label)] mb-4">
                    Automatically trigger retraining when prediction review thresholds are met.
                    Keep models fresh with production data.
                  </p>
                  <code className="text-xs font-mono text-[var(--secondary-label)] bg-[var(--black)] px-2 py-1 rounded">
                    deployment.toggle_continuous_training()
                  </code>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--system-pink)]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[var(--system-pink)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Continuous Deployment</h3>
                  <p className="text-sm text-[var(--tertiary-label)] mb-4">
                    Manage model promotion policies between staging and production.
                    Shadow model support for A/B testing.
                  </p>
                  <code className="text-xs font-mono text-[var(--secondary-label)] bg-[var(--black)] px-2 py-1 rounded">
                    deployment.set_shadow_model(new_version)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-red)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-red)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-red) 1px, transparent 1px), linear-gradient(90deg, var(--system-red) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to monitor your models?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Start detecting anomalies, tracking drift, and improving models
                with production feedback.
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
