import { type Locale } from '@/lib/i18n';
import { type TrustLogo } from './media';

/** Brand colour code: orange = development, blue = GDPR, green = both. */
export type Accent = 'orange' | 'blue' | 'green';
export type Mark = 'blue' | 'orange' | 'green';

export interface RichSegment {
  text: string;
  mark?: Mark;
  strong?: boolean;
}

export interface NavItem {
  label: string;
  /** Hash on the home page (e.g. `expertises`). */
  anchor: string;
  dot: Accent;
}

export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface DeviceSet {
  /** Light background of the screenshots, shown while they load. */
  screenBg: string;
  url: string;
  desktop: ProjectImage;
  desktopAlt?: ProjectImage;
  tablet: ProjectImage;
  tabletAlt?: ProjectImage;
  phone: ProjectImage;
  phoneAlt?: ProjectImage;
  /** Which composed animation the stage plays. */
  motion: 'swap' | 'scroll';
  /** A real device mockup (transparent PNG/WebP). When set it replaces the composed
      CSS devices on the project card. */
  mockup?: ProjectImage;
}

export interface GalleryItem {
  kind: 'desktop' | 'tablet' | 'phone';
  image: ProjectImage;
  caption: string;
  /** For phone/tablet frames: object-position of the screenshot. */
  position?: string;
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  type: string;
  client: string;
  clientUrl?: string;
  summary: string;
  highlights: string;
  tags: string[];
  demoUrl?: string;
  demoLabel?: string;
  devices: DeviceSet;
  accent: Accent;
  reversed: boolean;
  /** The business story, shown on the card (need, result) and the case study. */
  story: {
    challenge: string;
    solution: string;
    role: string;
    /** Only facts the client confirmed; `value` only for a measured result. */
    results: { value?: string; text: string }[];
  };
  caseStudy: {
    tagline: string;
    intro: string;
    stat?: { value: string; text: string };
    features: { title: string; text: string }[];
    stack: { category: string; name: string }[];
    gallery: GalleryItem[];
    heroImage: ProjectImage;
  };
}

/**
 * A mission inside a client's team (no screenshots, no case study): what they needed
 * and what we do there. Shown among the projects in the Work section.
 */
export interface Mission {
  kind: 'mission';
  title: string;
  type: string;
  /** Shown as a pill in the card's top bar (e.g. ongoing). */
  status: string;
  client: string;
  /** The client's logo mask, from `content/media.ts`. */
  logo: TrustLogo;
  summary: string;
  need: string;
  /** What we do there, in a few short lines. */
  actions: string[];
  /** Label of the actions list, for screen readers and the panel header. */
  actionsLabel: string;
  cta: ContactLink;
  accent: Accent;
}

/** One offer of the Expertises section; `accent` follows the brand colour code
    (orange = development, blue = GDPR, green = both). */
export interface Offer {
  /** URL segment of the offer's own page (`/services/<slug>`). */
  slug: string;
  /** Pillars are the two main offers (large cards); specialties back them up (compact). */
  tier: 'pillar' | 'specialty';
  accent: 'orange' | 'blue' | 'green';
  /** The offer's icon (components/sections/Expertises.tsx). */
  icon: 'code' | 'team' | 'shield' | 'layers';
  title: string;
  problem: string;
  solution: string;
  result: string;
  /** Up to four services. */
  points: string[];
  /** Optional line under the services (e.g. Arlioz Education on the support offer). */
  note?: string;
  /** Proof shown on the offer's page: a project's case study, or the Radyo mission. */
  proof?: { kind: 'project'; slug: string } | { kind: 'mission' };
  /** Indexes of the home FAQ items repeated on the offer's page. */
  faq: number[];
  cta: ContactLink;
}

/** A mailto link with a pre-filled subject, for a given topic. */
export interface ContactLink {
  label: string;
  subject: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  /** The author's LinkedIn headline. */
  role: string;
  /** True when `quote` is a translation of the original. */
  translated?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  text: string;
  tags: string[];
  /** Real portrait; when absent the design's dashed placeholder is shown. */
  photo?: { src: string; width: number; height: number; alt: string };
  initials: string;
  photoLabel: string;
  accent: 'blue' | 'orange';
  /** What the member does today, shown under the text. */
  now?: string;
}

/** One step of the working method, with what the client gets at the end of it. */
export interface MethodStep {
  title: string;
  text: string;
  deliverable: string;
}

/** A way to start working together (Start section). */
export interface StartOffer {
  title: string;
  /** Short facts next to the title (duration, price). */
  meta: string;
  text: string;
  points: string[];
  cta: ContactLink;
}

export interface SiteContent {
  locale: Locale;
  meta: {
    title: string;
    template: string;
    description: string;
    keywords: string[];
    ogAlt: string;
    ogTagline: string;
  };
  a11y: {
    skipToContent: string;
    homeLink: string;
    backToTop: string;
    languageGroup: string;
    openMenu: string;
    closeMenu: string;
    mainNav: string;
    siteMap: string;
    menuDialog: string;
  };
  nav: {
    menu: string;
    close: string;
    items: NavItem[];
    sectionLabel: string;
    write: string;
    follow: string;
    language: string;
    tagline: string;
    cta: string;
    linkedin: string;
  };
  hero: {
    /**
     * One entry per line: `lead` in the display face, `em` highlighted in italic serif
     * (orange gradient on the first line, development; blue-green on the second, GDPR),
     * then an optional `tail` back in the display face.
     */
    title: { lead: string; em: string; tail?: string }[];
    /** Mono line above the title: what Arlioz is, and where. */
    eyebrow: string;
    /** The line under the title: who you deal with, since when. */
    lead: string;
    /** Next to the founders' portraits, above the title; links to the team section. */
    team: string;
    /** Under the buttons, links to the testimonials; `{count}` is replaced. */
    proof: string;
    /** Facts shown next to the recommendations link, under the buttons. */
    facts: string[];
    /** Pre-filled subject of the primary button (a discovery call by e-mail). */
    callSubject: string;
    /** Caption of the device stage beside the title. */
    visualCaption: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  /** Four offers, each read as problem → result, then what we do (Expertises section). */
  expertises: {
    index: string;
    label: string;
    title: [string, string];
    /** What sets Arlioz apart, next to the title. */
    intro: string;
    /** The development × GDPR line (green), under the offers. */
    signature: string;
    /** Before → after on each offer, read by screen readers (shown as an arrow); `more`
        links to the offer's own page. */
    labels: { problem: string; result: string; more: string };
    offers: Offer[];
  };
  work: {
    index: string;
    label: string;
    title: [string, string];
    intro: string;
    caseStudy: string;
    liveExample: string;
    viewSite: string;
    clientPrefix: string;
    /** Labels of the need / result lines on the project cards. */
    need: string;
    result: string;
    /** The cards, in order: projects (with a case study) and missions. */
    items: (Project | Mission)[];
  };
  /** The proof band under the hero: who runs our work in production, then key figures. */
  clients: {
    label: string;
    /** Accessible name of the key figures list. */
    statsLabel: string;
    stats: { value: string; label: string }[];
  };
  /** Under the team cards: where the founders have worked (logos in `content/media.ts`). */
  trust: { label: string };
  team: {
    index: string;
    label: string;
    title: string;
    /** Under the title: who they are, with the brand colour marks. */
    intro: RichSegment[];
    members: TeamMember[];
    /** Three short lines under the cards: build, protect, pass on. */
    pillars: { title: string; text: string }[];
  };
  method: {
    index: string;
    label: string;
    title: [string, string];
    intro: string;
    deliverable: string;
    steps: MethodStep[];
  };
  start: {
    index: string;
    label: string;
    title: [string, string];
    intro: string;
    call: StartOffer;
    audit: StartOffer;
  };
  /** Labels of the offers' own pages (`/services/<slug>`). */
  services: {
    back: string;
    label: string;
    whatWeDo: string;
    method: string;
    proof: string;
    proofProject: string;
    proofMission: string;
    faq: string;
    ctaTitle: string;
    ctaText: string;
    metaTitle: (title: string) => string;
  };
  faq: {
    index: string;
    label: string;
    title: [string, string];
    items: { question: string; answer: string }[];
  };
  /** Recommendations published on LinkedIn, quoted with their author's headline. */
  testimonials: {
    index: string;
    label: string;
    title: [string, string];
    /** Shown under a quote translated from another language. */
    translated: string;
    /** Accessible name of the LinkedIn mark on each card. */
    source: string;
    /** The first one is shown large, across the full width. */
    items: Testimonial[];
  };
  contact: {
    index: string;
    label: string;
    title: string;
    text: string;
    direct: {
      title: string;
      text: string;
      email: string;
      linkedin: string;
      /** Pre-filled subject of the mailto link. */
      subject: string;
      privacy: string;
      privacyLink: string;
    };
  };
  footer: {
    tagline: string;
    navigation: string;
    contact: string;
    legal: string;
    country: string;
    legalNotice: string;
    privacy: string;
    cookies: string;
    copyright: string;
    madeIn: string;
    backToTop: string;
  };
  caseStudy: {
    back: string;
    counter: string;
    client: string;
    type: string;
    stack: string;
    demo: string;
    sections: {
      project: string;
      challenge: string;
      solution: string;
      role: string;
      results: string;
      features: string;
      featuresTitle: string;
      stack: string;
      stackTitle: string;
      stackIntro: string;
      gallery: string;
      galleryTitle: string;
    };
    next: string;
    nextAria: string;
    cta: { title: string; text: string; write: string; home: string };
    metaTitle: (title: string) => string;
  };
  notFound: { title: string; text: string; cta: string };
  projects: Project[];
}
