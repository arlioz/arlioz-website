# Arlioz — site vitrine

Site de [Arlioz](https://arlioz.be) : développement digital & conseil RGPD, Belgique.
Rebuild complet (v3) à partir de la maquette Claude Design « Arlioz — Site vitrine ».

## Stack

- **Next.js 16** (App Router, Turbopack, Cache Components, React Compiler) · **React 19** · **TypeScript strict**
- **Tailwind CSS v4** (tokens dans `app/globals.css` via `@theme`, pas de `tailwind.config`)
- **Thème clair / sombre** : le sombre est le design de référence, le clair suit `prefers-color-scheme` du device,
  sans bouton. Les tokens portent des rôles (`ink` = la page, `paper` = le texte, `line` = les filets…) et sont
  remappés dans un seul bloc `@media (prefers-color-scheme: light)` de `globals.css` ; les composants ne connaissent
  que les tokens. Les accents utilisés comme texte (orange, bleu, vert) y sont assombris pour garder 4,5:1, le hero
  WebGL change de palette à chaud, les halos sont atténués (`--glow-k`). Chrome headless, donc Lighthouse et
  PageSpeed, audite la version claire.
- **Animations** : CSS scroll-driven (`animation-timeline: view()`) pour tous les reveals, **Lenis** pour le smooth scroll,
  **GSAP ScrollTrigger** chargé à la demande uniquement comme fallback pour les navigateurs sans `animation-timeline`.
- **Hero** : « courant chromatique » WebGL maison (`components/motion/ChromaCurrent.tsx`, aucune dépendance, ~4 kB) :
  des courants de lumière orange → turquoise sur une grille de points, agités par la souris, un clic libère une tache.
  Ne tourne que sur GPU (rien en rendu logiciel, une image fixe en `prefers-reduced-motion`), en pause hors écran et
  onglet caché.
- **Médias** : `next/image` (AVIF/WebP), polices auto-hébergées via `next/font/local`, sous-ensembles latin
  générés par `scripts/fonts/subset.py` (Bricolage en deux instances statiques 500/600, Instrument Sans variable
  400–600, Instrument Serif italique pour les deux mots du titre, JetBrains Mono 500) : 105 kB au total.
- **Qualité** : ESLint (config Next + Prettier), Prettier, `@next/bundle-analyzer`, Vercel Analytics & Speed Insights.

## Commandes

```bash
pnpm install
pnpm dev            # http://localhost:3000 (redirige vers /fr ou /en)
pnpm build && pnpm start
pnpm check          # typecheck + lint + prettier --check
pnpm analyze        # build avec le bundle analyzer (.next/analyze)
python3 scripts/fonts/subset.py   # régénère app/fonts à partir de scripts/fonts/src (pip install fonttools brotli)
```

Node 22+, pnpm 10.

## Structure

```
app/
  [locale]/              layout racine (fonts, metadata, Lenis), page d'accueil, études de cas,
                         mentions légales, politique de confidentialité, not-found, opengraph-image
  sitemap.ts robots.ts manifest.ts icon.png apple-icon.png favicon.ico
  globals.css            tokens @theme + CSS de la maquette (animations, hover, breakpoints)
components/
  sections/              Hero, ClientsBand (logos des clients en production sous le hero), Work, Expertises, Team, About, Education,
                         Contact, LegalPage (Server Components)
  layout/                Header (pilules verre : logo, langue, menu, CTA), HeaderCta, HeaderControls (client), Footer
  motion/                SmoothScroll (Lenis), ChromaCurrent (WebGL), MotionGuards, Magnetic
  ui/                    Button, Eyebrow, LineTitle, Chips, DeviceStage, BrowserBar, Glow, Icons, JsonLd, LogoMark
content/                 textes FR/EN (fr.ts, en.ts), projets, pages légales, médias — aucun texte en dur dans les composants
lib/                     i18n.ts (locales, segments d'URL), seo.ts (metadata + JSON-LD), gsap.ts, site.ts
proxy.ts                 redirection / → /fr|/en (Accept-Language) et alias d'URL anglais (/en/work → realisations)
public/images            logo, captures des projets (WebP ≤ 70 kB)
```

## i18n

Deux langues par segment d'URL : `/fr/...` (défaut, `x-default`) et `/en/...`, avec `hreflang` et canonical sur
chaque page et dans le sitemap. Les segments publics anglais (`/en/work/...`, `/en/legal-notice`,
`/en/privacy-policy`) sont réécrits par `proxy.ts` vers les routes du système de fichiers (segments français).

## Contact

Pas de formulaire ni de backend : la section Contact invite à écrire à contact@arlioz.be (lien `mailto:` avec sujet
pré-rempli) ou à contacter Arlioz sur LinkedIn.
Les blocs d'expertise (RGPD, développement, migration) ont chacun leur lien `mailto:` avec un objet propre
(`components/ui/MailLink.tsx`).

## Preuves et contenu commercial

- **Réalisations** : chaque projet a une histoire (`story` : besoin, solution, rôle, résultats) affichée sur la
  carte (besoin, résultat) et dans l'étude de cas. Un résultat chiffré (`value`) ne s'écrit que s'il a été mesuré.
- **À propos** : les chiffres clés (`about.facts`) ne reprennent que des faits vérifiés.
- **Témoignages** : `testimonials.items` (citation, auteur, fonction, contexte), uniquement des recommandations
  LinkedIn publiées, citées avec l'accord de leurs auteurs ; une traduction est signalée comme telle. Pas de
  balisage `Review` / `AggregateRating`.
- **Logos** : clients sous le hero (`clientLogos`), employeurs passés dans l'Équipe (`trustLogos`,
  `content/media.ts`). Masques WebP mono-teinte, statiques (pas de défilement sans bouton pause, WCAG 2.2.2). Un
  logo client ne s'affiche qu'avec l'accord du client.
- **Typographie française** : espace insécable avant `: ; ? !` dans `content/fr.ts` et `content/legal.ts`.

## Marque

**Trois adjectifs : direct, rigoureux, pédagogue.** Toute décision de texte ou de design se vérifie contre eux.

- **Direct** : on parle de vous et de votre besoin, pas de nous. Vouvoiement, phrases courtes, un verbe d'action par
  bouton (« Parler de mon projet »). Les fondateurs sont nommés et visibles : on parle à Guy et Amaury, pas à une
  agence.
- **Rigoureux** : rien d'inventé. Un chiffre, un logo ou un avis n'apparaît que s'il est vérifiable (voir
  ci-dessus). Pas de superlatifs (« leader », « innovant », « sur mesure pour faire grandir votre entreprise »).
- **Pédagogue** : chaque offre se lit problème → ce qu'on fait → résultat ; les termes techniques (AIPD, API,
  migration WinDev) sont posés dans un contexte que le lecteur comprend.

**Code couleur** (tokens `orange`, `blue`, `green` de `app/globals.css`, type `Accent` de `content/types.ts`) :

| Couleur | Sens          | Exemples                                                                                                                              |
| ------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Orange  | Développement | 1re ligne du titre du hero, offres « Sites et applications » et « Migration », projets, carte d'Amaury, témoignages, bouton principal |
| Bleu    | RGPD          | 2e ligne du titre du hero, offre « Conformité RGPD », carte de Guy                                                                    |
| Vert    | Les deux      | phrase « Privacy by design », Arlioz Education, « conformes dès la conception » dans À propos                                         |

Une couleur d'accent ne sert jamais de décoration seule : si un élément ne relève d'aucune des trois catégories, il
reste neutre (`paper`, `muted`). Le jaune n'est qu'une teinte du dégradé orange, pas un accent.

**Typographie** : Bricolage Grotesque (titres), Instrument Sans (texte), Instrument Serif italique (deux mots du
titre), JetBrains Mono (étiquettes). Texte courant ≥ 16 px, lignes de 65 à 75 caractères.

**Mouvement** : un ou deux éléments animés par écran au plus (titres de section, une intro, l'entrée d'une scène
projet) ; tout se coupe en `prefers-reduced-motion`.

À faire hors code : photos d'équipe homogènes (même fond, même lumière) et validation du logo, de la palette et
des polices par un designer.

## Déploiement (Vercel)

Préset Next.js, aucune configuration spécifique. Les en-têtes de sécurité (CSP, HSTS, etc.) et le cache immuable
des images sont définis dans `next.config.ts`. Aucune variable d'environnement n'est requise.

Les métriques de performance et la méthode d'audit sont documentées dans [`PERF.md`](./PERF.md).
