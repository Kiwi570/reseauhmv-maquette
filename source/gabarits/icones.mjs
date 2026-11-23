/* Icônes au trait (24 × 24), dessinées pour le projet, et pictogramme du carnet (repris du favicon du client). */
import { brut } from '../../outils/gabarit.mjs';

const TRACES = {
  couverts: '<path d="M7 3v7a2 2 0 0 0 2 2v9"/><path d="M5 3v5M9 3v5"/><path d="M17 3c-2.2 1.2-3 4.2-3 7.5h3V21"/>',
  tasse: '<path d="M4 9h12v4.5A5.5 5.5 0 0 1 10.5 19h-1A5.5 5.5 0 0 1 4 13.5z"/><path d="M16 10.5h1.6a2.4 2.4 0 0 1 0 4.8H16"/><path d="M8 3.5v2.5M12 3.5v2.5"/>',
  sac: '<path d="M5 8h14l-1.2 12.5H6.2z"/><path d="M9 10V6.5a3 3 0 0 1 6 0V10"/>',
  marteau: '<path d="m14.5 3.5 6 6-2.6 2.6-6-6z"/><path d="M12.6 6.4 3.5 15.5l3 3 9.1-9.1"/>',
  mallette: '<rect x="3.5" y="7.5" width="17" height="12" rx="1.5"/><path d="M9 7.5V5h6v2.5M3.5 12.5h17"/>',
  cle: '<circle cx="8" cy="12" r="3.6"/><path d="M11.6 12H21v3M17.5 12v3"/>',
  lit: '<path d="M3 18.5V6.5M3 14h18v4.5M21 14v-1.5A3 3 0 0 0 18 9.5h-7V14"/><circle cx="7" cy="11.2" r="1.6"/>',
  de: '<rect x="4" y="4" width="16" height="16" rx="3.5"/><circle cx="9" cy="9" r=".9"/><circle cx="15" cy="9" r=".9"/><circle cx="12" cy="12" r=".9"/><circle cx="9" cy="15" r=".9"/><circle cx="15" cy="15" r=".9"/>',
  melanger: '<path d="M3.5 7h3c4.6 0 6.2 10 10.8 10h3.2"/><path d="M3.5 17h3c1.7 0 2.9-1.3 3.9-3M13.6 10c1-1.7 2.2-3 3.7-3h3.2"/><path d="m18 4.5 2.5 2.5-2.5 2.5M18 14.5l2.5 2.5-2.5 2.5"/>',
  montagne: '<path d="m2.5 19.5 7-11.5 4 6 2.8-3.6 5.2 9.1z"/><path d="m7.6 11.2 1.9 1.6 1.7-1.4"/>',
  haltere: '<path d="M6.5 7.5v9M17.5 7.5v9M3.5 10v4M20.5 10v4M6.5 12h11"/>',
  etincelle: '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7z"/><path d="m18.5 15.5.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
  epi: '<path d="M12 21V9"/><path d="M12 9c-2.6-.2-3.8-2-3.8-5 2.6.2 3.8 2 3.8 5zM12 9c2.6-.2 3.8-2 3.8-5-2.6.2-3.8 2-3.8 5z"/><path d="M12 14c-2.6-.2-3.8-2-3.8-4.4M12 14c2.6-.2 3.8-2 3.8-4.4M12 19c-2.6-.2-3.8-2-3.8-4.4M12 19c2.6-.2 3.8-2 3.8-4.4"/>',
  groupe: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0"/><circle cx="16.8" cy="9.5" r="2.3"/><path d="M15.6 14.4a4.5 4.5 0 0 1 5 5.1"/>',
  loupe: '<circle cx="10.5" cy="10.5" r="6"/><path d="m15 15 5.5 5.5"/>',
  repere: '<path d="M12 21s-6.5-6.2-6.5-11.2a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z"/><circle cx="12" cy="9.8" r="2.4"/>',
  coeur: '<path d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z"/>',
  fleche: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  diagonale: '<path d="M7 17 17 7M8.5 7H17v8.5"/>',
  telephone: '<path d="M6.5 3.5h3l1.5 4-2 1.3a10.5 10.5 0 0 0 6.2 6.2l1.3-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/>',
  enveloppe: '<rect x="3.5" y="5.5" width="17" height="13" rx="1.5"/><path d="m4 6.5 8 6.5 8-6.5"/>',
  carte: '<path d="m3.5 6.5 5.5-2.5 6 2.5 5.5-2.5v13.5L15 20l-6-2.5-5.5 2.5z"/><path d="M9 4v13.5M15 6.5V20"/>',
  coche: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  partage: '<circle cx="17.5" cy="5.5" r="2.3"/><circle cx="6.5" cy="12" r="2.3"/><circle cx="17.5" cy="18.5" r="2.3"/><path d="m8.5 10.8 7-4.1M8.5 13.2l7 4.1"/>',
};

export function icone(nom, classe = 'icone') {
  return brut(`<svg class="${classe}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${TRACES[nom] || ''}</svg>`);
}

/* Pictogramme du carnet (favicon du client) : spirale, page, personne et montagne. */
export function pictogramme(classe = 'picto', attrs = '') {
  return brut(`<svg class="${classe}" viewBox="0 0 48 48" width="48" height="48" aria-hidden="true" focusable="false"${attrs ? ' ' + attrs : ''}>
  <rect class="picto-couv" x="4" y="3" width="40" height="42" rx="6" fill="#315B70"/>
  <path class="picto-page" d="M10 9h25a4 4 0 0 1 4 4v26H14a4 4 0 0 1-4-4V9Z" fill="#F2F0E8"/>
  <path class="picto-anneaux" d="M10 13H6M10 21H6M10 29H6M10 37H6" fill="none" stroke="#B8A982" stroke-width="2.5" stroke-linecap="round"/>
  <path class="picto-mont" d="m15 29 7-8 5 5 5-7 7 10H15Z" fill="#B8A982"/>
  <circle cx="25" cy="14.5" r="3.5" fill="#315B70"/>
  <path d="M18.5 24c.9-4.2 3-6.3 6.5-6.3s5.6 2.1 6.5 6.3" fill="none" stroke="#315B70" stroke-width="3" stroke-linecap="round"/>
  <path d="M15 34h24M15 38h17" fill="none" stroke="#315B70" stroke-width="2" stroke-linecap="round" opacity=".7"/>
</svg>`);
}

/* Anneaux de la spirale (décor du panneau d'intro, du voile et des fiches). */
export function anneaux(n = 9, classe = 'anneaux') {
  return brut(`<span class="${classe}" aria-hidden="true">${Array.from({ length: n }, (_, i) => `<i style="--i:${i}"></i>`).join('')}</span>`);
}
