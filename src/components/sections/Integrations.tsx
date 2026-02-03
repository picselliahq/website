'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const categoryKeys = ['cloudProviders', 'mlFrameworks', 'infrastructure', 'ecosystem'] as const;
const categoryColors = {
  cloudProviders: 'var(--system-blue)',
  mlFrameworks: 'var(--system-orange)',
  infrastructure: 'var(--picsellia-green)',
  ecosystem: 'var(--system-indigo)',
};
const categoryIntegrations = {
  cloudProviders: [
    { name: 'Amazon S3', logo: '/images/community/partners/amazon-s3.svg' },
    { name: 'Google Cloud', logo: '/images/community/partners/google-cloud.svg' },
    { name: 'Azure', logo: '/images/community/partners/azure.svg' },
    { name: 'Snowflake', logo: '/images/community/partners/snowflake.svg' },
  ],
  mlFrameworks: [
    { name: 'PyTorch', logo: '/images/community/partners/pytorch.svg' },
    { name: 'TensorFlow', logo: '/images/community/partners/tensorflow.svg' },
    { name: 'Keras', logo: '/images/community/partners/keras.svg' },
    { name: 'Ultralytics', logo: '/images/community/partners/ultralytics.svg' },
  ],
  infrastructure: [
    { name: 'NVIDIA Jetson', logo: '/images/community/partners/nvidia-jetson.svg' },
    { name: 'Databricks', logo: '/images/community/partners/databricks.svg' },
    { name: 'SageMaker', logo: '/images/community/partners/sagemaker.svg' },
    { name: 'Jupyter', logo: '/images/community/partners/jupyter.svg' },
  ],
  ecosystem: [
    { name: 'Hugging Face', logo: '/images/community/partners/huggingface.svg' },
    { name: 'MLflow', logo: '/images/community/partners/mlflow.svg' },
    { name: 'Weights & Biases', logo: '/images/community/partners/weights-biases.svg' },
    { name: 'OpenAI', logo: '/images/community/partners/openai.svg' },
  ],
};

const allIntegrations = [
  { name: 'PyTorch', logo: '/images/community/partners/pytorch.svg' },
  { name: 'TensorFlow', logo: '/images/community/partners/tensorflow.svg' },
  { name: 'Hugging Face', logo: '/images/community/partners/huggingface.svg' },
  { name: 'Azure', logo: '/images/community/partners/azure.svg' },
  { name: 'Google Cloud', logo: '/images/community/partners/google-cloud.svg' },
  { name: 'Amazon S3', logo: '/images/community/partners/amazon-s3.svg' },
  { name: 'MLflow', logo: '/images/community/partners/mlflow.svg' },
  { name: 'Jupyter', logo: '/images/community/partners/jupyter.svg' },
  { name: 'Ultralytics', logo: '/images/community/partners/ultralytics.svg' },
  { name: 'NVIDIA Jetson', logo: '/images/community/partners/nvidia-jetson.svg' },
  { name: 'Weights & Biases', logo: '/images/community/partners/weights-biases.svg' },
  { name: 'Keras', logo: '/images/community/partners/keras.svg' },
  { name: 'OpenAI', logo: '/images/community/partners/openai.svg' },
  { name: 'Anthropic', logo: '/images/community/partners/anthropic.svg' },
  { name: 'Meta', logo: '/images/community/partners/meta.svg' },
  { name: 'Mistral', logo: '/images/community/partners/mistral.svg' },
  { name: 'Databricks', logo: '/images/community/partners/databricks.svg' },
  { name: 'Snowflake', logo: '/images/community/partners/snowflake.svg' },
];

export default function Integrations() {
  const t = useTranslations('home.integrations');
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
    <section className="py-24 border-t border-[var(--border)] relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(97, 135, 226, 0.04) 0%, transparent 70%)' }} />
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
          <div>
            <span className="text-[var(--picsellia-green)] text-sm font-medium uppercase tracking-wider mb-3 block">
              {t('sectionLabel')}
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              {t('title')}
            </h2>
            <p className="text-[var(--secondary-label)] max-w-xl">
              {t('description')}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--label)]">{t('integrationsCount')}</div>
              <div className="text-xs text-[var(--tertiary-label)]">{t('integrationsLabel')}</div>
            </div>
            <div className="w-px h-12 bg-[var(--border)]" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[var(--label)]">{t('apiLabel')}</div>
              <div className="text-xs text-[var(--tertiary-label)]">{t('apiDescription')}</div>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categoryKeys.map((key) => (
            <div key={key} className="card p-6 group hover:border-[var(--system-gray-3)] transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `color-mix(in srgb, ${categoryColors[key]} 15%, transparent)` }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: categoryColors[key] }} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-[var(--label)]">{t(`categories.${key}.name`)}</h3>
                  <p className="text-xs text-[var(--tertiary-label)]">{t(`categories.${key}.description`)}</p>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {categoryIntegrations[key].map((integration) => (
                  <div
                    key={integration.name}
                    className="aspect-square rounded-lg bg-[var(--tertiary-system-background)] flex items-center justify-center group-hover:bg-[var(--secondary-system-background)] transition-all relative p-2 hover:scale-110 hover:shadow-md"
                    title={integration.name}
                  >
                    <Image
                      src={integration.logo}
                      alt={integration.name}
                      width={28}
                      height={28}
                      className="object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--secondary-system-background)] p-1">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[var(--secondary-system-background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[var(--secondary-system-background)] to-transparent z-10 pointer-events-none" />
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-hidden py-4 px-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {[...allIntegrations, ...allIntegrations].map((integration, index) => (
              <div
                key={`${integration.name}-${index}`}
                className="flex-shrink-0 px-5 py-3 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] hover:border-[var(--picsellia-green)] transition-colors cursor-default flex items-center gap-3"
              >
                <div className="relative w-6 h-6 flex-shrink-0">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-[var(--secondary-label)] whitespace-nowrap">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--picsellia-green)]/10 flex items-center justify-center text-[var(--picsellia-green)]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--label)]">{t('pythonSdk')}</h3>
                <p className="text-sm text-[var(--tertiary-label)]">{t('pipInstall')}</p>
              </div>
            </div>
            <div className="space-y-4">
              {(['typeSafe', 'asyncSupport', 'jupyter'] as const).map((feat) => (
                <div key={feat} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-[var(--secondary-label)]">{t(`sdkFeatures.${feat}`)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-0 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--border)] bg-[var(--tertiary-system-background)]">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(255, 69, 58, 0.7)' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(255, 214, 10, 0.7)' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'rgba(48, 209, 88, 0.7)' }} />
              <span className="ml-2 text-xs text-[var(--tertiary-label)] font-mono">quickstart.py</span>
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
