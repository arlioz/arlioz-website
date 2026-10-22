import { img, media } from './media';
import { type Project, type SiteContent } from './types';

const restomax: Project = {
  slug: 'restomax-book',
  index: '01',
  title: 'Restomax Book',
  type: 'Site web & widget',
  client: 'Restomax',
  clientUrl: 'https://restomax.be',
  summary: 'Un site et un widget de réservation en ligne, aux couleurs de chaque restaurant.',
  highlights: 'Jusqu’à 2 h libérées par jour · Anti no-show · Personnalisable',
  tags: ['React', 'Recoil', 'Nx', 'MUI', 'Emotion', 'TypeScript'],
  demoUrl: 'https://natithai.book.ezordr.app/',
  demoLabel: 'Voir un exemple en ligne',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Des réservations prises au téléphone en plein service, et des tables perdues à cause des no-shows.',
    solution:
      'Un site et un widget de réservation aux couleurs de chaque restaurant : le client réserve en ligne, l’équipe gère toutes les réservations depuis un seul outil.',
    role: 'Conception et développement fullstack : le widget, le site généré pour chaque restaurant et le module de gestion des réservations.',
    results: [
      { value: '2 h', text: 'libérées chaque jour pour l’équipe du restaurant' },
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
    tagline: 'Un site et un widget de réservation en ligne, aux couleurs de chaque restaurant.',
    intro:
      'Le système de réservation en ligne de Restomax : un site et un widget personnalisables, qui simplifient la gestion des réservations.',
    stat: {
      value: '2 h',
      text: 'Libérées chaque jour pour l’équipe du restaurant.',
    },
    heroImage: img(
      media.restomax.desktop1,
      'Restomax Book pour Nati Thai : choix du nombre de personnes et du service',
    ),
    features: [
      {
        title: 'Réservations simplifiées',
        text: 'Toutes les réservations gérées depuis un seul outil.',
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
        title: 'Pour tous les restaurants',
        text: 'Une solution adaptée à tous les types d’établissements.',
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
  accent: 'yellow',
  reversed: true,
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

export const fr: SiteContent = {
  locale: 'fr',
  meta: {
    title: 'Arlioz — Sites, applications et conformité RGPD · Charleroi, Belgique',
    template: '%s — Arlioz',
    description:
      'Vos sites, applications web et mobiles et outils métier, conçus et conformes RGPD dès le premier jour. Un développeur fullstack et un expert RGPD, en direct, depuis 2018 à Charleroi.',
    keywords: [
      'développement web',
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
    ogAlt: 'Arlioz — Vos sites et outils métier, conçus et conformes RGPD dès le premier jour.',
    ogTagline: 'Développement digital & conseil RGPD · Belgique',
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
      { label: 'Réalisations', anchor: 'realisations', dot: 'blue' },
      { label: 'Expertises', anchor: 'expertises', dot: 'orange' },
      { label: 'Équipe', anchor: 'equipe', dot: 'green' },
      { label: 'Éducation', anchor: 'education', dot: 'yellow' },
      { label: 'Contact', anchor: 'contact', dot: 'blue' },
    ],
    write: 'Nous écrire',
    follow: 'Suivre',
    language: 'Langue',
    tagline: 'Développement digital et conformité RGPD, depuis 2018.',
    cta: 'Parler de mon projet',
    linkedin: 'LinkedIn',
  },
  hero: {
    title: [
      { lead: 'Vos sites et outils métier, ', em: 'conçus' },
      { lead: 'et ', em: 'conformes RGPD', tail: ' dès le premier jour.' },
    ],
    lead: 'Un développeur fullstack et un expert RGPD, en direct, aux côtés des entreprises et des organisations depuis 2018.',
    team: 'Guy et Amaury, vos interlocuteurs',
    proof: '{count} recommandations LinkedIn',
    ctaPrimary: 'Parler de mon projet',
    ctaSecondary: 'Voir nos réalisations',
  },
  about: {
    index: '04',
    label: 'À propos',
    facts: [
      { value: '2018', label: 'Création d’Arlioz' },
      { value: '30+', label: 'Années d’expérience en IT et sécurité' },
      { value: '10+', label: 'Années d’enseignement en informatique' },
      { value: '3', label: 'Produits en production' },
    ],
    title: [
      { text: 'Nous réunissons ' },
      { text: 'la protection des données', mark: 'blue' },
      { text: ' et ' },
      { text: 'le développement digital', mark: 'orange' },
      { text: ' pour faire ' },
      { text: 'grandir', mark: 'green' },
      { text: ' votre entreprise.' },
    ],
    pillars: [
      {
        title: 'Développer',
        text: 'Sites, applications web et mobiles, avec des technologies éprouvées.',
      },
      {
        title: 'Protéger',
        text: 'Une conformité RGPD claire, intégrée dès l’architecture.',
      },
      {
        title: 'Grandir',
        text: 'Des solutions robustes qui accompagnent votre croissance.',
      },
    ],
  },
  expertises: {
    index: '02',
    label: 'Expertises',
    title: ['Deux expertises', 'qui se complètent.'],
    intro:
      'Confiez-nous la conformité RGPD de votre organisation, le développement de vos applications, ou les deux : la même équipe conçoit le produit et protège ses données.',
    rgpd: {
      tag: 'Protection des données',
      title: 'Conseil RGPD',
      text: 'Mettre votre organisation en conformité, et le rester.',
      items: [
        'Audit de conformité',
        'Registre des traitements',
        'Analyses d’impact (AIPD)',
        'Politiques de confidentialité et cookies',
        'Contrats de sous-traitance',
        'Sensibilisation des équipes',
      ],
      benefit:
        'Une conformité que vous pouvez démontrer à vos clients, à vos partenaires et à l’Autorité de protection des données.',
      cta: {
        label: 'Parler de votre conformité',
        subject: 'Conformité RGPD — demande de contact',
      },
    },
    devCta: {
      label: 'Parler de votre projet',
      subject: 'Projet de développement — demande de contact',
    },
    cards: [
      {
        tag: 'Développement',
        title: 'Développement web',
        text: 'Sites, plateformes et widgets sur mesure, rapides et accessibles.',
        icon: 'code',
      },
      {
        tag: 'Développement',
        title: 'Applications cross-platform',
        text: 'Une base de code pour le web et le mobile, aux couleurs de votre marque.',
        icon: 'devices',
      },
      {
        tag: 'Développement',
        title: 'Architecture frontend',
        text: 'Monorepo, design system, gestion d’état : des fondations qui durent.',
        icon: 'layout',
      },
      {
        tag: 'Développement',
        title: 'Optimisation de sites web',
        text: 'Performance, SEO technique, accessibilité : un site plus rapide et plus visible.',
        icon: 'gauge',
      },
    ],
    stack: {
      tag: 'Dev × RGPD',
      title: 'Architecture de stack projet',
      text: [
        {
          text: 'Technologies, hébergement, flux de données, sécurité : une architecture conforme dès la conception. Le ',
        },
        { text: 'privacy by design', strong: true },
        { text: ', concrètement.' },
      ],
      diagram: {
        left: 'DEV',
        right: 'RGPD',
        center: ['PRIVACY', 'BY DESIGN'],
        aria: 'Le développement et le RGPD se rejoignent : le privacy by design',
      },
    },
    migration: {
      tag: 'Développement · Migration',
      title: 'Migrer votre parc WinDev, WebDev et WinDev Mobile',
      text: 'Vos applications métier passent sur une stack moderne, une à une, sans rupture pour vos utilisateurs.',
      from: { label: 'Aujourd’hui', items: ['WinDev', 'WebDev', 'WinDev Mobile'] },
      to: { label: 'Demain', items: ['Front-end web', 'Apps mobiles & desktop', 'API & back-end'] },
      steps: [
        { title: 'Cartographier', text: 'Applications, données, flux et ordre de migration.' },
        {
          title: 'Faire cohabiter',
          text: 'Une application à la fois : l’ancien et le nouveau tournent ensemble.',
        },
        {
          title: 'Reconstruire',
          text: 'Interfaces, applications, API ; données et règles métier reprises.',
        },
        { title: 'Transmettre', text: 'Documentation et transfert de compétences à vos équipes.' },
      ],
      note: 'Réalisée par nous, ou menée par vos équipes avec notre accompagnement.',
      cta: {
        label: 'Parler de votre migration',
        subject: 'Migration WinDev / WebDev — demande de contact',
      },
    },
  },
  work: {
    index: '01',
    label: 'Réalisations',
    title: ['Des projets', 'concrets, en ligne.'],
    caseStudy: 'Étude de cas',
    liveExample: 'Voir un exemple en ligne',
    viewSite: 'Voir le site',
    clientPrefix: 'Client :',
    need: 'Le besoin',
    result: 'Le résultat',
  },
  clients: {
    label: 'En production chez',
  },
  trust: { label: 'Une expérience forgée chez' },
  team: {
    index: '03',
    label: 'Équipe',
    title: 'Deux experts, en direct.',
    members: [
      {
        name: 'Guy Moins',
        role: 'Architecte IT & expert RGPD',
        text: 'Plus de trente ans dans l’IT, de la sécurité des systèmes à l’architecture, au sein de grands groupes internationaux. Il cadre vos données, rend le RGPD concret pour vos équipes et compte plus de dix ans d’enseignement en informatique.',
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
        role: 'Développeur fullstack',
        text: 'Développeur fullstack depuis 2019 : architecture frontend, applications web et mobiles, migration de back-ends vers des API modernes. Il construit vos produits du design system à l’API.',
        tags: ['Angular', 'React · Next.js', 'Vue', 'NestJS · .NET', 'Apps mobiles'],
        photo: {
          ...media.team.amaury,
          alt: 'Portrait d’Amaury Lapaque, développeur fullstack chez Arlioz',
        },
        initials: 'AL',
        photoLabel: 'Photo · Amaury Lapaque',
        accent: 'orange',
      },
    ],
  },
  education: {
    index: '05',
    label: 'Éducation',
    brand: 'Arlioz Education',
    title: ['Transmettre', 'et accompagner.'],
    text: 'Guy forme de futurs développeurs et fait monter en compétence les équipes en entreprise : architecture, qualité, RGPD.',
    audiences: [
      {
        title: 'Entreprises',
        text: 'Audit de l’existant, choix de stack, revue de code et formations sur mesure, sur site ou à distance.',
      },
      {
        title: 'Étudiants',
        text: 'Cours et accompagnement de jeunes développeurs, du premier projet aux bonnes pratiques professionnelles.',
      },
    ],
    topics: [
      {
        icon: 'layout',
        tag: 'Accompagnement',
        title: 'Architecture et stack',
        text: 'Audit de l’existant, choix technologiques, fondations d’un projet qui doit durer.',
      },
      {
        icon: 'gauge',
        tag: 'Accompagnement',
        title: 'Technique et qualité',
        text: 'Revue de code, bonnes pratiques, performance et outillage, aux côtés de vos développeurs.',
      },
      {
        icon: 'shield',
        tag: 'Accompagnement',
        title: 'RGPD et données',
        text: 'Conformité, privacy by design et sécurité, expliqués et mis en place avec vos équipes.',
      },
      {
        icon: 'code',
        tag: 'Cours',
        title: 'Développement web',
        text: 'JavaScript et TypeScript, frameworks front-end et back-end, de la base au projet complet.',
      },
    ],
    cta: 'Parler d’un accompagnement',
  },
  testimonials: {
    index: '06',
    label: 'Témoignages',
    title: ['Ils ont travaillé', 'avec Amaury.'],
    text: 'Recommandations publiées sur LinkedIn par des architectes, un responsable direct et des collègues développeurs.',
    translated: 'Traduit de l’anglais',
    source: 'Recommandation LinkedIn',
    items: [
      {
        quote:
          'Il s’occupait du coaching, de l’écriture des composants partagés et des choix d’architecture. Tout le monde appréciait de travailler avec Amaury. Il a une connaissance approfondie d’Angular, se tient à jour et partage énormément. Il sait rester concentré et calme dans les situations de stress.',
        name: 'Wahid Argandiwall',
        role: 'Technical architect',
        context: 'Même équipe frontend chez Candriam · février 2022',
        translated: true,
      },
      {
        quote:
          'Amaury a une expérience exceptionnelle du développement frontend Angular. Il est motivé et désireux de comprendre les concepts métier. Sur le plan humain, il est très agréable de travailler avec lui.',
        name: 'Stefan Casier',
        role: 'Technical Architect chez Samayas',
        context: 'Responsable direct d’Amaury · février 2022',
        translated: true,
      },
      {
        quote:
          'Nous avons clairement amélioré la qualité du code de l’application (toujours à la recherche des bonnes pratiques) et sa maintenabilité, qui était notre priorité. Amaury m’a aussi accompagné dans des concepts avancés d’Angular grâce à sa qualité de pédagogue. […] Cette collaboration fut un atout majeur dans mon évolution en tant que développeur front-end.',
        name: 'Alexandre Moreaux',
        role: 'Analyste développeur et projets · SBIM',
        context: 'Même équipe, 6 mois sur le même projet · août 2021',
      },
      {
        quote:
          'Amaury est vraiment un excellent développeur. Ses années d’expérience ne reflètent pas toutes ses connaissances et compétences. C’est un vrai pilier dans une équipe de développement. Il a l’esprit d’équipe et il est fiable.',
        name: 'Frederique Rensonnet',
        role: 'Head of IT Corporate functions',
        context: 'Février 2022',
        translated: true,
      },
    ],
  },
  contact: {
    index: '07',
    label: 'Contact',
    title: 'Un projet ? Une question RGPD ? Parlons-en.',
    text: 'Dites-nous où vous en êtes, nous revenons vers vous avec un premier avis.',
    emailLabel: 'E-mail',
    linkedinLabel: 'LinkedIn',
    linkedinValue: 'Arlioz',
    direct: {
      title: 'Un e-mail ou un message LinkedIn suffit.',
      text: 'Décrivez votre projet en quelques lignes.',
      email: 'Écrire à contact@arlioz.be',
      linkedin: 'Nous contacter sur LinkedIn',
      subject: 'Projet / question RGPD — demande de contact',
      privacy: 'Vos données servent uniquement à répondre à votre demande.',
      privacyLink: 'Politique de confidentialité',
    },
  },
  footer: {
    tagline: 'Protection des données et développement digital.',
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
      text: 'Réservation, portfolio, plateforme sur mesure : des outils conformes au RGPD dès la première ligne.',
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
