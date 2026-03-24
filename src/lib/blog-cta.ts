export interface FeatureCTA {
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface ConversionCopy {
  headline: string;
  subtext: string;
}

// Translation function type — matches next-intl's getTranslations / useTranslations
type TranslationFn = (key: string) => string;

// ── CTA keys and their hrefs ────────────────────────────────────────

const CTA_KEYS = {
  labelingTool: "/labeling-tool",
  annotationCampaigns: "/annotation-campaigns",
  aiLab: "/ai-laboratory",
  experimentTracking: "/experiment-tracking",
  datasetManagement: "/dataset-management",
  datalake: "/datalake",
  modelDeployment: "/model-deployment",
  modelMonitoring: "/model-monitoring",
  automatedPipelines: "/automated-pipelines",
  productOverview: "/product-overview",
  manufacturing: "/industry/manufacturing",
  agriculture: "/industry/agriculture",
  energy: "/industry/energy",
  wasteManagement: "/industry/waste-management",
} as const;

type CTAKey = keyof typeof CTA_KEYS;

/** Build a FeatureCTA from a translation key and the `blogCta` namespace translator. */
function buildCTA(key: CTAKey, t: TranslationFn): FeatureCTA {
  return {
    title: t(`featureCTAs.${key}.title`),
    description: t(`featureCTAs.${key}.description`),
    href: CTA_KEYS[key],
    label: t(`featureCTAs.${key}.label`),
  };
}

// ── Category → primary CTA key ─────────────────────────────────────
// Strong signal: the blog category directly indicates the best feature CTA.

const CATEGORY_PRIMARY: Record<string, CTAKey> = {
  YOLO: "aiLab",
  Tutorial: "aiLab",
  "Data Management": "datasetManagement",
  "Data Science": "experimentTracking",
  MLOps: "automatedPipelines",
  Manufacturing: "manufacturing",
  "Model Monitoring": "modelMonitoring",
  "Edge AI": "modelDeployment",
  Onboarding: "productOverview",
  Product: "productOverview",
  News: "productOverview",
  "Customer Story": "productOverview",
};

// ── Keyword rules for secondary CTA ─────────────────────────────────
// Matched against title + description + content. Ordered by specificity.

// Industry vertical rules — only matched against title + description since
// many CV posts mention industries in passing.
const INDUSTRY_RULES: { keywords: RegExp; ctaKey: CTAKey }[] = [
  {
    keywords:
      /manufactur|defect.detect|quality.control|visual.inspect|production.line|\bPCB\b/i,
    ctaKey: "manufacturing",
  },
  {
    keywords: /agricultur|crop.health|crop.monitor|livestock|precision.farm/i,
    ctaKey: "agriculture",
  },
  {
    keywords:
      /energy.sector|pipeline.inspect|infrastructure.inspect|power.grid|solar.panel/i,
    ctaKey: "energy",
  },
  {
    keywords: /waste.manag|recycl|sorting.automat|waste.sort/i,
    ctaKey: "wasteManagement",
  },
];

// Feature/product rules — matched against full content.
const KEYWORD_RULES: { keywords: RegExp; ctaKey: CTAKey }[] = [
  // Annotation (specific phrases, not bare "label")
  {
    keywords:
      /\b(annotation.campaign|annotation.workflow|human.in.the.loop|HITL|review.pipeline)\b/i,
    ctaKey: "annotationCampaigns",
  },
  {
    keywords:
      /\b(data.annotation|annotation.tool|labeling.tool|bounding.box.annotation|polygon.annotation|segmentation.mask)\b/i,
    ctaKey: "labelingTool",
  },

  // Training & models
  {
    keywords:
      /\b(yolo|train.model|model.training|fine.tun|custom.dataset.train|training.pipeline|transfer.learn|self.supervised)\b/i,
    ctaKey: "aiLab",
  },
  {
    keywords:
      /\b(experiment.track|hyperparameter|coco.metric|mAP.score|compare.model|model.comparison|precision.recall)\b/i,
    ctaKey: "experimentTracking",
  },

  // Data
  {
    keywords:
      /\b(dataset.version|data.curation|dataset.slic|dataset.split|dataset.organiz)\b/i,
    ctaKey: "datasetManagement",
  },
  {
    keywords:
      /\b(datalake|data.lake|visual.search|image.embedding|image.search|data.repository)\b/i,
    ctaKey: "datalake",
  },
  {
    keywords:
      /\b(data.quality|data.drift|imbalanced.dataset|data.augment|data.centric)\b/i,
    ctaKey: "datasetManagement",
  },

  // Deployment & edge
  {
    keywords:
      /\b(model.deploy|edge.device|edge.comput|model.optimi|inference.speed|real.time.detect|model.serving)\b/i,
    ctaKey: "modelDeployment",
  },

  // Monitoring
  {
    keywords:
      /\b(model.monitor|drift.detect|anomaly.detect.production|production.monitor|feedback.loop|continuous.improv)\b/i,
    ctaKey: "modelMonitoring",
  },

  // MLOps / pipelines
  {
    keywords:
      /\b(mlops|cvops|CI.CD|automat.pipeline|continuous.training|continuous.deploy)\b/i,
    ctaKey: "automatedPipelines",
  },

  // Broad CV topics → product overview
  {
    keywords:
      /\b(computer.vision|object.detect|image.classif|semantic.segment|instance.segment)\b/i,
    ctaKey: "productOverview",
  },
];

// ── Conversion copy (category → headline + subtext) ─────────────────

/** Map category names to translation-safe keys (no spaces/special chars). */
const CATEGORY_CONVERSION_KEY: Record<string, string> = {
  Tutorial: "Tutorial",
  YOLO: "YOLO",
  MLOps: "MLOps",
  "Data Management": "DataManagement",
  "Data Science": "DataScience",
  Manufacturing: "Manufacturing",
  "Model Monitoring": "ModelMonitoring",
  "Edge AI": "EdgeAI",
  "Customer Story": "CustomerStory",
};

export function getConversionCopy(
  category: string,
  t: TranslationFn,
): ConversionCopy {
  const key = CATEGORY_CONVERSION_KEY[category] ?? "default";
  return {
    headline: t(`conversionCopy.${key}.headline`),
    subtext: t(`conversionCopy.${key}.subtext`),
  };
}

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
  post: {
    title: string;
    description: string;
    category: string;
    content: string;
  },
  t: TranslationFn,
  limit = 2,
): FeatureCTA[] {
  const results: FeatureCTA[] = [];
  const seen = new Set<string>();

  // 1. Category-based primary
  const primaryKey = CATEGORY_PRIMARY[post.category];
  if (primaryKey) {
    const cta = buildCTA(primaryKey, t);
    results.push(cta);
    seen.add(cta.href);
  }

  // 2. Industry rules — matched only against title + description
  const titleDesc = `${post.title} ${post.description}`;
  for (const rule of INDUSTRY_RULES) {
    if (results.length >= limit) break;
    const href = CTA_KEYS[rule.ctaKey];
    if (!seen.has(href) && rule.keywords.test(titleDesc)) {
      seen.add(href);
      results.push(buildCTA(rule.ctaKey, t));
    }
  }

  // 3. Feature/product rules — matched against full content
  const haystack = `${post.title} ${post.description} ${post.content}`;
  for (const rule of KEYWORD_RULES) {
    if (results.length >= limit) break;
    const href = CTA_KEYS[rule.ctaKey];
    if (!seen.has(href) && rule.keywords.test(haystack)) {
      seen.add(href);
      results.push(buildCTA(rule.ctaKey, t));
    }
  }

  // 4. Fallback
  if (results.length === 0) {
    results.push(buildCTA("productOverview", t));
  }

  return results;
}
