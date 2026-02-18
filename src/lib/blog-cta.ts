export interface FeatureCTA {
  title: string;
  description: string;
  href: string;
  label: string;
}

// ── CTA definitions ──────────────────────────────────────────────────

const CTA = {
  labelingTool: {
    title: 'Annotate faster with AI assistance',
    description:
      'Picsellia\'s labeling tool supports bounding boxes, polygons, and segmentation masks with built-in AI assistance to speed up annotation.',
    href: '/labeling-tool',
    label: 'Explore the Labeling Tool',
  },
  annotationCampaigns: {
    title: 'Orchestrate annotation at scale',
    description:
      'Run multi-step annotation campaigns with built-in quality control, team management, and progress tracking.',
    href: '/annotation-campaigns',
    label: 'Discover Annotation Campaigns',
  },
  aiLab: {
    title: 'Train models your way',
    description:
      'Use pre-built pipelines for YOLO, SAM2, and more — or bring your own code with PyTorch, TensorFlow, or Hugging Face.',
    href: '/ai-laboratory',
    label: 'Explore the AI Laboratory',
  },
  experimentTracking: {
    title: 'Track every experiment',
    description:
      'Log metrics, parameters, and artifacts automatically. Compare runs side by side and ship better models faster.',
    href: '/experiment-tracking',
    label: 'See Experiment Tracking',
  },
  datasetManagement: {
    title: 'Organize and version your datasets',
    description:
      'Version, slice, and manage datasets with full traceability — from raw images to production-ready splits.',
    href: '/dataset-management',
    label: 'Explore Dataset Management',
  },
  datalake: {
    title: 'Centralize your visual data',
    description:
      'Store, search, and organize millions of images in a single place with tags, metadata, and visual similarity search.',
    href: '/datalake',
    label: 'Explore the Datalake',
  },
  modelDeployment: {
    title: 'Deploy models to cloud or edge',
    description:
      'Ship computer vision models with auto-scaling serverless infrastructure and 99.9% uptime.',
    href: '/model-deployment',
    label: 'Explore Model Deployment',
  },
  modelMonitoring: {
    title: 'Monitor models in production',
    description:
      'Detect data drift and anomalies in real time. Close the feedback loop and keep your models accurate.',
    href: '/model-monitoring',
    label: 'Explore Model Monitoring',
  },
  automatedPipelines: {
    title: 'Automate your ML pipelines',
    description:
      'Set up continuous training and deployment with automated triggers, shadow deployments, and feedback loops.',
    href: '/automated-pipelines',
    label: 'Explore Automated Pipelines',
  },
  productOverview: {
    title: 'Ship vision AI 10x faster',
    description:
      'Picsellia is the end-to-end MLOps platform for computer vision — from data management to production deployment.',
    href: '/product-overview',
    label: 'See the Platform',
  },
  manufacturing: {
    title: 'Computer vision for manufacturing',
    description:
      'See how Picsellia powers defect detection and quality control on production lines.',
    href: '/industry/manufacturing',
    label: 'See Manufacturing Solutions',
  },
  agriculture: {
    title: 'Computer vision for agriculture',
    description:
      'Monitor crop health, optimize yields, and improve animal welfare with AI-powered visual analysis.',
    href: '/industry/agriculture',
    label: 'See Agriculture Solutions',
  },
  energy: {
    title: 'Computer vision for energy',
    description:
      'Automate infrastructure inspection and predictive maintenance across your energy assets.',
    href: '/industry/energy',
    label: 'See Energy Solutions',
  },
  wasteManagement: {
    title: 'Computer vision for waste management',
    description:
      'Automate waste sorting and boost recycling rates with real-time visual recognition.',
    href: '/industry/waste-management',
    label: 'See Waste Management Solutions',
  },
} as const satisfies Record<string, FeatureCTA>;

// ── Category → primary CTA ──────────────────────────────────────────
// Strong signal: the blog category directly indicates the best feature CTA.

const CATEGORY_PRIMARY: Record<string, FeatureCTA> = {
  'YOLO':              CTA.aiLab,
  'Tutorial':          CTA.aiLab,
  'Data Management':   CTA.datasetManagement,
  'Data Science':      CTA.experimentTracking,
  'MLOps':             CTA.automatedPipelines,
  'Manufacturing':     CTA.manufacturing,
  'Model Monitoring':  CTA.modelMonitoring,
  'Edge AI':           CTA.modelDeployment,
  'Onboarding':        CTA.productOverview,
  'Product':           CTA.productOverview,
  'News':              CTA.productOverview,
  'Customer Story':    CTA.productOverview,
};

// ── Keyword rules for secondary CTA ─────────────────────────────────
// Matched against title + description + content. Ordered by specificity.

// Industry vertical rules — only matched against title + description since
// many CV posts mention industries in passing.
const INDUSTRY_RULES: { keywords: RegExp; cta: FeatureCTA }[] = [
  {
    keywords: /manufactur|defect.detect|quality.control|visual.inspect|production.line|\bPCB\b/i,
    cta: CTA.manufacturing,
  },
  {
    keywords: /agricultur|crop.health|crop.monitor|livestock|precision.farm/i,
    cta: CTA.agriculture,
  },
  {
    keywords: /energy.sector|pipeline.inspect|infrastructure.inspect|power.grid|solar.panel/i,
    cta: CTA.energy,
  },
  {
    keywords: /waste.manag|recycl|sorting.automat|waste.sort/i,
    cta: CTA.wasteManagement,
  },
];

// Feature/product rules — matched against full content.
const KEYWORD_RULES: { keywords: RegExp; cta: FeatureCTA }[] = [
  // Annotation (specific phrases, not bare "label")
  {
    keywords:
      /\b(annotation.campaign|annotation.workflow|human.in.the.loop|HITL|review.pipeline)\b/i,
    cta: CTA.annotationCampaigns,
  },
  {
    keywords:
      /\b(data.annotation|annotation.tool|labeling.tool|bounding.box.annotation|polygon.annotation|segmentation.mask)\b/i,
    cta: CTA.labelingTool,
  },

  // Training & models
  {
    keywords:
      /\b(yolo|train.model|model.training|fine.tun|custom.dataset.train|training.pipeline|transfer.learn|self.supervised)\b/i,
    cta: CTA.aiLab,
  },
  {
    keywords:
      /\b(experiment.track|hyperparameter|coco.metric|mAP.score|compare.model|model.comparison|precision.recall)\b/i,
    cta: CTA.experimentTracking,
  },

  // Data
  {
    keywords:
      /\b(dataset.version|data.curation|dataset.slic|dataset.split|dataset.organiz)\b/i,
    cta: CTA.datasetManagement,
  },
  {
    keywords:
      /\b(datalake|data.lake|visual.search|image.embedding|image.search|data.repository)\b/i,
    cta: CTA.datalake,
  },
  {
    keywords:
      /\b(data.quality|data.drift|imbalanced.dataset|data.augment|data.centric)\b/i,
    cta: CTA.datasetManagement,
  },

  // Deployment & edge
  {
    keywords:
      /\b(model.deploy|edge.device|edge.comput|model.optimi|inference.speed|real.time.detect|model.serving)\b/i,
    cta: CTA.modelDeployment,
  },

  // Monitoring
  {
    keywords:
      /\b(model.monitor|drift.detect|anomaly.detect.production|production.monitor|feedback.loop|continuous.improv)\b/i,
    cta: CTA.modelMonitoring,
  },

  // MLOps / pipelines
  {
    keywords:
      /\b(mlops|cvops|CI.CD|automat.pipeline|continuous.training|continuous.deploy)\b/i,
    cta: CTA.automatedPipelines,
  },

  // Broad CV topics → product overview
  {
    keywords:
      /\b(computer.vision|object.detect|image.classif|semantic.segment|instance.segment)\b/i,
    cta: CTA.productOverview,
  },
];

/**
 * Given a blog post's metadata and content, return up to `limit` relevant
 * feature CTAs.
 *
 * Strategy:
 * 1. Pick a primary CTA based on the post category (strong signal).
 * 2. Find a secondary CTA via keyword matching on the full content
 *    (must differ from the primary).
 * 3. Fallback to product overview if nothing matches.
 */
export function getFeatureCTAs(
  post: { title: string; description: string; category: string; content: string },
  limit = 2,
): FeatureCTA[] {
  const results: FeatureCTA[] = [];
  const seen = new Set<string>();

  // 1. Category-based primary
  const primary = CATEGORY_PRIMARY[post.category];
  if (primary) {
    results.push(primary);
    seen.add(primary.href);
  }

  // 2. Industry rules — matched only against title + description
  const titleDesc = `${post.title} ${post.description}`;
  for (const rule of INDUSTRY_RULES) {
    if (results.length >= limit) break;
    if (!seen.has(rule.cta.href) && rule.keywords.test(titleDesc)) {
      seen.add(rule.cta.href);
      results.push(rule.cta);
    }
  }

  // 3. Feature/product rules — matched against full content
  const haystack = `${post.title} ${post.description} ${post.content}`;
  for (const rule of KEYWORD_RULES) {
    if (results.length >= limit) break;
    if (!seen.has(rule.cta.href) && rule.keywords.test(haystack)) {
      seen.add(rule.cta.href);
      results.push(rule.cta);
    }
  }

  // 4. Fallback
  if (results.length === 0) {
    results.push(CTA.productOverview);
  }

  return results;
}
