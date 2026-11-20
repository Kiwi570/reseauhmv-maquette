# Réseau HMV — maquette

Maquette du site de **Réseau HMV, le Carnet d'adresses de la Haute Maurienne Vanoise** (ORIZON HMV, Avrieux), d'après le site actuel reseauhmv.com relevé le 20 novembre 2026.
Adresse de la maquette : https://reseauhmv-maquette.vercel.app

Direction « Le répertoire » : papier crème, encre bleu nuit, onglets de couleur ; titres Bebas Neue, texte Barlow (polices hébergées avec le site), pictogramme du carnet repris du site actuel.

## Pages

| Page | Adresse | Contenu |
|---|---|---|
| Accueil | `/` | Recherche métier + village, fiches du jour (l'ordre change chaque jour), répertoire des 12 rubriques, villages et carte de la vallée, charte, bande « Votre activité dans le carnet », questions fréquentes |
| Le Carnet | `/carnet` | Recherche libre, filtres rubrique / secteur / favoris (gardés dans l'adresse), fiches, favoris |
| La carte | `/carte` | Plan schématique de la vallée, 16 villages et stations, adresses du village choisi (`?village=bessans`) |
| Référencer mon activité | `/referencer` | Formulaire en 5 étapes (simulé) avec la fiche qui se remplit en direct |
| Contact | `/contact` | Téléphone, e-mail, demandes sur les fiches (`?sujet=modification`, `retrait`, `revendication`, `donnees`), formulaire simulé |
| 404 | `/404` | « Cette adresse n'est pas dans le carnet » |

Pages du site actuel non reprises dans la maquette (disponibles en v2) : Mentions légales, Politique de confidentialité, Charte, Cookies, Crédits photos (les crédits sont dans le pied de page).

## Fiche récapitulative : à fournir par le client

**Mentions et légal (marqués « à compléter » dans le pied de page)**
- Mentions légales : éditeur ORIZON HMV (SARL à associé unique, capital 7 500 €, Résidence Plein Soleil, 229 rue de la Scolette, 73500 Avrieux, SIREN 450 849 500, RCS Chambéry), directeur de la publication Jérémy Armand — déjà publiés sur le site actuel, à reprendre ; hébergeur à vérifier (Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis, si le site final y est hébergé) ; les mentions « [À CONFIRMER] » du site actuel sont à régler avant publication.
- Politique de confidentialité et durées de conservation (le site actuel les dit « proposées, à valider »).
- Crédits des illustrations générées (14 images Grok, marquées « Illustration générée » : mention à garder sur le site final).

**Contenus retirés ou remplacés faute d'information**
- **Les fiches du carnet** : le carnet en ligne répondait en erreur 500 le 20 novembre 2026. La maquette montre quatre adresses réelles lues sur l'image de partage du site (L'Antalya, Traiteur des Cimes, Samse Modane, Sherpa Supermarché Bessans) et des fiches marquées « Exemple » (métier et village seulement, aucun nom inventé). À remplacer par l'export des fiches validées (nom, rubrique, sous-catégorie, village, description, téléphone, e-mail, site, horaires, photo).
- **Chiffres** : « 298 adresses locales » et « 64 adresses » en commerces viennent de l'accueil du site vers le 21 octobre 2026 : à mettre à jour.
- **Photos** : seules les six photos de villages (Wikimedia Commons, Florian Pépellin) viennent du client ; les photos des professionnels viendront de leurs fiches.
- **Carte** : plan schématique, positions indicatives des villages ; sur le site final, les points des fiches géolocalisées.

## À la mise en ligne définitive

- Retirer : `noindex` (balise robots dans `source/gabarits/commun.mjs`, en-tête X-Robots-Tag dans `vercel.json`), les fiches d'exemple, la note « Maquette » du carnet, les formulaires simulés (Référencer, Contact) à brancher sur un vrai traitement, les mentions « à compléter » du pied de page.
- Garder : la mention « Illustration générée » sur les images créées par IA, les crédits des photos Wikimedia (licences CC BY-SA).

## Fabrication

- Textes : `donnees/textes/fr.json` ; données : `donnees/*.json` (rubriques, villages, adresses, questions) ; pages : `source/pages/*.mjs`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les `.html` à la main).
- Images : `plan-images.json`, puis le pipeline de la bibliothèque (`produire.mjs`, `partage.mjs`).
- Modules de la bibliothèque repris : `catalogue-filtres-flip` (filtres du carnet, plus recherche libre et village), `formulaire-par-etapes` (Référencer).
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).

Les images d'origine (`recu/`, environ 75 Mo : photos Wikimedia et images Grok) ne sont pas dans le zip : elles restent dans vos envois (`reseauhmv-villages.zip`, `reseau-hmv-grok_2.zip`). Les planches et analyses de `recu/` y sont.
