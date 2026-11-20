/* Composants du projet : recherche, fiche du carnet, carte de la vallée, secteurs, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { icone, anneaux } from './icones.mjs';

export const TEINTES = ['moutarde', 'petrole', 'sable', 'brume', 'nuit'];
const sansAccent = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

/* Projection simple des villages (longitude, latitude) dans un plan de 1000 × 700. */
const LON0 = 6.56, LON1 = 7.08, LAT1 = 45.40;
const K = 1000 / (LON1 - LON0);
export const projeter = (v) => ({ x: Math.round((v.lon - LON0) * K), y: Math.round((LAT1 - v.lat) * K * 1.414) });

/* Courbe lisse passant par des points (Catmull-Rom en courbes de Bézier). */
function courbe(pts) {
  let d = `M${pts[0].x} ${pts[0].y}`;
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    const c1 = { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 };
    const c2 = { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 };
    d += ` C${c1.x.toFixed(1)} ${c1.y.toFixed(1)} ${c2.x.toFixed(1)} ${c2.y.toFixed(1)} ${p2.x} ${p2.y}`;
  }
  return d;
}

export function villagesProjetes(c) {
  return c.donnees.villages.villages.map((v, i) => ({ ...v, ...projeter(v), n: i + 1, id: sansAccent(v.nom).replace(/[^a-z0-9]+/g, '-') }));
}

/* Carte schématique de la vallée : relief, rivière qui se trace au défilement, villages numérotés.
   interactive : les villages sont des boutons (page La carte). */
export function carteVallee(c, { interactive = false, classe = '' } = {}) {
  const vs = villagesProjetes(c);
  const fond = vs.filter((v) => v.fond).sort((a, b) => a.x - b.x);
  const riviere = courbe([{ x: -10, y: 522 }, ...fond.map((v) => ({ x: v.x, y: v.y + 4 })), { x: 975, y: 30 }]);
  /* Crêtes décoratives au nord et au sud de la vallée. */
  const cretes = [
    'M0 430 L60 400 L95 425 L150 380 L200 410 L240 360 L300 395 L340 330 L395 372 L430 300 L470 290 L520 245 L560 270 L600 215 L650 240 L700 190 L760 205 L800 140 L850 160 L880 90 L930 40 L1000 20',
    'M0 640 L50 610 L110 650 L170 620 L230 655 L300 615 L360 640 L420 590 L470 560 L540 470 L600 430 L650 410 L720 395 L780 330 L840 300 L900 250 L950 190 L1000 170',
    'M330 280 L370 230 L410 260 L455 200 L500 230 L540 170 L590 200 L630 140 L680 165 L720 110',
  ];
  return html`<div class="vallee ${classe}" data-effet="vallee"${interactive ? brut(' data-vallee-interactive') : ''}>
  <svg class="vallee-svg" viewBox="0 0 1000 700" role="img" aria-label="${c.s('commun.schema')}">
    <g class="vallee-cretes" fill="none" stroke-linejoin="round">${cretes.map((d) => html`<path d="${d}"/>`)}</g>
    <path class="vallee-riviere-fond" d="${riviere}" fill="none"/>
    <path class="vallee-riviere" d="${riviere}" fill="none" pathLength="1"/>
    <g class="vallee-points">${vs.map((v) => html`<g class="vallee-point${v.station ? ' vallee-point--station' : ''}${v.grand ? ' vallee-point--grand' : ''}" data-village="${v.id}" style="--o:${(v.x / 1000).toFixed(3)}" transform="translate(${v.x} ${v.y})">
      <g class="vp">${v.station ? html`<path d="M0 -15 L14 10 L-14 10 Z"/>` : html`<circle r="${v.grand ? 15 : 13}"/>`}<text y="${v.station ? 6 : 5}" text-anchor="middle">${v.n}</text></g></g>`)}</g>
  </svg>
  ${interactive ? '' : html`<ul class="vallee-noms" aria-hidden="true">${vs.filter((v) => v.grand).map((v) => html`<li style="left:${(v.x / 10).toFixed(1)}%;top:${(v.y / 7).toFixed(1)}%">${v.nom}</li>`)}</ul>`}
</div>`;
}

export function legendeVallee(c, { interactive = false } = {}) {
  const vs = villagesProjetes(c);
  return html`<ol class="vallee-legende${interactive ? ' vallee-legende--boutons' : ''}">${vs.map((v) => html`<li>${interactive
    ? html`<button type="button" data-choisir-village="${v.id}" aria-pressed="false"><span class="vallee-n">${v.n}</span><span>${v.nom}${v.station ? html` <small>${c.s('carte.station')}</small>` : ''}</span></button>`
    : html`<span class="vallee-n">${v.n}</span><span>${v.nom}</span>`}</li>`)}</ol>`;
}

/* Formulaire de recherche (accueil, carnet, 404) : mène au carnet filtré. */
export function recherche(c, { classe = '', objet = false, action = true } = {}) {
  const vs = c.donnees.villages.villages;
  return html`<form class="recherche ${classe}" action="${c.url('carnet')}" method="get" role="search"${objet ? brut(' data-iris-centre') : ''} data-recherche>
  <label class="recherche-champ">${icone('loupe')}<span class="recherche-lib">${c.t('commun.rechercheMetier')}</span><input type="search" name="q" placeholder="${c.s('commun.rechercheExemple')}" autocomplete="off" enterkeyhint="search"></label>
  <label class="recherche-champ recherche-champ--ou">${icone('repere')}<span class="recherche-lib">${c.t('commun.rechercheOu')}</span><select name="village"><option value="">${c.t('commun.tousVillages')}</option>${vs.map((v) => html`<option value="${v.nom}">${v.nom}</option>`)}</select></label>
  <button type="submit" class="bouton bouton--nuit"${action ? brut(' data-action-principale') : ''}>${c.t('commun.rechercher')}</button>
</form>`;
}

/* Fiche du carnet (réelle ou exemple). */
export function fiche(c, a, { titre = 'h3' } = {}) {
  const r = c.donnees.rubriques.find((x) => x.cle === a.rubrique) || c.donnees.rubriques[0];
  const v = c.donnees.villages.villages.find((x) => x.nom === a.village) || {};
  const secteur = c.donnees.villages.secteurs.find((s) => s.cle === v.secteur) || {};
  const nom = a.reel ? a.nom : a.activite;
  const mots = sansAccent([a.nom, a.activite, r.nom, a.village, v.complet, secteur.nom].filter(Boolean).join(' '));
  const T = titre === 'h2' ? 'h2' : 'h3';
  return html`<article class="cff__fiche fiche${a.reel ? '' : ' fiche--exemple'}" id="fiche-${a.id}" data-rubrique="${r.cle}" data-secteur="${secteur.cle || ''}" data-village="${a.village}" data-favori="non" data-mots="${mots}" data-id="${a.id}">
  ${anneaux(5, 'anneaux anneaux--fiche')}
  <div class="fiche-tete">
    <span class="fiche-icone teinte-${r.teinte}">${icone(r.icone)}</span>
    <span class="fiche-rubrique">${r.nom}${a.reel && a.activite !== r.nom ? ` · ${a.activite}` : ''}</span>
    <button type="button" class="fiche-coeur" aria-pressed="false" aria-label="${c.s('commun.favorisAjouter', { nom })}" data-favori-bouton="${a.id}">${icone('coeur')}</button>
  </div>
  ${brut(`<${T} class="fiche-nom">`)}${nom}${brut(`</${T}>`)}
  <p class="fiche-lieu">${icone('repere')}<span>${v.complet || a.village}</span></p>
  <p class="fiche-note">${a.reel ? c.t('carnet.noteReel') : html`<span class="fiche-exemple">${c.t('commun.exemple')}</span> ${c.t('carnet.noteExemple')}`}</p>
</article>`;
}

/* Les six secteurs en photos (Bonneval en grand, Val Cenis en bandeau avec petite photo). */
export function secteurs(c, { lien = true } = {}) {
  const S = c.donnees.villages.secteurs;
  const ordre = ['bonneval-sur-arc', 'modane', 'aussois', 'bessans', 'la-norma', 'val-cenis'];
  return html`<ul class="secteurs" data-anime="cascade">${ordre.map((k) => S.find((s) => s.cle === k)).map((s) => html`<li class="secteur secteur--${s.cle}">
    ${c.media({ nom: s.photo, alt: c.donnees.images?.[s.photo]?.alt || s.nom, classe: 'secteur-media', sizes: s.cle === 'bonneval-sur-arc' ? '(max-width: 760px) 100vw, 50vw' : '(max-width: 760px) 100vw, 25vw' })}
    <div class="secteur-texte">
      <h3>${lien ? c.lien('carnet', { params: `secteur=${s.cle}`, ancre: 'resultats', texte: s.nom, classe: 'secteur-lien' }) : s.nom}</h3>
      <p>${s.texte}</p>
    </div>
  </li>`)}</ul>`;
}
