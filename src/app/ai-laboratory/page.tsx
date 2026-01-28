'use client';

import Image from 'next/image';
import Link from 'next/link';

// Supported frameworks
const frameworks = [
  { name: 'PyTorch', icon: '/images/community/partners/pytorch.svg' },
  { name: 'TensorFlow', icon: '/images/community/partners/tensorflow.svg' },
  { name: 'Ultralytics', icon: '/images/community/partners/ultralytics.svg' },
  { name: 'Hugging Face', icon: '/images/community/partners/huggingface.svg' },
];

// Pre-built pipelines
const pipelines = [
  {
    name: 'Ultralytics',
    description: 'Train YOLOv8/v11 models for detection, segmentation, and classification',
    icon: '/images/community/partners/ultralytics.svg',
    tasks: ['Detection', 'Segmentation', 'Classification'],
    status: 'production',
  },
  {
    name: 'SAM2',
    description: 'Segment Anything Model for automatic mask generation and refinement',
    icon: '/images/community/partners/meta.svg',
    tasks: ['Segmentation', 'Pre-annotation'],
    status: 'production',
  },
  {
    name: 'Grounding DINO',
    description: 'Open-set object detection with text prompts for zero-shot labeling',
    icon: '/images/community/partners/huggingface.svg',
    tasks: ['Detection', 'Zero-shot'],
    status: 'production',
  },
  {
    name: 'CLIP',
    description: 'Fine-tune embeddings for domain-specific similarity search',
    icon: '/images/community/partners/openai.svg',
    tasks: ['Embeddings', 'Classification'],
    status: 'production',
  },
];

// Training modes
const trainingModes = [
  {
    id: 'no-code',
    title: 'No-Code Training',
    description: 'Launch training jobs directly from the UI. Select a pre-built pipeline, configure parameters, and start training.',
    features: ['Visual parameter configuration', 'One-click GPU allocation', 'Real-time progress monitoring'],
    codeExample: null,
    color: 'var(--picsellia-green)',
  },
  {
    id: 'sdk',
    title: 'Python SDK',
    description: 'Full programmatic control with our Python SDK. Integrate into your existing workflows and CI/CD pipelines.',
    features: ['Type-safe API', 'Jupyter support', 'Pipeline automation'],
    codeExample: `from picsellia import Client

client = Client()
experiment = client.create_experiment("yolo-training")

# Attach dataset
dataset = client.get_dataset("defects").get_version("v3")
experiment.attach_dataset(dataset)

# Launch on remote GPU
experiment.launch(gpus=1)`,
    color: 'var(--system-blue)',
  },
  {
    id: 'custom',
    title: 'Custom Pipelines',
    description: 'Build custom training pipelines with CV Engine. Modular steps, any framework, full flexibility.',
    features: ['Composable steps', 'Framework agnostic', 'Local + remote execution'],
    codeExample: `from picsellia_cv_engine import step, Pipeline

@step
def train(context):
    model = load_model(context.parameters)
    for epoch in range(context.parameters.epochs):
        # Your training logic
        context.experiment.log("loss", loss)
    context.experiment.store("model.pt")

pipeline = Pipeline([train])
pipeline.run()`,
    color: 'var(--system-orange)',
  },
];

export default function AILaboratoryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 border-b border-[var(--border)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[var(--picsellia-green)]/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[var(--system-blue)]/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Model Training</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight max-w-4xl mx-auto">
              Train Models <span className="text-[var(--picsellia-green)]">Your Way</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] mb-10 max-w-2xl mx-auto">
              From no-code training to custom PyTorch pipelines. Choose your level of control
              and let Picsellia handle the infrastructure.
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
              <Link href="https://documentation.picsellia.com/docs/experiment" className="btn-secondary px-8 py-4 text-base">
                Documentation
              </Link>
            </div>

            {/* Framework logos */}
            <div className="flex items-center justify-center gap-3">
              <span className="text-sm text-[var(--tertiary-label)]">Works with:</span>
              <div className="flex items-center gap-3">
                {frameworks.map((fw) => (
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
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { value: '1-click', label: 'GPU allocation' },
              { value: '4+', label: 'Pre-built pipelines' },
              { value: '∞', label: 'Custom flexibility' },
              { value: '0', label: 'Infrastructure to manage' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 border border-[var(--border)] rounded-xl text-center">
                <div className="text-xl font-bold font-mono text-[var(--picsellia-green)]">{stat.value}</div>
                <div className="text-xs text-[var(--tertiary-label)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modes Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Flexibility
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Choose your level of control
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Start with no-code for quick iterations, use the SDK for automation,
              or build fully custom pipelines when you need complete control.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {trainingModes.map((mode) => (
              <div key={mode.id} className="card p-0 overflow-hidden flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-[var(--border)]">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `color-mix(in srgb, ${mode.color} 15%, transparent)` }}
                  >
                    {mode.id === 'no-code' && (
                      <svg className="w-6 h-6" style={{ color: mode.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                      </svg>
                    )}
                    {mode.id === 'sdk' && (
                      <svg className="w-6 h-6" style={{ color: mode.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    )}
                    {mode.id === 'custom' && (
                      <svg className="w-6 h-6" style={{ color: mode.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--label)] mb-2">{mode.title}</h3>
                  <p className="text-sm text-[var(--secondary-label)]">{mode.description}</p>
                </div>

                {/* Code or Features */}
                <div className="flex-1">
                  {mode.codeExample ? (
                    <pre className="p-4 text-[10px] overflow-x-auto bg-[var(--black)] font-mono leading-relaxed h-full">
                      <code className="text-[var(--secondary-label)]">{mode.codeExample}</code>
                    </pre>
                  ) : (
                    <div className="p-6 bg-[var(--black)] h-full flex flex-col justify-center">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                          </div>
                          <span className="text-[var(--label)]">Configure in UI</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                            </svg>
                          </div>
                          <span className="text-[var(--label)]">Select GPU</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm">
                          <div className="w-8 h-8 rounded-lg bg-[var(--picsellia-green)]/10 flex items-center justify-center">
                            <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[var(--label)]">Launch training</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-[var(--border)]">
                  <div className="flex flex-wrap gap-2">
                    {mode.features.map((feature) => (
                      <span key={feature} className="px-2 py-1 rounded text-[10px] bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-built Pipelines Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--system-orange)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Pre-built Pipelines
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                State-of-the-art models, ready to train
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Start training in minutes with our pre-built pipelines. Ultralytics for YOLO,
                SAM2 for segmentation, Grounding DINO for zero-shot detection, and more.
              </p>

              <div className="space-y-4">
                {[
                  'One-click deployment to GPU',
                  'Pre-configured hyperparameters',
                  'Automatic metric logging',
                  'Model export to registry',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--label)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {pipelines.map((pipeline) => (
                <div key={pipeline.name} className="p-4 border border-[var(--border)] rounded-xl hover:border-[var(--system-orange)]/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-2 border border-[var(--border)]">
                      <Image src={pipeline.icon} alt={pipeline.name} width={32} height={32} className="object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-[var(--label)]">{pipeline.name}</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">
                          {pipeline.status}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--tertiary-label)] mb-2">{pipeline.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {pipeline.tasks.map((task) => (
                          <span key={task} className="px-2 py-0.5 rounded text-[10px] bg-[var(--tertiary-system-background)] text-[var(--secondary-label)]">
                            {task}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CV Engine Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-indigo)] text-sm font-medium uppercase tracking-wider mb-3 block">
              CV Engine
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Build custom pipelines with ease
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              Picsellia CV Engine is a modular toolkit for building computer vision workflows.
              Composable steps, framework extensions, and CLI automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
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
                    <span className="text-[var(--system-indigo)]">$</span>
                    <span className="text-[var(--label)]"> pip install picsellia-cv-engine</span>
                  </div>
                  <div className="text-[var(--tertiary-label)]"># Initialize a new training pipeline</div>
                  <div>
                    <span className="text-[var(--system-indigo)]">$</span>
                    <span className="text-[var(--label)]"> pxl-pipeline init --type training</span>
                  </div>
                  <div className="text-[var(--tertiary-label)]"># Run locally for testing</div>
                  <div>
                    <span className="text-[var(--system-indigo)]">$</span>
                    <span className="text-[var(--label)]"> pxl-pipeline test</span>
                  </div>
                  <div className="text-[var(--tertiary-label)]"># Deploy to Picsellia cloud</div>
                  <div>
                    <span className="text-[var(--system-indigo)]">$</span>
                    <span className="text-[var(--label)]"> pxl-pipeline deploy --gpus 1</span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 border-t border-[var(--border)] bg-[var(--tertiary-system-background)]">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[var(--tertiary-label)]">CLI + Python decorators</span>
                  <Link href="https://picselliahq.github.io/picsellia-cv-engine/" className="text-[var(--system-indigo)] hover:underline">
                    View Docs →
                  </Link>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                {
                  title: 'Modular Steps',
                  description: 'Build pipelines from reusable, composable steps with @step decorators',
                  icon: (
                    <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  ),
                },
                {
                  title: 'Framework Extensions',
                  description: 'Pre-built integrations for Ultralytics, SAM2, CLIP, and more',
                  icon: (
                    <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                    </svg>
                  ),
                },
                {
                  title: 'Local & Remote',
                  description: 'Test locally, deploy to Picsellia cloud with one command',
                  icon: (
                    <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  ),
                },
                {
                  title: 'Auto Logging',
                  description: 'Metrics, artifacts, and parameters logged automatically',
                  icon: (
                    <svg className="w-5 h-5 text-[var(--system-indigo)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
              ].map((feature) => (
                <div key={feature.title} className="p-5 border border-[var(--border)] rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--system-indigo)]/10 flex items-center justify-center flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--label)] mb-1">{feature.title}</h3>
                      <p className="text-xs text-[var(--tertiary-label)]">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GPU Infrastructure Section */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[var(--label)]">GPU Selection</h3>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)]">Available now</span>
                </div>

                <div className="space-y-3">
                  {[
                    { name: 'NVIDIA T4', vram: '16GB', price: '$0.50/hr', recommended: false },
                    { name: 'NVIDIA A10G', vram: '24GB', price: '$1.00/hr', recommended: true },
                    { name: 'NVIDIA A100', vram: '40GB', price: '$3.00/hr', recommended: false },
                  ].map((gpu) => (
                    <div
                      key={gpu.name}
                      className={`p-4 rounded-lg border ${gpu.recommended ? 'border-[var(--picsellia-green)] bg-[var(--picsellia-green)]/5' : 'border-[var(--border)]'}`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-3 h-3 rounded-full ${gpu.recommended ? 'bg-[var(--picsellia-green)]' : 'bg-[var(--tertiary-label)]'}`} />
                          <div>
                            <div className="text-sm font-medium text-[var(--label)]">{gpu.name}</div>
                            <div className="text-xs text-[var(--tertiary-label)]">{gpu.vram} VRAM</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-mono text-[var(--label)]">{gpu.price}</div>
                          {gpu.recommended && (
                            <div className="text-[10px] text-[var(--picsellia-green)]">Recommended</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <div className="flex items-center justify-between text-xs text-[var(--tertiary-label)]">
                    <span>Pay only for what you use</span>
                    <span>Auto-shutdown on completion</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
                Infrastructure
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Zero infrastructure to manage
              </h2>
              <p className="text-[var(--secondary-label)] mb-8">
                Focus on your models, not your servers. Picsellia handles GPU provisioning,
                environment setup, and job orchestration. Just click train.
              </p>

              <div className="space-y-4">
                {[
                  'On-demand GPU allocation',
                  'Pre-configured CUDA environments',
                  'Automatic job queuing',
                  'Real-time training logs',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-[var(--label)]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Integration */}
      <section className="py-24 border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-[var(--system-blue)] text-sm font-medium uppercase tracking-wider mb-3 block">
              End-to-End
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Connected to your entire workflow
            </h2>
            <p className="text-[var(--secondary-label)] max-w-2xl mx-auto">
              AI Lab integrates seamlessly with datasets, experiment tracking, and model deployment.
              Full lineage from data to production.
            </p>
          </div>

          <div className="card p-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
              {[
                { name: 'Dataset', icon: '/images/community/icons/data-management.svg', href: '/dataset-management' },
                { name: 'AI Lab', icon: '/images/community/icons/experiment-tracking.svg', href: null, active: true },
                { name: 'Experiment', icon: '/images/community/icons/experiment-tracking.svg', href: '/experiment-tracking' },
                { name: 'Model', icon: '/images/community/icons/model-monitoring.svg', href: '/model-deployment' },
                { name: 'Production', icon: '/images/community/icons/ci-cd.svg', href: '/model-monitoring' },
              ].map((item, index) => (
                <div key={item.name} className="relative">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`p-6 rounded-xl border text-center transition-all block ${
                        item.active
                          ? 'bg-[var(--picsellia-green)]/10 border-[var(--picsellia-green)]/30 scale-105'
                          : 'bg-[var(--tertiary-system-background)] border-[var(--border)] hover:border-[var(--picsellia-green)]/50'
                      }`}
                    >
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                        <Image src={item.icon} alt={item.name} width={32} height={32} />
                      </div>
                      <div className={`text-sm font-medium ${item.active ? 'text-[var(--picsellia-green)]' : 'text-[var(--label)]'}`}>
                        {item.name}
                      </div>
                    </Link>
                  ) : (
                    <div
                      className={`p-6 rounded-xl border text-center ${
                        item.active
                          ? 'bg-[var(--picsellia-green)]/10 border-[var(--picsellia-green)]/30 scale-105'
                          : 'bg-[var(--tertiary-system-background)] border-[var(--border)]'
                      }`}
                    >
                      <div className="w-10 h-10 mx-auto mb-2 flex items-center justify-center">
                        <Image src={item.icon} alt={item.name} width={32} height={32} />
                      </div>
                      <div className={`text-sm font-medium ${item.active ? 'text-[var(--picsellia-green)]' : 'text-[var(--label)]'}`}>
                        {item.name}
                      </div>
                    </div>
                  )}

                  {/* Arrow */}
                  {index < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                      <svg className="w-4 h-4 text-[var(--border)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
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
                Ready to train your models?
              </h2>
              <p className="text-[var(--secondary-label)] max-w-xl mx-auto mb-10 text-lg">
                Start with no-code training or build custom pipelines.
                Zero infrastructure to manage.
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
