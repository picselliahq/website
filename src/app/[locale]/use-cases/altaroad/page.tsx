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
    title: t('altaroad.headline'),
    description: t('altaroad.subheadline'),
  };
}

const altaroadData: CaseStudyData = {
  company: {
    name: 'Altaroad',
    logo: '/images/customers/altaroad.png',
    industry: 'Construction & Waste Monitoring',
    description: 'Altaroad is a waste and material monitoring leader providing automated traceability solutions for construction and industrial sites. They use Computer Vision to track material and waste flows via heavy goods vehicles, ensuring compliance and optimizing logistics.',
    website: 'https://www.altaroad.com',
  },

  headline: 'How Altaroad Saved 50% Time Operating Models in Production',
  subheadline: 'From maintenance burden to innovation focus: Altaroad reduced data scientist time on model maintenance from 50% to just 10%.',

  metrics: [
    {
      value: '50%',
      label: 'Time Saved',
      description: 'Operating models',
    },
    {
      value: '4x',
      label: 'Faster Deployment',
      description: 'Building & deploying',
    },
    {
      value: '150K+',
      label: 'Data Points',
      description: 'Managed on-platform',
    },
  ],

  transformation: {
    before: {
      title: 'Before Picsellia',
      items: [
        '50% of data scientist time on maintenance',
        'Complex model management across sites',
        'Slow adaptation to new CV operations',
        'Difficult team onboarding',
        'Limited product expansion capability',
      ],
    },
    after: {
      title: 'After Picsellia',
      items: [
        'Only 10% time on maintenance',
        'Efficient and structured monitoring',
        'Rapid model development cycles',
        'Quick team member onboarding',
        'Diversified product offerings',
      ],
    },
  },

  challengeIntro: "Altaroad needed to develop and deploy multiple computer vision models while managing continuous improvements under time constraints for major contracts.",

  challenges: [
    {
      title: 'Multiple Model Types',
      description: 'Needed to develop and deploy classification, object detection, and segmentation models simultaneously for different use cases.',
    },
    {
      title: 'Major Contract Deadlines',
      description: 'Time constraints for a major contract opportunity required dramatically accelerated model development.',
    },
    {
      title: 'Maintenance Burden',
      description: 'Data scientists spent 50% of their time maintaining existing models instead of building new capabilities.',
    },
    {
      title: 'Software Adaptation',
      description: 'Complexity in adapting existing software infrastructure to CV operations created friction.',
    },
  ],

  workflow: [
    {
      id: 'collect',
      title: 'Collect Site Data',
      description: 'Aggregate images from construction and industrial sites into organized datasets',
      feature: 'Datalake',
      featureHref: '/datalake',
      icon: 'data',
    },
    {
      id: 'train',
      title: 'Train Multiple Models',
      description: 'Develop classification, detection, and segmentation models in parallel',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      icon: 'train',
    },
    {
      id: 'deploy',
      title: 'Automated Deployment',
      description: 'Ship models to production with automated pipelines',
      feature: 'Automated Pipelines',
      featureHref: '/automated-pipelines',
      icon: 'deploy',
    },
    {
      id: 'monitor',
      title: 'Continuous Monitoring',
      description: 'Track performance across all sites with proactive alerts',
      feature: 'Model Monitoring',
      featureHref: '/model-monitoring',
      icon: 'monitor',
    },
  ],

  solutionIntro: "Picsellia provided Altaroad with an end-to-end platform that streamlined their entire CV operations from development to production.",

  solutions: [
    {
      title: 'End-to-End Platform',
      description: 'Complete Computer Vision platform for streamlined operations. From data collection to production monitoring in one place.',
      feature: 'AI Laboratory',
      featureHref: '/ai-laboratory',
      metrics: { value: '4x', label: 'Faster deployment' },
    },
    {
      title: 'Efficient Model Management',
      description: 'Deployment and management capabilities that reduced maintenance time from 50% to 10% of data scientist effort.',
      feature: 'Model Monitoring',
      featureHref: '/model-monitoring',
      metrics: { value: '40%', label: 'Time recovered' },
    },
    {
      title: 'MLOps Workflow Automation',
      description: 'Automated pipelines for continuous training and deployment. Models improve automatically as new data arrives.',
      feature: 'Automated Pipelines',
      featureHref: '/automated-pipelines',
    },
    {
      title: 'Collaborative Workspace',
      description: 'Unified environment where business and technical teams can work together effectively.',
      feature: 'Dataset Management',
      featureHref: '/dataset-management',
      metrics: { value: '150K+', label: 'Data points managed' },
    },
  ],

  quote: {
    text: "Picsellia allows us to monitor all our models in production in an efficient and structured way, while constantly improving their performances to deliver the most reliable and efficient models to our clients.",
    author: 'Younes',
    role: 'CV Expert',
    company: 'Altaroad',
  },

  resultsIntro: "Altaroad transformed their operations and secured market leadership through efficient CV model management.",

  results: [
    {
      title: '50% Time Saved',
      description: 'Data scientist time on maintenance reduced from 50% to 10%, freeing up resources for innovation.',
    },
    {
      title: 'Major Contracts Secured',
      description: 'Accelerated development cycles enabled Altaroad to meet critical contract deadlines.',
    },
    {
      title: 'Rapid Team Onboarding',
      description: 'New team members can quickly get up to speed with the unified platform.',
    },
    {
      title: 'Revenue Diversification',
      description: 'Increased product offerings through faster model development capabilities.',
    },
  ],

  featuresUsed: [
    {
      name: 'Model Monitoring',
      href: '/model-monitoring',
      icon: '/images/community/icons/model-monitoring.svg',
      description: 'Production tracking',
    },
    {
      name: 'Experiment Tracking',
      href: '/experiment-tracking',
      icon: '/images/community/icons/experiment-tracking.svg',
      description: 'Multi-model development',
    },
    {
      name: 'Automated Pipelines',
      href: '/automated-pipelines',
      icon: '/images/community/icons/ci-cd.svg',
      description: 'Continuous deployment',
    },
    {
      name: 'Datalake',
      href: '/datalake',
      icon: '/images/community/icons/datalake.svg',
      description: 'Site data storage',
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
      title: 'How PellencST Cut Time-to-Model by 90%',
      company: 'PellencST',
      industry: 'Waste Management',
      href: '/use-cases/pellencst',
      logo: '/images/customers/pellenc.svg',
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

export default async function AltaroadCaseStudyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CaseStudyTemplate data={altaroadData} />;
}
