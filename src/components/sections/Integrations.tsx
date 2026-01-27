'use client';

import { useEffect, useRef } from 'react';

const categories = [
  {
    name: 'Cloud Providers',
    description: 'Deploy anywhere',
    color: 'var(--system-blue)',
    integrations: [
      { name: 'AWS', logo: 'AWS' },
      { name: 'Google Cloud', logo: 'GCP' },
      { name: 'Azure', logo: 'AZ' },
      { name: 'OVH', logo: 'OVH' },
    ],
  },
  {
    name: 'ML Frameworks',
    description: 'Train with any framework',
    color: 'var(--system-orange)',
    integrations: [
      { name: 'PyTorch', logo: 'PT' },
      { name: 'TensorFlow', logo: 'TF' },
      { name: 'ONNX', logo: 'OX' },
      { name: 'Ultralytics', logo: 'UL' },
    ],
  },
  {
    name: 'Infrastructure',
    description: 'Scale seamlessly',
    color: 'var(--picsellia-green)',
    integrations: [
      { name: 'Docker', logo: 'DK' },
      { name: 'Kubernetes', logo: 'K8' },
      { name: 'NVIDIA', logo: 'NV' },
      { name: 'Triton', logo: 'TR' },
    ],
  },
  {
    name: 'Ecosystem',
    description: 'Connect everything',
    color: 'var(--system-indigo)',
    integrations: [
      { name: 'Hugging Face', logo: 'HF' },
      { name: 'MLflow', logo: 'ML' },
      { name: 'Label Studio', logo: 'LS' },
      { name: 'Roboflow', logo: 'RF' },
    ],
  },
];

const allIntegrations = [
  'AWS', 'Google Cloud', 'Azure', 'PyTorch', 'TensorFlow', 'ONNX',
  'Docker', 'Kubernetes', 'NVIDIA', 'Hugging Face', 'MLflow', 'Weights & Biases',
  'Ultralytics', 'Label Studio', 'Roboflow', 'Triton', 'OVH', 'Scaleway',
];

export default function Integrations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const scroll = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-24 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              Integrations
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Works with your stack
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              Seamlessly integrate with the tools and platforms you already use. No vendor lock-in, full flexibility.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--label)]">50+</div>
              <div className="text-xs text-[var(--tertiary-label)]">Integrations</div>
            </div>
            <div className="w-px h-12 bg-[var(--border)]" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--label)]">API</div>
              <div className="text-xs text-[var(--tertiary-label)]">First approach</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <div key={category.name} className="card p-6 group hover:border-[var(--system-gray-3)] transition-all">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${category.color} 15%, transparent)` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--label)]">{category.name}</h3>
                  <p className="text-xs text-[var(--tertiary-label)]">{category.description}</p>
                </div>
              </div>

              {/* Integration Logos */}
              <div className="grid grid-cols-4 gap-2">
                {category.integrations.map((integration) => (
                  <div
                    key={integration.name}
                    className="aspect-square rounded-lg bg-[var(--tertiary-system-background)] flex items-center justify-center group-hover:bg-[var(--secondary-system-background)] transition-colors relative"
                    title={integration.name}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: category.color }}
                    >
                      {integration.logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--secondary-system-background)] p-1">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--secondary-system-background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--secondary-system-background)] to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-hidden py-4 px-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {/* Double the items for seamless loop */}
            {[...allIntegrations, ...allIntegrations].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex-shrink-0 px-5 py-3 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] hover:border-[var(--picsellia-green)] transition-colors cursor-default"
              >
                <span className="text-sm font-medium text-[var(--secondary-label)] whitespace-nowrap">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Code Example */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {/* Left - API Info */}
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center text-[var(--picsellia-green)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)]">Python SDK</h3>
                <p className="text-sm text-[var(--tertiary-label)]">pip install picsellia</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--secondary-label)]">Type-safe with full IDE support</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--secondary-label)]">Async support for high throughput</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-[var(--secondary-label)]">Works with Jupyter notebooks</span>
              </div>
            </div>
          </div>

          {/* Right - Code Snippet */}
          <div className="card p-0 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="w-3 h-3 rounded-full bg-[var(--system-red)]/50" />
              <div className="w-3 h-3 rounded-full bg-[var(--system-yellow)]/50" />
              <div className="w-3 h-3 rounded-full bg-[var(--system-green)]/50" />
              <span className="ml-2 text-xs text-[var(--tertiary-label)]">quickstart.py</span>
            </div>
            <pre className="p-4 text-sm overflow-x-auto">
              <code className="text-[var(--secondary-label)]">
                <span className="text-[var(--system-indigo)]">from</span> picsellia <span className="text-[var(--system-indigo)]">import</span> Client{'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Connect to your workspace</span>{'\n'}
                client = Client(){'\n'}
                project = client.get_project(<span className="text-[var(--picsellia-green)]">&quot;defect-detection&quot;</span>){'\n\n'}
                <span className="text-[var(--tertiary-label)]"># Train and deploy in one line</span>{'\n'}
                model = project.train(framework=<span className="text-[var(--picsellia-green)]">&quot;yolov8&quot;</span>){'\n'}
                model.deploy(target=<span className="text-[var(--picsellia-green)]">&quot;production&quot;</span>)
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
