import type { BlogPost } from "@/types/blog";

const BASE_URL = "https://www.picsellia.com";

export function organizationJsonLd() {
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
    ],
    description:
      "The complete MLOps platform for computer vision. Build, deploy, and monitor vision AI applications at scale.",
  };
}

export function articleJsonLd(post: BlogPost, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.image
      ? `${BASE_URL}${post.frontmatter.image}`
      : undefined,
    datePublished: post.frontmatter.date,
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
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

export function faqJsonLd(
  questions: { question: string; answer: string }[],
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
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Picsellia",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: BASE_URL,
    description:
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
    featureList: [
      "Data Management & Versioning",
      "Image & Video Annotation",
      "Model Training & Experiment Tracking",
      "Model Deployment (Cloud & Edge)",
      "Production Monitoring & Drift Detection",
      "Automated ML Pipelines",
    ],
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
