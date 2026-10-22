import { type Locale } from '@/lib/i18n';

export type Accent = 'orange' | 'blue' | 'green' | 'yellow';
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

/** One offer of the Expertises section; `accent` follows the brand colour code
    (orange = development, blue = GDPR, green = both). */
export interface Offer {
  accent: 'orange' | 'blue' | 'green';
  tag: string;
  title: string;
  problem: string;
  solution: string;
  result: string;
  /** Up to four services. */
  points: string[];
  /** A compact "from → to" line (the WinDev migration). */
  shift?: { from: string; to: string };
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
  /** How they know the person and when they wrote it. */
  context: string;
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
    /** The line under the title: who you deal with, since when. */
    lead: string;
    /** Next to the founders' portraits, above the title; links to the team section. */
    team: string;
    /** Under the buttons, links to the testimonials; `{count}` is replaced. */
    proof: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    index: string;
    label: string;
    /** Key facts in the left column; the first one is the founding year. */
    facts: { value: string; label: string }[];
    title: RichSegment[];
    pillars: { title: string; text: string }[];
  };
  /** Three offers, each read as problem → what we do → result (Expertises section). */
  expertises: {
    index: string;
    label: string;
    title: [string, string];
    /** What sets Arlioz apart, next to the title. */
    intro: string;
    /** The development × GDPR line (green), under the offers. */
    signature: string;
    /** Labels of the three lines on each offer. */
    labels: { problem: string; solution: string; result: string };
    offers: Offer[];
  };
  work: {
    index: string;
    label: string;
    title: [string, string];
    caseStudy: string;
    liveExample: string;
    viewSite: string;
    clientPrefix: string;
    /** Labels of the need / result lines on the project cards. */
    need: string;
    result: string;
  };
  /** The clients band under the hero: who runs our work in production. */
  clients: { label: string };
  /** Under the team cards: where the founders have worked (logos in `content/media.ts`). */
  trust: { label: string };
  team: {
    index: string;
    label: string;
    title: string;
    members: TeamMember[];
  };
  /** Arlioz Education: teaching and company support (architecture, technique, GDPR). */
  education: {
    index: string;
    label: string;
    brand: string;
    title: [string, string];
    text: string;
    audiences: { title: string; text: string }[];
    cta: string;
  };
  /** Recommendations published on LinkedIn, quoted with their author's headline. */
  testimonials: {
    index: string;
    label: string;
    title: [string, string];
    text: string;
    /** Shown on a quote translated from another language. */
    translated: string;
    source: string;
    items: Testimonial[];
  };
  contact: {
    index: string;
    label: string;
    title: string;
    text: string;
    emailLabel: string;
    linkedinLabel: string;
    linkedinValue: string;
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
