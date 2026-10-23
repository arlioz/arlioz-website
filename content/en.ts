import { img, media } from './media';
import { type Project, type SiteContent } from './types';

const restomax: Project = {
  slug: 'restomax-book',
  index: '01',
  title: 'Restomax Book',
  type: 'Website & widget',
  client: 'Restomax',
  clientUrl: 'https://restomax.be',
  summary: 'A website and an online booking widget, in each restaurant’s colours.',
  highlights: 'Up to 2 h saved per day · Anti no-show · Customisable',
  tags: ['React', 'Recoil', 'Nx', 'MUI', 'Emotion', 'TypeScript'],
  demoUrl: 'https://natithai.book.ezordr.app/',
  demoLabel: 'See a live example',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Bookings taken over the phone in the middle of service, and tables lost to no-shows.',
    solution:
      'A booking website and widget in each restaurant’s colours: guests book online, the team manages every booking from a single tool.',
    role: 'Fullstack design and development: the widget, the website generated for each restaurant and the booking management module.',
    results: [
      { value: 'Up to 2 h', text: 'saved per day for the restaurant team' },
      { text: 'Online bookings around the clock, without a phone call' },
      { text: 'Fewer no-shows, thanks to smart booking management' },
    ],
  },
  devices: {
    screenBg: '#FFFFFF',
    url: media.restomax.url,
    motion: 'swap',
    desktop: img(
      media.restomax.desktop1,
      'Restomax Book widget: choosing the party size and the service',
    ),
    desktopAlt: img(media.restomax.desktop2, 'Restomax Book widget: choosing the date'),
    tablet: img(media.restomax.tablet1, 'Restomax Book on a tablet'),
    tabletAlt: img(media.restomax.tablet2, ''),
    phone: img(media.restomax.mobile1, 'Restomax Book on a phone'),
    phoneAlt: img(media.restomax.mobile2, ''),
  },
  caseStudy: {
    tagline: 'A website and an online booking widget, in each restaurant’s colours.',
    intro:
      'Restomax’s online booking system: a customisable website and widget that simplify reservation management.',
    stat: { value: '2 h', text: 'The time the restaurant team can save each day.' },
    heroImage: img(
      media.restomax.desktop1,
      'Restomax Book for Nati Thai: choosing the party size and the service',
    ),
    features: [
      { title: 'Simpler bookings', text: 'Every reservation managed from a single tool.' },
      { title: 'Time saved', text: 'Up to two hours freed up per day for your team.' },
      { title: 'In your colours', text: 'An interface in your venue’s colours.' },
      { title: 'Fewer no-shows', text: 'Reservations managed smartly to limit absences.' },
      {
        title: 'A personalised service',
        text: 'Your customers’ habits, found again at every visit.',
      },
      { title: 'For every restaurant', text: 'A solution suited to every type of venue.' },
    ],
    stack: [
      { category: 'Interface', name: 'React' },
      { category: 'State', name: 'Recoil' },
      { category: 'Monorepo', name: 'Nx' },
      { category: 'Components', name: 'MUI' },
      { category: 'Styling', name: 'Emotion' },
      { category: 'Typing', name: 'TypeScript' },
    ],
    gallery: [
      {
        kind: 'desktop',
        image: img(media.restomax.desktop2, 'Step 2 on desktop: choosing the date'),
        caption: 'Desktop · choosing the date',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile2, 'Step 2 on mobile: availability calendar'),
        caption: 'Mobile · calendar',
      },
      {
        kind: 'tablet',
        image: img(media.restomax.tablet1, 'Widget home on a tablet'),
        caption: 'Tablet · home',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile1, 'Step 1 on mobile: party size and service'),
        caption: 'Mobile · booking',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile1, 'Restaurant details on mobile: contact and directions'),
        caption: 'Mobile · info and directions',
        position: '50% 100%',
      },
    ],
  },
};

const jkstudio: Project = {
  slug: 'jk-studio',
  index: '02',
  title: 'JK Studio',
  type: 'Website',
  client: 'JK Studio',
  clientUrl: 'https://www.jkstudio.fr/',
  summary:
    'A photography portfolio by gallery, with direct contact and content that is easy to update.',
  highlights: 'Nightlife · Weddings · Events · Dark and light mode',
  tags: ['Next.js', 'Supabase'],
  demoUrl: 'https://www.jkstudio.fr/',
  demoLabel: 'Visit the site',
  accent: 'orange',
  reversed: true,
  story: {
    challenge:
      'A nightlife, wedding and events photographer needed a fast portfolio he could update himself.',
    solution:
      'A clean website where each gallery reads like a contact sheet, in a light or dark theme, with a direct quote request.',
    role: 'Design and development of the website, from the interface to content management.',
    results: [
      { text: 'Galleries published by the photographer himself, without a developer' },
      { text: 'Static pages, fast and well indexed' },
    ],
  },
  devices: {
    screenBg: '#EFEAE3',
    url: media.jkstudio.url,
    motion: 'scroll',
    desktop: img(media.jkstudio.desktop, 'jkstudio.fr home page on desktop'),
    tablet: img(media.jkstudio.tablet, 'jkstudio.fr on a tablet'),
    phone: img(media.jkstudio.mobile, 'jkstudio.fr on a phone'),
  },
  caseStudy: {
    tagline: 'A photography portfolio that puts the images first, updated without a developer.',
    intro:
      'The portfolio of a nightlife, wedding and event photographer: a fast, understated site where each gallery browses like a contact sheet.',
    heroImage: img(media.jkstudio.desktop, 'jkstudio.fr home page on desktop'),
    features: [
      {
        title: 'Galleries by category',
        text: 'Nightlife, weddings, events: each world has its own gallery.',
      },
      {
        title: 'Images first',
        text: 'Photos at the right size, loaded on demand.',
      },
      { title: 'Dark and light', text: 'Two themes for legible photos in any lighting.' },
      {
        title: 'Contact form',
        text: 'A quote request that lands straight with the photographer.',
      },
      {
        title: 'Easy to update',
        text: 'Add a series or a text, with no technical intervention.',
      },
      {
        title: 'Fast and well indexed',
        text: 'Static pages, optimised images and careful metadata for search engines.',
      },
    ],
    stack: [
      { category: 'Framework', name: 'Next.js' },
      { category: 'Interface', name: 'React' },
      { category: 'Data', name: 'Supabase' },
      { category: 'Typing', name: 'TypeScript' },
    ],
    gallery: [
      {
        kind: 'desktop',
        image: img(media.jkstudio.desktop, 'jkstudio.fr home page on desktop'),
        caption: 'Desktop · home',
      },
      {
        kind: 'phone',
        image: img(media.jkstudio.mobile, 'jkstudio.fr on a phone'),
        caption: 'Mobile · home',
      },
      {
        kind: 'tablet',
        image: img(media.jkstudio.tablet, 'jkstudio.fr on a tablet'),
        caption: 'Tablet · gallery',
      },
    ],
  },
};

export const en: SiteContent = {
  locale: 'en',
  meta: {
    title: 'Arlioz — Websites, apps and GDPR compliance · Charleroi, Belgium',
    template: '%s — Arlioz',
    description:
      'Your websites, web and mobile apps and business tools, built and GDPR-compliant from day one. A full-stack developer and a GDPR expert, working with you directly, in Charleroi since 2018.',
    keywords: [
      'web development',
      'mobile application',
      'GDPR consulting',
      'GDPR compliance',
      'privacy by design',
      'web development training',
      'GDPR training',
      'WinDev migration',
      'WebDev migration',
      'WinDev Mobile migration',
      'Belgium',
      'Charleroi',
      'Next.js',
      'React',
      'Angular',
    ],
    ogAlt: 'Arlioz — Your websites and business tools, built and GDPR-compliant from day one.',
    ogTagline: 'Digital development & GDPR consulting · Belgium',
  },
  a11y: {
    skipToContent: 'Skip to content',
    homeLink: 'Arlioz, home',
    backToTop: 'Arlioz, back to top',
    languageGroup: 'Site language',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    mainNav: 'Main navigation',
    siteMap: 'Site map',
    menuDialog: 'Main menu',
  },
  nav: {
    menu: 'Menu',
    close: 'Close',
    sectionLabel: 'Navigation',
    items: [
      { label: 'Team', anchor: 'equipe', dot: 'green' },
      { label: 'Work', anchor: 'realisations', dot: 'orange' },
      { label: 'Expertise', anchor: 'expertises', dot: 'green' },
      { label: 'Education', anchor: 'education', dot: 'green' },
      { label: 'Contact', anchor: 'contact', dot: 'orange' },
    ],
    write: 'Write to us',
    follow: 'Follow',
    language: 'Language',
    tagline: 'Digital development and GDPR compliance, since 2018.',
    cta: 'Talk about my project',
    linkedin: 'LinkedIn',
  },
  hero: {
    title: [
      { lead: 'Your websites and business tools, ', em: 'built' },
      { lead: 'and ', em: 'GDPR-compliant', tail: ' from day one.' },
    ],
    lead: 'A full-stack developer and a GDPR expert, working directly with companies and organisations since 2018.',
    team: 'Guy and Amaury, your contacts',
    proof: '{count} LinkedIn recommendations',
    ctaPrimary: 'Talk about my project',
    ctaSecondary: 'See our work',
  },
  about: {
    index: '04',
    label: 'About',
    facts: [
      { value: '2018', label: 'Arlioz founded' },
      { value: '30+', label: 'Years of IT and security experience' },
      { value: '10+', label: 'Years teaching computer science' },
      { value: '3', label: 'Products in production' },
    ],
    title: [
      { text: 'Since 2018, ' },
      { text: 'a GDPR expert', mark: 'blue' },
      { text: ' and ' },
      { text: 'a full-stack developer', mark: 'orange' },
      { text: ' have delivered products together, ' },
      { text: 'compliant by design', mark: 'green' },
      { text: '.' },
    ],
    pillars: [
      {
        title: 'Build',
        text: 'Websites, web and mobile applications and APIs, in Angular, React, Vue and NestJS.',
      },
      {
        title: 'Protect',
        text: 'Audit, record of processing, impact assessments: GDPR compliance you can demonstrate.',
      },
      {
        title: 'Pass on',
        text: 'Over ten years of teaching: we document and train your teams.',
      },
    ],
  },
  expertises: {
    index: '03',
    label: 'Expertise',
    title: ['Three offers,', 'one team.'],
    intro:
      'A full-stack developer and a GDPR expert under one roof, since 2018. You pick the offer, we take it from start to finish.',
    signature:
      'Privacy by design: every development project builds GDPR in from the architecture, not after going live.',
    labels: { problem: 'The problem', solution: 'What we do', result: 'The result' },
    offers: [
      {
        accent: 'orange',
        tag: 'Development',
        title: 'Websites and applications',
        problem:
          'Your website or business tool is slow, hard to change or poorly suited to mobile.',
        solution:
          'We design and build websites, web and mobile applications and APIs, on proven technologies.',
        result: 'A fast, accessible product your teams can keep evolving.',
        points: [
          'Custom websites and platforms',
          'Web and mobile applications',
          'Frontend architecture and design systems',
          'Performance, technical SEO, accessibility',
        ],
        cta: { label: 'Talk about your project', subject: 'Development project — contact request' },
      },
      {
        accent: 'blue',
        tag: 'Data protection',
        title: 'GDPR compliance',
        problem: 'You process personal data without knowing whether you are compliant.',
        solution: 'We audit your processing, write the required documents and train your teams.',
        result:
          'Compliance you can demonstrate to your clients and to the Data Protection Authority.',
        points: [
          'Compliance audit',
          'Record of processing and impact assessments (DPIA)',
          'Privacy and cookie policies, processing agreements',
          'Team awareness training',
        ],
        cta: { label: 'Talk about your compliance', subject: 'GDPR compliance — contact request' },
      },
      {
        accent: 'orange',
        tag: 'Development · Migration',
        title: 'WinDev and WebDev migration',
        problem:
          'Your WinDev, WebDev or WinDev Mobile applications are ageing and getting costly to maintain.',
        solution:
          'We move them one by one to a modern stack. We run the migration, or we support your teams.',
        result: 'Your users keep working throughout the migration, with no disruption.',
        points: [
          'Map of applications and data',
          'Old and new side by side, one application at a time',
          'Interfaces, applications and APIs rebuilt',
          'Documentation and handover to your teams',
        ],
        shift: { from: 'WinDev · WebDev · WinDev Mobile', to: 'Web · mobile · API' },
        cta: {
          label: 'Talk about your migration',
          subject: 'WinDev / WebDev migration — contact request',
        },
      },
    ],
  },
  work: {
    index: '02',
    label: 'Work',
    title: ['Real projects,', 'live online.'],
    caseStudy: 'Case study',
    liveExample: 'See a live example',
    viewSite: 'Visit the site',
    clientPrefix: 'Client:',
    need: 'The need',
    result: 'The result',
  },
  trust: { label: 'Experience gained at' },
  clients: {
    label: 'In production at',
  },
  team: {
    index: '01',
    label: 'Team',
    title: 'Two experts, directly.',
    members: [
      {
        name: 'Guy Moins',
        role: 'IT architect & GDPR expert',
        text: 'Over thirty years in IT, from systems security to architecture, in large international companies. He frames your data, makes GDPR concrete for your teams and has over ten years of teaching computer science.',
        tags: ['GDPR consulting', 'IT security', 'IT architecture', 'Teaching'],
        photo: {
          ...media.team.guy,
          alt: 'Portrait of Guy Moins, IT architect and GDPR expert at Arlioz',
        },
        initials: 'GM',
        photoLabel: 'Photo · Guy Moins',
        accent: 'blue',
      },
      {
        name: 'Amaury Lapaque',
        role: 'Fullstack developer',
        text: 'Fullstack developer since 2019: frontend architecture, web and mobile apps, back ends migrated to modern APIs. He builds your products from design system to API.',
        tags: ['Angular', 'React · Next.js', 'Vue', 'NestJS · .NET', 'Mobile apps'],
        photo: {
          ...media.team.amaury,
          alt: 'Portrait of Amaury Lapaque, fullstack developer at Arlioz',
        },
        initials: 'AL',
        photoLabel: 'Photo · Amaury Lapaque',
        accent: 'orange',
      },
    ],
  },
  education: {
    index: '05',
    label: 'Education',
    brand: 'Arlioz Education',
    title: ['Teaching', 'and guiding.'],
    text: 'Guy trains future developers and upskills in-house teams: architecture, quality, GDPR.',
    audiences: [
      {
        title: 'Companies',
        text: 'Codebase audits, stack choices, code reviews and tailored training, on site or remote.',
      },
      {
        title: 'Students',
        text: 'Courses and guidance for young developers, from the first project to professional best practices.',
      },
    ],
    cta: 'Talk about support',
  },
  testimonials: {
    index: '06',
    label: 'Testimonials',
    title: ['They worked', 'with one of us.'],
    translated: 'Translated from French',
    source: 'LinkedIn recommendation',
    items: [
      {
        quote:
          'We clearly improved the application’s code quality (always looking for best practices) and its maintainability, which was our priority. Amaury also guided me through advanced Angular concepts thanks to his teaching skills. […] This collaboration was a major asset in my growth as a front-end developer.',
        name: 'Alexandre Moreaux',
        role: 'Developer analyst and projects · SBIM',
        translated: true,
      },
      {
        quote:
          'He focused on coaching, writing shared components and deciding on the main architecture. Everyone enjoyed working with Amaury. He has great in-depth knowledge of the Angular framework, is up-to-date and provides you with tons of information. He is able to focus and keep calm during stressful situations.',
        name: 'Wahid Argandiwall',
        role: 'Technical architect',
      },
      {
        quote:
          'Amaury is exceptionally well experienced in the Angular frontend development. He is motivated and eager to learn business concepts. On a personal level it is very nice to work with him.',
        name: 'Stefan Casier',
        role: 'Technical Architect at Samayas',
      },
      {
        quote:
          'Amaury is really an excellent developer. His years of experience don’t reflect all his knowledge and skills. He is a real pillar in a development team. He is team player and reliable.',
        name: 'Frederique Rensonnet',
        role: 'Head of IT Corporate functions',
      },
    ],
  },
  contact: {
    index: '07',
    label: 'Contact',
    title: 'A project? A GDPR question? Let’s talk.',
    text: 'Tell us where you stand, we come back to you with a first opinion.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'Arlioz',
    direct: {
      title: 'An e-mail or a LinkedIn message is all it takes.',
      text: 'Describe your project in a few lines.',
      email: 'Write to contact@arlioz.be',
      linkedin: 'Contact us on LinkedIn',
      subject: 'Project / GDPR question — contact request',
      privacy: 'Your data is used only to answer your request.',
      privacyLink: 'Privacy policy',
    },
  },
  footer: {
    tagline: 'Data protection and digital development.',
    navigation: 'Navigation',
    contact: 'Contact',
    legal: 'Legal',
    country: 'Belgium',
    legalNotice: 'Legal notice',
    privacy: 'Privacy policy',
    cookies: 'Cookie settings',
    copyright: '© {year} Arlioz · BCE {bce}',
    madeIn: 'Designed and built in Belgium',
    backToTop: 'Back to top ↑',
  },
  caseStudy: {
    back: 'All projects',
    counter: 'Case study',
    client: 'Client',
    type: 'Type',
    stack: 'Stack',
    demo: 'Live example',
    sections: {
      project: 'The project',
      challenge: 'The challenge',
      solution: 'Our solution',
      role: 'Our role',
      results: 'Results',
      features: 'Features',
      featuresTitle: 'What the solution brings.',
      stack: 'Tech stack',
      stackTitle: 'A solid, typed foundation.',
      stackIntro: 'The technologies used for this project.',
      gallery: 'In pictures',
      galleryTitle: 'The interface, screen by screen.',
    },
    next: 'Next project',
    nextAria: 'Next project:',
    cta: {
      title: 'A similar project? Let’s talk.',
      text: 'Booking, portfolio, bespoke platform: tools that are GDPR-compliant from the first line.',
      write: 'Write to contact@arlioz.be',
      home: 'Back to home',
    },
    metaTitle: (title) => `${title} — Case study`,
  },
  notFound: {
    title: 'Page not found.',
    text: 'The page you are looking for does not exist or has moved.',
    cta: 'Back to home',
  },
  projects: [restomax, jkstudio],
};
