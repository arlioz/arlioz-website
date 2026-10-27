# État des lieux SEO — octobre 2026

Premier passage avec OpenSEO, le 27 octobre 2026, sur le marché Belgique en français.
Projet OpenSEO : <https://app.openseo.so/p/f7f80bc2-ddaf-4231-9065-b7bf59c2808f>

## En bref

- La base technique est saine : l'audit de 45 pages ne relève aucune erreur ni aucun avertissement.
- Un vrai problème de domaine : Vercel redirige `arlioz.be` vers `www.arlioz.be`, alors que le site déclare `arlioz.be` partout. Il se corrige dans Vercel, pas dans le code.
- Le site ne se positionne encore sur aucune requête suivie par DataForSEO en Belgique.
- Les volumes de recherche belges sur nos offres sont très faibles. Le référencement servira surtout la crédibilité et la longue traîne, pas le volume.

## Action à faire dans Vercel

Le canonical, les hreflang, le sitemap, le robots.txt et le JSON-LD pointent vers `https://arlioz.be`. Or cette URL renvoie une 308 vers `https://www.arlioz.be`. Google reçoit donc des canonicals qui redirigent, sur les 20 pages indexables.

Décision : `arlioz.be` sans www reste l'adresse officielle.

1. Dans Vercel, ouvrir le projet, puis Settings, puis Domains.
2. Passer `arlioz.be` en domaine principal.
3. Configurer `www.arlioz.be` pour rediriger en 308 vers `arlioz.be`.

Contrôle :

```sh
curl -sI https://www.arlioz.be/fr | grep -iE "^(HTTP|location)"
# attendu : HTTP/2 308 et location: https://arlioz.be/fr
```

## Audit technique

| Constat                                                      | Pages | Statut                 |
| ------------------------------------------------------------ | ----- | ---------------------- |
| Canonical vers une URL redirigée (apex vers www)             | 20    | À corriger dans Vercel |
| Titre de l'accueil trop long (73 et 71 caractères)           | 2     | Corrigé                |
| Description de l'accueil trop longue (233 et 227 caractères) | 2     | Corrigé                |

Correctifs inclus dans cette branche :

- **Accueil** : nouveau titre et nouvelle description en français et en anglais, sous 60 et 160 caractères, avec « logiciels sur mesure » et Charleroi en tête.
- **Image de partage** : les pages services, études de cas et légales n'avaient aucune `og:image`. Toutes les pages pointent désormais vers l'image générée de leur langue, avec un texte alternatif localisé.
- **Sitemap** : date de dernière modification mise à jour.

## Mots-clés

Aucune position trouvée pour arlioz.be en Belgique. Les 13 mots-clés ci-dessous sont sauvegardés dans le projet OpenSEO.

| Mot-clé                                  | Volume mensuel | CPC     | Intention                       |
| ---------------------------------------- | -------------- | ------- | ------------------------------- |
| windev                                   | 480            | 1,56 €  | Informationnelle, difficulté 80 |
| développeur logiciel sur mesure          | 20             | 28,36 € | Commerciale                     |
| développement full stack                 | 20             | 0,80 €  | Informationnelle                |
| développement application web sur mesure | 10             |         | Commerciale                     |
| développement applications sur mesure    | 10             |         | Commerciale                     |
| développement erp sur mesure             | 10             |         | Commerciale                     |
| consultant rgpd                          | 10             |         | Navigationnelle                 |
| remplace windev                          | 10             |         | Transactionnelle                |
| développeur windev                       | 10             |         | Navigationnelle                 |
| freelance windev                         | 10             |         | Navigationnelle                 |
| saas windev                              | 10             |         | Informationnelle                |
| windev mobile                            | 10             | 0,30 €  | Navigationnelle                 |
| windev webdev                            | 10             |         | Navigationnelle                 |

Lecture :

- **Sur mesure** : peu de recherches, mais un CPC de 28 € montre que ces requêtes valent cher. La page « Logiciels et SaaS » doit les viser explicitement.
- **WinDev** : la seule niche avec du volume. Les requêtes « remplacer WinDev », « développeur WinDev » et « freelance WinDev » collent à l'offre de migration et ont peu de concurrence.
- **RGPD** : très peu de recherches côté conseil en Belgique francophone.

## Backlinks

| Indicateur                 | Valeur                                 |
| -------------------------- | -------------------------------------- |
| Domaines référents         | 34                                     |
| Spam score moyen des liens | 61                                     |
| Apparition                 | Presque tous en août et septembre 2026 |

Le pic d'août et septembre et le spam score élevé méritent une vérification dans Search Console. Si ce sont des liens d'annuaires de mauvaise qualité, Google les ignore le plus souvent. Un fichier de désaveu ne se justifie que s'ils sont nombreux et clairement toxiques.

## Concurrents

DataForSEO ne renvoie aucun concurrent sur les 12 requêtes commerciales testées : les volumes belges sont trop faibles. Les concurrents directs sont à ajouter à la main dans le contexte du projet OpenSEO.

## Prochaines étapes

1. Faire le changement de domaine dans Vercel, puis relancer un audit OpenSEO pour confirmer qu'il ne reste aucune page « canonicalized ».
2. Connecter Google Search Console et Google Analytics au projet OpenSEO, pour avoir les vraies impressions et requêtes.
3. Soumettre les URL du sitemap via IndexNow une fois le domaine corrigé.
4. Enrichir les pages services autour des requêtes ciblées, en priorité « logiciel sur mesure » et « migration WinDev ».
5. Chiffrer un suivi de positions sur la dizaine de mots-clés commerciaux avec l'estimateur d'OpenSEO avant de l'activer.

## Crédits OpenSEO

|                 | Crédits |
| --------------- | ------- |
| Solde de départ | 431     |
| Consommés       | 232     |
| Solde restant   | 199     |
