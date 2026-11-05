// Pricing FAQ: rendered by PageContent and emitted as FAQPage JSON-LD by page.tsx.
export const faqs = [
  {
    question: "What is a Data Processing Unit (DPU)?",
    answer:
      "DPU is our unit for measuring data ingestion and processing. Standard images convert at 60 images = 1 DPU, videos at 1 video = 1 DPU, and multi-spectral images at 5 images = 1 DPU.",
  },
  {
    question: "What is a Monitoring Unit (MU)?",
    answer:
      "MU measures production inference monitoring. Each MU covers 1,000 monitored predictions through the Reliability Engine for quality tracking and drift detection.",
  },
  {
    question: "Can I use modules independently?",
    answer:
      "The Data Engine can be used standalone. VisionAI Factory and Reliability Engine both require the Data Engine as a foundation. Each module includes 3 user seats.",
  },
  {
    question: "How does volume pricing work?",
    answer:
      "Volume discounts are applied based on your annual cumulative usage. As you process more data or monitor more predictions, you get better rates automatically.",
  },
  {
    question: "What about enterprise pricing?",
    answer:
      "For large deployments, we offer custom pricing with negotiated volume commitments, dedicated support, and SLAs. Contact our sales team for details.",
  },
];
