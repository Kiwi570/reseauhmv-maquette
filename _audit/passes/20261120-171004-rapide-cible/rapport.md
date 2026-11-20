# Rapport d’audit

Projet : `reseauhmv-maquette` · 20/11/2026 18:26:26 · 16 min · 6 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/carnet,/carte,/referencer,/contact,/404

## Résumé

- Statut : **84 échec(s)**
- Passe : `20261120-171004-rapide-cible` · version ?v=1
- Échecs : **84**
- À regarder : **78**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (1), mesures (36), films d’ouverture (10), films de transition (10), bords de l’écran (5), intro accélérable et passable (7), menu (1), clavier (6), liens et boutons (6), liens profonds (16), liens vers la page en cours (5), changements de hauteur (4), fluidité (10), défilement selon l’appareil (5), mouvement (10), effets du plan (7), souris immobile (4), vitesse (5), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | ✗ absent | aucun data-grille="manipuler" sur l’accueil |
| 2. L’intro devient la page | ✗ absent | versObjet absent |
| 3. La transition reprend le motif | ⚠ à regarder | voile par défaut (glisse) |
| 4. Quelque chose relie les sections et les pages | ✗ absent | sur aucune page |
| 5. Un titre fait l’événement sur chaque page | ✗ absent | sur aucune page |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (5)

- **image de partage** — `carnet.html` — fichier introuvable : /assets/partage/carnet-fr.jpg
- **image de partage** — `carte.html` — fichier introuvable : /assets/partage/carte-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `referencer.html` — fichier introuvable : /assets/partage/referencer-fr.jpg

### texte sous 12 px (15)

- **texte sous 12 px** — `/` — div.entete-rangee > div.entete-actions > a.bouton.bouton--nuit:nth-of-type(1) > em.pastille « GRATUIT » — 11.5 px _(1366×768 normal)_
- **texte sous 12 px** — `/` — div.ouv-recherche > form.recherche > label.recherche-champ:nth-of-type(1) > span.recherche-lib « MÉTIER OU SERVICE » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.ouv-recherche > form.recherche > label.recherche-champ.recherche-champ--ou:nth-of-type(2) > span.recherche-lib « OÙ ? » — 11.8 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **texte sous 12 px** — `/` — div.pro-texte:nth-of-type(1) > p:nth-of-type(3) > a.bouton > em.pastille.pastille--nuit « GRATUIT » — 11.5 px _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte sous 12 px** — `/404` — div > form.recherche > label.recherche-champ:nth-of-type(1) > span.recherche-lib « MÉTIER OU SERVICE » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/404` — div > form.recherche > label.recherche-champ.recherche-champ--ou:nth-of-type(2) > span.recherche-lib « OÙ ? » — 11.8 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 1366×768 normal, 390×844 sansWebgl)_
- **texte sous 12 px** — `/404` — div.entete-rangee > div.entete-actions > a.bouton.bouton--nuit:nth-of-type(1) > em.pastille « GRATUIT » — 11.5 px _(1366×768 normal)_
- **texte sous 12 px** — `/carnet` — div.tete-carnet-recherche:nth-of-type(2) > form.recherche.recherche--carnet > label.recherche-champ:nth-of-type(1) > span.recherche-lib « MÉTIER OU SERVICE » — 11.8 px _(390×844 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/carnet` — div.tete-carnet-recherche:nth-of-type(2) > form.recherche.recherche--carnet > label.recherche-champ.recherche-champ--ou:nth-of-type(2) > span.recherche-lib « OÙ ? » — 11.8 px _(390×844 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/carnet` — div.conteneur.appel-pro-grille > p:nth-of-type(2) > a.bouton > em.pastille.pastille--nuit « GRATUIT » — 11.5 px _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **texte sous 12 px** — `/carnet` — div.entete-rangee > div.entete-actions > a.bouton.bouton--nuit:nth-of-type(1) > em.pastille « GRATUIT » — 11.5 px _(1366×768 normal)_
- **texte sous 12 px** — `/carte` — div.conteneur.appel-pro-grille > p:nth-of-type(2) > a.bouton > em.pastille.pastille--nuit « GRATUIT » — 11.5 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **texte sous 12 px** — `/carte` — div.entete-rangee > div.entete-actions > a.bouton.bouton--nuit:nth-of-type(1) > em.pastille « GRATUIT » — 11.5 px _(1366×768 normal)_
- **texte sous 12 px** — `/contact` — div.entete-rangee > div.entete-actions > a.bouton.bouton--nuit:nth-of-type(1) > em.pastille « GRATUIT » — 11.5 px _(1366×768 normal)_
- **texte sous 12 px** — `/referencer` — div.entete-rangee > div.entete-actions > a.bouton.bouton--nuit:nth-of-type(1) > em.pastille « GRATUIT » — 11.5 px _(1366×768 normal)_

### texte coupé (3)

- **texte coupé** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(2) > span.ouv-ligne « Haute Maurienne » — coupé par div.ouv-cadre > div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(2) « Haute Maurienne » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(3) > span.ouv-ligne « Vanoise » — coupé par div.ouv-cadre > div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(3) « Vanoise » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **texte coupé** — `/` — div.pro-scene:nth-of-type(2) > article.fiche.fiche--demo > p.fiche-note.demo-champ:nth-of-type(2) > span « Quelques lignes sur votre métier, vos horaires et  » — coupé par section#votre-activite > div.conteneur.pro-grille > div.pro-scene:nth-of-type(2) « Artisans · Menuiserie Votre activité BASÉ À Braman » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_

### textes qui se chevauchent (12)

- **textes qui se chevauchent** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(1) > span.ouv-ligne.ouv-ligne--petite « Le carnet de la » — avec div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(2) > span.ouv-ligne « Haute Maurienne » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — article.fiche.fiche--demo > div.fiche-tete > span.fiche-rubrique.demo-champ:nth-of-type(2) > span « Artisans · Menuiserie » — avec div.conteneur.pro-grille > div.pro-scene:nth-of-type(2) > article.fiche.fiche--demo > span.tampon:nth-of-type(2) « Exemple » _(320×568 sansJs)_
- **textes qui se chevauchent** — `/carnet` — section#debut > div.conteneur.tete-carnet-grille > h1.geant « Le carnet » — avec section#debut > div.conteneur.tete-carnet-grille > div.tete-carnet-texte:nth-of-type(1) > p:nth-of-type(1) « Toutes les adresses, par métier, par rubrique et p » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/carnet` — section#debut > div.conteneur.tete-carnet-grille > p.surtitre « LE CARNET · HAUTE MAURIENNE VANOISE » — avec section#debut > div.conteneur.tete-carnet-grille > h1.geant « Le carnet » _(1366×768 normal)_
- **textes qui se chevauchent** — `/carte` — section#debut > div.conteneur.tete-carte-grille > div.tete-carte-texte:nth-of-type(1) > p.surtitre:nth-of-type(1) « LA CARTE » — avec section#debut > div.conteneur.tete-carte-grille > div.tete-carte-texte:nth-of-type(1) > h1 « La carte des adresses » _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **textes qui se chevauchent** — `/carte` — section#debut > div.conteneur.tete-carte-grille > div.tete-carte-texte:nth-of-type(1) > h1 « La carte des adresses » — avec section#debut > div.conteneur.tete-carte-grille > div.tete-carte-texte:nth-of-type(1) > p:nth-of-type(2) « Seize villages et stations, de Saint-André à Bonne » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.tete-contact-texte > p.numero-geant:nth-of-type(2) > a > span.numero-chiffre:nth-of-type(1) « 0 » — avec div.conteneur.tete-contact-grille > div.tete-contact-texte > p.tete-contact-mail:nth-of-type(3) > a « reseauhmv@gmail.com » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.tete-contact-texte > p.numero-geant:nth-of-type(2) > a > span.numero-chiffre:nth-of-type(2) « 6 » — avec div.conteneur.tete-contact-grille > div.tete-contact-texte > p.tete-contact-mail:nth-of-type(3) > a « reseauhmv@gmail.com » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.tete-contact-texte > p.numero-geant:nth-of-type(2) > a > span.numero-chiffre:nth-of-type(4) « 1 » — avec div.conteneur.tete-contact-grille > div.tete-contact-texte > p.tete-contact-mail:nth-of-type(3) > a « reseauhmv@gmail.com » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.tete-contact-texte > p.numero-geant:nth-of-type(2) > a > span.numero-chiffre:nth-of-type(5) « 9 » — avec div.conteneur.tete-contact-grille > div.tete-contact-texte > p.tete-contact-mail:nth-of-type(3) > a « reseauhmv@gmail.com » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.tete-contact-texte > p.numero-geant:nth-of-type(2) > a > span.numero-chiffre:nth-of-type(7) « 4 » — avec div.conteneur.tete-contact-grille > div.tete-contact-texte > p.tete-contact-mail:nth-of-type(3) > a « reseauhmv@gmail.com » _(1366×768 normal)_
- **textes qui se chevauchent** — `/contact` — div.tete-contact-texte > p.numero-geant:nth-of-type(2) > a > span.numero-chiffre:nth-of-type(8) « 3 » — avec div.conteneur.tete-contact-grille > div.tete-contact-texte > p.tete-contact-mail:nth-of-type(3) > a « reseauhmv@gmail.com » _(1366×768 normal)_

### zone tactile sous 44 px (6)

- **zone tactile sous 44 px** — `/` — div.ouv-recherche > form.recherche > label.recherche-champ:nth-of-type(1) > input — 287 × 30 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/` — div.ouv-recherche > form.recherche > label.recherche-champ.recherche-champ--ou:nth-of-type(2) > select « Tous les villages Saint-André Le Freney Fourneaux  » — 287 × 30 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/404` — div > form.recherche > label.recherche-champ:nth-of-type(1) > input — 194 × 30 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/404` — div > form.recherche > label.recherche-champ.recherche-champ--ou:nth-of-type(2) > select « Tous les villages Saint-André Le Freney Fourneaux  » — 194 × 30 px _(390×844 normal, 390×844 sansJs, 320×568 sansJs, 844×390 normal, 390×844 sansWebgl)_
- **zone tactile sous 44 px** — `/carnet` — div.tete-carnet-recherche:nth-of-type(2) > form.recherche.recherche--carnet > label.recherche-champ:nth-of-type(1) > input — 287 × 30 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/carnet` — div.tete-carnet-recherche:nth-of-type(2) > form.recherche.recherche--carnet > label.recherche-champ.recherche-champ--ou:nth-of-type(2) > select « Tous les villages Saint-André Le Freney Fourneaux  » — 287 × 30 px _(390×844 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_

### premier écran : bouton principal hors de l’écran (5)

- **premier écran : bouton principal hors de l’écran** — `/` — div.ouv-texte > div.ouv-recherche > form.recherche > button.bouton.bouton--nuit « Rechercher » _(320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > p:nth-of-type(2) > a.bouton.bouton--contour « Revenir à l'accueil » _(390×844 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl, 1366×768 normal)_
- **premier écran : bouton principal hors de l’écran** — `/carnet` — div.conteneur.tete-carnet-grille > div.tete-carnet-recherche:nth-of-type(2) > form.recherche.recherche--carnet > button.bouton.bouton--nuit « Rechercher » _(844×390 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/carte` — div.carte-scene:nth-of-type(2) > aside.carte-panneau > p.carte-action > a.bouton.bouton--contour « Ouvrir le carnet » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/referencer` — div.conteneur.tete-ref-grille > div.tete-ref-texte > p.tete-ref-actions:nth-of-type(3) > a.bouton « Commencer ma fiche » _(320×568 sansJs)_

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.ouv-cadre > div.ouv-texte > ul.ouv-infos « 298 adresses locales Villages & stations Explorer  » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/referencer` — div.conteneur.tete-ref-grille > div.tete-ref-texte > p.tete-ref-actions:nth-of-type(3) > span.tete-ref-info « 5 étapes · quelques minutes » _(320×568 sansJs)_

### contraste sur image (6)

- **contraste sur image** — `/` — div.ouv-texte > h1.ouv-titre > span.ouv-ligne-m:nth-of-type(2) > span.ouv-ligne « Haute Maurienne » — 2.18:1 sur les 10 % de la photo les moins favorables (minimum 3:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ul.ouv-infos > li:nth-of-type(1) > span > b.chiffre « 298 » — 3.19:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.ouv-texte > ul.ouv-infos > li:nth-of-type(1) > span « 298 adresses locales » — 3.71:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — div.ouv-texte > ul.ouv-infos > li.masque-ecran-tres-bas:nth-of-type(2) > span « Villages & stations » — 3.83:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_
- **contraste sur image** — `/` — ul.ouv-infos > li:nth-of-type(3) > a.ouv-lien-carte > span « Explorer la carte » — 2.48:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_
- **contraste sur image** — `/` — ul.ouv-infos > li:nth-of-type(3) > a.ouv-lien-carte > span « Explorer la carte » — 1.54:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(390×844 normal)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/404` — section#debut > div.conteneur.introuvable-texte > h1 « Cette adresse n'est pas dans le carnet » — haut 315 px, bas 430 px, zone 65–390 px _(844×390 normal)_

### titres dans l’ordre (2)

- **titres dans l’ordre** — `/carnet` — article#fiche-ex-massage > h3.fiche-nom « Massage » — h1 suivi de h3 _(390×844 normal, 1366×768 normal)_
- **titres dans l’ordre** — `/carnet` — article#fiche-antalya > h3.fiche-nom « L'Antalya » — h1 suivi de h3 _(390×844 sansJs)_

### premier écran : titre h1 invisible (1)

- **premier écran : titre h1 invisible** — `/contact` — section#debut > div.conteneur.tete-contact-grille > div.tete-contact-texte > h1.visuellement-cache « Contact » _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### image non chargée (1)

- **image non chargée** — `/referencer` — aside.ref-apercu > article.fiche.fiche--apercu > div.ref-apercu-photo:nth-of-type(1) > img _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### clavier (22)

- **clavier** — `/` — input «  » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — select « Tous les villagesSaint-AndréLe » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Une bonne table » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Un commerce » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Un artisan » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Une activité » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Bonneval-sur-Arc » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Modane » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Aussois » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Bessans » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « La Norma » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/` — a « Val Cenis » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/404` — input «  » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/404` — select « Tous les villagesSaint-AndréLe » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carnet` — input «  » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carnet` — select « Tous les villagesSaint-AndréLe » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carte` — a « Bonneval-sur-Arc » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carte` — a « Modane » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carte` — a « Aussois » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carte` — a « Bessans » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carte` — a « La Norma » — focus invisible (aucun contour) _(1366×768)_
- **clavier** — `/carte` — a « Val Cenis » — focus invisible (aucun contour) _(1366×768)_

### lien vers la page en cours (1)

- **lien vers la page en cours** — `/contact` — la page se recharge au lieu de défiler

### positions non recalculées après un changement de hauteur (2)

- **positions non recalculées après un changement de hauteur** — `/carnet` — Toutes20 — décalage de 35 px _(1366×768)_
- **positions non recalculées après un changement de hauteur** — `/carnet` — Restaurants2 — décalage de 958 px _(1366×768)_

## À regarder

### « à compléter » visible (2)

- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `referencer.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### clearProps « all » (1)

- **clearProps « all »** — assets/js/modules/formulaire-par-etapes.js : efface aussi les variables CSS posées dans le HTML ; nommer les propriétés (clearProps: 'transform,opacity')

### grille : effet signature qui ne se manipule pas (point 1) (1)

- **grille : effet signature qui ne se manipule pas (point 1)** — `/` — aucun élément data-grille="manipuler" sur l’accueil : objet à attraper, faire tourner ou glisser (module objet-a-faire-tourner, lumiere-au-pointeur…)

### grille : l’intro ne finit pas sur la page (point 2) (1)

- **grille : l’intro ne finit pas sur la page (point 2)** — versObjet(tl, …) absent de assets/js : l’intro doit finir sur l’objet d’ouverture (socle : import { versObjet } from './socle/index.js')

### grille : voile par défaut (point 3) (1)

- **grille : voile par défaut (point 3)** — formeVoile « glisse » : la grille demande la forme du monde du client (iris, vague, rideau dans le socle, ou une forme propre). Si la glisse est voulue (page qu’on tourne, store qui descend), le déclarer dans config.json (grille.dispenses.voile)

### grille : rien ne relie les sections (point 4) (1)

- **grille : rien ne relie les sections (point 4)** — sur aucune page : élément du métier qui relie les sections et les pages (fil dans la marge, objet unique qui change, lumière qui passe, carte, folio, frise), marqué data-grille="fil"

### grille : aucun titre ne fait l’événement (point 5) (1)

- **grille : aucun titre ne fait l’événement (point 5)** — sur aucune page : titre fabriqué par le métier, axe de police animé ou titre joué avec l’image (modules axes-au-defilement, titre-cousu, texte-grave-en-direct), marqué data-grille="typo"

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — section#debut > div.ouv-cadre > figure.media.ouv-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.registre-page:nth-of-type(1) > div.registre-images:nth-of-type(1) > figure.media.registre-media:nth-of-type(1) > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#appel > figure.media.appel-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/404` — section#debut > figure.media.introuvable-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/carnet` — section#debut > figure.media.bandeau-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/contact` — section#debut > div.conteneur.tete-contact-grille > figure.media.tete-contact-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/referencer` — section#debut > div.conteneur.tete-ref-grille > figure.media.tete-ref-media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/referencer` — div.fpe__carton > form.fpe__form > div.fpe__progression:nth-of-type(1) > p.fpe__etat « ÉTAPE 1 SUR 5 · ACTIVITÉ » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (11)

- **section sans visuel** — `/` — section#aujourdhui « Aujourd'hui, vous cherchez… L'ordre change chaque  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#charte « LA CHARTE DU CARNET Trois promesses tenues par la  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/` — section#faq « QUESTIONS FRÉQUENTES Le carnet, en clair Une autre » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_
- **section sans visuel** — `/carnet` — section#resultats « RUBRIQUE Toutes 20 Restaurants 2 Bars & cafés 1 Co » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansWebgl)_
- **section sans visuel** — `/carnet` — section#appel « Votre activité n'y est pas encore ? La fiche est g » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 1366×768 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **section sans visuel** — `/carnet` — section#resultats « RUBRIQUE Toutes Restaurants Bars & cafés Commerces » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/carte` — section#appel « Une adresse manque sur la carte ? Les professionne » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/contact` — section#demandes « VOS DEMANDES Une fiche à faire évoluer Corriger ou » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 844×390 normal, 390×844 sansJs, 320×568 sansJs, 390×844 sansWebgl)_
- **section sans visuel** — `/referencer` — section#formulaire « Votre fiche, étape par étape Les champs marqués d' » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/referencer` — section#ensuite « APRÈS L'ENVOI Et ensuite ? 1 La demande arrive Rés » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_
- **section sans visuel** — `/referencer` — section#appel « Une question avant de vous lancer ? 06 19 43 23 78 » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 1366×768 normal, 390×844 sansWebgl, 844×390 normal, 390×844 sansJs, 320×568 sansJs)_

### typographie française (36)

- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(1) « Modane : Florian Pépellin / Wikimedia Commons, CC  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(2) « La Norma : Florian Pépellin / Wikimedia Commons, C » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(3) « Aussois : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(4) « Val Cenis : Florian Pépellin / Wikimedia Commons,  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(5) « Bessans : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(6) « Bonneval-sur-Arc : Florian Pépellin / Wikimedia Co » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(1) « Modane : Florian Pépellin / Wikimedia Commons, CC  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(2) « La Norma : Florian Pépellin / Wikimedia Commons, C » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(3) « Aussois : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(4) « Val Cenis : Florian Pépellin / Wikimedia Commons,  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(5) « Bessans : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/404` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(6) « Bonneval-sur-Arc : Florian Pépellin / Wikimedia Co » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carnet` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(1) « Modane : Florian Pépellin / Wikimedia Commons, CC  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carnet` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(2) « La Norma : Florian Pépellin / Wikimedia Commons, C » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carnet` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(3) « Aussois : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carnet` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(4) « Val Cenis : Florian Pépellin / Wikimedia Commons,  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carnet` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(5) « Bessans : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carnet` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(6) « Bonneval-sur-Arc : Florian Pépellin / Wikimedia Co » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carte` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(1) « Modane : Florian Pépellin / Wikimedia Commons, CC  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carte` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(2) « La Norma : Florian Pépellin / Wikimedia Commons, C » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carte` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(3) « Aussois : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carte` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(4) « Val Cenis : Florian Pépellin / Wikimedia Commons,  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carte` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(5) « Bessans : Florian Pépellin / Wikimedia Commons, CC » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/carte` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(6) « Bonneval-sur-Arc : Florian Pépellin / Wikimedia Co » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- **typographie française** — `/contact` — div.conteneur.pied-grille:nth-of-type(1) > div:nth-of-type(3) > ul.pied-credits > li:nth-of-type(1) « Modane : Florian Pépellin / Wikimedia Commons, CC  » — espace insécable manquante avant ou après « : » _(1366×768 normal)_
- … et 11 autres (rapport.json)

### ouverture : changement brusque (7)

- **ouverture : changement brusque** — `/carnet` — à 2383 ms (différence 22 %) (films/ouverture-carnet-1366.png) _(1366×768 film)_
- **ouverture : changement brusque** — `/carte` — à 2200 ms (différence 24 %) (films/ouverture-carte-1366.png) _(1366×768 film)_
- **ouverture : changement brusque** — `/carte` — à 2217 ms (différence 28 %) (films/ouverture-carte-1366.png) _(1366×768 film)_
- **ouverture : changement brusque** — `/contact` — à 2267 ms (différence 25 %) (films/ouverture-contact-1366.png) _(1366×768 film)_
- **ouverture : changement brusque** — `/contact` — à 2283 ms (différence 30 %) (films/ouverture-contact-1366.png) _(1366×768 film)_
- **ouverture : changement brusque** — `/referencer` — à 2233 ms (différence 24 %) (films/ouverture-referencer-1366.png) _(1366×768 film)_
- **ouverture : changement brusque** — `/referencer` — à 2250 ms (différence 26 %) (films/ouverture-referencer-1366.png) _(1366×768 film)_

### retour avant : changement brusque (2)

- **retour avant : changement brusque** — `/carnet` — à 72 ms (différence 43 %) (films/retour-avant-1366.png) _(1366×768 retour avant)_
- **retour avant : changement brusque** — `/carnet` — à 67 ms (différence 34 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### bouton sans effet visible (4)

- **bouton sans effet visible** — `/carnet` — Aussois0 _(1366×768)_
- **bouton sans effet visible** — `/carnet` — Val Cenis0 _(1366×768)_
- **bouton sans effet visible** — `/carnet` — Bessans0 _(1366×768)_
- **bouton sans effet visible** — `/carnet` — Bonneval-sur-Arc0 _(1366×768)_

### effet qui ne bouge pas au défilement (1)

- **effet qui ne bouge pas au défilement** — `/referencer` — svg — trace : il ne bouge ni au défilement ni tout seul à cette taille (effet au survol, au clic, ou réservé à l'ordinateur ?) ; il ne compte pas comme effet de section _(1366×768 normal)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 4 étape(s) notée(s), 37 min de travail pour 75 min de budget, 23 min d’attente de l’utilisateur.
- Audit rapide : étapes lourdes sur /, /carnet, /carte, /contact, /referencer.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2820 ms depuis le premier octet
- Ouverture /carnet (1366×768) : 2449 ms depuis le premier octet
- Ouverture /carte (1366×768) : 2396 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2703 ms depuis le premier octet
- film de l'ouverture /contact 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /referencer (1366×768) : 2383 ms depuis le premier octet
- Ouverture / (390×844) : 2794 ms depuis le premier octet
- Ouverture /carnet (390×844) : 2423 ms depuis le premier octet
- film de l'ouverture /carnet 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /carte (390×844) : 2362 ms depuis le premier octet
- Ouverture /contact (390×844) : 2718 ms depuis le premier octet
- Ouverture /referencer (390×844) : 2419 ms depuis le premier octet
- bords de l’écran /referencer 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 643 images d’intro, 14 de voile et 112 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Changements de hauteur /carte : aucun effet ScrollTrigger, rien à recalculer.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran / : aucune section épinglée ou plein écran.
- Tient dans l'écran /carnet : aucune section épinglée ou plein écran.
- Tient dans l'écran /carte : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /referencer : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 385, tâche la plus longue 0 ms
- Fluidité /carnet 1366×768 (molette) : 0 % d'images lentes sur 217, tâche la plus longue 0 ms
- Fluidité /carte 1366×768 (molette) : 0 % d'images lentes sur 171, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 168, tâche la plus longue 0 ms
- Fluidité /referencer 1366×768 (molette) : 0 % d'images lentes sur 173, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1347, tâche la plus longue 0 ms
- Fluidité /carnet 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /carte 390×844 (doigt) : 0 % d'images lentes sur 1349, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1331, tâche la plus longue 0 ms
- Fluidité /referencer 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Vitesse / : 0.65 s de calcul au chargement (téléphone ralenti).
- Vitesse /carnet : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /carte : 0.52 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.56 s de calcul au chargement (téléphone ralenti).
- Vitesse /referencer : 0.46 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,parcours
```
