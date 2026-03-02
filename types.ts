
export type Language = 'en' | 'ua' | 'it' | 'de';

export interface ServiceRoute {
  id: string;
  title: string;
  oneLiner: string;
  bestFor: string[];
  included: string[];
  footnote?: string;
  priceBadge?: string;
  cta: string;
  preset: { route: string; package?: string; options?: string[] };
}

export interface Capability {
  id: string;
  label: string;
}

export interface Industry {
  id: string;
  label: string;
  preset: { route: string; package?: string; options?: string[] };
}

export interface WorkItem {
  id: string;
  client: string;
  category: string;
  year: string;
  image: string;
  description: string;
  before: string;
  done: string[];
  result: string;
  capabilities: string[];
  stack: string[];
  projectUrl?: string;
  caseStudyUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface DesignSystemSection {
  heading: string;
  subheading: string;
  typography: {
    title: string;
    primary: { name: string; usage: string; description: string };
    secondary: { name: string; usage: string; description: string };
  };
  standards: {
    title: string;
    items: { title: string; desc: string; code: string }[];
  };
}

export interface ProcessSection {
  heading: string;
  subheading: string;
  footerQuote: string;
  pipeline: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  modules: {
    title: string;
    items: { title: string; content: string[] }[];
  }
}

export interface TranslationStructure {
  nav: NavItem[];
  hero: {
    h1Line1: string;
    h1Line2: string;
    subheadlineLine1: string;
    subheadlineLine2: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  trust: {
    stats: { label: string; value: string }[];
    logos: string[];
  };
  marquee: string[];
  services: {
    heading: string;
    subheading: string;
    routes: ServiceRoute[];
    customRequest: {
      title: string;
      oneLiner: string;
      bullets: string[];
      cta: string;
    };
    capabilities: {
      heading: string;
      items: Capability[];
      showAllLabel: string;
    };
    industries: {
      heading: string;
      items: Industry[];
      experienceLabel: string;
    };
  };
  brief: {
    h1: string;
    subtitle: string;
    fields: {
      route: string;
      timeline: string;
      links: string;
      details: string;
      contact: string;
    };
    submit: string;
    capabilitiesTitle: string;
    showAllLabel: string;
    showLessLabel: string;
    options: {
      routes: {
        turnkey: string;
        platform: string;
        horeca: string;
        custom: string;
      };
      timeline: {
        asap: string;
        weeks: string;
        flexible: string;
      };
    };
  };
  serviceDetail: {
    industriesLabel: string;
    turnkey: ServiceDetailPage;
    platform: ServiceDetailPage;
    horeca: ServiceDetailPage;
  };
  designSystem: DesignSystemSection;
  process: ProcessSection; 
  works: {
    heading: string;
    subheading: string;
    viewAll: string;
    items: WorkItem[];
    modalLaunch: string;
  };
  faq: {
    heading: string;
    items: { q: string; a: string }[];
  };
  finalCta: {
    heading: string;
    subheading: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    heading: string;
    subheading: string;
    description: string;
    stats: { label: string; value: string }[];
    manifesto: string[];
  };
  contact: {
    heading: string;
    subheading: string;
    desc: string;
    placeholder: string;
    button: string;
    processing: string;
    emailLabel: string;
    locationLabel: string;
    aiTitle: string;
    waiting: string;
    sendButton: string;
  };
  footer: {
    rights: string;
    designedBy: string;
  };
  legal: {
    imprint: { title: string; content: string[] };
    privacy: { title: string; content: string[] };
    terms: { title: string; content: string[] };
  };
}

export interface ServiceDetailPage {
  h1: string;
  subtitle: string;
  cta: string;
  sections: {
    bestFor: { title: string; items: string[] };
    included: { title: string; items: string[] | { group1: string[]; group2: string[] } };
    packages?: { title: string; items: { name: string; price: string; timeline: string; includes: string }[] };
    startingFrom?: { title: string; setup: string; maintenance: string };
    process: { title: string; items: string[] };
    faq: { title: string; items: { q: string; a: string }[] };
  };
}
