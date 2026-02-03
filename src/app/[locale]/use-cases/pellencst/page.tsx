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
    title: t('pellencst.headline'),
    description: t('pellencst.subheadline'),
  };
}

const pellencstData: CaseStudyData = {
  company: {
    name: 'PellencST',
    logo: '/images/customers/pellenc.svg',
    industry: 'Waste Sorting Technology',
    description: 'PellencST is a pioneering waste sorting machine manufacturer operating over 2,500 machines across 40+ countries. They collaborate with major environmental organizations like Paprec, Veolia, and Suez, serving as the market leader in France and a key international player in recycling technology.',
    website: 'https://www.pellencst.com',
  },

  headline: 'How PellencST Cut Time-to-Model by 90%',
  subheadline: 'From 6-9 months to 1 month: PellencST gained a competitive edge in the sorting machine market with Picsellia.',

  metrics: [
    {
      value: '90%',
      label: 'Time Reduction',
      description: 'Model development',
    },
    {
      value: '4x',
      label: 'Faster Deployment',
      description: 'Building & deploying CV',
    },
    {
      value: '2,500+',
      label: 'Machines',
      description: 'Operating worldwide',
    },
  ],

  transformation: {
    before: {
      title: 'Before Picsellia',
      items: [
        '6-9 months for model development',
        '1 month for annotation alone',
        '1-2 months for data acquisition',
        'Relied on external CV development',
        'Bottlenecks in customization requests',
      ],
    },
    after: {
      title: 'After Picsellia',
      items: [
        '1 month total time-to-model',
        '2 weeks for annotation',
        '3-4 days for data acquisition',
        'Full internal AI capabilities',
        'Rapid response to client needs',
      ],
    },
  },

  challengeIntro: "PellencST faced growing demand for complex sorting capabilities that traditional sensors couldn't handle. They needed to internalize AI development to stay competitive.",

  challenges: [
    {
      title: 'Complex Sorting Demands',
      description: 'Growing demand for complex capabilities like silicone cartridge sorting and improved paper/cardboard separation that regular sensors cannot handle.',
    },
    {
      title: 'External Development Bottleneck',
      description: 'Initially relied on external CV model development, creating bottlenecks when clients requested customizations or new capabilities.',
    },
    {
      title: 'Long Development Cycles',
      description: 'Model development took 6-9 months from start to finish, with annotation alone requiring a full month.',
    },
    {
      title: 'Real-Time Processing Needs',
      description: 'Sorting machines require real-time AI processing. Needed to internalize capabilities while maintaining performance.',
    },
  ],

  workflow: [
    {
      id: 'acquire',
      title: 'Rapid Data Acquisition',
      description: 'Capture and organize waste sorting images in days instead of months',
      feature: 'Datalake',
      featureHref: '/datalake',
      icon: 'data',
    },
    {
      id: 'annotate',
      title: 'Accelerated Annotation',
      description: 'Pre-annotation and structured campaigns cut labeling time in half',
      feature: 'Labeling Tool',
      featureHref: '/labeling-tool',
      icon: 'label',
    },
    {
      id: 'train',
      title: 'Unified Model Development',
      description: 'All AI tools consolidated in one platform for rapid iteration',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      icon: 'train',
    },
    {
      id: 'deploy',
      title: 'Continuous Deployment',
      description: 'Ship models to sorting machines with lifecycle management',
      feature: 'Model Deployment',
      featureHref: '/model-deployment',
      icon: 'deploy',
    },
  ],

  solutionIntro: "Picsellia unified PellencST's MLOps workflow, enabling them to internalize AI capabilities and respond rapidly to market demands.",

  solutions: [
    {
      title: 'Unified MLOps Platform',
      description: 'All AI tools consolidated in one location. Centralized repository for models, datasets, and experiments.',
      feature: 'AI Laboratory',
      featureHref: '/ai-laboratory',
      metrics: { value: '1', label: 'Unified platform' },
    },
    {
      title: 'Pre-Annotation Capabilities',
      description: 'Accelerated data preparation with AI-assisted labeling. Annotation time cut from 1 month to 2 weeks.',
      feature: 'Labeling Tool',
      featureHref: '/labeling-tool',
      metrics: { value: '50%', label: 'Faster annotation' },
    },
    {
      title: 'Model Lifecycle Management',
      description: 'Complete monitoring and management of models across 2,500+ machines worldwide.',
      feature: 'Model Monitoring',
      featureHref: '/model-monitoring',
      metrics: { value: '2,500+', label: 'Machines managed' },
    },
    {
      title: 'Open-Source Integration',
      description: 'Seamless integration with existing tools like Airflow and MLFlow for custom workflows.',
      feature: 'Automated Pipelines',
      featureHref: '/automated-pipelines',
    },
  ],

  quote: {
    text: "Using Picsellia has changed how we develop, monitor, and deploy our models. Complex CV applications are more reliable and reach production faster.",
    author: 'Kévin Alazet',
    role: 'Product Owner AI',
    company: 'PellencST',
  },

  resultsIntro: "PellencST transformed their competitive position through dramatically faster AI development and deployment.",

  results: [
    {
      title: '90% Faster Development',
      description: 'Time-to-model reduced from 6-9 months to just 1 month for training, testing, and validation.',
    },
    {
      title: 'Major Contracts Secured',
      description: 'Faster customized solution development enabled PellencST to win major contracts.',
    },
    {
      title: 'Market Leadership Reinforced',
      description: 'Technological innovation through AI positioned them ahead of competitors.',
    },
    {
      title: 'Full Operational Autonomy',
      description: 'Complete internal capability for model retraining and deployment without external dependencies.',
    },
  ],

  featuresUsed: [
    {
      name: 'Datalake',
      href: '/datalake',
      icon: '/images/community/icons/datalake.svg',
      description: 'Centralized data storage',
    },
    {
      name: 'Labeling Tool',
      href: '/labeling-tool',
      icon: '/images/community/icons/labeling-tool.svg',
      description: 'Pre-annotation capabilities',
    },
    {
      name: 'Model Monitoring',
      href: '/model-monitoring',
      icon: '/images/community/icons/model-monitoring.svg',
      description: 'Lifecycle management',
    },
    {
      name: 'Experiment Tracking',
      href: '/experiment-tracking',
      icon: '/images/community/icons/experiment-tracking.svg',
      description: 'Unified development',
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

export default async function PellencSTCaseStudyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CaseStudyTemplate data={pellencstData} />;
}
