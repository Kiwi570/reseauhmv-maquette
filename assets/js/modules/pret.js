/* Adaptateur : les modules de la bibliothèque demandent leurs bibliothèques par pret([...]) ;
   ici, GSAP vient du socle du site, Flip est chargé à la demande depuis assets/vendor. */
import { rafraichir } from '../socle/index.js?v=2';

const charges = {};
function charger(src) {
  if (!charges[src]) charges[src] = new Promise((ok, ko) => { const s = document.createElement('script'); s.src = src; s.onload = ok; s.onerror = ko; document.head.appendChild(s); });
  return charges[src];
}

export async function pret(liste = []) {
  const gsap = window.gsap;
  if (liste.includes('flip') && !window.Flip) { try { await charger('/assets/vendor/Flip.min.js'); } catch (e) { console.warn('[pret] Flip indisponible', e); } }
  if (window.Flip && gsap) gsap.registerPlugin(window.Flip);
  return { gsap, Flip: window.Flip, ScrollTrigger: window.ScrollTrigger, calme: false, lenis: null, rafraichir: () => { try { rafraichir(); window.ScrollTrigger?.refresh(); } catch {} } };
}
