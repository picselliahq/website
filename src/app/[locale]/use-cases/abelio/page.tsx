import CaseStudyTemplate, { CaseStudyData } from '@/components/use-cases/CaseStudyTemplate';
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'use-cases' });
  return {
    title: t('abelio.headline'),
    description: t('abelio.subheadline'),
  };
}

const abelioData: CaseStudyData = {
  company: {
    name: 'Abelio',
    logo: '/images/customers/abelio.png',
    industry: 'Agriculture',
    description: 'Abelio is a digital farming solutions provider that uses computer vision to process aerial imagery from drones and satellites. They deliver insights that help farmers optimize yields, reduce costs, and minimize environmental impact across large-scale agricultural operations.',
    website: 'https://www.abelio.com',
  },

  headline: 'How Abelio Reduced Time-to-Model for Precision Agriculture',
  subheadline: 'From fragmented AWS infrastructure to unified MLOps: Abelio now delivers farmer insights within 48 hours of image acquisition.',

  metrics: [
    {
      value: '48h',
      label: 'Retraining Cycle',
      description: 'Image to insights',
    },
    {
      value: '4x',
      label: 'Seasonal Scaling',
      description: 'Peak processing increase',
    },
    {
      value: 'TBs',
      label: 'Data Managed',
      description: 'Dozens of terabytes',
    },
  ],

  transformation: {
    before: {
      title: 'Before Picsellia',
      items: [
        'Fragmented AWS infrastructure (S3, EC2, SageMaker)',
        'No integrated tools for image visualization',
        'Time-consuming model retraining processes',
        'Lack of traceability across environments',
        'Difficult to reproduce experiments',
      ],
    },
    after: {
      title: 'After Picsellia',
      items: [
        'Centralized data management platform',
        'Efficient retraining workflows',
        'Full experiment reproducibility',
        'Streamlined annotation campaigns',
        '48-hour delivery to farmers',
      ],
    },
  },

  challengeIntro: "Abelio needed to process massive volumes of aerial imagery during peak farming seasons while meeting strict 48-hour delivery timelines.",

  challenges: [
    {
      title: 'Massive Data Volumes',
      description: 'During peak farming seasons, image processing increased fourfold. Managing terabytes of drone and satellite imagery required robust infrastructure.',
    },
    {
      title: 'Tight Delivery Timelines',
      description: 'Farmers needed insights within 48 hours of image acquisition. Time-consuming model retraining threatened these critical deadlines.',
    },
    {
      title: 'Fragmented Infrastructure',
      description: 'AWS services (S3, EC2, SageMaker) lacked integrated tools for image visualization and dataset management, creating workflow gaps.',
    },
    {
      title: 'No Reproducibility',
      description: 'Lack of traceability across diverse environments made it impossible to reproduce experiments or track what worked.',
    },
  ],

  workflow: [
    {
      id: 'ingest',
      title: 'Ingest Aerial Imagery',
      description: 'Centralize drone and satellite images with metadata into searchable datalake',
      feature: 'Datalake',
      featureHref: '/datalake',
      icon: 'data',
    },
    {
      id: 'annotate',
      title: 'Run Annotation Campaigns',
      description: 'Structured campaigns with progress tracking and quality control for crop analysis',
      feature: 'Annotation Campaigns',
      featureHref: '/annotation-campaigns',
      icon: 'label',
    },
    {
      id: 'train',
      title: 'Rapid Model Retraining',
      description: 'Fast iteration cycles with versioned datasets and tracked parameters',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      icon: 'train',
    },
    {
      id: 'monitor',
      title: 'Monitor Model Performance',
      description: 'Track accuracy across different crop types and seasonal conditions',
      feature: 'Model Monitoring',
      featureHref: '/model-monitoring',
      icon: 'monitor',
    },
  ],

  solutionIntro: "Picsellia provided Abelio with a unified platform to manage their entire agricultural imaging pipeline at scale.",

  solutions: [
    {
      title: 'Centralized Data Management',
      description: 'Simplified image storage and organization for terabytes of aerial imagery. Powerful querying and visualization capabilities.',
      feature: 'Datalake',
      featureHref: '/datalake',
      metrics: { value: 'TBs', label: 'Images managed' },
    },
    {
      title: 'Efficient Retraining Workflows',
      description: 'Streamlined processes to meet 48-hour delivery timelines. From image acquisition to farmer insights in record time.',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      metrics: { value: '48h', label: 'Delivery time' },
    },
    {
      title: 'Annotation Quality Control',
      description: 'Campaign tools enabling progress tracking and quality control. Improved annotation efficiency and consistency.',
      feature: 'Annotation Campaigns',
      featureHref: '/annotation-campaigns',
    },
    {
      title: 'Full Reproducibility',
      description: 'Dataset versioning and parameter recording ensures every experiment can be reproduced and compared.',
      feature: 'Dataset Management',
      featureHref: '/dataset-management',
      metrics: { value: '100%', label: 'Reproducibility' },
    },
  ],

  quote: {
    text: "With Picsellia, we can now deliver insights to farmers within 48 hours of image acquisition. The platform handles our seasonal data spikes without issues while maintaining full traceability.",
    author: 'Abelio Team',
    role: 'Data Science',
    company: 'Abelio',
  },

  resultsIntro: "Abelio transformed their agricultural imaging pipeline to deliver faster, more reliable insights to farmers.",

  results: [
    {
      title: '48-Hour Delivery',
      description: 'Reduced retraining cycles to meet strict farmer delivery timelines, from image acquisition to actionable insights.',
    },
    {
      title: 'Improved Model Accuracy',
      description: 'Better dataset reliability stabilized models, increasing precision and recall across crop analysis tasks.',
    },
    {
      title: 'Seasonal Scalability',
      description: 'Effectively managed fourfold increases in data volume during peak farming seasons.',
    },
    {
      title: 'Enhanced Reproducibility',
      description: 'Full experiment tracking through dataset versioning and parameter recording.',
    },
  ],

  featuresUsed: [
    {
      name: 'Datalake',
      href: '/datalake',
      icon: '/images/community/icons/datalake.svg',
      description: 'Large-scale image storage',
    },
    {
      name: 'Annotation Campaigns',
      href: '/annotation-campaigns',
      icon: '/images/community/icons/annotation-campaigns.svg',
      description: 'Quality-controlled labeling',
    },
    {
      name: 'Experiment Tracking',
      href: '/experiment-tracking',
      icon: '/images/community/icons/experiment-tracking.svg',
      description: 'Reproducible training',
    },
    {
      name: 'Model Monitoring',
      href: '/model-monitoring',
      icon: '/images/community/icons/model-monitoring.svg',
      description: 'Performance tracking',
    },
  ],

  relatedCaseStudies: [
    {
      title: 'How Ficha Accelerated Innovation in WasteTech',
      company: 'Ficha',
      industry: 'Waste Management',
      href: '/use-cases/ficha',
      logo: '/images/customers/ficha.png',
    },
    {
      title: 'How SGS Slashed Development Time by 66%',
      company: 'SGS',
      industry: 'Testing & Certification',
      href: '/use-cases/sgs',
      logo: '/images/customers/sgs.svg',
    },
    {
      title: 'How PellencST Cut Time-to-Model by 90%',
      company: 'PellencST',
      industry: 'Waste Management',
      href: '/use-cases/pellencst',
      logo: '/images/customers/pellenc.svg',
    },
  ],

  accentColor: 'var(--picsellia-green)',
};

export default async function AbelioCaseStudyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CaseStudyTemplate data={abelioData} />;
}
