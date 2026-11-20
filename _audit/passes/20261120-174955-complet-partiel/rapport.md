# Rapport d’audit

Projet : `reseauhmv-maquette` · 20/11/2026 18:55:39 · 6 min · 6 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **9 échec(s)**
- Passe : `20261120-174955-complet-partiel` · version ?v=1
- Échecs : **9**
- À regarder : **22**
- Non lancé : **0**
- Contrôles passés : mesures (234), balayage (5)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-171004-rapide-cible | rapide | /,/carnet,/carte,/referencer,/contact,/404 | toutes | 84 | 78 | 1 | échecs |
| 20261120-172959-standard | standard | toutes | toutes | 10 | 45 | 1 | échecs |
| **20261120-174955-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 9 | 22 | 0 | échecs |

## Échecs

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/` — article.fiche.fiche--demo > div.fiche-tete > span.fiche-rubrique.demo-champ:nth-of-type(2) > span « Artisans · Menuiserie » — avec div.pro-scene:nth-of-type(2) > article.fiche.fiche--demo > p.fiche-nom.demo-champ:nth-of-type(1) > span « Votre activité » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/` — div.donne > article.carte-jour.carte-jour--commerce:nth-of-type(2) > h3 > a.carte-jour-lien « Un commerce » — avec div.conteneur > div.donne > article.carte-jour.carte-jour--artisan:nth-of-type(3) > p.carte-jour-texte:nth-of-type(2) « Les métiers du bâtiment et de l'entretien, près de » _(1024×768 sansJs, 1000×560 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-cadre > div.ouv-texte > ul.ouv-infos « 297 adresses locales Villages & stations Explorer  » _(1440×900 normal, 1440×900 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-cadre > div.ouv-texte > ul.ouv-infos « 298 adresses locales Villages & stations Explorer  » _(1000×560 sansJs, 1440×900 sansJs, 1728×1000 sansJs)_
- **premier écran : information clé hors de l’écran** — `/referencer` — div.conteneur.tete-ref-grille > div.tete-ref-texte > p.tete-ref-actions:nth-of-type(3) > span.tete-ref-info « 5 étapes · quelques minutes » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (2)

- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p.introuvable-actions:nth-of-type(2) > a.bouton:nth-of-type(1) « Revenir à l'accueil » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : bouton principal hors de l’écran** — `/referencer` — div.conteneur.tete-ref-grille > div.tete-ref-texte > p.tete-ref-actions:nth-of-type(3) > a.bouton « Commencer ma fiche » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### texte coupé (2)

- **texte coupé** — `/referencer` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(3) > span.fpe__nom:nth-of-type(2) « Coordonnées » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **texte coupé** — `/referencer` — div.fpe__progression:nth-of-type(1) > ol.fpe__reperes > li.fpe__repere:nth-of-type(4) > span.fpe__nom:nth-of-type(2) « Présentation » — le contenu dépasse de son cadre _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (11)

- **section sans visuel** — `/` — section#aujourdhui « Aujourd'hui, vous cherchez… L'ordre change chaque  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#charte « LA CHARTE DU CARNET Trois promesses tenues par la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#faq « QUESTIONS FRÉQUENTES Le carnet, en clair Une autre » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/carnet` — section#resultats « RUBRIQUE Toutes 20 Restaurants 2 Bars & cafés 1 Co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +20)_
- **section sans visuel** — `/carnet` — section#appel « Votre activité n'y est pas encore ? La fiche est g » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/carnet` — section#resultats « RUBRIQUE Toutes Restaurants Bars & cafés Commerces » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 sansJs, 375×667 sansJs, 390×844 sansJs, 844×390 sansJs, 768×1024 sansJs, 1024×768 sansJs, +7)_
- **section sans visuel** — `/carte` — section#appel « Une adresse manque sur la carte ? Les professionne » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#demandes « VOS DEMANDES Une fiche à faire évoluer Corriger ou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/referencer` — section#formulaire « Votre fiche, étape par étape Les champs marqués d' » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/referencer` — section#ensuite « APRÈS L'ENVOI Et ensuite ? 1 La demande arrive Rés » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/referencer` — section#appel « Une question avant de vous lancer ? 06 19 43 23 78 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

### texte de contenu sous 13 px (ordinateur) (11)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.ouv-cadre > figure.media.ouv-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.ouv-recherche > form.recherche > label.recherche-champ:nth-of-type(1) > span.recherche-lib « MÉTIER OU SERVICE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.registre-page:nth-of-type(1) > div.registre-images:nth-of-type(1) > figure.media.registre-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — div > form.recherche > label.recherche-champ:nth-of-type(1) > span.recherche-lib « MÉTIER OU SERVICE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/carnet` — div.tete-carnet-recherche:nth-of-type(2) > form.recherche.recherche--carnet > label.recherche-champ:nth-of-type(1) > span.recherche-lib « MÉTIER OU SERVICE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1366×768 normal, 1280×720 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/carnet` — section#debut > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1366×768 normal, 1280×720 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.tete-contact-grille > figure.media.tete-contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/referencer` — section#debut > div.conteneur.tete-ref-grille > figure.media.tete-ref-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +15)_
- **texte de contenu sous 13 px (ordinateur)** — `/referencer` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 5 · ACTIVITÉ » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1024×768 normal, 1280×720 normal, 1366×768 normal, 1440×900 normal, 1728×1000 normal, 1920×1080 normal, +8)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /carnet : aucune section épinglée ou plein écran.
- Tient dans l'écran /carte : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /referencer : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/referencer --seulement=fichiers,mesures
```
