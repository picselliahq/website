import CaseStudyTemplate, { CaseStudyData } from '@/components/use-cases/CaseStudyTemplate';
import { Metadata } from 'next';
import { JsonLd, breadcrumbJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: 'How Ficha Accelerated Iteration and Innovation in WasteTech',
  description: 'Learn how Ficha achieved 3x faster annotation and 20% weekly time savings using Picsellia\'s MLOps platform for waste classification and recycling AI.',
  alternates: {
    canonical: '/use-cases/ficha',
  },
  openGraph: {
    title: 'How Ficha Accelerated Iteration and Innovation in WasteTech',
    description: 'Learn how Ficha achieved 3x faster annotation and 20% weekly time savings using Picsellia\'s MLOps platform for waste classification and recycling AI.',
    url: '/use-cases/ficha',
  },
};

const fichaData: CaseStudyData = {
  company: {
    name: 'Ficha',
    logo: '/images/customers/ficha.png',
    industry: 'Waste Management',
    description: 'Ficha is an AI-powered waste management company using computer vision in garbage trucks and collection bins to provide cities and housing associations with recycling quality data and insights. Their technology helps municipalities improve recycling rates and reduce contamination.',
    website: 'https://www.ficha.co',
  },

  headline: 'How Ficha Accelerated Iteration and Innovation in WasteTech',
  subheadline: 'From fragmented scripts to structured MLOps: Ficha transformed their workflow to iterate 3x faster on waste classification models.',

  metrics: [
    {
      value: '3x',
      label: 'Faster Annotation',
      description: 'Speed improvement',
    },
    {
      value: '20%',
      label: 'Time Saved Weekly',
      description: 'On tracking & management',
    },
    {
      value: '50%',
      label: 'Shorter Cycles',
      description: 'Iteration time reduced',
    },
  ],

  transformation: {
    before: {
      title: 'Before Picsellia',
      items: [
        'Script-based workflows with manual data transfers',
        'Fragmented toolchain slowing down the team',
        'Difficult annotation organization and tracking',
        'Models improving slowly despite data growth',
        'No structured process to use available data',
      ],
    },
    after: {
      title: 'After Picsellia',
      items: [
        'Centralized data visualization and querying',
        'Structured annotation campaigns',
        'Integrated experiment tracking with traceability',
        'End-to-end visibility from predictions to source',
        'Standardized processes ensuring data reliability',
      ],
    },
  },

  challengeIntro: "Ficha was growing rapidly, but their fragmented toolchain couldn't keep up. Despite having access to more data, their models were improving slowly.",

  challenges: [
    {
      title: 'Fragmented Toolchain',
      description: 'Script-based workflows and manual data transfers created significant bottlenecks, preventing the team from moving fast despite rapid company growth.',
    },
    {
      title: 'Annotation Chaos',
      description: 'Organization and tracking of annotations was difficult, making it hard to maintain quality and consistency across the growing dataset.',
    },
    {
      title: 'Slow Model Improvement',
      description: 'Model performance improvements lagged despite increasing data availability. Without structured processes, data potential was untapped.',
    },
    {
      title: 'No Traceability',
      description: 'Connecting predictions back to source images and annotations was nearly impossible, making debugging and improvement difficult.',
    },
  ],

  workflow: [
    {
      id: 'ingest',
      title: 'Ingest Waste Images',
      description: 'Centralize images from garbage trucks and bins into a searchable datalake',
      feature: 'Datalake',
      featureHref: '/datalake',
      icon: 'data',
    },
    {
      id: 'annotate',
      title: 'Run Annotation Campaigns',
      description: 'Structured campaigns with progress tracking and quality control',
      feature: 'Annotation Campaigns',
      featureHref: '/annotation-campaigns',
      icon: 'label',
    },
    {
      id: 'train',
      title: 'Train & Track Experiments',
      description: 'Run experiments with full traceability from data to metrics',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      icon: 'train',
    },
    {
      id: 'monitor',
      title: 'Monitor in Production',
      description: 'Track model performance on live waste streams',
      feature: 'Model Monitoring',
      featureHref: '/model-monitoring',
      icon: 'monitor',
    },
  ],

  solutionIntro: "Picsellia gave Ficha the structure they needed to iterate faster and keep innovating in waste classification.",

  solutions: [
    {
      title: 'Centralized Data Management',
      description: 'All waste images centralized with powerful visualization and querying capabilities. No more scattered files or manual transfers.',
      feature: 'Datalake',
      featureHref: '/datalake',
      metrics: { value: '100%', label: 'Data centralized' },
    },
    {
      title: 'Structured Annotation Workflows',
      description: 'Annotation campaigns with clear progress tracking, quality control, and team coordination. 3x improvement in annotation speed.',
      feature: 'Annotation Campaigns',
      featureHref: '/annotation-campaigns',
      metrics: { value: '3x', label: 'Faster annotation' },
    },
    {
      title: 'Full Experiment Traceability',
      description: 'Every experiment tracked with complete lineage. Connect any prediction back to its source images and annotations.',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
    },
    {
      title: 'End-to-End Visibility',
      description: 'Unified platform replacing fragmented processes. Team can focus on innovation rather than maintenance.',
      feature: 'AI Laboratory',
      featureHref: '/ai-laboratory',
      metrics: { value: '20%', label: 'Weekly time saved' },
    },
  ],

  quote: {
    text: "We suddenly had access to a lot of data, but our models were improving quite slowly. Without a strong process, we couldn't fully benefit from it. Picsellia gave us the structure we needed to iterate faster and keep innovating.",
    author: 'Ficha Team',
    role: 'Data Science',
    company: 'Ficha',
  },

  resultsIntro: "With Picsellia, Ficha transformed their waste classification pipeline and accelerated their innovation cycle.",

  results: [
    {
      title: '3x Faster Annotation',
      description: 'Structured campaigns and better tooling dramatically improved annotation throughput.',
    },
    {
      title: '20% Weekly Time Saved',
      description: 'Reduced administrative overhead on tracking and management, freeing up time for innovation.',
    },
    {
      title: 'Shorter Iteration Cycles',
      description: 'Faster feedback loops between data collection, annotation, training, and deployment.',
    },
    {
      title: 'Standardized Processes',
      description: 'Reliable, trustworthy AI built on structured workflows and quality-controlled data.',
    },
  ],

  featuresUsed: [
    {
      name: 'Datalake',
      href: '/datalake',
      icon: '/images/community/icons/datalake.svg',
      description: 'Centralized image storage',
    },
    {
      name: 'Annotation Campaigns',
      href: '/annotation-campaigns',
      icon: '/images/community/icons/annotation-campaigns.svg',
      description: 'Structured labeling workflows',
    },
    {
      name: 'Experiment Tracking',
      href: '/experiment-tracking',
      icon: '/images/community/icons/experiment-tracking.svg',
      description: 'Full training traceability',
    },
    {
      name: 'Model Monitoring',
      href: '/model-monitoring',
      icon: '/images/community/icons/model-monitoring.svg',
      description: 'Production performance tracking',
    },
  ],

  relatedCaseStudies: [
    {
      title: 'How PellencST Cut Time-to-Model by 90%',
      company: 'PellencST',
      industry: 'Waste Management',
      href: '/use-cases/pellencst',
      logo: '/images/customers/pellenc.svg',
    },
    {
      title: 'How Altaroad Saved 50% Time in Production',
      company: 'Altaroad',
      industry: 'Construction',
      href: '/use-cases/altaroad',
      logo: '/images/customers/altaroad.png',
    },
    {
      title: 'How SGS Slashed Development Time by 66%',
      company: 'SGS',
      industry: 'Testing & Certification',
      href: '/use-cases/sgs',
      logo: '/images/customers/sgs.svg',
    },
  ],

  accentColor: 'var(--picsellia-green)',
};

export default function FichaCaseStudyPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'Customer Stories', url: '/use-cases' }, { name: 'Ficha', url: '/use-cases/ficha' }])} />
      <CaseStudyTemplate data={fichaData} />
    </>
  );
}
