import { clientLogos, img, media } from './media';
import { type Mission, type Project, type SiteContent } from './types';

const restomax: Project = {
  slug: 'restomax-book',
  index: '01',
  title: 'Restomax Book',
  type: 'Reservatie-SaaS',
  client: 'Restomax',
  clientUrl: 'https://restomax.be',
  summary:
    'De online reservatieoplossing van Restomax: een website in de kleuren van elk restaurant, en een dashboard om de service op te volgen en te plannen.',
  highlights: 'Tot 2 u per dag vrijgemaakt · Dashboard · Meerdere restaurants',
  tags: ['React', 'Recoil', 'Nx', 'MUI', 'Emotion', 'TypeScript'],
  demoUrl: 'https://natithai.book.ezordr.app/',
  demoLabel: 'Bekijk een live voorbeeld',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Reservaties die tijdens de service aan de telefoon worden opgenomen, en tafels die verloren gaan door no-shows.',
    solution:
      'Een online oplossing die elk restaurant gebruikt: de klant reserveert op een website in de kleuren van de zaak, het team volgt en plant alle reservaties vanuit een dashboard.',
    role: 'Fullstack ontwerp en ontwikkeling: de widget, de website die voor elk restaurant wordt gegenereerd en de module voor reservatiebeheer.',
    results: [
      { value: 'Tot 2 u', text: 'per dag vrijgemaakt voor het team van het restaurant' },
      { text: 'Online reservaties 24 u/24, zonder telefoontje' },
      { text: 'Minder no-shows dankzij slim reservatiebeheer' },
    ],
  },
  devices: {
    screenBg: '#FFFFFF',
    url: media.restomax.url,
    motion: 'swap',
    desktop: img(
      media.restomax.desktop1,
      'Restomax Book-widget: keuze van het aantal personen en de service',
    ),
    desktopAlt: img(media.restomax.desktop2, 'Restomax Book-widget: keuze van de datum'),
    tablet: img(media.restomax.tablet1, 'Restomax Book op tablet'),
    tabletAlt: img(media.restomax.tablet2, ''),
    phone: img(media.restomax.mobile1, 'Restomax Book op mobiel'),
    phoneAlt: img(media.restomax.mobile2, ''),
  },
  caseStudy: {
    tagline:
      'Een SaaS-oplossing voor reservaties: een website in de kleuren van elk restaurant, een dashboard voor het team.',
    intro:
      'Restomax Book, de online reservatieoplossing van Restomax: klanten reserveren 24 u/24, het team volgt en plant de reservaties van één of meerdere restaurants vanuit één dashboard.',
    stat: {
      value: '2 u',
      text: 'Zoveel tijd kan het team van het restaurant elke dag vrijmaken.',
    },
    heroImage: img(
      media.restomax.desktop1,
      'Restomax Book voor Nati Thai: keuze van het aantal personen en de service',
    ),
    features: [
      {
        title: 'Opvolging en planning',
        text: 'Alle reservaties in één oogopslag, en de services gepland vanuit het dashboard.',
      },
      {
        title: 'Tijdwinst',
        text: 'Tot twee uur per dag vrijgemaakt voor uw team.',
      },
      {
        title: 'In uw kleuren',
        text: 'Een interface in de kleuren van uw zaak.',
      },
      {
        title: 'Minder no-shows',
        text: 'Slim beheerde reservaties om afwezigheden te beperken.',
      },
      {
        title: 'Een persoonlijke service',
        text: 'De gewoontes van uw klanten bij elk bezoek bij de hand.',
      },
      {
        title: 'Meerdere zaken, één tool',
        text: 'Eén of meerdere restaurants beheerd vanuit hetzelfde dashboard.',
      },
    ],
    stack: [
      { category: 'Interface', name: 'React' },
      { category: 'State', name: 'Recoil' },
      { category: 'Monorepo', name: 'Nx' },
      { category: 'Componenten', name: 'MUI' },
      { category: 'Stijlen', name: 'Emotion' },
      { category: 'Typering', name: 'TypeScript' },
    ],
    gallery: [
      {
        kind: 'desktop',
        image: img(media.restomax.desktop2, 'Stap 2 op desktop: keuze van de datum'),
        caption: 'Desktop · keuze van de datum',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile2, 'Stap 2 op mobiel: kalender met beschikbaarheden'),
        caption: 'Mobiel · kalender',
      },
      {
        kind: 'tablet',
        image: img(media.restomax.tablet1, 'Startscherm van de widget op tablet'),
        caption: 'Tablet · start',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile1, 'Stap 1 op mobiel: aantal personen en service'),
        caption: 'Mobiel · reservatie',
      },
      {
        kind: 'phone',
        image: img(media.restomax.mobile1, 'Restaurantfiche op mobiel: contact en route'),
        caption: 'Mobiel · info en route',
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
    'Een fotoportfolio in galerijen, met rechtstreeks contact en inhoud die makkelijk bij te werken is.',
  highlights: 'Nightlife · Huwelijken · Evenementen · Donkere en lichte modus',
  tags: ['Next.js', 'Supabase'],
  demoUrl: 'https://www.jkstudio.fr/',
  demoLabel: 'Bekijk de website',
  accent: 'orange',
  reversed: false,
  story: {
    challenge:
      'Een fotograaf van nightlife, huwelijken en evenementen had een snel portfolio nodig dat hij zelf kan bijwerken.',
    solution:
      'Een sobere website waar elke galerij zich laat doorbladeren als een contactafdruk, in een licht of donker thema, met een rechtstreekse offerteaanvraag.',
    role: 'Ontwerp en ontwikkeling van de website, van de interface tot het inhoudsbeheer.',
    results: [
      { text: 'Galerijen die de fotograaf zelf publiceert, zonder ontwikkelaar' },
      { text: 'Statische pagina’s, snel en goed vindbaar' },
    ],
  },
  devices: {
    screenBg: '#EFEAE3',
    url: media.jkstudio.url,
    motion: 'scroll',
    desktop: img(media.jkstudio.desktop, 'Startpagina van jkstudio.fr op desktop'),
    tablet: img(media.jkstudio.tablet, 'jkstudio.fr op tablet'),
    phone: img(media.jkstudio.mobile, 'jkstudio.fr op mobiel'),
  },
  caseStudy: {
    tagline: 'Een fotoportfolio dat de beelden vooropstelt, bijgewerkt zonder ontwikkelaar.',
    intro:
      'Het portfolio van een fotograaf van nightlife, huwelijken en evenementen: een snelle, sobere website waar elke galerij zich laat doorbladeren als een contactafdruk.',
    heroImage: img(media.jkstudio.desktop, 'Startpagina van jkstudio.fr op desktop'),
    features: [
      {
        title: 'Galerijen per categorie',
        text: 'Nightlife, huwelijken, evenementen: elke wereld heeft zijn galerij.',
      },
      {
        title: 'Beelden op de voorgrond',
        text: 'Foto’s in de juiste afmetingen, geladen wanneer ze nodig zijn.',
      },
      {
        title: 'Donker en licht',
        text: 'Twee thema’s voor foto’s die bij elk licht leesbaar blijven.',
      },
      {
        title: 'Contactformulier',
        text: 'Een offerteaanvraag die rechtstreeks bij de fotograaf aankomt.',
      },
      {
        title: 'Inhoud makkelijk bij te werken',
        text: 'Een reeks of een tekst toevoegen, zonder technische tussenkomst.',
      },
      {
        title: 'Snel en goed vindbaar',
        text: 'Statische pagina’s, geoptimaliseerde beelden, verzorgde metadata.',
      },
    ],
    stack: [
      { category: 'Framework', name: 'Next.js' },
      { category: 'Interface', name: 'React' },
      { category: 'Data', name: 'Supabase' },
      { category: 'Typering', name: 'TypeScript' },
    ],
    gallery: [
      {
        kind: 'desktop',
        image: img(media.jkstudio.desktop, 'Startpagina van jkstudio.fr op desktop'),
        caption: 'Desktop · start',
      },
      {
        kind: 'phone',
        image: img(media.jkstudio.mobile, 'jkstudio.fr op mobiel'),
        caption: 'Mobiel · start',
      },
      {
        kind: 'tablet',
        image: img(media.jkstudio.tablet, 'jkstudio.fr op tablet'),
        caption: 'Tablet · galerij',
      },
    ],
  },
};

const radyo: Mission = {
  kind: 'mission',
  title: 'Tech lead bij Radyo',
  type: 'Opdracht · Tech lead',
  status: 'Lopende opdracht',
  client: 'Radyo',
  logo: clientLogos[0]!,
  summary:
    'Amaury is tech lead in het ontwikkelteam van Radyo: één manier van werken voor het hele team, en ontwikkelaars die groeien.',
  need: 'Het ontwikkelteam op dezelfde manier laten werken, en elke ontwikkelaar laten groeien.',
  actionsLabel: 'Wat hij er doet',
  actions: [
    'De code en de tools van het team standaardiseren',
    'Best practices invoeren',
    'De ontwikkelaars opvolgen om hen te laten groeien',
  ],
  cta: {
    label: 'Over begeleiding praten',
    subject: 'Technische begeleiding — contactaanvraag',
  },
  accent: 'orange',
};

export const nl: SiteContent = {
  locale: 'nl',
  meta: {
    title: 'Tech lead, audit en GDPR in België — Arlioz',
    template: '%s — Arlioz',
    description:
      'Een tech lead en een GDPR-expert in uw teams: audit, codestandaarden, opleidingen, software op maat en WinDev-migratie. Rechtstreeks, in België.',
    keywords: [
      'tech lead',
      'technische begeleiding',
      'technische audit',
      'opleiding ontwikkelaars',
      'webontwikkeling',
      'SaaS-ontwikkeling',
      'bedrijfsapplicatie',
      'mobiele applicatie',
      'GDPR-advies',
      'GDPR-compliance',
      'AVG',
      'privacy by design',
      'opleiding webontwikkeling',
      'GDPR-opleiding',
      'WinDev-migratie',
      'WebDev-migratie',
      'WinDev Mobile-migratie',
      'België',
      'Charleroi',
      'Next.js',
      'React',
      'Angular',
    ],
    ogAlt: 'Arlioz — Uw teams leveren solide software die GDPR-conform is vanaf dag één.',
    ogTagline: 'Begeleiding, audit, applicaties & GDPR · België',
  },
  a11y: {
    skipToContent: 'Naar de inhoud',
    homeLink: 'Arlioz, home',
    backToTop: 'Arlioz, terug naar boven',
    languageGroup: 'Taal van de site',
    openMenu: 'Menu openen',
    closeMenu: 'Menu sluiten',
    mainNav: 'Hoofdnavigatie',
    siteMap: 'Sitemap',
    menuDialog: 'Hoofdmenu',
  },
  nav: {
    menu: 'Menu',
    close: 'Sluiten',
    sectionLabel: 'Navigatie',
    items: [
      { label: 'Team', anchor: 'equipe', dot: 'green' },
      { label: 'Expertise', anchor: 'expertises', dot: 'green' },
      { label: 'Realisaties', anchor: 'realisations', dot: 'orange' },
      { label: 'Methodologie', anchor: 'methode', dot: 'green' },
      { label: 'Starten', anchor: 'demarrer', dot: 'orange' },
      { label: 'Contact', anchor: 'contact', dot: 'orange' },
    ],
    write: 'Schrijf ons',
    follow: 'Volgen',
    language: 'Taal',
    tagline: 'Teambegeleiding, applicaties en GDPR-compliance.',
    cta: 'Een gesprek boeken',
    linkedin: 'LinkedIn',
  },
  hero: {
    title: [
      { lead: 'Uw teams leveren ', em: 'solide', tail: ' software' },
      { lead: 'die ', em: 'GDPR-conform', tail: ' is vanaf dag één.' },
    ],
    lead: 'Een tech lead en een GDPR-expert in uw teams: audit, codestandaarden, reviews en opleidingen. Rechtstreeks, zonder tussenpersoon.',
    team: 'Guy en Amaury, uw contactpersonen',
    proof: '{count} LinkedIn-aanbevelingen',
    callSubject: 'Kennismakingsgesprek (30 min) — afspraakaanvraag',
    ctaPrimary: 'Over mijn project praten',
    ctaSecondary: 'Onze realisaties bekijken',
  },
  expertises: {
    index: '02',
    label: 'Expertise',
    title: ['Twee vakgebieden,', 'twee specialiteiten.'],
    intro:
      'Een fullstack ontwikkelaar en een GDPR-expert onder één dak. Wij begeleiden uw teams en bouwen uw software.',
    signature:
      'Privacy by design: elk ontwikkelproject bouwt de GDPR in vanaf de architectuur, niet na de livegang.',
    labels: { problem: 'Het probleem', result: 'Het resultaat', more: 'Meer weten' },
    offers: [
      {
        slug: 'accompagnement',
        faq: [1, 6, 5],
        proof: { kind: 'mission' },
        tier: 'pillar',
        accent: 'green',
        icon: 'team',
        title: 'Begeleiding en opleiding',
        problem:
          'Uw ontwikkelteam groeit, maar iedereen werkt op zijn eigen manier en nieuwkomers hebben tijd nodig om zelfstandig te worden.',
        solution:
          'Wij versterken uw team als tech lead of ter ondersteuning: standaarden, best practices, code reviews en opleidingen, in ontwikkeling én in GDPR.',
        result: 'Een team dat op dezelfde manier werkt, en ontwikkelaars die groeien.',
        points: [
          'Tech lead binnen uw team',
          'Codestandaarden en best practices',
          'Code reviews en opvolging van de ontwikkelaars',
          'Opleidingen op maat, ontwikkeling en GDPR',
        ],
        note: 'Arlioz Education: Guy geeft ook les in informatica en begeleidt jonge ontwikkelaars, van het eerste project tot professionele best practices.',
        cta: {
          label: 'Over begeleiding praten',
          subject: 'Technische begeleiding — contactaanvraag',
        },
      },
      {
        slug: 'logiciels-saas',
        faq: [2, 5],
        proof: { kind: 'project', slug: 'restomax-book' },
        tier: 'pillar',
        accent: 'orange',
        icon: 'code',
        title: 'Applicaties en SaaS op maat',
        problem:
          'Uw activiteit draait op spreadsheets en tools die niet met elkaar praten, of uw SaaS-idee wacht om gebouwd te worden.',
        solution:
          'Wij ontwerpen en ontwikkelen bedrijfsapplicaties, SaaS, platformen en API’s, van design system tot backoffice, met beproefde technologieën.',
        result:
          'Betrouwbare software die uw gebruikers omarmen en die uw teams verder kunnen uitbouwen.',
        points: [
          'SaaS, platformen en backoffices',
          'Bedrijfstools en dashboards',
          'Web- en mobiele applicaties, API’s',
          'Snelle en toegankelijke websites',
        ],
        cta: {
          label: 'Over uw project praten',
          subject: 'Ontwikkelproject — contactaanvraag',
        },
      },
      {
        slug: 'rgpd',
        faq: [3, 5],
        tier: 'specialty',
        accent: 'blue',
        icon: 'shield',
        title: 'GDPR-compliance',
        problem: 'U verwerkt persoonsgegevens zonder te weten of u in orde bent.',
        solution:
          'Wij auditen uw verwerkingen, stellen de verplichte documenten op en leiden uw teams op.',
        result:
          'Een compliance die u kunt aantonen aan uw klanten en aan de Gegevensbeschermingsautoriteit.',
        points: [
          'Compliance-audit',
          'Verwerkingsregister en effectbeoordelingen (DPIA)',
          'Privacy- en cookiebeleid, verwerkersovereenkomsten',
          'Bewustmaking van de teams',
        ],
        cta: {
          label: 'Over uw compliance praten',
          subject: 'GDPR-compliance — contactaanvraag',
        },
      },
      {
        slug: 'migration-windev',
        faq: [4, 5],
        tier: 'specialty',
        accent: 'orange',
        icon: 'layers',
        title: 'Migratie van WinDev en WebDev',
        problem:
          'Uw WinDev-, WebDev- of WinDev Mobile-applicaties verouderen en worden duur in onderhoud.',
        solution:
          'Wij migreren ze één voor één naar een moderne stack. Wij leiden de migratie, of wij begeleiden uw teams.',
        result: 'Uw gebruikers blijven werken tijdens de migratie, zonder onderbreking.',
        points: [
          'Overzicht van de applicaties en de data',
          'Oud en nieuw naast elkaar, applicatie per applicatie',
          'Interfaces, applicaties en API’s opnieuw opgebouwd',
          'Documentatie en overdracht aan uw teams',
        ],
        cta: {
          label: 'Over uw migratie praten',
          subject: 'WinDev- / WebDev-migratie — contactaanvraag',
        },
      },
    ],
  },
  work: {
    index: '03',
    label: 'Realisaties',
    title: ['Producten', 'in productie.'],
    intro: 'Een team dat wij dagelijks begeleiden, en software die elke dag wordt gebruikt.',
    caseStudy: 'Casestudy',
    liveExample: 'Bekijk een live voorbeeld',
    viewSite: 'Bekijk de website',
    clientPrefix: 'Klant:',
    need: 'De behoefte',
    result: 'Het resultaat',
    items: [radyo, restomax, jkstudio],
  },
  clients: {
    label: 'In productie bij',
    statsLabel: 'Arlioz in cijfers',
    stats: [
      { value: '2018', label: 'Oprichting van Arlioz' },
      { value: '30+', label: 'Jaar ervaring van Guy in IT en security' },
      { value: '10+', label: 'Jaar dat Guy informatica doceert' },
      { value: '3', label: 'Producten in productie, één via een opdracht' },
    ],
  },
  trust: { label: 'Ervaring opgebouwd bij' },
  team: {
    index: '01',
    label: 'Team',
    title: 'Twee seniors, rechtstreeks.',
    intro: [
      { text: 'Een GDPR-expert', mark: 'blue' },
      { text: ' en ' },
      { text: 'een fullstack ontwikkelaar', mark: 'orange' },
      { text: ' leveren samen producten die ' },
      { text: 'conform zijn vanaf het ontwerp', mark: 'green' },
      { text: '.' },
    ],
    members: [
      {
        name: 'Guy Moins',
        role: 'IT-architect & GDPR-expert',
        text: 'Meer dan dertig jaar in IT, van systeembeveiliging tot architectuur, bij grote internationale groepen. Hij maakt de GDPR concreet voor uw teams en geeft al meer dan tien jaar les in informatica.',
        tags: ['GDPR-advies', 'IT-security', 'IT-architectuur', 'Onderwijs'],
        photo: {
          ...media.team.guy,
          alt: 'Portret van Guy Moins, IT-architect en GDPR-expert bij Arlioz',
        },
        initials: 'GM',
        photoLabel: 'Foto · Guy Moins',
        accent: 'blue',
      },
      {
        name: 'Amaury Lapaque',
        role: 'Fullstack ontwikkelaar & tech lead',
        text: 'Fullstack ontwikkelaar sinds 2019: bedrijfsapplicaties, SaaS, web- en mobiele applicaties, API’s. Hij bouwt uw producten van design system tot API.',
        tags: ['Tech lead', 'Angular', 'React · Next.js', 'Vue', 'NestJS · .NET', 'Mobiele apps'],
        photo: {
          ...media.team.amaury,
          alt: 'Portret van Amaury Lapaque, fullstack ontwikkelaar bij Arlioz',
        },
        initials: 'AL',
        photoLabel: 'Foto · Amaury Lapaque',
        accent: 'orange',
        now: 'Vandaag: tech lead bij Radyo. Beschikbaar voor audits, opleidingen en code reviews.',
      },
    ],
    pillars: [
      {
        title: 'Ontwikkelen',
        text: 'Bedrijfsapplicaties, SaaS, web- en mobiele apps en API’s, in Angular, React, Vue en NestJS.',
      },
      {
        title: 'Beschermen',
        text: 'Audit, register, effectbeoordelingen: een GDPR-compliance die u kunt aantonen.',
      },
      {
        title: 'Doorgeven',
        text: 'Tech lead, code reviews, opleidingen: wij laten uw teams groeien.',
      },
    ],
  },
  testimonials: {
    index: '05',
    label: 'Getuigenissen',
    title: ['Zij werkten', 'met een van ons.'],
    translated: 'Vertaald',
    source: 'LinkedIn-aanbeveling',
    items: [
      {
        quote:
          'Amaury heeft uitzonderlijk veel ervaring in frontendontwikkeling met Angular. Hij is gemotiveerd en leergierig als het om businessconcepten gaat. Op persoonlijk vlak is het erg aangenaam om met hem samen te werken.',
        name: 'Stefan Casier',
        role: 'Technical Architect bij Samayas',
        translated: true,
      },
      {
        quote:
          'Hij richtte zich op coaching, het schrijven van gedeelde componenten en de keuzes rond de hoofdarchitectuur. Iedereen werkte graag met Amaury. Hij heeft een grondige kennis van het Angular-framework, is up-to-date en deelt enorm veel informatie. Hij kan gefocust en kalm blijven in stressvolle situaties.',
        name: 'Wahid Argandiwall',
        role: 'Technical architect',
        translated: true,
      },
      {
        quote:
          'Amaury en ik hebben 6 maanden aan hetzelfde project gewerkt. Die samenwerking en ontmoeting was een en al positief! We hebben de codekwaliteit van de applicatie duidelijk verbeterd (altijd op zoek naar best practices), net als de onderhoudbaarheid, die onze prioriteit was. Maar niet alleen dat: door samen te werken hebben we een perfecte en goed geoliede methodologie voor projectbeheer opgezet. Amaury heeft me ook begeleid in gevorderde Angular-concepten dankzij zijn pedagogische kwaliteiten. Op menselijk vlak is Amaury een sympathiek iemand en vooral erg gepassioneerd. Ik denk dat we het daarom meteen goed met elkaar konden vinden. Kortom: deze samenwerking was een grote troef in mijn groei als front-end developer.',
        name: 'Alexandre Moreaux',
        role: 'Analist-ontwikkelaar en projecten · SBIM',
        translated: true,
      },
      {
        quote:
          'Amaury is echt een uitstekende ontwikkelaar. Zijn jaren ervaring weerspiegelen niet al zijn kennis en vaardigheden. Hij is een echte pijler in een ontwikkelteam. Hij is een teamspeler en betrouwbaar.',
        name: 'Frederique Rensonnet',
        role: 'Head of IT Corporate functions',
        translated: true,
      },
    ],
  },
  method: {
    index: '04',
    label: 'Methodologie',
    title: ['Geen black box.', 'Vier duidelijke stappen.'],
    intro: 'Bij elke stap weet u wat wij doen, waarom, en wat u op het einde ontvangt.',
    deliverable: 'Wat u krijgt',
    steps: [
      {
        title: 'Audit',
        text: 'Wij vertrekken van wat er is: uw code, uw architectuur en uw gegevensverwerkingen, gelezen voordat wij iets voorstellen.',
        deliverable: 'Een rapport met prioriteiten: wat blokkeert, wat geld kost, wat kan wachten',
      },
      {
        title: 'Afbakening',
        text: 'Samen met u leggen wij de scope, de stack en de architectuur vast. De GDPR komt er op dat moment al bij, niet na de livegang.',
        deliverable: 'Een opleverplan in stappen',
      },
      {
        title: 'Oplevering',
        text: 'Wij leveren in kleine iteraties die u ziet draaien, met een code review bij elke stap.',
        deliverable: 'Software in productie, gaandeweg gedocumenteerd',
      },
      {
        title: 'Overdracht',
        text: 'Uw team neemt het over: documentatie, overdracht en opleiding indien nodig. U bent niet afhankelijk van ons.',
        deliverable: 'Een team dat zelfstandig werkt aan zijn eigen code',
      },
    ],
  },
  start: {
    index: '06',
    label: 'Starten',
    title: ['Waar', 'beginnen?'],
    intro: 'Twee manieren om te starten, afhankelijk van waar u staat.',
    call: {
      title: 'Kennismakingsgesprek',
      meta: '30 min · gratis',
      text: 'U beschrijft uw project of uw team. Wij geven een eerste advies, en het vervolg als dat zinvol is.',
      points: [
        'Uw behoefte en uw beperkingen',
        'Een eerste technisch advies',
        'De volgende stappen, zonder verplichting',
      ],
      cta: {
        label: 'Een gesprek boeken',
        subject: 'Kennismakingsgesprek (30 min) — afspraakaanvraag',
      },
    },
    audit: {
      title: 'Technische & GDPR-audit',
      text: 'Een stand van zaken van uw applicatie, voordat u beslist wat u bouwt, overneemt of corrigeert. De omvang hangt af van uw IT-omgeving en uw project: die bepalen we samen.',
      points: [
        'Code en architectuur',
        'Security en dependencies',
        'GDPR-compliance',
        'Rapport met prioriteiten en toelichting',
      ],
      cta: {
        label: 'Een audit aanvragen',
        subject: 'Technische & GDPR-audit — informatieaanvraag',
      },
    },
  },
  services: {
    back: 'Alle expertises',
    label: 'Expertise',
    whatWeDo: 'Wat wij doen',
    method: 'Onze methodologie',
    proof: 'In productie',
    proofProject: 'Bekijk de casestudy',
    proofMission: 'Bekijk de opdracht',
    faq: 'Veelgestelde vragen',
    ctaTitle: 'Laten we over uw project praten.',
    ctaText: 'Een gesprek van 30 minuten, gratis, om te weten of en hoe wij u kunnen helpen.',
    metaTitle: (title) => `${title} — Expertise`,
  },
  faq: {
    index: '07',
    label: 'FAQ',
    title: ['Veelgestelde', 'vragen.'],
    items: [
      {
        question: 'Waar bent u gevestigd?',
        answer: 'In Charleroi, België. Wij werken ter plaatse of op afstand.',
      },
      {
        question: 'Kunt u een bestaand team versterken?',
        answer:
          'Ja. Wij werken als tech lead binnen uw team, of ter ondersteuning: codestandaarden, code reviews, opvolging van de ontwikkelaars.',
      },
      {
        question: 'Met welke technologieën werkt u?',
        answer: 'Angular, React en Next.js, Vue, NestJS en .NET, voor web, mobiel en API’s.',
      },
      {
        question: 'Hoe wordt rekening gehouden met de GDPR?',
        answer:
          'Vanaf de architectuur, niet na de livegang: elk ontwikkelproject bouwt de GDPR in vanaf het ontwerp.',
      },
      {
        question: 'Neemt u WinDev- of WebDev-applicaties over?',
        answer:
          'Ja. Wij migreren ze applicatie per applicatie, oud en nieuw naast elkaar, zonder uw gebruikers te onderbreken.',
      },
      {
        question: 'Hoe starten we?',
        answer:
          'Met een gratis gesprek van 30 minuten: u beschrijft uw behoefte, wij geven een eerste advies en de volgende stappen.',
      },
      {
        question: 'Bent u op dit moment beschikbaar?',
        answer:
          'Ja voor een audit, een opleiding of code reviews. Amaury is vandaag tech lead bij Radyo: schrijf ons voor een lange opdracht, dan laten wij u de eerstvolgende mogelijke datum weten.',
      },
    ],
  },
  contact: {
    index: '08',
    label: 'Contact',
    title: 'Laten we over uw project praten.',
    text: 'Vertel ons waar u staat, wij komen bij u terug met een eerste advies.',
    direct: {
      title: 'Een e-mail of een LinkedIn-bericht volstaat.',
      text: 'Beschrijf uw project in enkele regels.',
      email: 'Schrijf naar contact@arlioz.be',
      linkedin: 'Contacteer ons op LinkedIn',
      subject: 'Project / begeleiding / GDPR-vraag — contactaanvraag',
      privacy: 'Uw gegevens dienen enkel om uw aanvraag te beantwoorden.',
      privacyLink: 'Privacybeleid',
    },
  },
  footer: {
    tagline: 'Teambegeleiding, softwareontwikkeling en gegevensbescherming.',
    siteProof: 'Deze site: Lighthouse toegankelijkheid 100/100 · geen trackingcookies',
    navigation: 'Navigatie',
    contact: 'Contact',
    legal: 'Juridisch',
    country: 'België',
    legalNotice: 'Wettelijke vermeldingen',
    privacy: 'Privacybeleid',
    cookies: 'Cookiebeheer',
    copyright: '© {year} Arlioz · KBO {bce}',
    madeIn: 'Ontworpen en ontwikkeld in België',
    backToTop: 'Terug naar boven ↑',
  },
  caseStudy: {
    back: 'Alle realisaties',
    counter: 'Casestudy',
    client: 'Klant',
    type: 'Type',
    stack: 'Stack',
    demo: 'Live voorbeeld',
    sections: {
      project: 'Het project',
      challenge: 'De uitdaging',
      solution: 'Onze oplossing',
      role: 'Onze rol',
      results: 'Resultaten',
      features: 'Functionaliteiten',
      featuresTitle: 'Wat de oplossing oplevert.',
      stack: 'Technische stack',
      stackTitle: 'Een solide, getypeerde basis.',
      stackIntro: 'De technologieën die voor dit project zijn gebruikt.',
      gallery: 'In beeld',
      galleryTitle: 'De interface, scherm per scherm.',
    },
    next: 'Volgend project',
    nextAria: 'Volgend project:',
    cta: {
      title: 'Een gelijkaardig project? Laten we erover praten.',
      text: 'SaaS, bedrijfstool, website: software die GDPR-conform is vanaf de eerste regel.',
      write: 'Schrijf naar contact@arlioz.be',
      home: 'Terug naar home',
    },
    metaTitle: (title) => `${title} — Casestudy`,
  },
  notFound: {
    title: 'Pagina niet gevonden.',
    text: 'De pagina die u zoekt bestaat niet of is verplaatst.',
    cta: 'Terug naar home',
  },
  projects: [restomax, jkstudio],
};
