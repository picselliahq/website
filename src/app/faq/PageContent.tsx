'use client';

import Link from 'next/link';
import { useState } from 'react';

// FAQ categories with questions and answers
const faqCategories = [
  {
    id: 'general',
    name: 'General',
    color: 'var(--picsellia-green)',
    questions: [
      {
        q: 'What is Picsellia?',
        a: 'Picsellia is an MLOps platform built for computer vision. It covers the full lifecycle: image management, annotation, model training, deployment, and monitoring, all in one workspace. Data scientists, ML engineers, and operations teams work together on the same platform instead of juggling separate tools.',
      },
      {
        q: 'Who uses Picsellia?',
        a: 'Picsellia serves teams building computer vision applications across industries: manufacturing (defect detection), agriculture (crop monitoring), energy (infrastructure inspection), sports analytics, document processing, and more. Our users range from startups shipping their first model to enterprise teams managing billions of images.',
      },
      {
        q: 'How is Picsellia different from other MLOps tools?',
        a: 'Unlike generic MLOps platforms, Picsellia is built specifically for visual data. This means native handling of images and video at any scale, built-in annotation tools with AI-assistance, specialized model evaluation for detection/segmentation/classification, and visual similarity search powered by CLIP embeddings. Everything works together out of the box.',
      },
      {
        q: 'Can I try Picsellia before committing?',
        a: 'Yes. We offer a 14-day free trial with full platform access—no credit card required. You get 10,000 image uploads, 100 GPU hours for training, and access to all features. Start building immediately and see results before you commit.',
      },
    ],
  },
  {
    id: 'platform',
    name: 'Platform & Features',
    color: 'var(--system-blue)',
    questions: [
      {
        q: 'What are the main platform modules?',
        a: 'Picsellia has three core modules: Data Engine (data management, versioning, and smart curation), VisionAI Factory (experiment tracking, model training, and deployment), and Reliability Engine (production monitoring, drift detection, and continuous improvement). Data Engine can be used standalone; the others build on it.',
      },
      {
        q: 'What data formats does Picsellia support?',
        a: 'We support all common image formats (JPEG, PNG, TIFF, BMP, WebP), video files (MP4, AVI, MOV), and specialized formats like multi-spectral imagery. For annotations, we import/export COCO, YOLO, Pascal VOC, and custom formats. Data can be uploaded locally or connected directly from S3, Google Cloud Storage, or Azure Blob.',
      },
      {
        q: 'How does the annotation tool work?',
        a: 'Our labeling tool supports bounding boxes, polygons, segmentation masks, keypoints, and classification. AI-assisted labeling uses your trained models to pre-annotate images, reducing manual work by up to 10x. Quality control features include reviewer workflows, consensus tracking, and automatic inconsistency detection.',
      },
      {
        q: 'What experiment tracking capabilities are included?',
        a: 'Every training run is automatically logged: hyperparameters, metrics, artifacts, and environment details. Compare experiments side-by-side with visual charts. All models are versioned in a central registry with lineage tracking back to the exact dataset version used. Integration with MLflow is also available.',
      },
      {
        q: 'How does model deployment work?',
        a: 'Deploy models with one click to our managed infrastructure or export to your own. We support REST API endpoints, batch inference pipelines, and edge deployment packages. Shadow deployments let you test new models against production traffic before promoting them.',
      },
      {
        q: 'What monitoring features are available?',
        a: 'The Reliability Engine tracks prediction quality in real-time: accuracy metrics, confidence distributions, and data drift. Set up alerts for anomalies and automate feedback loops that route edge cases back to your training pipeline. This enables continuous improvement without manual intervention.',
      },
    ],
  },
  {
    id: 'pricing',
    name: 'Pricing & Plans',
    color: 'var(--system-orange)',
    questions: [
      {
        q: 'How does Picsellia pricing work?',
        a: 'Pricing combines module subscriptions plus usage-based costs. You subscribe to platform modules (Data Engine, VisionAI Factory, Reliability Engine) with included user seats. Usage is measured in Data Processing Units (DPU) for data ingestion and Monitoring Units (MU) for production predictions. Volume discounts apply automatically as you scale.',
      },
      {
        q: 'What is a Data Processing Unit (DPU)?',
        a: 'DPU measures data ingestion and processing. Standard images convert at 60 images = 1 DPU, videos at 1 video = 1 DPU, and multi-spectral images at 5 images = 1 DPU. The base rate is €0.80 per DPU, with discounts up to 60% at higher volumes.',
      },
      {
        q: 'What is a Monitoring Unit (MU)?',
        a: 'MU measures production inference monitoring. Each MU covers 1,000 monitored predictions through the Reliability Engine for quality tracking and drift detection. Pricing starts at €1.00 per MU with volume discounts up to 50%.',
      },
      {
        q: 'Can I use modules independently?',
        a: 'Data Engine can be used standalone for data management and curation. VisionAI Factory and Reliability Engine both require Data Engine as a foundation, since they operate on your managed data. Each module includes 3 user seats, with the option to add more.',
      },
      {
        q: 'Is there volume pricing for large deployments?',
        a: 'Yes. Volume discounts are applied based on your annual cumulative usage. As you process more data or monitor more predictions, you get better rates automatically: up to 60% off for DPU and 50% off for MU. Enterprise customers can also negotiate custom committed-use pricing.',
      },
      {
        q: 'What about GPU compute costs?',
        a: 'GPU resources for training and inference are billed separately based on actual usage. We offer various GPU tiers (T4, A10G, A100) with transparent hourly rates. Bring-your-own-compute is also supported if you prefer to use your existing cloud GPUs.',
      },
    ],
  },
  {
    id: 'security',
    name: 'Security & Compliance',
    color: 'var(--system-indigo)',
    questions: [
      {
        q: 'What security certifications does Picsellia hold?',
        a: 'Picsellia is ISO 27001:2022 certified with annual audits. We are fully GDPR compliant with EU data processing agreements available. All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We support enterprise SSO/SAML integration for identity management.',
      },
      {
        q: 'What deployment options are available?',
        a: 'Three options: SaaS (fully managed cloud in EU or US data centers), Hybrid (your data storage and compute, our control plane), and On-Premise (full deployment to your infrastructure via Kubernetes or Docker). Air-gapped environments are supported for maximum isolation.',
      },
      {
        q: 'Can I keep my data on my own infrastructure?',
        a: 'Absolutely. The Hybrid deployment connects your existing S3, GCS, or Azure storage—data never leaves your infrastructure. You can also bring your own GPU compute and Docker registry. Picsellia manages the control plane while you maintain full data sovereignty.',
      },
      {
        q: 'How does access control work?',
        a: 'Role-Based Access Control (RBAC) operates at three levels: Organization (Owner, Admin, Member), Workspace (Manager, Contributor, Viewer), and Project (Lead, Editor, Annotator, Reviewer). This enables fine-grained permissions so annotators only see their assigned tasks while leads manage entire projects.',
      },
      {
        q: 'Is there audit logging?',
        a: 'Yes. Complete activity tracking logs all user actions, API calls, and system events. Audit logs are immutable, searchable, and exportable for compliance reviews. Enterprise plans include extended retention periods and SIEM integration.',
      },
    ],
  },
  {
    id: 'getting-started',
    name: 'Getting Started',
    color: 'var(--system-teal)',
    questions: [
      {
        q: 'How do I get started with Picsellia?',
        a: 'Start with our 14-day free trial—no credit card required. Create your organization, upload some images to the Datalake, and explore the platform. Our quickstart guides walk you through creating your first dataset, running an annotation campaign, and training a model.',
      },
      {
        q: 'Is there a Python SDK?',
        a: 'Yes. The Picsellia Python SDK provides programmatic access to all platform features. Upload data, manage datasets, launch training jobs, and integrate with your existing pipelines. Install with pip install picsellia and check our SDK documentation for examples.',
      },
      {
        q: 'Can I import existing data and models?',
        a: 'Absolutely. Connect your existing cloud storage (S3, GCS, Azure) and Picsellia indexes your data without copying it. Import annotations in COCO, YOLO, or Pascal VOC format. Register pre-trained models from your local files or external registries.',
      },
      {
        q: 'What support is available?',
        a: 'All plans include documentation, community forums, and email support. Pro plans add priority support with faster response times. Enterprise plans include dedicated customer success managers, 24/7 support, and custom SLAs. We also offer onboarding assistance and training workshops.',
      },
      {
        q: 'Do you offer training or onboarding help?',
        a: 'Yes. We provide documentation, video tutorials, and interactive quickstart guides. Enterprise customers receive dedicated onboarding with hands-on workshops. Our customer success team helps you migrate existing workflows and optimize your setup for your specific use case.',
      },
    ],
  },
  {
    id: 'technical',
    name: 'Technical & Integration',
    color: 'var(--system-pink)',
    questions: [
      {
        q: 'Does Picsellia integrate with my existing ML stack?',
        a: 'Yes. We integrate with popular tools: MLflow for experiment tracking migration, cloud storage providers (AWS, GCP, Azure), container registries for custom training environments, and CI/CD systems for automated pipelines. Our REST API and Python SDK enable custom integrations.',
      },
      {
        q: 'Can I use my own training code?',
        a: 'Absolutely. Bring any framework (PyTorch, TensorFlow, Ultralytics, etc.) and containerize your training scripts. Picsellia provides GPU resources, manages data loading, and tracks experiments—while you maintain full control over your training logic.',
      },
      {
        q: 'How does dataset versioning work?',
        a: 'Every dataset change creates a new immutable version. Track lineage from raw data through preprocessing, augmentation, and splits. Reproduce any experiment by referencing the exact dataset version used. Compare versions to understand how data changes impact model performance.',
      },
      {
        q: 'What is the visual similarity search?',
        a: 'Powered by CLIP embeddings, similarity search lets you find images by visual content rather than metadata. Upload a reference image and discover similar samples in your Datalake. Use this for data curation, finding duplicates, or building balanced training sets.',
      },
      {
        q: 'Can I automate workflows with pipelines?',
        a: 'Yes. Automated pipelines chain together data processing, training, evaluation, and deployment steps. Trigger pipelines on schedules, data changes, or API calls. Pre-built templates cover common workflows like active learning and continuous training.',
      },
      {
        q: 'Is there an API?',
        a: 'Full REST API access to all platform functionality. Every action available in the UI can be automated via API. OpenAPI specification is available for generating client libraries in any language. Webhooks notify your systems of events in real-time.',
      },
    ],
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');

  const toggleQuestion = (questionId: string) => {
    setExpandedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  };

  const activeData = faqCategories.find((c) => c.id === activeCategory);

  // Filter questions across all categories when searching
  const searchResults = searchQuery.trim()
    ? faqCategories.flatMap((category) =>
        category.questions
          .map((q, index) => ({ ...q, category, index }))
          .filter(
            (item) =>
              item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.a.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : [];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 border-b border-[var(--border)] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[var(--picsellia-green)]/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[var(--system-blue)]/5 rounded-full blur-[100px]" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(var(--label) 1px, transparent 1px), linear-gradient(90deg, var(--label) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--picsellia-green)]/10 border border-[var(--picsellia-green)]/20 mb-8">
              <svg className="w-4 h-4 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium text-[var(--picsellia-green)]">Help Center</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
              Frequently Asked{' '}
              <span className="text-[var(--picsellia-green)]">Questions</span>
            </h1>

            <p className="text-lg md:text-xl text-[var(--secondary-label)] max-w-2xl mx-auto mb-8">
              Everything you need to know about Picsellia. Can&apos;t find what you&apos;re looking for?{' '}
              <Link href="/contact" className="text-[var(--picsellia-green)] hover:underline">
                Contact our team
              </Link>
              .
            </p>

            {/* Search input */}
            <div className="relative max-w-md mx-auto">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--tertiary-label)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-[var(--tertiary-system-background)] border border-[var(--border)] text-[var(--label)] placeholder:text-[var(--tertiary-label)] focus:outline-none focus:ring-2 focus:ring-[var(--picsellia-green)]/30 focus:border-[var(--picsellia-green)] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[var(--quaternary-system-fill)] flex items-center justify-center text-[var(--tertiary-label)] hover:bg-[var(--tertiary-system-fill)] transition-colors"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Category Navigation - Sticky on desktop */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--tertiary-label)] mb-4">
                  Categories
                </h2>
                <nav className="flex flex-wrap lg:flex-col gap-2">
                  {faqCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-4 py-2.5 rounded-lg text-left text-sm font-medium transition-all ${
                        activeCategory === category.id
                          ? 'bg-[var(--picsellia-green)]/10 text-[var(--picsellia-green)] border border-[var(--picsellia-green)]/20'
                          : 'text-[var(--secondary-label)] hover:bg-[var(--tertiary-system-background)] hover:text-[var(--label)] border border-transparent'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: category.color }}
                        />
                        {category.name}
                        <span className="ml-auto text-xs text-[var(--tertiary-label)]">
                          {category.questions.length}
                        </span>
                      </span>
                    </button>
                  ))}
                </nav>

                {/* Quick links */}
                <div className="mt-8 pt-8 border-t border-[var(--border)]">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--tertiary-label)] mb-4">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="https://documentation.picsellia.com"
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      Documentation
                    </Link>
                    <Link
                      href="/pricing"
                      className="flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pricing
                    </Link>
                    <Link
                      href="/demo"
                      className="flex items-center gap-2 text-sm text-[var(--secondary-label)] hover:text-[var(--picsellia-green)] transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Request Demo
                    </Link>
                  </div>
                </div>
              </div>
            </aside>

            {/* Questions */}
            <main className="flex-1 min-w-0">
              {/* Search Results */}
              {searchQuery.trim() ? (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-2">
                      {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} for &ldquo;{searchQuery}&rdquo;
                    </h2>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-sm text-[var(--picsellia-green)] hover:underline"
                    >
                      Clear search
                    </button>
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="space-y-3">
                      {searchResults.map((item) => {
                        const questionId = `search-${item.category.id}-${item.index}`;
                        const isExpanded = expandedQuestions.has(questionId);

                        return (
                          <div
                            key={questionId}
                            className={`card p-0 overflow-hidden transition-all ${
                              isExpanded ? 'ring-1 ring-[var(--picsellia-green)]/20' : ''
                            }`}
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-[var(--tertiary-system-background)]/50 transition-colors"
                            >
                              <span
                                className="flex-shrink-0 px-2 py-1 rounded text-xs font-medium"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${item.category.color} 15%, transparent)`,
                                  color: item.category.color,
                                }}
                              >
                                {item.category.name}
                              </span>
                              <span className="flex-1 font-medium text-[var(--label)]">
                                {item.q}
                              </span>
                              <svg
                                className={`w-5 h-5 text-[var(--tertiary-label)] flex-shrink-0 transition-transform ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <div
                              className={`overflow-hidden transition-all ${
                                isExpanded ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-6 pb-5 pt-0">
                                <div className="pl-0 text-[var(--secondary-label)] leading-relaxed">
                                  {item.a}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-[var(--tertiary-system-background)] flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[var(--tertiary-label)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-[var(--secondary-label)] mb-2">No questions found</p>
                      <p className="text-sm text-[var(--tertiary-label)]">
                        Try different keywords or{' '}
                        <Link href="/contact" className="text-[var(--picsellia-green)] hover:underline">
                          contact us
                        </Link>
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                /* Category View */
                activeData && (
                  <div>
                    <div className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: activeData.color }}
                        />
                        <h2 className="text-2xl font-semibold">{activeData.name}</h2>
                      </div>
                      <p className="text-[var(--secondary-label)]">
                        {activeData.questions.length} questions in this category
                      </p>
                    </div>

                    <div className="space-y-3">
                      {activeData.questions.map((item, index) => {
                        const questionId = `${activeData.id}-${index}`;
                        const isExpanded = expandedQuestions.has(questionId);

                        return (
                          <div
                            key={questionId}
                            className={`card p-0 overflow-hidden transition-all ${
                              isExpanded ? 'ring-1 ring-[var(--picsellia-green)]/20' : ''
                            }`}
                          >
                            <button
                              onClick={() => toggleQuestion(questionId)}
                              className="w-full px-6 py-5 text-left flex items-start gap-4 hover:bg-[var(--tertiary-system-background)]/50 transition-colors"
                            >
                              <span
                                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mt-0.5"
                                style={{
                                  backgroundColor: `color-mix(in srgb, ${activeData.color} 15%, transparent)`,
                                  color: activeData.color,
                                }}
                              >
                                {index + 1}
                              </span>
                              <span className="flex-1 font-medium text-[var(--label)]">
                                {item.q}
                              </span>
                              <svg
                                className={`w-5 h-5 text-[var(--tertiary-label)] flex-shrink-0 transition-transform ${
                                  isExpanded ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>

                            <div
                              className={`overflow-hidden transition-all ${
                                isExpanded ? 'max-h-96' : 'max-h-0'
                              }`}
                            >
                              <div className="px-6 pb-5 pt-0">
                                <div className="pl-10 text-[var(--secondary-label)] leading-relaxed">
                                  {item.a}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              )}
            </main>
          </div>
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="py-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="card p-10 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--picsellia-green)]/5 to-transparent pointer-events-none" />

            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[var(--picsellia-green)]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[var(--picsellia-green)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Still have questions?
              </h2>

              <p className="text-[var(--secondary-label)] mb-8 max-w-md mx-auto">
                Our team is here to help. Reach out and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary px-6 py-3">
                  Contact Sales
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="https://documentation.picsellia.com"
                  target="_blank"
                  className="btn-secondary px-6 py-3"
                >
                  Read Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
