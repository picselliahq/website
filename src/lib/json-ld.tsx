import type { BlogPost } from "@/types/blog";

const BASE_URL = "https://www.picsellia.com";

function toInLanguage(locale?: string): string {
  return locale === "fr" ? "fr-FR" : "en-US";
}

export function organizationJsonLd(locale?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Picsellia",
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    sameAs: [
      "https://github.com/picselliahq",
      "https://linkedin.com/company/picsellia",
      "https://x.com/picsellia",
      "https://www.youtube.com/@picselliahq",
    ],
    description:
      "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale.",
    inLanguage: toInLanguage(locale),
  };
}

export function articleJsonLd(post: BlogPost, slug: string, locale?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.image
      ? `${BASE_URL}${post.frontmatter.image}`
      : undefined,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.updated || post.frontmatter.date,
    author: {
      "@type": "Person",
      name: post.frontmatter.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Picsellia",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/post/${slug}`,
    },
    inLanguage: toInLanguage(locale),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
  locale?: string,
) {
  const homeItem = {
    "@type": "ListItem",
    position: 1,
    name: locale === "fr" ? "Accueil" : "Home",
    item: locale === "fr" ? `${BASE_URL}/fr` : BASE_URL,
  };
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      homeItem,
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.url}`,
      })),
    ],
    inLanguage: toInLanguage(locale),
  };
}

export function faqJsonLd(
  questions: { question: string; answer: string }[],
  locale?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
    inLanguage: toInLanguage(locale),
  };
}

export function itemListJsonLd(
  items: { name: string; description?: string; url: string }[],
  locale?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      description: item.description,
      url: `${BASE_URL}${item.url}`,
    })),
    inLanguage: toInLanguage(locale),
  };
}

/**
 * Service + OfferCatalog for the pricing page. Deliberately omits a fixed
 * `price` on each Offer — Picsellia's modules are usage-based, so a single
 * price would misrepresent the offer rather than satisfy the schema.
 */
export function pricingServiceJsonLd(
  modules: { name: string; description: string }[],
  locale?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MLOps Platform",
    provider: {
      "@type": "Organization",
      name: "Picsellia",
      url: BASE_URL,
    },
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Picsellia Platform Modules",
      itemListElement: modules.map((module) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: module.name,
          description: module.description,
        },
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "EUR",
          unitText: "usage-based",
        },
      })),
    },
    inLanguage: toInLanguage(locale),
  };
}

export function softwareApplicationJsonLd(
  locale?: string,
  overrides?: {
    name?: string;
    url?: string;
    description?: string;
    featureList?: string[];
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: overrides?.name ?? "Picsellia",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: overrides?.url ? `${BASE_URL}${overrides.url}` : BASE_URL,
    description:
      overrides?.description ??
      "The complete MLOps platform for computer vision. Manage data, train models, deploy to production, and monitor performance — all in one workspace.",
    author: {
      "@type": "Organization",
      name: "Picsellia",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      description: "14-day free trial, no credit card required",
    },
    featureList: overrides?.featureList ?? [
      "Data Management & Versioning",
      "Image & Video Annotation",
      "Model Training & Experiment Tracking",
      "Model Deployment (Cloud & Edge)",
      "Production Monitoring & Drift Detection",
      "Automated ML Pipelines",
    ],
    inLanguage: toInLanguage(locale),
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
