export type FAQCategory = {
  id: string;
  name: string;
  color: string;
  questions: { q: string; a: string }[];
};

export const faqCategories: FAQCategory[] = [
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
        a: 'Yes. We offer a 14-day free trial with full platform access\u2014no credit card required. You get 10,000 image uploads, 100 GPU hours for training, and access to all features. Start building immediately and see results before you commit.',
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
        a: 'DPU measures data ingestion and processing. Standard images convert at 60 images = 1 DPU, videos at 1 video = 1 DPU, and multi-spectral images at 5 images = 1 DPU. The base rate is \u20AC0.80 per DPU, with discounts up to 60% at higher volumes.',
      },
      {
        q: 'What is a Monitoring Unit (MU)?',
        a: 'MU measures production inference monitoring. Each MU covers 1,000 monitored predictions through the Reliability Engine for quality tracking and drift detection. Pricing starts at \u20AC1.00 per MU with volume discounts up to 50%.',
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
        a: 'Absolutely. The Hybrid deployment connects your existing S3, GCS, or Azure storage\u2014data never leaves your infrastructure. You can also bring your own GPU compute and Docker registry. Picsellia manages the control plane while you maintain full data sovereignty.',
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
        a: 'Start with our 14-day free trial\u2014no credit card required. Create your organization, upload some images to the Datalake, and explore the platform. Our quickstart guides walk you through creating your first dataset, running an annotation campaign, and training a model.',
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
        a: 'Absolutely. Bring any framework (PyTorch, TensorFlow, Ultralytics, etc.) and containerize your training scripts. Picsellia provides GPU resources, manages data loading, and tracks experiments\u2014while you maintain full control over your training logic.',
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
