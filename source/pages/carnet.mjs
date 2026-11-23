/* Le Carnet : recherche, filtres par rubrique et par secteur, favoris, fiches. */
import { html } from '../../outils/gabarit.mjs';
import { icone } from '../gabarits/icones.mjs';
import { recherche, fiche } from '../gabarits/composants.mjs';

export const page = { cle: 'carnet', fichier: 'carnet', imagePartage: 'grok/carnet-toits-1280.webp' };

export default (c) => {
  const R = c.donnees.rubriques;
  const S = c.donnees.villages.secteurs;
  return html`
<section class="tete-carnet" id="debut">
  <div class="conteneur tete-carnet-grille">
    <p class="surtitre">${c.t('carnet.surtitre')}</p>
    <h1 class="geant" data-anime="lettres">${c.t('carnet.titre')}</h1>
    <div class="tete-carnet-texte">
      <p>${c.t('carnet.texte')}</p>
    </div>
    <div class="tete-carnet-recherche">${recherche(c, { objet: true, classe: 'recherche--carnet' })}</div>
    <p class="tete-carnet-info" data-info-cle>${icone('sac')}<span>${c.t('carnet.info')}</span></p>
  </div>
  ${c.media({ nom: 'grok/carnet-toits', alt: c.s('carnet.alt'), cadrage: '50% 50%', priorite: true, classe: 'bandeau-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="12"' })}
</section>

<section class="cff resultats" id="resultats" data-module="catalogue-filtres-flip">
  <div class="conteneur">
    <div class="filtres" data-filtres data-effet="fiches">
      <div class="filtres-groupe">
        <p class="filtres-lib" id="lib-rubrique">${c.t('carnet.rubriques')}</p>
        <div class="filtres-puces" role="group" aria-labelledby="lib-rubrique" data-filtre-groupe="rubrique">
          <button type="button" data-valeur="tout" aria-pressed="true">${c.t('carnet.toutes')}</button>
          ${R.map((r) => html`<button type="button" data-valeur="${r.cle}" aria-pressed="false">${icone(r.icone)}${r.nom}</button>`)}
        </div>
      </div>
      <div class="filtres-groupe">
        <p class="filtres-lib" id="lib-secteur">${c.t('carnet.secteurs')}</p>
        <div class="filtres-puces" role="group" aria-labelledby="lib-secteur" data-filtre-groupe="secteur">
          <button type="button" data-valeur="tout" aria-pressed="true">${c.t('carnet.tous')}</button>
          ${S.map((s) => html`<button type="button" data-valeur="${s.cle}" aria-pressed="false">${s.nom}</button>`)}
        </div>
      </div>
      <div class="filtres-bas">
        <div class="filtres-puces filtres-puces--favoris" role="group" aria-label="${c.s('carnet.favoris')}" data-filtre-groupe="favori">
          <button type="button" data-valeur="tout" aria-pressed="true">${c.t('carnet.touteFiches')}</button>
          <button type="button" data-valeur="oui" aria-pressed="false">${icone('coeur')}${c.t('carnet.favoris')}</button>
        </div>
        <button type="button" class="filtres-hasard" data-hasard data-annonce="${c.s('commun.tiree', { nom: '{nom}' })}">${icone('de')}<span>${c.t('commun.hasard')}</span></button>
        <p class="filtres-compte" aria-live="polite"><b data-compte>20</b> <span data-compte-mot>fiches</span> ${c.t('carnet.affichees')} · <button type="button" class="lien" data-reinit>${c.t('carnet.reinit')}</button></p>
      </div>
    </div>
    <p class="visuellement-cache" aria-live="polite" data-hasard-annonce></p>
    <h2 class="visuellement-cache">${c.t('carnet.region')}</h2>
    <p class="note-maquette">${c.t('carnet.note')}</p>
    <div class="cff__grille grille-fiches" data-grille>
      ${c.donnees.adresses.map((a) => fiche(c, a))}
      <div class="cff__vide fiches-vide" data-vide hidden>
        <p><b>${c.t('carnet.vide')}</b></p>
        <p><button type="button" class="bouton bouton--contour" data-reinit>${c.t('carnet.videAction')}</button> ${c.lien('referencer', { classe: 'bouton', texte: c.t('carnet.videPro') })}</p>
      </div>
    </div>
  </div>
</section>

<section class="appel-pro" id="appel">
  <div class="conteneur appel-pro-grille">
    <h2 data-anime="lignes">${c.t('carnet.appelTitre')}</h2>
    <p data-anime>${c.t('carnet.appelTexte')}</p>
    <p data-anime>${c.lien('referencer', { classe: 'bouton', texte: html`${icone('plus')}${c.t('carnet.appelAction')}<em class="pastille pastille--nuit">${c.t('commun.gratuit')}</em>`, attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};
