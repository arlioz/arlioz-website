import { clientLogos, img, media } from './media';
import { type Mission, type Project, type SiteContent } from './types';

const restomax: Project = {
  slug: 'restomax-book',
  index: '01',
  title: 'Restomax Book',
  type: 'SaaS de réservation',
  client: 'Restomax',
  clientUrl: 'https://restomax.be',
  summary:
    'La solution de réservation en ligne de Restomax : un site aux couleurs de chaque restaurant, et un tableau de bord pour suivre et planifier le service.',
  highlights: 'Jusqu’à 2 h libérées par jour · Tableau de bord · Plusieurs restaurants',
  tags: ['React', 'Recoil', 'Nx', 'MUI', 'Emotion', 'TypeScript'],
  demoUrl: 'https://natithai.book.ezordr.app/',
  demoLabel: 'Voir un exemple en ligne',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Des réservations prises au téléphone en plein service, et des tables perdues à cause des no-shows.',
    solution:
      'Une solution en ligne, utilisée par chaque restaurant : le client réserve sur un site aux couleurs de l’établissement, l’équipe suit et planifie toutes les réservations depuis un tableau de bord.',
    role: 'Conception et développement fullstack : le widget, le site généré pour chaque restaurant et le module de gestion des réservations.',
    results: [
      { value: 'Jusqu’à 2 h', text: 'libérées par jour pour l’équipe du restaurant' },
      { text: 'Des réservations en ligne 24 h/24, sans appel' },
      { text: 'Moins de no-shows, grâce à une gestion intelligente des réservations' },
    ],
  },
  devices: {
    screenBg: '#FFFFFF',
    url: media.restomax.url,
    motion: 'swap',
    desktop: img(
      media.restomax.desktop1,
      'Widget Restomax Book : choix du nombre de personnes et du service',
    ),
    desktopAlt: img(media.restomax.desktop2, 'Widget Restomax Book : choix de la date'),
    tablet: img(media.restomax.tablet1, 'Restomax Book sur tablette'),
    tabletAlt: img(media.restomax.tablet2, ''),
    phone: img(media.restomax.mobile1, 'Restomax Book sur mobile'),
    phoneAlt: img(media.restomax.mobile2, ''),
  },
  caseStudy: {
    tagline:
      'Une solution SaaS de réservation : un site aux couleurs de chaque restaurant, un tableau de bord pour l’équipe.',
    intro:
      'Restomax Book, la solution de réservation en ligne de Restomax : les clients réservent 24 h/24, l’équipe suit et planifie les réservations d’un ou de plusieurs restaurants depuis un seul tableau de bord.',
    stat: {
      value: '2 h',
      text: 'C’est le temps que l’équipe du restaurant peut libérer chaque jour.',
    },
    heroImage: img(
      media.restomax.desktop1,
      'Restomax Book pour Nati Thai : choix du nombre de personnes et du service',
    ),
    features: [
      {
        title: 'Suivi et planification',
        text: 'Toutes les réservations d’un coup d’œil, et les services planifiés depuis le tableau de bord.',
      },
      {
        title: 'Du temps gagné',
        text: 'Jusqu’à deux heures libérées par jour pour votre équipe.',
      },
      {
        title: 'À vos couleurs',
        text: 'Une interface aux couleurs de votre établissement.',
      },
      {
        title: 'Moins de no-shows',
        text: 'Des réservations gérées intelligemment pour limiter les absences.',
      },
      {
        title: 'Un service personnalisé',
        text: 'Les habitudes de vos clients retrouvées à chaque visite.',
      },
      {
        title: 'Plusieurs établissements, un seul outil',
        text: 'Un ou plusieurs restaurants gérés depuis le même tableau de bord.',
      },
    ],
    stack: [
      { category: 'Interface', name: 'React' },
      { category: 'État', name: 'Recoil' },
      { category: 'Monorepo', name: 'Nx' },
      { category: 'Composants', name: 'MUI' },
      { category: 'Styles', name: 'Emotion' },
      { category: 'Typage', name: 'TypeScript' },
    ],
    gallery: [
      {
        kind: 'desktop',
        image: img(media.restomax.desktop2, 'Étape 2 sur ordinateur : choix de la date'),
        caption: 'Desktop · choix de la date',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile2, 'Étape 2 sur mobile : calendrier des disponibilités'),
        caption: 'Mobile · calendrier',
      },
      {
        kind: 'tablet',
        image: img(media.restomax.tablet1, 'Accueil du widget sur tablette'),
        caption: 'Tablette · accueil',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile1, 'Étape 1 sur mobile : nombre de personnes et service'),
        caption: 'Mobile · réservation',
      },
      {
        kind: 'phone',
        image: img(
          media.restomax.mobile1,
          'Fiche du restaurant sur mobile : contact et itinéraire',
        ),
        caption: 'Mobile · infos et itinéraire',
        position: '50% 100%',
      },
    ],
  },
};

const jkstudio: Project = {
  slug: 'jk-studio',
  index: '02',
  title: 'JK Studio',
  type: 'Site web',
  client: 'JK Studio',
  clientUrl: 'https://www.jkstudio.fr/',
  summary:
    'Un portfolio photo par galeries, avec contact direct et contenus faciles à mettre à jour.',
  highlights: 'Nightlife · Mariages · Événements · Mode sombre et clair',
  tags: ['Next.js', 'Supabase'],
  demoUrl: 'https://www.jkstudio.fr/',
  demoLabel: 'Voir le site',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Un photographe nightlife, mariages et événements avait besoin d’un portfolio rapide, qu’il puisse mettre à jour lui-même.',
    solution:
      'Un site sobre où chaque galerie se parcourt comme une planche-contact, en thème clair ou sombre, avec une demande de devis directe.',
    role: 'Conception et développement du site, de l’interface à la gestion des contenus.',
    results: [
      { text: 'Des galeries publiées par le photographe lui-même, sans développeur' },
      { text: 'Des pages statiques, rapides et bien référencées' },
    ],
  },
  devices: {
    screenBg: '#EFEAE3',
    url: media.jkstudio.url,
    motion: 'scroll',
    desktop: img(media.jkstudio.desktop, 'Page d’accueil de jkstudio.fr sur ordinateur'),
    tablet: img(media.jkstudio.tablet, 'jkstudio.fr sur tablette'),
    phone: img(media.jkstudio.mobile, 'jkstudio.fr sur mobile'),
  },
  caseStudy: {
    tagline: 'Un portfolio photo qui met les images au premier plan, mis à jour sans développeur.',
    intro:
      'Le portfolio d’un photographe nightlife, mariages et événements : un site rapide et sobre, où chaque galerie se parcourt comme une planche-contact.',
    heroImage: img(media.jkstudio.desktop, 'Page d’accueil de jkstudio.fr sur ordinateur'),
    features: [
      {
        title: 'Galeries par catégories',
        text: 'Nightlife, mariages, événements : chaque univers a sa galerie.',
      },
      {
        title: 'Images au premier plan',
        text: 'Des photos aux bonnes dimensions, chargées à la demande.',
      },
      {
        title: 'Sombre et clair',
        text: 'Deux thèmes pour des photos lisibles sous tout éclairage.',
      },
      {
        title: 'Formulaire de contact',
        text: 'Une demande de devis qui arrive directement chez le photographe.',
      },
      {
        title: 'Contenus faciles à mettre à jour',
        text: 'Ajouter une série ou un texte, sans intervention technique.',
      },
      {
        title: 'Rapide et bien référencé',
        text: 'Pages statiques, images optimisées, métadonnées soignées.',
      },
    ],
    stack: [
      { category: 'Framework', name: 'Next.js' },
      { category: 'Interface', name: 'React' },
      { category: 'Données', name: 'Supabase' },
      { category: 'Typage', name: 'TypeScript' },
    ],
    gallery: [
      {
        kind: 'desktop',
        image: img(media.jkstudio.desktop, 'Page d’accueil de jkstudio.fr sur ordinateur'),
        caption: 'Desktop · accueil',
      },
      {
        kind: 'phone',
        image: img(media.jkstudio.mobile, 'jkstudio.fr sur mobile'),
        caption: 'Mobile · accueil',
      },
      {
        kind: 'tablet',
        image: img(media.jkstudio.tablet, 'jkstudio.fr sur tablette'),
        caption: 'Tablette · galerie',
      },
    ],
  },
};

const radyo: Mission = {
  kind: 'mission',
  title: 'Lead technique chez Radyo',
  type: 'Mission · Lead technique',
  status: 'Mission en cours',
  client: 'Radyo',
  logo: clientLogos[0]!,
  summary:
    'Amaury est lead technique au sein de l’équipe de développement de Radyo : une même façon de travailler pour toute l’équipe, et des développeurs qui progressent.',
  need: 'Faire travailler l’équipe de développement de la même façon, et faire progresser chaque développeur.',
  actionsLabel: 'Ce qu’il y fait',
  actions: [
    'Standardiser le code et les outils de l’équipe',
    'Mettre en place les bonnes pratiques',
    'Suivre les développeurs pour les faire évoluer',
  ],
  cta: {
    label: 'Parler d’un accompagnement',
    subject: 'Accompagnement technique — demande de contact',
  },
  accent: 'orange',
};

export const fr: SiteContent = {
  locale: 'fr',
  meta: {
    title: 'Arlioz — Applications, SaaS, accompagnement et RGPD · Charleroi, Belgique',
    template: '%s — Arlioz',
    description:
      'Applications métier, SaaS et plateformes conçus et conformes RGPD dès le premier jour, et un accompagnement technique et des formations pour vos équipes. Un développeur fullstack et un expert RGPD, en direct, depuis 2018 à Charleroi.',
    keywords: [
      'développement web',
      'développement SaaS',
      'application métier',
      'lead technique',
      'accompagnement technique',
      'formation développeurs',
      'application mobile',
      'conseil RGPD',
      'conformité RGPD',
      'privacy by design',
      'formation développement web',
      'formation RGPD',
      'migration WinDev',
      'migration WebDev',
      'migration WinDev Mobile',
      'Belgique',
      'Charleroi',
      'Next.js',
      'React',
      'Angular',
    ],
    ogAlt: 'Arlioz — Vos logiciels et SaaS, conçus et conformes RGPD dès le premier jour.',
    ogTagline: 'Applications, SaaS, accompagnement & RGPD · Belgique',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    homeLink: 'Arlioz, accueil',
    backToTop: 'Arlioz, retour en haut de page',
    languageGroup: 'Langue du site',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    mainNav: 'Navigation principale',
    siteMap: 'Plan du site',
    menuDialog: 'Menu principal',
  },
  nav: {
    menu: 'Menu',
    close: 'Fermer',
    sectionLabel: 'Navigation',
    items: [
      { label: 'Expertises', anchor: 'expertises', dot: 'green' },
      { label: 'Réalisations', anchor: 'realisations', dot: 'orange' },
      { label: 'Méthode', anchor: 'methode', dot: 'green' },
      { label: 'Équipe', anchor: 'equipe', dot: 'green' },
      { label: 'Démarrer', anchor: 'demarrer', dot: 'orange' },
      { label: 'Contact', anchor: 'contact', dot: 'orange' },
    ],
    write: 'Nous écrire',
    follow: 'Suivre',
    language: 'Langue',
    tagline: 'Applications, accompagnement des équipes et conformité RGPD, depuis 2018.',
    cta: 'Réserver un appel',
    linkedin: 'LinkedIn',
  },
  hero: {
    title: [
      { lead: 'Vos logiciels et SaaS, ', em: 'conçus' },
      { lead: 'et ', em: 'conformes RGPD', tail: ' dès le premier jour.' },
    ],
    lead: 'Un développeur fullstack et un expert RGPD, en direct : nous développons vos logiciels et accompagnons vos équipes, depuis 2018.',
    team: 'Guy et Amaury, vos interlocuteurs',
    proof: '{count} recommandations LinkedIn',
    callSubject: 'Appel découverte (30 min) — demande de rendez-vous',
    ctaPrimary: 'Parler de mon projet',
    ctaSecondary: 'Voir nos réalisations',
  },
  expertises: {
    index: '01',
    label: 'Expertises',
    title: ['Deux métiers,', 'deux spécialités.'],
    intro:
      'Un développeur fullstack et un expert RGPD sous le même toit, depuis 2018. Nous construisons vos logiciels et aidons vos équipes à les faire vivre.',
    signature:
      'Privacy by design : chaque projet de développement intègre le RGPD dès l’architecture, pas après la mise en ligne.',
    labels: { problem: 'Le problème', result: 'Le résultat', more: 'En savoir plus' },
    offers: [
      {
        slug: 'logiciels-saas',
        faq: [2, 5],
        proof: { kind: 'project', slug: 'restomax-book' },
        tier: 'pillar',
        accent: 'orange',
        icon: 'code',
        title: 'Applications et SaaS sur mesure',
        problem:
          'Votre activité tourne sur des tableurs et des outils qui ne se parlent pas, ou votre idée de SaaS attend d’être construite.',
        solution:
          'Nous concevons et développons applications métier, SaaS, plateformes et API, du design system au back-office, sur des technologies éprouvées.',
        result:
          'Un logiciel fiable, adopté par vos utilisateurs, que vos équipes peuvent faire évoluer.',
        points: [
          'SaaS, plateformes et back-offices',
          'Outils métier et tableaux de bord',
          'Applications web et mobiles, API',
          'Sites rapides et accessibles',
        ],
        cta: {
          label: 'Parler de votre projet',
          subject: 'Projet de développement — demande de contact',
        },
      },
      {
        slug: 'accompagnement',
        faq: [1, 5],
        proof: { kind: 'mission' },
        tier: 'pillar',
        accent: 'green',
        icon: 'team',
        title: 'Accompagnement et formation',
        problem:
          'Votre équipe de développement grandit, mais chacun travaille à sa façon et les nouveaux mettent du temps à être autonomes.',
        solution:
          'Nous rejoignons votre équipe comme lead technique ou en appui : standards, bonnes pratiques, revues de code et formations, en développement comme en RGPD.',
        result: 'Une équipe qui travaille de la même façon, et des développeurs qui progressent.',
        points: [
          'Lead technique au sein de votre équipe',
          'Standards de code et bonnes pratiques',
          'Revues de code et suivi des développeurs',
          'Formations sur mesure, développement et RGPD',
        ],
        note: 'Arlioz Education : Guy enseigne aussi l’informatique et accompagne de jeunes développeurs, du premier projet aux bonnes pratiques professionnelles.',
        cta: {
          label: 'Parler d’un accompagnement',
          subject: 'Accompagnement technique — demande de contact',
        },
      },
      {
        slug: 'rgpd',
        faq: [3, 5],
        tier: 'specialty',
        accent: 'blue',
        icon: 'shield',
        title: 'Conformité RGPD',
        problem: 'Vous traitez des données personnelles sans savoir si vous êtes en règle.',
        solution:
          'Nous auditons vos traitements, rédigeons les documents obligatoires et formons vos équipes.',
        result:
          'Une conformité que vous pouvez démontrer à vos clients et à l’Autorité de protection des données.',
        points: [
          'Audit de conformité',
          'Registre des traitements et analyses d’impact (AIPD)',
          'Politiques de confidentialité, cookies, contrats de sous-traitance',
          'Sensibilisation des équipes',
        ],
        cta: {
          label: 'Parler de votre conformité',
          subject: 'Conformité RGPD — demande de contact',
        },
      },
      {
        slug: 'migration-windev',
        faq: [4, 5],
        tier: 'specialty',
        accent: 'orange',
        icon: 'layers',
        title: 'Migration WinDev et WebDev',
        problem:
          'Vos applications WinDev, WebDev ou WinDev Mobile vieillissent et deviennent coûteuses à maintenir.',
        solution:
          'Nous les migrons une à une vers une stack moderne. Nous menons la migration, ou nous accompagnons vos équipes.',
        result: 'Vos utilisateurs continuent de travailler pendant la migration, sans rupture.',
        points: [
          'Cartographie des applications et des données',
          'Ancien et nouveau en parallèle, application par application',
          'Interfaces, applications et API reconstruites',
          'Documentation et transfert à vos équipes',
        ],
        cta: {
          label: 'Parler de votre migration',
          subject: 'Migration WinDev / WebDev — demande de contact',
        },
      },
    ],
  },
  work: {
    index: '02',
    label: 'Réalisations',
    title: ['Des produits', 'en production.'],
    intro: 'Des logiciels utilisés chaque jour, et une équipe que nous accompagnons au quotidien.',
    caseStudy: 'Étude de cas',
    liveExample: 'Voir un exemple en ligne',
    viewSite: 'Voir le site',
    clientPrefix: 'Client :',
    need: 'Le besoin',
    result: 'Le résultat',
    items: [restomax, radyo, jkstudio],
  },
  clients: {
    label: 'En production chez',
    statsLabel: 'Arlioz en chiffres',
    stats: [
      { value: '2018', label: 'Création d’Arlioz' },
      { value: '30+', label: 'Années d’expérience en IT et sécurité' },
      { value: '10+', label: 'Années d’enseignement en informatique' },
      { value: '3', label: 'Produits en production' },
    ],
  },
  trust: { label: 'Une expérience forgée chez' },
  team: {
    index: '04',
    label: 'Équipe',
    title: 'Deux seniors, en direct.',
    intro: [
      { text: 'Depuis 2018, ' },
      { text: 'un expert RGPD', mark: 'blue' },
      { text: ' et ' },
      { text: 'un développeur fullstack', mark: 'orange' },
      { text: ' livrent ensemble des produits ' },
      { text: 'conformes dès la conception', mark: 'green' },
      { text: '.' },
    ],
    members: [
      {
        name: 'Guy Moins',
        role: 'Architecte IT & expert RGPD',
        text: 'Plus de trente ans dans l’IT, de la sécurité des systèmes à l’architecture, au sein de grands groupes internationaux. Il rend le RGPD concret pour vos équipes et enseigne l’informatique depuis plus de dix ans.',
        tags: ['Conseil RGPD', 'Sécurité IT', 'Architecture IT', 'Enseignement'],
        photo: {
          ...media.team.guy,
          alt: 'Portrait de Guy Moins, architecte IT et expert RGPD chez Arlioz',
        },
        initials: 'GM',
        photoLabel: 'Photo · Guy Moins',
        accent: 'blue',
      },
      {
        name: 'Amaury Lapaque',
        role: 'Développeur fullstack & lead technique',
        text: 'Développeur fullstack depuis 2019 : applications métier, SaaS, applications web et mobiles, API. Il construit vos produits du design system à l’API.',
        tags: [
          'Lead technique',
          'Angular',
          'React · Next.js',
          'Vue',
          'NestJS · .NET',
          'Apps mobiles',
        ],
        photo: {
          ...media.team.amaury,
          alt: 'Portrait d’Amaury Lapaque, développeur fullstack chez Arlioz',
        },
        initials: 'AL',
        photoLabel: 'Photo · Amaury Lapaque',
        accent: 'orange',
        now: 'Aujourd’hui : lead technique chez Radyo.',
      },
    ],
    pillars: [
      {
        title: 'Développer',
        text: 'Applications métier, SaaS, apps web et mobiles et API, en Angular, React, Vue et NestJS.',
      },
      {
        title: 'Protéger',
        text: 'Audit, registre, analyses d’impact : une conformité RGPD que vous pouvez démontrer.',
      },
      {
        title: 'Transmettre',
        text: 'Lead technique, revues de code, formations : nous faisons progresser vos équipes.',
      },
    ],
  },
  testimonials: {
    index: '05',
    label: 'Témoignages',
    title: ['Ils ont travaillé', 'avec l’un de nous.'],
    translated: 'Traduit de l’anglais',
    source: 'Recommandation LinkedIn',
    items: [
      {
        quote:
          'Amaury a une expérience exceptionnelle du développement frontend Angular. Il est motivé et désireux de comprendre les concepts métier. Sur le plan humain, il est très agréable de travailler avec lui.',
        name: 'Stefan Casier',
        role: 'Technical Architect chez Samayas',
        translated: true,
      },
      {
        quote:
          'Il s’occupait du coaching, de l’écriture des composants partagés et des choix d’architecture. Tout le monde appréciait de travailler avec Amaury. Il a une connaissance approfondie d’Angular, se tient à jour et partage énormément. Il sait rester concentré et calme dans les situations de stress.',
        name: 'Wahid Argandiwall',
        role: 'Technical architect',
        translated: true,
      },
      {
        quote:
          'Amaury et moi, nous avons travaillé sur le même projet durant 6 mois. Cette collaboration et rencontre fut remplie de positif ! Nous avons clairement amélioré la qualité du code de l’application (toujours à la recherche des bonnes pratiques) et sa maintenabilité, qui était notre priorité. Mais pas seulement : en travaillant ensemble, nous avons mis en place une méthodologie de gestion du projet parfaite et bien rodée. Amaury m’a aussi accompagné dans des concepts avancés d’Angular grâce à sa qualité de pédagogue. Au niveau de l’aspect humain, Amaury est quelqu’un de sympathique et surtout un grand passionné. Je pense que c’est pour cela que nous nous sommes bien entendus directement. En résumé : cette collaboration fut un atout majeur dans mon évolution en tant que développeur front-end.',
        name: 'Alexandre Moreaux',
        role: 'Analyste développeur et projets · SBIM',
      },
      {
        quote:
          'Amaury est vraiment un excellent développeur. Ses années d’expérience ne reflètent pas toutes ses connaissances et compétences. C’est un vrai pilier dans une équipe de développement. Il a l’esprit d’équipe et il est fiable.',
        name: 'Frederique Rensonnet',
        role: 'Head of IT Corporate functions',
        translated: true,
      },
    ],
  },
  method: {
    index: '03',
    label: 'Méthode',
    title: ['Comment', 'nous travaillons.'],
    intro:
      'Quatre étapes, du premier échange à la passation. Chacune se termine par un livrable concret.',
    deliverable: 'Livrable',
    steps: [
      {
        title: 'Audit',
        text: 'Nous faisons l’état des lieux de votre code, de votre architecture et de votre conformité RGPD.',
        deliverable: 'Un rapport priorisé',
      },
      {
        title: 'Cadrage',
        text: 'Nous choisissons avec vous la stack et l’architecture, et nous planifions la livraison.',
        deliverable: 'Un plan de livraison',
      },
      {
        title: 'Livraison',
        text: 'Nous livrons par itérations courtes, avec des revues de code et des démonstrations régulières.',
        deliverable: 'Un logiciel en production',
      },
      {
        title: 'Transmission',
        text: 'Nous documentons et formons vos équipes, pour qu’elles reprennent la main.',
        deliverable: 'Une équipe autonome',
      },
    ],
  },
  start: {
    index: '06',
    label: 'Démarrer',
    title: ['Par où', 'commencer ?'],
    intro: 'Deux portes d’entrée, selon où vous en êtes.',
    call: {
      title: 'Appel découverte',
      meta: '30 min · gratuit',
      text: 'Vous nous décrivez votre projet ou votre équipe. Nous vous donnons un premier avis, et la suite si elle a du sens.',
      points: [
        'Votre besoin et vos contraintes',
        'Un premier avis technique',
        'Les prochaines étapes, sans engagement',
      ],
      cta: {
        label: 'Réserver un appel',
        subject: 'Appel découverte (30 min) — demande de rendez-vous',
      },
    },
    audit: {
      title: 'Audit technique & RGPD',
      meta: 'Périmètre fixe · sur devis',
      text: 'Un état des lieux de votre application, avant de décider quoi construire, reprendre ou corriger.',
      points: [
        'Code et architecture',
        'Sécurité et dépendances',
        'Conformité RGPD',
        'Rapport priorisé et restitution',
      ],
      cta: { label: 'Demander un audit', subject: 'Audit technique & RGPD — demande de devis' },
    },
  },
  services: {
    back: 'Toutes les expertises',
    label: 'Expertise',
    whatWeDo: 'Ce que nous faisons',
    method: 'Comment nous travaillons',
    proof: 'En production',
    proofProject: 'Voir l’étude de cas',
    proofMission: 'Voir la mission',
    faq: 'Questions fréquentes',
    ctaTitle: 'Parlons de votre projet.',
    ctaText: 'Un appel de 30 minutes, gratuit, pour savoir si et comment nous pouvons vous aider.',
    metaTitle: (title) => `${title} — Expertise`,
  },
  faq: {
    index: '07',
    label: 'FAQ',
    title: ['Questions', 'fréquentes.'],
    items: [
      {
        question: 'Où êtes-vous basés ?',
        answer: 'À Charleroi, en Belgique. Nous travaillons sur site ou à distance.',
      },
      {
        question: 'Pouvez-vous rejoindre une équipe existante ?',
        answer:
          'Oui. Nous intervenons comme lead technique au sein de votre équipe, ou en appui : standards de code, revues de code, suivi des développeurs.',
      },
      {
        question: 'Avec quelles technologies travaillez-vous ?',
        answer:
          'Angular, React et Next.js, Vue, NestJS et .NET, pour le web, le mobile et les API.',
      },
      {
        question: 'Comment le RGPD est-il pris en compte ?',
        answer:
          'Dès l’architecture, pas après la mise en ligne : chaque projet de développement intègre le RGPD dès sa conception.',
      },
      {
        question: 'Reprenez-vous des applications WinDev ou WebDev ?',
        answer:
          'Oui. Nous les migrons application par application, l’ancien et le nouveau en parallèle, sans interrompre vos utilisateurs.',
      },
      {
        question: 'Comment démarrer ?',
        answer:
          'Par un appel de 30 minutes, gratuit : vous nous décrivez votre besoin, nous vous donnons un premier avis et les prochaines étapes.',
      },
    ],
  },
  contact: {
    index: '08',
    label: 'Contact',
    title: 'Parlons de votre projet.',
    text: 'Dites-nous où vous en êtes, nous revenons vers vous avec un premier avis.',
    direct: {
      title: 'Un e-mail ou un message LinkedIn suffit.',
      text: 'Décrivez votre projet en quelques lignes.',
      email: 'Écrire à contact@arlioz.be',
      linkedin: 'Nous contacter sur LinkedIn',
      subject: 'Projet / accompagnement / question RGPD — demande de contact',
      privacy: 'Vos données servent uniquement à répondre à votre demande.',
      privacyLink: 'Politique de confidentialité',
    },
  },
  footer: {
    tagline: 'Développement logiciel, accompagnement et protection des données.',
    siteProof: 'Ce site : accessibilité 100/100 · aucun cookie de suivi',
    navigation: 'Navigation',
    contact: 'Contact',
    legal: 'Légal',
    country: 'Belgique',
    legalNotice: 'Mentions légales',
    privacy: 'Politique de confidentialité',
    cookies: 'Gestion des cookies',
    copyright: '© {year} Arlioz · BCE {bce}',
    madeIn: 'Conçu et développé en Belgique',
    backToTop: 'Retour en haut ↑',
  },
  caseStudy: {
    back: 'Toutes les réalisations',
    counter: 'Étude de cas',
    client: 'Client',
    type: 'Type',
    stack: 'Stack',
    demo: 'Exemple en ligne',
    sections: {
      project: 'Le projet',
      challenge: 'Le défi',
      solution: 'Notre solution',
      role: 'Notre rôle',
      results: 'Résultats',
      features: 'Fonctionnalités',
      featuresTitle: 'Ce que la solution apporte.',
      stack: 'Stack technique',
      stackTitle: 'Une base solide et typée.',
      stackIntro: 'Les technologies utilisées pour ce projet.',
      gallery: 'En images',
      galleryTitle: 'L’interface, écran par écran.',
    },
    next: 'Projet suivant',
    nextAria: 'Projet suivant :',
    cta: {
      title: 'Un projet similaire ? Parlons-en.',
      text: 'SaaS, outil métier, site : des logiciels conformes au RGPD dès la première ligne.',
      write: 'Écrire à contact@arlioz.be',
      home: 'Retour à l’accueil',
    },
    metaTitle: (title) => `${title} — Étude de cas`,
  },
  notFound: {
    title: 'Page introuvable.',
    text: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    cta: 'Retour à l’accueil',
  },
  projects: [restomax, jkstudio],
};
