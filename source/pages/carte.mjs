/* La carte : plan de la vallée, villages cliquables, adresses du village choisi. */
import { html, brut } from '../../outils/gabarit.mjs';
import { icone } from '../gabarits/icones.mjs';
import { carteVallee, legendeVallee, villagesProjetes, secteurs, fiche } from '../gabarits/composants.mjs';

export const page = { cle: 'carte', fichier: 'carte', imagePartage: 'village-bonneval-sur-arc-960.webp' };

export default (c) => {
  const vs = villagesProjetes(c);
  const S = c.donnees.villages.secteurs;
  return html`
<section class="tete-carte" id="debut">
  <div class="conteneur tete-carte-grille">
    <div class="tete-carte-texte">
      <p class="surtitre">${c.t('carte.surtitre')}</p>
      <h1 data-anime="lignes">${c.t('carte.titre')}</h1>
      <p>${c.t('carte.texte')}</p>
      <p class="tete-carte-actions"><span class="tete-carte-info" data-info-cle>${icone('repere')}<span>${c.t('carte.info')}</span></span>${c.lien('carnet', { classe: 'bouton', texte: html`${icone('loupe')}${c.t('carte.toutCarnet')}`, attrs: 'data-action-principale' })}</p>
    </div>
    <div class="carte-scene">
      <div class="carte-plan" data-iris-centre>${carteVallee(c, { interactive: true })}
      </div>
      <aside class="carte-panneau" aria-live="polite">
        <div class="carte-panneau-vide" data-panneau-vide>
          <p class="carte-consigne"><span class="sur-souris">${c.t('carte.choisir')}</span><span class="sur-tactile">${c.t('carte.choisirTactile')}</span></p>
          ${legendeVallee(c, { interactive: true })}
          <p class="vallee-note">${c.t('commun.schema')}</p>
        </div>
        ${vs.map((v) => {
          const sect = S.find((s) => s.cle === v.secteur);
          const ici = c.donnees.adresses.filter((a) => a.village === v.nom);
          return html`<div class="carte-village" data-panneau-village="${v.id}" hidden>
            <p class="surtitre">${c.t('commun.secteur')} ${sect.nom}${v.station ? ` · ${c.s('carte.station')}` : ''}</p>
            <h2 class="carte-village-nom">${v.nom}</h2>
            <p class="carte-village-lib">${c.t('carte.adressesIci')}</p>
            ${ici.length ? html`<ul class="carte-village-liste">${ici.map((a) => html`<li><span class="fiche-icone teinte-${(c.donnees.rubriques.find((r) => r.cle === a.rubrique) || {}).teinte}">${icone((c.donnees.rubriques.find((r) => r.cle === a.rubrique) || {}).icone)}</span><span><b>${a.reel ? a.nom : a.activite}</b>${a.reel ? '' : html` <em class="fiche-exemple">${c.t('commun.exemple')}</em>`}</span></li>`)}</ul>` : html`<p class="carte-village-aucune">${c.t('carte.aucune')}</p>`}
            <p class="carte-village-actions">
              <a class="bouton" href="${c.url('carnet', 'resultats', `village=${encodeURIComponent(v.nom)}`)}" data-libelle="${c.libelle('carnet')}">${icone('loupe')}${c.t('carte.voirCarnet')}</a>
              <button type="button" class="lien" data-retour-liste>${icone('carte')}${c.t('carte.choisir')}</button>
            </p>
          </div>`;
        })}
      </aside>
    </div>
  </div>
</section>

<section class="villages villages--carte" id="secteurs">
  <div class="conteneur">
    <header class="section-tete">
      <h2 data-anime="lignes">${c.t('carte.secteursTitre')}</h2>
      <p class="section-texte">${c.t('carte.secteursTexte')}</p>
    </header>
    ${secteurs(c)}
  </div>
</section>

<section class="appel-pro" id="appel">
  <div class="conteneur appel-pro-grille">
    <h2 data-anime="lignes">${c.t('carte.appelTitre')}</h2>
    <p data-anime>${c.t('carte.appelTexte')}</p>
    <p data-anime>${c.lien('referencer', { classe: 'bouton', texte: html`${icone('plus')}${c.t('carte.appelAction')}<em class="pastille pastille--nuit">${c.t('commun.gratuit')}</em>`, attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};
