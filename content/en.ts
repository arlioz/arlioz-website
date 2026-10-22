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
      { value: '2 h', text: 'saved every day for the restaurant team' },
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
    stat: { value: '2 h', text: 'Freed up every day for the restaurant team.' },
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
  accent: 'yellow',
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
    title: 'Arlioz — Digital development & GDPR consulting in Belgium',
    template: '%s — Arlioz',
    description:
      'Arlioz brings digital development and data protection together: websites, web and mobile applications, GDPR compliance. One team, based in Belgium, since 2018.',
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
      'Next.js',
      'React',
      'Angular',
    ],
    ogAlt: 'Arlioz — Solid code. Protected data.',
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
      { label: 'Work', anchor: 'realisations', dot: 'blue' },
      { label: 'Expertise', anchor: 'expertises', dot: 'orange' },
      { label: 'Team', anchor: 'equipe', dot: 'green' },
      { label: 'Education', anchor: 'education', dot: 'yellow' },
      { label: 'Contact', anchor: 'contact', dot: 'blue' },
    ],
    write: 'Write to us',
    follow: 'Follow',
    language: 'Language',
    tagline: 'Digital development and GDPR compliance, since 2018.',
    cta: 'Talk about my project',
    linkedin: 'LinkedIn',
  },
  hero: {
    badge: 'Development & GDPR · Belgium',
    title: [
      { lead: 'Solid ', em: 'code.' },
      { lead: 'Protected ', em: 'data.' },
    ],
    lead: 'Custom web and mobile applications, with GDPR compliance built in from the start: we support companies and organisations, from audit to production.',
    ctaPrimary: 'Talk about my project',
    ctaSecondary: 'See our work',
  },
  about: {
    index: '02',
    label: 'About',
    facts: [
      { value: '2018', label: 'Arlioz founded' },
      { value: '30+', label: 'Years of IT and security experience' },
      { value: '10+', label: 'Years teaching computer science' },
      { value: '3', label: 'Products in production' },
    ],
    title: [
      { text: 'We bring ' },
      { text: 'data protection', mark: 'blue' },
      { text: ' and ' },
      { text: 'digital development', mark: 'orange' },
      { text: ' together to help your business ' },
      { text: 'grow', mark: 'green' },
      { text: '.' },
    ],
    pillars: [
      {
        title: 'Build',
        text: 'Websites, web and mobile applications, with proven technologies.',
      },
      {
        title: 'Protect',
        text: 'Clear GDPR compliance, built in from the architecture up.',
      },
      {
        title: 'Grow',
        text: 'Robust solutions that support your growth.',
      },
    ],
  },
  expertises: {
    index: '03',
    label: 'Expertise',
    title: ['Two areas of expertise', 'that complement each other.'],
    intro:
      'Hand us your organisation’s GDPR compliance, the development of your applications, or both: the same team builds the product and protects its data.',
    rgpd: {
      tag: 'Data protection',
      title: 'GDPR consulting',
      text: 'Bringing your organisation into compliance, and keeping it there.',
      items: [
        'Compliance audit',
        'Records of processing activities',
        'Impact assessments (DPIA)',
        'Privacy and cookie policies',
        'Data processing agreements',
        'Team awareness training',
      ],
      benefit:
        'Compliance you can demonstrate to your clients, your partners and the Data Protection Authority.',
      cta: {
        label: 'Talk about your compliance',
        subject: 'GDPR compliance — contact request',
      },
    },
    devCta: {
      label: 'Talk about your project',
      subject: 'Development project — contact request',
    },
    cards: [
      {
        tag: 'Development',
        title: 'Web development',
        text: 'Bespoke websites, platforms and widgets, fast and accessible.',
        icon: 'code',
      },
      {
        tag: 'Development',
        title: 'Cross-platform apps',
        text: 'One code base for web and mobile, in your brand’s colours.',
        icon: 'devices',
      },
      {
        tag: 'Development',
        title: 'Frontend architecture',
        text: 'Monorepo, design system, state management: foundations that last.',
        icon: 'layout',
      },
      {
        tag: 'Development',
        title: 'Website optimisation',
        text: 'Performance, technical SEO, accessibility: a faster, more visible site.',
        icon: 'gauge',
      },
    ],
    stack: {
      tag: 'Dev × GDPR',
      title: 'Project stack architecture',
      text: [
        {
          text: 'Technologies, hosting, data flows, security: an architecture compliant from day one. ',
        },
        { text: 'Privacy by design', strong: true },
        { text: ', for real.' },
      ],
      diagram: {
        left: 'DEV',
        right: 'GDPR',
        center: ['PRIVACY', 'BY DESIGN'],
        aria: 'Development and GDPR meet: privacy by design',
      },
    },
    migration: {
      tag: 'Development · Migration',
      title: 'Migrate your WinDev, WebDev and WinDev Mobile estate',
      text: 'A progressive and complete migration of your business applications to a modern full-stack: web front-end, mobile and desktop applications, API and back-end. One application at a time, with no disruption for your users.',
      from: { label: 'Today', items: ['WinDev', 'WebDev', 'WinDev Mobile'] },
      to: {
        label: 'Tomorrow',
        items: ['Web front-end', 'Mobile & desktop apps', 'API & back-end'],
      },
      steps: [
        { title: 'Map', text: 'Applications, data, flows and migration order.' },
        { title: 'Coexist', text: 'One application at a time: old and new run side by side.' },
        {
          title: 'Rebuild',
          text: 'Interfaces, applications, API; data and business rules carried over.',
        },
        { title: 'Hand over', text: 'Documentation and knowledge transfer to your teams.' },
      ],
      note: 'Done by us, or led by your teams with our support.',
      cta: {
        label: 'Talk about your migration',
        subject: 'WinDev / WebDev migration — contact request',
      },
    },
  },
  work: {
    index: '01',
    label: 'Work',
    title: ['Real projects,', 'live online.'],
    clientsLabel: 'In production at',
    clients: ['Radyo', 'Restomax', 'JK Studio'],
    caseStudy: 'Case study',
    liveExample: 'See a live example',
    viewSite: 'Visit the site',
    clientPrefix: 'Client:',
    need: 'The need',
    result: 'The result',
  },
  trust: { label: 'Experience gained at' },
  team: {
    index: '04',
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
    recommendations: {
      label: 'They recommend Amaury',
      items: [
        {
          quote:
            'Amaury is exceptionally well experienced in the Angular frontend development. He is motivated and eager to learn business concepts. On a personal level it is very nice to work with him.',
          lang: 'en',
          author: 'Stefan Casier',
          role: 'Technical architect, his direct manager',
        },
        {
          quote:
            'He focused on coaching, writing shared components and deciding on the main architecture. Everyone enjoyed working with Amaury.',
          lang: 'en',
          author: 'Wahid Argandiwall',
          role: 'Technical architect, same team',
        },
        {
          quote:
            'Amaury is really an excellent developer. His years of experience don’t reflect all his knowledge and skills. He is a real pillar in a development team.',
          lang: 'en',
          author: 'Frederique Rensonnet',
          role: 'Head of IT Corporate functions',
        },
        {
          quote:
            'Nous avons clairement amélioré la qualité du code de l’application […] et sa maintenabilité. Amaury m’a aussi accompagné dans des concepts avancés d’Angular grâce à sa qualité de pédagogue.',
          lang: 'fr',
          author: 'Alexandre Moreaux',
          role: 'Analyst developer, same project',
        },
      ],
    },
  },
  education: {
    index: '05',
    label: 'Education',
    brand: 'Arlioz Education',
    title: ['Teaching', 'and guiding.'],
    text: 'Guy teaches development to future developers and supports companies in the field: architecture, technical choices, quality, upskilling teams. The same standard as on a project: solid code, protected data.',
    audiences: [
      {
        title: 'Companies',
        text: 'Architectural, technical and organisational support: an audit of your codebase, stack choices, code reviews, tailored training for your teams, on site or remote.',
      },
      {
        title: 'Students',
        text: 'Courses and guidance for young developers, from the first project to professional best practices.',
      },
    ],
    topics: [
      {
        icon: 'layout',
        tag: 'Support',
        title: 'Architecture and stack',
        text: 'Audit of the existing, technology choices, foundations for a project built to last.',
      },
      {
        icon: 'gauge',
        tag: 'Support',
        title: 'Technique and quality',
        text: 'Code reviews, best practices, performance and tooling, alongside your developers.',
      },
      {
        icon: 'shield',
        tag: 'Support',
        title: 'GDPR and data',
        text: 'Compliance, privacy by design and security, explained and put in place with your teams.',
      },
      {
        icon: 'code',
        tag: 'Course',
        title: 'Web development',
        text: 'JavaScript and TypeScript, front-end and back-end frameworks, from the basics to a complete project.',
      },
    ],
    cta: 'Talk about support',
  },
  contact: {
    index: '06',
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
