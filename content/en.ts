import { clientLogos, img, media } from './media';
import { type Mission, type Project, type SiteContent } from './types';

const restomax: Project = {
  slug: 'restomax-book',
  index: '01',
  title: 'Restomax Book',
  type: 'Booking SaaS',
  client: 'Restomax',
  clientUrl: 'https://restomax.be',
  summary:
    'Restomax’s online booking solution: a website in each restaurant’s colours, and a dashboard to track and plan the service.',
  highlights: 'Up to 2 h saved per day · Dashboard · Several restaurants',
  tags: ['React', 'Recoil', 'Nx', 'MUI', 'Emotion', 'TypeScript'],
  demoUrl: 'https://natithai.book.ezordr.app/',
  demoLabel: 'See a live example',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Bookings taken over the phone in the middle of service, and tables lost to no-shows.',
    solution:
      'An online solution used by each restaurant: guests book on a website in the venue’s colours, the team tracks and plans every booking from a dashboard.',
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
    tagline: 'A booking SaaS: a website in each restaurant’s colours, a dashboard for the team.',
    intro:
      'Restomax Book, Restomax’s online booking solution: guests book around the clock, the team tracks and plans bookings for one or several restaurants from a single dashboard.',
    stat: { value: '2 h', text: 'The time the restaurant team can save each day.' },
    heroImage: img(
      media.restomax.desktop1,
      'Restomax Book for Nati Thai: choosing the party size and the service',
    ),
    features: [
      {
        title: 'Tracking and planning',
        text: 'Every booking at a glance, and services planned from the dashboard.',
      },
      { title: 'Time saved', text: 'Up to two hours freed up per day for your team.' },
      { title: 'In your colours', text: 'An interface in your venue’s colours.' },
      { title: 'Fewer no-shows', text: 'Reservations managed smartly to limit absences.' },
      {
        title: 'A personalised service',
        text: 'Your customers’ habits, found again at every visit.',
      },
      {
        title: 'Several venues, one tool',
        text: 'One or several restaurants run from the same dashboard.',
      },
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
  reversed: false,
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

const radyo: Mission = {
  kind: 'mission',
  title: 'Tech lead at Radyo',
  type: 'Engagement · Tech lead',
  status: 'Ongoing engagement',
  client: 'Radyo',
  logo: clientLogos[0]!,
  summary:
    'Amaury is tech lead within Radyo’s development team: one way of working for the whole team, and developers who keep growing.',
  need: 'Get the development team working the same way, and help every developer grow.',
  actionsLabel: 'What he does there',
  actions: [
    'Standardise the team’s code and tools',
    'Put best practices in place',
    'Mentor the developers so they keep growing',
  ],
  cta: {
    label: 'Talk about team support',
    subject: 'Technical support — contact request',
  },
  accent: 'orange',
};

export const en: SiteContent = {
  locale: 'en',
  meta: {
    title: 'Arlioz — Applications, SaaS, team support and GDPR · Charleroi, Belgium',
    template: '%s — Arlioz',
    description:
      'Business applications, SaaS and platforms, built and GDPR-compliant from day one, plus technical support and training for your teams. A full-stack developer and a GDPR expert, working with you directly, in Charleroi since 2018.',
    keywords: [
      'web development',
      'SaaS development',
      'business application',
      'tech lead',
      'technical consulting',
      'developer training',
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
    ogAlt: 'Arlioz — Your software and SaaS, built and GDPR-compliant from day one.',
    ogTagline: 'Applications, SaaS, team support & GDPR · Belgium',
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
      { label: 'Expertise', anchor: 'expertises', dot: 'green' },
      { label: 'Work', anchor: 'realisations', dot: 'orange' },
      { label: 'Methodology', anchor: 'methode', dot: 'green' },
      { label: 'Get started', anchor: 'demarrer', dot: 'orange' },
      { label: 'Contact', anchor: 'contact', dot: 'orange' },
    ],
    write: 'Write to us',
    follow: 'Follow',
    language: 'Language',
    tagline: 'Applications, team support and GDPR compliance, since 2018.',
    cta: 'Book a call',
    linkedin: 'LinkedIn',
  },
  hero: {
    title: [
      { lead: 'Your software and SaaS, ', em: 'built' },
      { lead: 'and ', em: 'GDPR-compliant', tail: ' from day one.' },
    ],
    lead: 'A full-stack developer and a GDPR expert, working with you directly: we build your software and support your teams, since 2018.',
    team: 'Guy and Amaury, your contacts',
    proof: '{count} LinkedIn recommendations',
    callSubject: 'Discovery call (30 min) — meeting request',
    ctaPrimary: 'Talk about my project',
    ctaSecondary: 'See our work',
  },
  expertises: {
    index: '02',
    label: 'Expertise',
    title: ['Two crafts,', 'two specialties.'],
    intro:
      'A full-stack developer and a GDPR expert under one roof, since 2018. We build your software and help your teams keep it running.',
    signature:
      'Privacy by design: every development project builds GDPR in from the architecture, not after going live.',
    labels: { problem: 'The problem', result: 'The result', more: 'Learn more' },
    offers: [
      {
        slug: 'logiciels-saas',
        faq: [2, 5],
        proof: { kind: 'project', slug: 'restomax-book' },
        tier: 'pillar',
        accent: 'orange',
        icon: 'code',
        title: 'Custom applications and SaaS',
        problem:
          'Your business runs on spreadsheets and tools that don’t talk to each other, or your SaaS idea is waiting to be built.',
        solution:
          'We design and build business applications, SaaS, platforms and APIs, from design system to back office, on proven technologies.',
        result: 'Reliable software your users adopt and your teams can keep evolving.',
        points: [
          'SaaS, platforms and back offices',
          'Business tools and dashboards',
          'Web and mobile applications, APIs',
          'Fast, accessible websites',
        ],
        cta: { label: 'Talk about your project', subject: 'Development project — contact request' },
      },
      {
        slug: 'accompagnement',
        faq: [1, 5],
        proof: { kind: 'mission' },
        tier: 'pillar',
        accent: 'green',
        icon: 'team',
        title: 'Team support and training',
        problem:
          'Your development team is growing, but everyone works their own way and newcomers take time to become autonomous.',
        solution:
          'We join your team as tech lead or in support: standards, best practices, code reviews and training, in development as in GDPR.',
        result: 'A team that works the same way, and developers who keep growing.',
        points: [
          'Tech lead within your team',
          'Code standards and best practices',
          'Code reviews and developer mentoring',
          'Tailored training, development and GDPR',
        ],
        note: 'Arlioz Education: Guy also teaches computer science and guides young developers, from the first project to professional best practices.',
        cta: { label: 'Talk about team support', subject: 'Technical support — contact request' },
      },
      {
        slug: 'rgpd',
        faq: [3, 5],
        tier: 'specialty',
        accent: 'blue',
        icon: 'shield',
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
        slug: 'migration-windev',
        faq: [4, 5],
        tier: 'specialty',
        accent: 'orange',
        icon: 'layers',
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
        cta: {
          label: 'Talk about your migration',
          subject: 'WinDev / WebDev migration — contact request',
        },
      },
    ],
  },
  work: {
    index: '03',
    label: 'Work',
    title: ['Products', 'in production.'],
    intro: 'Software used every day, and a team we support day to day.',
    caseStudy: 'Case study',
    liveExample: 'See a live example',
    viewSite: 'Visit the site',
    clientPrefix: 'Client:',
    need: 'The need',
    result: 'The result',
    items: [restomax, radyo, jkstudio],
  },
  trust: { label: 'Experience gained at' },
  clients: {
    label: 'In production at',
    statsLabel: 'Arlioz in figures',
    stats: [
      { value: '2018', label: 'Arlioz founded' },
      { value: '30+', label: 'Years of IT and security experience' },
      { value: '10+', label: 'Years teaching computer science' },
      { value: '3', label: 'Products in production' },
    ],
  },
  team: {
    index: '01',
    label: 'Team',
    title: 'Two seniors, directly.',
    intro: [
      { text: 'Since 2018, ' },
      { text: 'a GDPR expert', mark: 'blue' },
      { text: ' and ' },
      { text: 'a full-stack developer', mark: 'orange' },
      { text: ' have delivered products together, ' },
      { text: 'compliant by design', mark: 'green' },
      { text: '.' },
    ],
    members: [
      {
        name: 'Guy Moins',
        role: 'IT architect & GDPR expert',
        text: 'Over thirty years in IT, from systems security to architecture, in large international companies. He makes GDPR concrete for your teams and has taught computer science for over ten years.',
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
        role: 'Fullstack developer & tech lead',
        text: 'Fullstack developer since 2019: business applications, SaaS, web and mobile apps, APIs. He builds your products from design system to API.',
        tags: ['Tech lead', 'Angular', 'React · Next.js', 'Vue', 'NestJS · .NET', 'Mobile apps'],
        photo: {
          ...media.team.amaury,
          alt: 'Portrait of Amaury Lapaque, fullstack developer at Arlioz',
        },
        initials: 'AL',
        photoLabel: 'Photo · Amaury Lapaque',
        accent: 'orange',
        now: 'Today: tech lead at Radyo.',
      },
    ],
    pillars: [
      {
        title: 'Build',
        text: 'Business applications, SaaS, web and mobile apps and APIs, in Angular, React, Vue and NestJS.',
      },
      {
        title: 'Protect',
        text: 'Audit, record of processing, impact assessments: GDPR compliance you can demonstrate.',
      },
      {
        title: 'Pass on',
        text: 'Tech lead, code reviews, training: we help your teams grow.',
      },
    ],
  },
  testimonials: {
    index: '05',
    label: 'Testimonials',
    title: ['They worked', 'with one of us.'],
    translated: 'Translated from French',
    source: 'LinkedIn recommendation',
    items: [
      {
        quote:
          'Amaury is exceptionally well experienced in the Angular frontend development. He is motivated and eager to learn business concepts. On a personal level it is very nice to work with him.',
        name: 'Stefan Casier',
        role: 'Technical Architect at Samayas',
      },
      {
        quote:
          'He focused on coaching, writing shared components and deciding on the main architecture. Everyone enjoyed working with Amaury. He has great in-depth knowledge of the Angular framework, is up-to-date and provides you with tons of information. He is able to focus and keep calm during stressful situations.',
        name: 'Wahid Argandiwall',
        role: 'Technical architect',
      },
      {
        quote:
          'Amaury and I worked on the same project for 6 months. This collaboration, and getting to know him, was full of positives! We clearly improved the application’s code quality (always looking for best practices) and its maintainability, which was our priority. But not only that: by working together, we set up a project management methodology that was perfect and well run-in. Amaury also guided me through advanced Angular concepts thanks to his teaching skills. On the human side, Amaury is a friendly person and, above all, truly passionate. I think that is why we got on well straight away. In short: this collaboration was a major asset in my growth as a front-end developer.',
        name: 'Alexandre Moreaux',
        role: 'Developer analyst and projects · SBIM',
        translated: true,
      },
      {
        quote:
          'Amaury is really an excellent developer. His years of experience don’t reflect all his knowledge and skills. He is a real pillar in a development team. He is team player and reliable.',
        name: 'Frederique Rensonnet',
        role: 'Head of IT Corporate functions',
      },
    ],
  },
  method: {
    index: '04',
    label: 'Methodology',
    title: ['No black box.', 'Four clear steps.'],
    intro: 'At every step, you know what we do, why, and what you get at the end.',
    deliverable: 'Deliverable',
    steps: [
      {
        title: 'Audit',
        text: 'We start from what exists: your code, your architecture and your data processing, read before we suggest anything.',
        deliverable: 'A prioritised report: what blocks, what costs, what can wait',
      },
      {
        title: 'Scoping',
        text: 'We set the scope, the stack and the architecture with you. GDPR comes in at that point, not after going live.',
        deliverable: 'A delivery plan split into steps',
      },
      {
        title: 'Delivery',
        text: 'We deliver in small iterations you can see running, with a code review at every step.',
        deliverable: 'Software in production, documented as we go',
      },
      {
        title: 'Handover',
        text: 'Your team takes over: documentation, handover and training if needed. You do not depend on us.',
        deliverable: 'A team autonomous on its own code',
      },
    ],
  },
  start: {
    index: '06',
    label: 'Get started',
    title: ['Where', 'to start?'],
    intro: 'Two ways in, depending on where you stand.',
    call: {
      title: 'Discovery call',
      meta: '30 min · free',
      text: 'You tell us about your project or your team. We give you a first opinion, and the next steps if they make sense.',
      points: [
        'Your needs and constraints',
        'A first technical opinion',
        'Next steps, with no commitment',
      ],
      cta: { label: 'Book a call', subject: 'Discovery call (30 min) — meeting request' },
    },
    audit: {
      title: 'Technical & GDPR audit',
      meta: 'Fixed scope · on quote',
      text: 'An assessment of your application, before deciding what to build, take over or fix.',
      points: [
        'Code and architecture',
        'Security and dependencies',
        'GDPR compliance',
        'Prioritised report and debrief',
      ],
      cta: { label: 'Request an audit', subject: 'Technical & GDPR audit — quote request' },
    },
  },
  services: {
    back: 'All expertise',
    label: 'Expertise',
    whatWeDo: 'What we do',
    method: 'Our methodology',
    proof: 'In production',
    proofProject: 'See the case study',
    proofMission: 'See the engagement',
    faq: 'Frequently asked questions',
    ctaTitle: 'Let’s talk about your project.',
    ctaText: 'A free 30-minute call, to find out whether and how we can help.',
    metaTitle: (title) => `${title} — Expertise`,
  },
  faq: {
    index: '07',
    label: 'FAQ',
    title: ['Frequently', 'asked questions.'],
    items: [
      {
        question: 'Where are you based?',
        answer: 'In Charleroi, Belgium. We work on site or remotely.',
      },
      {
        question: 'Can you join an existing team?',
        answer:
          'Yes. We work as tech lead within your team, or in support: code standards, code reviews, mentoring your developers.',
      },
      {
        question: 'Which technologies do you work with?',
        answer: 'Angular, React and Next.js, Vue, NestJS and .NET, for web, mobile and APIs.',
      },
      {
        question: 'How is GDPR taken into account?',
        answer:
          'From the architecture, not after going live: every development project builds GDPR in from the design.',
      },
      {
        question: 'Do you take over WinDev or WebDev applications?',
        answer:
          'Yes. We migrate them one application at a time, old and new side by side, without interrupting your users.',
      },
      {
        question: 'How do we get started?',
        answer:
          'With a free 30-minute call: you describe your needs, we give you a first opinion and the next steps.',
      },
    ],
  },
  contact: {
    index: '08',
    label: 'Contact',
    title: 'Let’s talk about your project.',
    text: 'Tell us where you stand, we come back to you with a first opinion.',
    direct: {
      title: 'An e-mail or a LinkedIn message is all it takes.',
      text: 'Describe your project in a few lines.',
      email: 'Write to contact@arlioz.be',
      linkedin: 'Contact us on LinkedIn',
      subject: 'Project / team support / GDPR question — contact request',
      privacy: 'Your data is used only to answer your request.',
      privacyLink: 'Privacy policy',
    },
  },
  footer: {
    tagline: 'Software development, team support and data protection.',
    siteProof: 'This site: 100/100 accessibility · no tracking cookies',
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
      text: 'SaaS, business tool, website: software that is GDPR-compliant from the first line.',
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
