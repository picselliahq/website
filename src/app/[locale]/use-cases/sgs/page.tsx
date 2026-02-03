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
    title: t('sgs.headline'),
    description: t('sgs.subheadline'),
  };
}

const sgsData: CaseStudyData = {
  company: {
    name: 'SGS',
    logo: '/images/customers/sgs.svg',
    industry: 'Testing, Inspection & Certification',
    description: "SGS is the world's leading testing, inspection, and certification company. With over 99,000 employees in 2,600 offices and laboratories, they provide critical services across agriculture, mining, oil, gas, chemicals, and consumer goods. Their computer vision team develops AI solutions to automate visual inspection processes at scale.",
    website: 'https://www.sgs.com',
  },

  headline: 'How SGS Slashed Model Development Time by 66%',
  subheadline: 'From fragmented tools to unified MLOps: SGS transformed their computer vision workflow and went from 3 days to 1 day per model iteration.',

  metrics: [
    {
      value: '66%',
      label: 'Faster Development',
      description: 'Per model iteration',
    },
    {
      value: '3→1',
      label: 'Days per Model',
      description: 'Development cycle',
    },
    {
      value: '10+',
      label: 'Active Projects',
      description: 'Running simultaneously',
    },
  ],

  transformation: {
    before: {
      title: 'Before Picsellia',
      items: [
        '3 days per model iteration',
        'Disconnected tools for each step',
        'No dataset version control',
        'Manual experiment tracking',
        'Knowledge siloed between team members',
        'Reproducibility was a nightmare',
      ],
    },
    after: {
      title: 'After Picsellia',
      items: [
        '1 day per model iteration',
        'Single platform for entire workflow',
        'Git-like versioning for all data',
        'Automatic experiment logging',
        'Shared workspaces and collaboration',
        '100% reproducible experiments',
      ],
    },
  },

  challengeIntro: "SGS's computer vision team was building inspection models across multiple industries, but their workflow was fragmented across disconnected tools. This created significant bottlenecks in their development process.",

  challenges: [
    {
      title: 'Fragmented Toolchain',
      description: 'The team was juggling multiple disconnected tools for data management, annotation, training, and deployment. Context switching between tools wasted valuable engineering time.',
    },
    {
      title: 'No Version Control for Data',
      description: 'Without proper dataset versioning, it was impossible to track which data was used for which model. Reproducing experiments or rolling back was a manual nightmare.',
    },
    {
      title: 'Collaboration Bottlenecks',
      description: 'With 4 engineers managing 10+ concurrent projects, there was no centralized way to share datasets, models, or experiment results. Knowledge was siloed.',
    },
    {
      title: 'Slow Iteration Cycles',
      description: 'Each model iteration took approximately 3 days from data preparation to evaluation. This slow feedback loop significantly delayed project delivery.',
    },
  ],

  workflow: [
    {
      id: 'data',
      title: 'Centralize & Version Data',
      description: 'All images and annotations stored in one place with full version history',
      feature: 'Dataset Management',
      featureHref: '/dataset-management',
      icon: 'data',
    },
    {
      id: 'label',
      title: 'Annotate & Review',
      description: 'Built-in labeling with quality assurance workflows and team collaboration',
      feature: 'Labeling Tool',
      featureHref: '/labeling-tool',
      icon: 'label',
    },
    {
      id: 'train',
      title: 'Train & Compare',
      description: 'Run experiments with automatic logging of metrics, parameters, and artifacts',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      icon: 'train',
    },
    {
      id: 'deploy',
      title: 'Deploy & Monitor',
      description: 'Ship models to production with full lineage and performance monitoring',
      feature: 'Model Deployment',
      featureHref: '/model-deployment',
      icon: 'deploy',
    },
  ],

  solutionIntro: "Picsellia provided SGS with a unified platform that consolidated their entire computer vision workflow under one roof.",

  solutions: [
    {
      title: 'Unified Data Management',
      description: 'All datasets, annotations, and metadata centralized in one platform with full version control. Every change is tracked, making experiments reproducible.',
      feature: 'Datalake',
      featureHref: '/datalake',
      metrics: { value: '100%', label: 'Data traceability' },
    },
    {
      title: 'Streamlined Annotation',
      description: "Built-in labeling tools with quality assurance workflows. SGS's team can annotate, review, and validate data without leaving the platform.",
      feature: 'Labeling Tool',
      featureHref: '/labeling-tool',
    },
    {
      title: 'Experiment Tracking',
      description: 'Automatic logging of all training runs, hyperparameters, and metrics. Compare experiments side-by-side and never lose track of what worked.',
      feature: 'Experiment Tracking',
      featureHref: '/experiment-tracking',
      metrics: { value: '0', label: 'Lost experiments' },
    },
    {
      title: 'Team Collaboration',
      description: 'Shared workspaces where all team members can access datasets, models, and experiments. Knowledge is preserved and accessible to everyone.',
      feature: 'Dataset Management',
      featureHref: '/dataset-management',
      metrics: { value: '4→10+', label: 'Projects per team' },
    },
  ],

  quote: {
    text: "Picsellia unified our entire workflow. What used to take us 3 days now takes 1. We can finally focus on solving computer vision problems instead of wrestling with our toolchain.",
    author: 'Tristan Cotte',
    role: 'Computer Vision Engineer',
    company: 'SGS',
  },

  resultsIntro: "The switch to Picsellia transformed SGS's computer vision operations, delivering measurable improvements across their entire workflow.",

  results: [
    {
      title: '66% Faster Iterations',
      description: 'Model development cycles dropped from 3 days to 1 day. Faster iterations mean faster time-to-value for SGS clients.',
    },
    {
      title: 'Scalable Project Management',
      description: 'A 4-person team now effectively manages 10+ concurrent projects. Clear organization and shared workflows eliminate confusion.',
    },
    {
      title: 'Full Traceability',
      description: "Every model can be traced back to its exact training data, parameters, and evaluation metrics. Critical for SGS's quality certification standards.",
    },
    {
      title: 'Knowledge Preservation',
      description: 'All experiments, decisions, and learnings are captured in the platform. New team members can onboard quickly and pick up where others left off.',
    },
  ],

  featuresUsed: [
    {
      name: 'Datalake',
      href: '/datalake',
      icon: '/images/community/icons/datalake.svg',
      description: 'Centralized storage for all computer vision assets',
    },
    {
      name: 'Dataset Management',
      href: '/dataset-management',
      icon: '/images/community/icons/data-management.svg',
      description: 'Version control and organization for training data',
    },
    {
      name: 'Labeling Tool',
      href: '/labeling-tool',
      icon: '/images/community/icons/labeling-tool.svg',
      description: 'Built-in annotation with QA workflows',
    },
    {
      name: 'Experiment Tracking',
      href: '/experiment-tracking',
      icon: '/images/community/icons/experiment-tracking.svg',
      description: 'Automatic logging of all training runs',
    },
  ],

  relatedCaseStudies: [
    {
      title: 'Scaling Computer Vision for Live Sports Analysis',
      company: 'SkillCorner',
      industry: 'Sports Analytics',
      href: '/use-cases/skillcorner',
      logo: '/images/customers/skillcorner.svg',
    },
    {
      title: 'Real-Time Video Analytics at Scale',
      company: 'Isarsoft',
      industry: 'Smart Cities',
      href: '/use-cases/isarsoft',
      logo: '/images/customers/isarsoft.svg',
    },
    {
      title: 'Precision Agriculture with AI-Powered Vision',
      company: 'Pellenc',
      industry: 'Agriculture',
      href: '/use-cases/pellenc',
      logo: '/images/customers/pellenc.svg',
    },
  ],

  accentColor: 'var(--system-orange)',
};

export default async function SGSCaseStudyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CaseStudyTemplate data={sgsData} />;
}
