'use client';

import Image from 'next/image';
import Link from 'next/link';

// Supported frameworks
const frameworks = [
  { name: 'PyTorch', icon: '/images/community/partners/pytorch.svg' },
  { name: 'TensorFlow', icon: '/images/community/partners/tensorflow.svg' },
  { name: 'Ultralytics', icon: '/images/community/partners/ultralytics.svg' },
  { name: 'Hugging Face', icon: '/images/community/partners/huggingface.svg' },
  { name: 'Keras', icon: '/images/community/partners/keras.svg' },
];

// Log types
const logTypes = [
  { name: 'Scalar', description: 'Single values (loss, accuracy)', color: 'var(--system-blue)', icon: 'number' },
  { name: 'Line', description: 'Time-series metrics', color: 'var(--picsellia-green)', icon: 'chart' },
  { name: 'Image', description: 'Visualizations & samples', color: 'var(--system-pink)', icon: 'image' },
  { name: 'Table', description: 'Structured data', color: 'var(--system-orange)', icon: 'table' },
  { name: 'Histogram', description: 'Distributions', color: 'var(--system-indigo)', icon: 'histogram' },
  { name: 'Confusion Matrix', description: 'Classification results', color: 'var(--system-teal)', icon: 'matrix' },
];

// Metrics chart visualization
const MetricsChart = () => {
  const lines = [
    { name: 'train_loss', color: 'var(--system-blue)', points: [0.9, 0.7, 0.5, 0.35, 0.25, 0.18, 0.12, 0.09] },
    { name: 'val_loss', color: 'var(--system-orange)', points: [0.95, 0.75, 0.55, 0.42, 0.35, 0.30, 0.28, 0.27] },
    { name: 'mAP', color: 'var(--picsellia-green)', points: [0.1, 0.25, 0.45, 0.58, 0.68, 0.75, 0.82, 0.87] },
  ];

  return (
    <div className="relative w-full h-full bg-[var(--black)] rounded-lg overflow-hidden p-4">
      {/* Y-axis */}
      <div className="absolute left-2 top-4 bottom-8 flex flex-col justify-between text-[9px] text-[var(--tertiary-label)] font-mono">
        <span>1.0</span>
        <span>0.5</span>
        <span>0.0</span>
      </div>

      {/* Chart area */}
      <div className="ml-6 h-full">
        <svg className="w-full h-[calc(100%-20px)]" viewBox="0 0 100 50" preserveAspectRatio="none">
          {/* Grid lines */}
          <line x1="0" y1="25" x2="100" y2="25" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,2" />
          <line x1="0" y1="0" x2="100" y2="0" stroke="var(--border)" strokeWidth="0.3" strokeDasharray="2,2" />
          <line x1="0" y1="50" x2="100" y2="50" stroke="var(--border)" strokeWidth="0.3" />

          {/* Lines */}
          {lines.map((line) => {
            const pathData = line.points
              .map((p, i) => {
                const x = (i / (line.points.length - 1)) * 100;
                const y = 50 - p * 50;
                return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
              })
              .join(' ');

            return (
              <path
                key={line.name}
                d={pathData}
                fill="none"
                stroke={line.color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            );
          })}
        </svg>

        {/* X-axis */}
        <div className="flex justify-between text-[9px] text-[var(--tertiary-label)] font-mono mt-1">
          <span>0</span>
          <span>Epoch</span>
          <span>100</span>
        </div>
      </div>

      {/* Legend */}
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        {lines.map((line) => (
          <div key={line.name} className="flex items-center gap-1.5 text-[9px]">
            <div className="w-3 h-0.5 rounded" style={{ backgroundColor: line.color }} />
            <span className="text-[var(--secondary-label)]">{line.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Experiment comparison table
const ComparisonTable = () => {
  const experiments = [
    { name: 'exp-001', mAP: 0.87, loss: 0.09, lr: '1e-4', epochs: 100, status: 'completed' },
    { name: 'exp-002', mAP: 0.82, loss: 0.12, lr: '1e-3', epochs: 80, status: 'completed' },
    { name: 'exp-003', mAP: 0.91, loss: 0.07, lr: '5e-5', epochs: 150, status: 'running' },
  ];

  return (
    <div className="card p-0 overflow-hidden">
      <div className="px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
        <span className="text-xs font-medium text-[var(--system-teal)]">EXPERIMENT COMPARISON</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-[var(--border)] bg-[var(--black)]">
              <th className="px-4 py-2 text-left text-[var(--tertiary-label)] font-medium">Name</th>
              <th className="px-4 py-2 text-right text-[var(--tertiary-label)] font-medium">mAP</th>
              <th className="px-4 py-2 text-right text-[var(--tertiary-label)] font-medium">Loss</th>
              <th className="px-4 py-2 text-right text-[var(--tertiary-label)] font-medium">LR</th>
              <th className="px-4 py-2 text-right text-[var(--tertiary-label)] font-medium">Epochs</th>
              <th className="px-4 py-2 text-center text-[var(--tertiary-label)] font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {experiments.map((exp, i) => (
              <tr key={exp.name} className={`border-b border-[var(--border)] ${i === 2 ? 'bg-[var(--picsellia-green)]/5' : ''}`}>
                <td className="px-4 py-3 font-mono text-[var(--label)]">{exp.name}</td>
                <td className="px-4 py-3 text-right font-mono text-[var(--picsellia-green)]">{exp.mAP.toFixed(2)}</td>
                <td className="px-4 py-3 text-right font-mono text-[var(--system-orange)]">{exp.loss.toFixed(2)}</td>
                <td className="px-4 py-3 text-right font-mono text-[var(--secondary-label)]">{exp.lr}</td>
                <td className="px-4 py-3 text-right font-mono text-[var(--secondary-label)]">{exp.epochs}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-medium ${
                      exp.status === 'running'
                        ? 'bg-[var(--system-blue)]/10 text-[var(--system-blue)]'
                        : 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]'
                    }`}
                  >
                    {exp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default function ExperimentTrackingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--system-teal)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--system-indigo)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--system-teal)]/10 border border-[var(--system-teal)]/20 mb-8">
                <svg className="w-4 h-4 text-[var(--system-teal)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-sm font-medium text-[var(--system-teal)]">MLOps</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
                Track Experiments<br />
                <span className="text-[var(--system-teal)]">Ship Better Models</span>
              </h1>

              <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-lg">
                Full reproducibility with metrics, parameters, and artifacts.
                Compare runs, collaborate with your team, and version models automatically.
              </p>

              {/* Framework logos */}
              <div className="flex items-center gap-3 mb-10">
                <span className="text-sm text-[var(--tertiary-label)]">Works with:</span>
                <div className="flex items-center gap-3">
                  {frameworks.slice(0, 4).map((fw) => (
                    <div
                      key={fw.name}
                      className="w-9 h-9 rounded-lg bg-[var(--tertiary-system-background)] border border-[var(--border)] flex items-center justify-center"
                      title={fw.name}
                    >
                      <Image src={fw.icon} alt={fw.name} width={20} height={20} />
                    </div>
                  ))}
                  <span className="text-xs text-[var(--tertiary-label)]">+more</span>
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
                <Link href="https://documentation.picsellia.com/docs/experiment" className="btn-secondary px-8 py-4 text-base">
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
                  src="/videos/experiment tracking animation.webm"
                />
              </div>

              {/* Floating experiment card */}
              <div className="absolute -bottom-4 -left-4 card px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-[var(--label)]">Best Model</div>
                    <div className="text-[10px] text-[var(--tertiary-label)]">mAP: 0.91 • exp-003</div>
                  </div>
                </div>
              </div>

              {/* Floating GPU indicator */}
              <div className="absolute -top-4 -right-4 card px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-[var(--system-blue)] animate-pulse" />
                  <span className="text-[var(--secondary-label)]">Training on GPU</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logging Capabilities Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-teal) 1px, transparent 1px), linear-gradient(90deg, var(--system-teal) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-teal)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Logging
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Log everything, miss nothing
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Capture metrics, parameters, artifacts, and evaluations with a simple API.
              Full lineage tracking with minimal integration code.
            </p>
          </div>

          {/* Log types grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {logTypes.map((type) => (
              <div
                key={type.name}
                className="card p-5 group hover:border-[var(--system-teal)]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `color-mix(in srgb, ${type.color} 15%, transparent)` }}
                  >
                    {type.icon === 'number' && (
                      <span className="text-lg font-bold" style={{ color: type.color }}>#</span>
                    )}
                    {type.icon === 'chart' && (
                      <svg className="w-5 h-5" style={{ color: type.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                    )}
                    {type.icon === 'image' && (
                      <svg className="w-5 h-5" style={{ color: type.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    )}
                    {type.icon === 'table' && (
                      <svg className="w-5 h-5" style={{ color: type.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    )}
                    {type.icon === 'histogram' && (
                      <svg className="w-5 h-5" style={{ color: type.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                    {type.icon === 'matrix' && (
                      <svg className="w-5 h-5" style={{ color: type.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--label)] mb-1">{type.name}</h3>
                    <p className="text-xs text-[var(--tertiary-label)]">{type.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SDK Code example */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="card p-0 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                  <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
                </div>
                <span className="text-xs text-[var(--tertiary-label)]">train.py</span>
              </div>
              <pre className="p-5 text-xs overflow-x-auto bg-[var(--black)] font-mono leading-relaxed">
                <code>
                  <span className="text-[var(--system-indigo)]">from</span> <span className="text-[var(--label)]">picsellia</span> <span className="text-[var(--system-indigo)]">import</span> <span className="text-[var(--label)]">Client</span>{'\n\n'}
                  <span className="text-[var(--label)]">client</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">Client()</span>{'\n'}
                  <span className="text-[var(--label)]">experiment</span> <span className="text-[var(--system-indigo)]">=</span> <span className="text-[var(--label)]">client.get_experiment(</span>{'\n'}
                  {'  '}<span className="text-[var(--picsellia-green)]">&quot;my-experiment&quot;</span>{'\n'}
                  <span className="text-[var(--label)]">)</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Log hyperparameters</span>{'\n'}
                  <span className="text-[var(--label)]">experiment.log_parameters({'{'}</span>{'\n'}
                  {'  '}<span className="text-[var(--picsellia-green)]">&quot;learning_rate&quot;</span><span className="text-[var(--label)]">:</span> <span className="text-[var(--system-orange)]">1e-4</span><span className="text-[var(--label)]">,</span>{'\n'}
                  {'  '}<span className="text-[var(--picsellia-green)]">&quot;batch_size&quot;</span><span className="text-[var(--label)]">:</span> <span className="text-[var(--system-orange)]">32</span><span className="text-[var(--label)]">,</span>{'\n'}
                  {'  '}<span className="text-[var(--picsellia-green)]">&quot;epochs&quot;</span><span className="text-[var(--label)]">:</span> <span className="text-[var(--system-orange)]">100</span>{'\n'}
                  <span className="text-[var(--label)]">{'}'})</span>{'\n\n'}
                  <span className="text-[var(--tertiary-label)]"># Log metrics during training</span>{'\n'}
                  <span className="text-[var(--system-indigo)]">for</span> <span className="text-[var(--label)]">epoch</span> <span className="text-[var(--system-indigo)]">in</span> <span className="text-[var(--label)]">range(epochs):</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">experiment.log(</span>{'\n'}
                  {'    '}<span className="text-[var(--picsellia-green)]">&quot;train_loss&quot;</span><span className="text-[var(--label)]">,</span>{'\n'}
                  {'    '}<span className="text-[var(--label)]">loss.item(),</span>{'\n'}
                  {'    '}<span className="text-[var(--label)]">LogType.LINE</span>{'\n'}
                  {'  '}<span className="text-[var(--label)]">)</span>
                </code>
              </pre>
            </div>

            <div className="space-y-4">
              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-blue)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)]">Artifact Storage</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Store checkpoints, configs, and outputs</p>
                  </div>
                </div>
                <code className="text-xs font-mono text-[var(--secondary-label)]">
                  experiment.store(&quot;model.pt&quot;)
                </code>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--system-orange)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)]">Dataset Attachment</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Link training data for reproducibility</p>
                  </div>
                </div>
                <code className="text-xs font-mono text-[var(--secondary-label)]">
                  experiment.attach_dataset(dataset_version)
                </code>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--label)]">Model Export</h4>
                    <p className="text-xs text-[var(--tertiary-label)]">Push to model registry with one call</p>
                  </div>
                </div>
                <code className="text-xs font-mono text-[var(--secondary-label)]">
                  experiment.export_as_model(&quot;my-model&quot;)
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--system-indigo)]/5 rounded-full blur-[100px]" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Compare
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Compare trainings instantly
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                See the exact training distribution, hyperparameters, and augmentations
                behind every performance change. Find your best model faster.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Side-by-side metric comparison</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Parameter diff highlighting</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Dataset version tracking</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Collaborative comments</span>
                </div>
              </div>
            </div>

            {/* Comparison table */}
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* CV Engine Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--system-pink) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-pink)] text-sm font-medium uppercase tracking-wider mb-3 block">
              CV Engine
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Build training pipelines with ease
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Picsellia CV Engine is a modular toolkit for constructing computer vision workflows.
              Composable steps, framework extensions, and CLI automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {/* Pipeline Types */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--system-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Training Pipelines</h3>
              <p className="text-sm text-[var(--tertiary-label)] mb-4">
                Data → Model → Results. Streamlined training processes with built-in logic.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-blue)]/10 text-[var(--system-blue)]">Ultralytics</span>
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-blue)]/10 text-[var(--system-blue)]">PyTorch</span>
              </div>
            </div>

            {/* Processing Pipelines */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--system-orange)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--system-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Processing Pipelines</h3>
              <p className="text-sm text-[var(--tertiary-label)] mb-4">
                Dataset transformation, pre-annotation, and data cleaning operations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-orange)]/10 text-[var(--system-orange)]">SAM2</span>
                <span className="px-2 py-1 rounded text-xs bg-[var(--system-orange)]/10 text-[var(--system-orange)]">CLIP</span>
              </div>
            </div>

            {/* Framework Support */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--label)] mb-2">Framework Extensions</h3>
              <p className="text-sm text-[var(--tertiary-label)] mb-4">
                Pluggable architecture supporting multiple training libraries.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Grounding DINO</span>
              </div>
            </div>
          </div>

          {/* CLI Example */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/60" />
                <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/60" />
              </div>
              <span className="text-xs text-[var(--tertiary-label)]">terminal</span>
            </div>
            <div className="p-5 bg-[var(--black)] font-mono text-xs">
              <div className="space-y-2">
                <div>
                  <span className="text-[var(--system-pink)]">$</span>
                  <span className="text-[var(--label)]"> pip install picsellia-cv-engine</span>
                </div>
                <div className="text-[var(--tertiary-label)]"># Initialize a new training pipeline</div>
                <div>
                  <span className="text-[var(--system-pink)]">$</span>
                  <span className="text-[var(--label)]"> pxl-pipeline init --type training</span>
                </div>
                <div className="text-[var(--tertiary-label)]"># Run locally for testing</div>
                <div>
                  <span className="text-[var(--system-pink)]">$</span>
                  <span className="text-[var(--label)]"> pxl-pipeline test</span>
                </div>
                <div className="text-[var(--tertiary-label)]"># Deploy to Picsellia cloud</div>
                <div>
                  <span className="text-[var(--system-pink)]">$</span>
                  <span className="text-[var(--label)]"> pxl-pipeline deploy --gpus 1</span>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[var(--tertiary-label)]">CLI + Python decorators</span>
                <Link href="https://picselliahq.github.io/picsellia-cv-engine/" className="text-[var(--system-pink)] hover:underline">
                  View Documentation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Registry Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Model versions visual */}
            <div className="card p-0 overflow-hidden order-2 lg:order-1">
              <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <span className="text-xs font-medium text-[var(--system-orange)]">MODEL REGISTRY</span>
                <span className="text-xs text-[var(--tertiary-label)]">yolo-defect-detector</span>
              </div>
              <div className="divide-y divide-[var(--border)]">
                {[
                  { version: 'v3', framework: 'Ultralytics', mAP: 0.91, size: '42MB', date: '2 hours ago', current: true },
                  { version: 'v2', framework: 'Ultralytics', mAP: 0.87, size: '42MB', date: '1 day ago', current: false },
                  { version: 'v1', framework: 'Ultralytics', mAP: 0.82, size: '41MB', date: '3 days ago', current: false },
                ].map((model) => (
                  <div key={model.version} className={`p-4 flex items-center gap-4 ${model.current ? 'bg-[var(--picsellia-green)]/5' : ''}`}>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${model.current ? 'bg-[var(--picsellia-green)]/10' : 'bg-[var(--tertiary-system-background)]'}`}>
                      <span className={`text-sm font-bold ${model.current ? 'text-[var(--picsellia-green)]' : 'text-[var(--secondary-label)]'}`}>
                        {model.version}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-[var(--label)]">{model.framework}</span>
                        {model.current && (
                          <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">latest</span>
                        )}
                      </div>
                      <span className="text-xs text-[var(--tertiary-label)]">{model.date}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-[var(--picsellia-green)]">{model.mAP.toFixed(2)}</div>
                      <div className="text-[10px] text-[var(--tertiary-label)]">{model.size}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Model Registry
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Version your models automatically
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Export experiments to the model registry with a single call.
                Track versions, compare performance, and deploy with confidence.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Automatic version incrementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Framework metadata (TensorFlow, PyTorch, etc.)</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Docker configuration for deployment</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--label)]">Lineage to training experiment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Section */}
      <section className="py-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(var(--system-blue) 1px, transparent 1px), linear-gradient(90deg, var(--system-blue) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Evaluation
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              COCO metrics built-in
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Add predictions, compare against ground truth, and compute standard
              evaluation metrics automatically.
            </p>
          </div>

          {/* Video demo */}
          <div className="max-w-4xl mx-auto mb-12 rounded-xl border border-[var(--border)] overflow-hidden shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto"
              src="/videos/model evaluation.webm"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { metric: 'mAP@50', value: 0.912, description: 'Mean Average Precision' },
              { metric: 'mAP@50:95', value: 0.678, description: 'Strict mAP' },
              { metric: 'Precision', value: 0.894, description: 'True Positives / Predicted' },
              { metric: 'Recall', value: 0.867, description: 'True Positives / Actual' },
            ].map((item) => (
              <div key={item.metric} className="card p-5 text-center">
                <div className="text-3xl font-bold font-mono text-[var(--label)] mb-1">
                  {item.value.toFixed(2)}
                </div>
                <div className="text-sm font-medium text-[var(--system-blue)] mb-1">{item.metric}</div>
                <div className="text-xs text-[var(--tertiary-label)]">{item.description}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--tertiary-label)]">
              Supports rectangles, polygons, classifications, and keypoints
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--system-teal)]/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="card p-12 md:p-20 text-center relative overflow-hidden border-[var(--system-teal)]/20">
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="w-full h-full" style={{
                backgroundImage: `linear-gradient(var(--system-teal) 1px, transparent 1px), linear-gradient(90deg, var(--system-teal) 1px, transparent 1px)`,
                backgroundSize: '32px 32px',
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Ready to track your experiments?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-lg mx-auto mb-10 text-lg">
                Start logging metrics, comparing runs, and shipping better models
                with full reproducibility.
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
