/* Page 404 : l'adresse n'est pas dans le carnet. */
import { html } from '../../outils/gabarit.mjs';
import { recherche } from '../gabarits/composants.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), cadrage: '50% 50%', priorite: true, classe: 'introuvable-media', sizes: '100vw', attrs: 'data-anime="rideau" data-iris-centre' })}
  <div class="conteneur introuvable-texte">
    <h1 data-anime="lignes">${c.t('introuvable.titre')}</h1>
    <p data-anime>${c.t('introuvable.texte')}</p>
    <p class="introuvable-actions" data-anime>${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}${c.lien('carnet', { classe: 'bouton bouton--contour', texte: c.t('pages.carnet.nav') })}</p>
    <div data-anime>${recherche(c, { action: false })}</div>
  </div>
</section>
`;
