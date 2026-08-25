import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/product-overview': {
      en: '/product-overview',
      fr: '/presentation-produit',
    },
    '/pricing': {
      en: '/pricing',
      fr: '/tarifs',
    },
    '/demo': {
      en: '/demo',
      fr: '/demo',
    },
    '/trial': {
      en: '/trial',
      fr: '/essai',
    },
    '/enterprise': {
      en: '/enterprise',
      fr: '/entreprise',
    },

    // Platform features
    '/datalake': {
      en: '/datalake',
      fr: '/lac-de-donnees',
    },
    '/dataset-management': {
      en: '/dataset-management',
      fr: '/gestion-de-datasets',
    },
    '/labeling-tool': {
      en: '/labeling-tool',
      fr: '/outil-annotation',
    },
    '/annotation-campaigns': {
      en: '/annotation-campaigns',
      fr: '/campagnes-annotation',
    },
    '/ai-laboratory': {
      en: '/ai-laboratory',
      fr: '/laboratoire-ia',
    },
    '/experiment-tracking': {
      en: '/experiment-tracking',
      fr: '/suivi-experiences',
    },
    '/automated-pipelines': {
      en: '/automated-pipelines',
      fr: '/pipelines-automatises',
    },
    '/model-deployment': {
      en: '/model-deployment',
      fr: '/deploiement-modeles',
    },
    '/model-monitoring': {
      en: '/model-monitoring',
      fr: '/monitoring-modeles',
    },

    // Industry
    '/industry/manufacturing': {
      en: '/industry/manufacturing',
      fr: '/industrie/fabrication',
    },
    '/industry/agriculture': {
      en: '/industry/agriculture',
      fr: '/industrie/agriculture',
    },
    '/industry/energy': {
      en: '/industry/energy',
      fr: '/industrie/energie',
    },
    '/industry/waste-management': {
      en: '/industry/waste-management',
      fr: '/industrie/gestion-dechets',
    },
    '/industry/aerospace': {
      en: '/industry/aerospace',
      fr: '/industrie/aerospatial',
    },
    '/industry/defense': {
      en: '/industry/defense',
      fr: '/industrie/defense',
    },

    // Use cases
    '/use-cases': {
      en: '/use-cases',
      fr: '/cas-usage',
    },
    '/use-cases/abelio': {
      en: '/use-cases/abelio',
      fr: '/cas-usage/abelio',
    },
    '/use-cases/altaroad': {
      en: '/use-cases/altaroad',
      fr: '/cas-usage/altaroad',
    },
    '/use-cases/pellencst': {
      en: '/use-cases/pellencst',
      fr: '/cas-usage/pellencst',
    },
    '/use-cases/sgs': {
      en: '/use-cases/sgs',
      fr: '/cas-usage/sgs',
    },
    '/use-cases/ficha': {
      en: '/use-cases/ficha',
      fr: '/cas-usage/ficha',
    },
    '/use-cases/defects-detection': {
      en: '/use-cases/defects-detection',
      fr: '/cas-usage/detection-defauts',
    },
    '/use-cases/document-processing': {
      en: '/use-cases/document-processing',
      fr: '/cas-usage/traitement-documents',
    },
    '/use-cases/live-sport-analysis': {
      en: '/use-cases/live-sport-analysis',
      fr: '/cas-usage/analyse-sport-en-direct',
    },
    '/use-cases/remote-visual-inspection': {
      en: '/use-cases/remote-visual-inspection',
      fr: '/cas-usage/inspection-visuelle-distance',
    },

    // Compare
    '/compare': {
      en: '/compare',
      fr: '/comparer',
    },
    '/compare/roboflow': {
      en: '/compare/roboflow',
      fr: '/comparer/roboflow',
    },
    '/compare/labelbox': {
      en: '/compare/labelbox',
      fr: '/comparer/labelbox',
    },
    '/compare/encord': {
      en: '/compare/encord',
      fr: '/comparer/encord',
    },

    // Blog & posts
    '/blog': {
      en: '/blog',
      fr: '/blog',
    },
    '/blog/[slug]': {
      en: '/blog/[slug]',
      fr: '/blog/[slug]',
    },
    '/post/[slug]': {
      en: '/post/[slug]',
      fr: '/article/[slug]',
    },

    // Supporting pages
    '/about-us': {
      en: '/about-us',
      fr: '/a-propos',
    },
    '/community': {
      en: '/community',
      fr: '/communaute',
    },
    '/white-papers': {
      en: '/white-papers',
      fr: '/livres-blancs',
    },
    '/faq': {
      en: '/faq',
      fr: '/faq',
    },
    '/contact': {
      en: '/contact',
      fr: '/contact',
    },
    '/privacy': {
      en: '/privacy',
      fr: '/confidentialite',
    },
    '/cookies': {
      en: '/cookies',
      fr: '/cookies',
    },

    // Thank you pages
    '/thank-you': {
      en: '/thank-you',
      fr: '/merci',
    },
    '/thank-you-demo': {
      en: '/thank-you-demo',
      fr: '/merci-demo',
    },
    '/thank-you-trial': {
      en: '/thank-you-trial',
      fr: '/merci-essai',
    },
    '/thank-you-pricing': {
      en: '/thank-you-pricing',
      fr: '/merci-tarifs',
    },

    // Security redirects to enterprise, but keep if needed
    '/security': {
      en: '/security',
      fr: '/securite',
    },
  },
});
