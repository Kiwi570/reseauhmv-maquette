/* Accueil : le carnet ouvert. */
import { html, brut } from '../../outils/gabarit.mjs';
import { icone, pictogramme, anneaux } from '../gabarits/icones.mjs';
import { recherche, carteVallee, legendeVallee, secteurs } from '../gabarits/composants.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'grok/ouverture-vallee-1280.webp' };

export default (c) => {
  const R = c.donnees.rubriques;
  const adresses = c.donnees.adresses;
  const nomVillage = (n) => (c.donnees.villages.villages.find((v) => v.nom === n) || {}).complet || n;
  const reels = (rub) => adresses.filter((a) => a.reel && a.rubrique === rub);
  /* Six images pour douze rubriques : une figure par image, montrée selon l'onglet choisi. */
  const images = [...new Set(R.map((r) => r.image))];
  return html`
<section class="ouv" id="debut">
  <div class="ouv-cadre">
    ${c.media({ nom: 'grok/ouverture-vallee', alt: c.s('accueil.ouv.alt'), cadrage: '62% 55%', cadrageMobile: '60% 70%', priorite: true, classe: 'ouv-media', sizes: '(max-width: 760px) 100vw, 92vw', attrs: 'data-fx="parallaxe" data-fx-force="8" data-boucle-css data-effet="respire"' })}
    <div class="ouv-texte">
      <p class="ouv-pastille" data-anime="gsap">${pictogramme('ouv-picto')}<span>${c.t('accueil.ouv.pastille')}</span></p>
      <h1 class="ouv-titre">
        <span class="ouv-ligne-m"><span class="ouv-ligne ouv-ligne--petite">${c.t('accueil.ouv.ligne1')}</span></span>
        <span class="ouv-ligne-m"><span class="ouv-ligne">${c.t('accueil.ouv.ligne2')}</span></span>
        <span class="ouv-ligne-m"><span class="ouv-ligne">${c.t('accueil.ouv.ligne3')}</span></span>
      </h1>
      <p class="ouv-accroche masque-ecran-tres-bas" data-anime="gsap">${c.t('accueil.ouv.accroche')}</p>
      <div class="ouv-recherche" data-anime="gsap">${recherche(c, { objet: true, suggestions: true })}</div>
      <ul class="ouv-infos" data-info-cle data-anime="gsap">
        <li>${icone('sac')}<span><b class="chiffre" data-compteur="298">298</b> ${c.t('accueil.ouv.adresses')}</span></li>
        <li class="masque-ecran-tres-bas">${icone('montagne')}<span>${c.t('accueil.ouv.villages')}</span></li>
        <li>${c.lien('carte', { texte: html`${icone('carte')}<span>${c.t('accueil.ouv.carte')}</span>${icone('fleche', 'icone icone--fleche')}`, classe: 'ouv-lien-carte' })}</li>
      </ul>
    </div>
    <nav class="tranche" aria-label="${c.s('accueil.ouv.onglets')}">
      <ul>${R.map((r, i) => html`<li style="--i:${i}"><a class="tranche-onglet teinte-${r.teinte}" href="${c.url('carnet', 'resultats', `rubrique=${r.cle}`)}" data-libelle="${c.libelle('carnet')}">${icone(r.icone)}<span>${r.nom}</span></a></li>`)}</ul>
    </nav>
  </div>
</section>

<section class="jour" id="aujourdhui">
  <div class="conteneur">
    <header class="jour-tete">
      <h2 data-anime="lignes">${c.t('accueil.jour.titre')}</h2>
      <p class="jour-ordre">${c.t('accueil.jour.ordre')} · <time data-aujourdhui>20 novembre</time></p>
      <div class="jour-actions">
        <button type="button" class="jour-rebattre" data-rebattre data-annonce="${c.s('commun.rebattues')}">${icone('melanger')}<span>${c.t('commun.rebattre')}</span></button>
        ${c.lien('carnet', { params: 'favori=oui', ancre: 'resultats', classe: 'jour-favoris', texte: html`${icone('coeur')}<span>${c.t('accueil.jour.favoris')} · <b data-favoris-nombre>0</b></span>` })}
      </div>
      <p class="visuellement-cache" aria-live="polite" data-rebattre-annonce></p>
    </header>
    <div class="donne">
      <article class="carte-jour carte-jour--table" data-ordre="0" data-place="0" style="order:0" data-effet="donne">
        <span class="carte-jour-filigrane" aria-hidden="true">${icone('couverts')}</span>
        <span class="carte-jour-icone">${icone('couverts')}</span>
        <p class="carte-jour-sur">${c.t('accueil.jour.tableSur')}</p>
        <h3>${c.lien('carnet', { params: 'rubrique=restaurants', ancre: 'resultats', texte: c.t('accueil.jour.table'), classe: 'carte-jour-lien' })}</h3>
        <ul class="carte-jour-liste">${reels('restaurants').map((a) => html`<li><b>${a.nom}</b><span>${nomVillage(a.village)}</span></li>`)}</ul>
        ${icone('diagonale', 'icone carte-jour-fleche')}
      </article>
      <article class="carte-jour carte-jour--commerce" data-ordre="1" data-place="1" style="order:1" data-effet="donne">
        <span class="carte-jour-filigrane" aria-hidden="true">${icone('sac')}</span>
        <span class="carte-jour-icone">${icone('sac')}</span>
        <p class="carte-jour-sur">${c.t('accueil.jour.commerceSur')}</p>
        <h3>${c.lien('carnet', { params: 'rubrique=commerces', ancre: 'resultats', texte: c.t('accueil.jour.commerce'), classe: 'carte-jour-lien' })}</h3>
        <ul class="carte-jour-liste">${reels('commerces').map((a) => html`<li><b>${a.nom}</b><span>${nomVillage(a.village)}</span></li>`)}</ul>
        <p class="carte-jour-nombre">${c.t('accueil.jour.commerceNombre')}</p>
        ${icone('diagonale', 'icone carte-jour-fleche')}
      </article>
      <article class="carte-jour carte-jour--artisan" data-ordre="2" data-place="2" style="order:2" data-effet="donne">
        <span class="carte-jour-filigrane" aria-hidden="true">${icone('marteau')}</span>
        <span class="carte-jour-icone">${icone('marteau')}</span>
        <p class="carte-jour-sur">${c.t('accueil.jour.artisanSur')}</p>
        <h3>${c.lien('carnet', { params: 'rubrique=artisans', ancre: 'resultats', texte: c.t('accueil.jour.artisan'), classe: 'carte-jour-lien' })}</h3>
        <p class="carte-jour-texte">${c.t('accueil.jour.artisanTexte')}</p>
        <ul class="carte-jour-puces">${R.find((r) => r.cle === 'artisans').sous.slice(0, 6).map((x) => html`<li>${x}</li>`)}</ul>
        ${icone('diagonale', 'icone carte-jour-fleche')}
      </article>
      <article class="carte-jour carte-jour--activite" data-ordre="3" data-place="3" style="order:3" data-effet="donne">
        <span class="carte-jour-filigrane" aria-hidden="true">${icone('etincelle')}</span>
        <span class="carte-jour-icone">${icone('etincelle')}</span>
        <p class="carte-jour-sur">${c.t('accueil.jour.activiteSur')}</p>
        <h3>${c.lien('carnet', { params: 'rubrique=activites', ancre: 'resultats', texte: c.t('accueil.jour.activite'), classe: 'carte-jour-lien' })}</h3>
        <p class="carte-jour-texte">${c.t('accueil.jour.activiteTexte')}</p>
        <ul class="carte-jour-puces">${R.find((r) => r.cle === 'activites').sous.map((x) => html`<li>${x}</li>`)}</ul>
        ${icone('diagonale', 'icone carte-jour-fleche')}
      </article>
    </div>
  </div>
</section>

<section class="repertoire" id="repertoire">
  <div class="conteneur">
    <header class="section-tete">
      <p class="surtitre">${c.t('accueil.repertoire.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.repertoire.titre')}</h2>
      <p class="section-texte">${c.t('accueil.repertoire.texte')}</p>
    </header>
    <div class="registre" data-registre>
      <div class="registre-page">
        ${anneaux(10, 'anneaux anneaux--registre')}
        <div class="registre-feuille" aria-hidden="true"></div>
        <div class="registre-images">${images.map((nom, i) => c.media({ nom: `grok/${nom}`, alt: '', classe: `registre-media${i === 0 ? ' est-visible' : ''}`, sizes: '(max-width: 760px) 90vw, 30vw', attrs: `data-image-rubrique="${nom}"${i === 0 ? ' data-anime="rideau"' : ''}` }))}</div>
        <div class="registre-panneaux">${R.map((r, i) => html`<div class="registre-panneau" id="rubrique-${r.cle}" role="tabpanel" aria-labelledby="onglet-${r.cle}" data-image="${r.image}"${i ? brut(' hidden') : ''}>
          <p class="registre-num">${String(i + 1).padStart(2, '0')} / 12</p>
          <h3 class="registre-titre">${r.nom}</h3>
          <p class="registre-accroche">${r.accroche}</p>
          <p class="registre-lib">${c.t('accueil.repertoire.metiers')}</p>
          <ul class="puces">${r.sous.map((s) => html`<li><a href="${c.url('carnet', 'resultats', `rubrique=${r.cle}&q=${encodeURIComponent(s)}`)}" data-libelle="${c.libelle('carnet')}">${s}</a></li>`)}</ul>
          ${c.lien('carnet', { params: `rubrique=${r.cle}`, ancre: 'resultats', classe: 'bouton', texte: html`${c.t('accueil.repertoire.voir')}${icone('fleche')}` })}
        </div>`)}</div>
      </div>
      <div class="registre-onglets" data-effet="onglets" role="tablist" aria-label="${c.s('accueil.ouv.onglets')}" aria-orientation="vertical">${R.map((r, i) => html`<button type="button" class="registre-onglet teinte-${r.teinte}" role="tab" id="onglet-${r.cle}" aria-controls="rubrique-${r.cle}" aria-selected="${i === 0 ? 'true' : 'false'}" tabindex="${i === 0 ? '0' : '-1'}" style="--i:${i}">${icone(r.icone)}<span>${r.nom}</span></button>`)}</div>
    </div>
  </div>
</section>

<section class="villages" id="villages">
  <div class="conteneur">
    <header class="section-tete section-tete--large">
      <p class="surtitre">${c.t('accueil.villages.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.villages.titre')}</h2>
      <p class="section-texte">${c.t('accueil.villages.texte')}</p>
    </header>
    <div class="vallee-bloc">
      ${carteVallee(c)}
      <div class="vallee-cote">
        ${legendeVallee(c)}
        <p class="vallee-note">${c.t('commun.schema')}</p>
        ${c.lien('carte', { classe: 'bouton bouton--contour', texte: html`${icone('carte')}${c.t('accueil.villages.carte')}` })}
      </div>
    </div>
    ${secteurs(c)}
  </div>
</section>

<section class="charte" id="charte">
  <div class="conteneur">
    <p class="surtitre">${c.t('accueil.charte.surtitre')}</p>
    <h2 class="visuellement-cache">${c.t('accueil.charte.titre')}</h2>
    <ol class="charte-liste">
      <li><p class="charte-mot" data-anime="lettres">${c.t('accueil.charte.mot1')}</p><p>${c.t('accueil.charte.texte1')}</p></li>
      <li><p class="charte-mot" data-anime="lettres">${c.t('accueil.charte.mot2')}</p><p>${c.t('accueil.charte.texte2')}</p></li>
      <li><p class="charte-mot" data-anime="lettres">${c.t('accueil.charte.mot3')}</p><p>${c.t('accueil.charte.texte3')}</p></li>
    </ol>
    <p class="charte-pied" data-anime>${pictogramme('charte-picto')}<span>${c.t('accueil.charte.pied')}</span></p>
  </div>
</section>

<section class="pro" id="votre-activite">
  <div class="conteneur pro-grille">
    <div class="pro-texte">
      <p class="surtitre">${c.t('accueil.pro.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.pro.titre')}</h2>
      <p>${c.t('accueil.pro.texte')}</p>
      <ol class="pro-etapes" data-anime="cascade">${[1, 2, 3, 4, 5].map((n) => html`<li><span>${n}</span>${c.t(`accueil.pro.e${n}`)}</li>`)}</ol>
      <p>${c.lien('referencer', { classe: 'bouton', texte: html`${icone('plus')}${c.t('accueil.pro.action')}<em class="pastille pastille--nuit">${c.t('commun.gratuit')}</em>` })}</p>
    </div>
    <div class="pro-scene" data-visuel>
      <article class="fiche fiche--demo" aria-hidden="true" data-effet="fiche-qui-s-ecrit">
        ${anneaux(5, 'anneaux anneaux--fiche')}
        <div class="fiche-tete"><span class="fiche-icone teinte-petrole">${icone('marteau')}</span><span class="fiche-rubrique demo-champ" style="--n:0"><span>${c.t('accueil.pro.ficheRubrique')}</span></span></div>
        <p class="fiche-nom demo-champ" style="--n:1"><span>${c.t('accueil.pro.ficheNom')}</span></p>
        <dl class="demo-lignes">
          <div><dt>${c.t('accueil.pro.libVillage')}</dt><dd class="demo-champ" style="--n:2"><span>${c.t('accueil.pro.ficheVillage')}</span></dd></div>
          <div><dt>${c.t('accueil.pro.libZones')}</dt><dd class="demo-champ" style="--n:3"><span>${c.t('accueil.pro.ficheZones')}</span></dd></div>
          <div><dt>${c.t('accueil.pro.libTel')}</dt><dd class="demo-champ" style="--n:4"><span>${c.t('accueil.pro.ficheTel')}</span></dd></div>
        </dl>
        <p class="fiche-note demo-champ" style="--n:5"><span>${c.t('accueil.pro.ficheTexte')}</span></p>
        <span class="tampon">${c.t('accueil.pro.tampon')}</span>
      </article>
    </div>
  </div>
</section>

<section class="faq" id="faq">
  <div class="conteneur faq-grille">
    <header class="faq-tete">
      <p class="surtitre">${c.t('accueil.faq.surtitre')}</p>
      <h2 data-anime="lignes">${c.t('accueil.faq.titre')}</h2>
      <p>${c.t('accueil.faq.autre')}</p>
      <p>${c.lien('contact', { classe: 'bouton bouton--contour', texte: html`${icone('enveloppe')}${c.t('accueil.faq.ecrire')}` })}</p>
    </header>
    <div class="faq-liste" data-anime="cascade">${c.donnees.faq.map((f) => html`<details class="faq-item"><summary>${f.q}${icone('plus', 'icone faq-plus')}</summary><p>${f.r}</p></details>`)}</div>
  </div>
</section>

<section class="appel" id="appel">
  ${c.media({ nom: 'grok/appel-soir', alt: c.s('accueil.appel.alt'), cadrage: '50% 60%', classe: 'appel-media', sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="10"' })}
  <div class="conteneur appel-texte">
    <h2 data-anime="lignes">${c.t('accueil.appel.titre')}</h2>
    <p data-anime>${c.t('accueil.appel.texte')}</p>
    <p class="appel-actions" data-anime>
      ${c.lien('carnet', { classe: 'bouton', texte: html`${icone('loupe')}${c.t('accueil.appel.chercher')}`, attrs: 'data-survol="magnetique"' })}
      ${c.lien('referencer', { classe: 'bouton bouton--clair', texte: html`${icone('plus')}${c.t('accueil.appel.referencer')}`, attrs: 'data-survol="magnetique"' })}
    </p>
  </div>
</section>
`;
};
