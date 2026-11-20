// Catalogue filtré avec Flip : filtres par groupe, budget maximal, tri ; les fiches se réordonnent, sortent et entrent en fondu.
// Les données sont dans le HTML : chaque fiche porte data-<groupe>="valeur(s) séparées par des espaces", data-<champ>="nombre".
// La sélection est reportée dans l'adresse (?categorie=…&prix=…&tri=…) et relue à l'arrivée.
// Ajout du projet Réseau HMV : recherche libre [data-filtre-texte] (mots cherchés dans data-mots, sans accents ni pluriel)
// et liste [data-filtre-village] (data-village de la fiche), lues et écrites dans l'adresse (?q=…&village=…).
import { pret } from './pret.js?v=1';

/**
 * @param {HTMLElement} root  section.cff
 * @param {object} [options]
 * @param {boolean} [options.adresse=true]   reporter les filtres dans l'adresse
 * @param {boolean} [options.nombres=true]   afficher le nombre de résultats dans chaque bouton
 * @param {(n:number)=>string} [options.format]  mise en forme du curseur (prix par défaut : « 1 200 € »)
 * @param {[string,string]} [options.mots=['fiche','fiches']]  singulier et pluriel du compteur
 * @param {number} [options.duree=.7]
 */
export async function init(root, options = {}) {
  const o = { adresse: true, nombres: true, duree: .7, mots: ['fiche', 'fiches'], format: n => n.toLocaleString('fr-FR') + ' €', ...options };
  const s = await pret(['flip']);
  const { gsap, Flip } = s;
  const grille = root.querySelector('[data-grille]');
  if (!grille) return { detruire() {} };
  const fiches = [...grille.querySelectorAll('.cff__fiche')];
  const ordre0 = fiches.slice();
  const vide = grille.querySelector('[data-vide]');
  const groupes = [...root.querySelectorAll('[data-filtre-groupe]')];
  const curseurs = [...root.querySelectorAll('[data-filtre-max]')];
  const tri = root.querySelector('[data-tri]');
  const compte = root.querySelector('[data-compte]');
  const compteMot = root.querySelector('[data-compte-mot]');
  const champTexte = document.querySelector(o.texte || '[data-filtre-texte]');
  const champVillage = document.querySelector(o.village || '[data-filtre-village]');
  const norm = t => String(t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const mots = t => norm(t).split(/[^a-z0-9]+/).filter(m => m.length > 1).map(m => m.replace(/(s|x)$/, ''));

  // État initial, puis relu depuis l'adresse.
  const etat = { tri: 'ordre', q: '', village: '' };
  const defauts = {};
  for (const g of groupes) etat[g.dataset.filtreGroupe] = 'tout';
  for (const c of curseurs) { etat[c.dataset.filtreMax] = +c.max; defauts[c.dataset.filtreMax] = +c.max; }
  if (o.adresse) {
    const p = new URLSearchParams(location.search);
    for (const g of groupes) { const v = p.get(g.dataset.filtreGroupe); if (v && g.querySelector(`[data-valeur="${CSS.escape(v)}"]`)) etat[g.dataset.filtreGroupe] = v; }
    for (const c of curseurs) { const v = +p.get(c.dataset.filtreMax); if (v >= +c.min && v <= +c.max) { etat[c.dataset.filtreMax] = v; c.value = v; } }
    if (tri && p.get('tri') && [...tri.options].some(x => x.value === p.get('tri'))) { etat.tri = p.get('tri'); tri.value = etat.tri; }
    if (p.get('q')) etat.q = p.get('q');
    if (p.get('village') && champVillage && [...champVillage.options].some(x => x.value === p.get('village'))) etat.village = p.get('village');
  }
  if (champTexte) champTexte.value = etat.q;
  if (champVillage) champVillage.value = etat.village;
  {
  }
  if (o.nombres) for (const b of root.querySelectorAll('[data-filtre-groupe] button')) { const n = document.createElement('span'); n.className = 'cff__nb'; n.setAttribute('aria-hidden', 'true'); b.appendChild(n); }

  const correspond = (f, e) => {
    for (const g of groupes) { const k = g.dataset.filtreGroupe, v = e[k]; if (v !== 'tout' && !(f.dataset[k] || '').split(/\s+/).includes(v)) return false; }
    for (const c of curseurs) { const k = c.dataset.filtreMax; if (+f.dataset[k] > e[k]) return false; }
    if (e.village && f.dataset.village !== e.village) return false;
    if (e.q) { const dans = mots(f.dataset.mots); if (!mots(e.q).every(m => { const r = m.slice(0, Math.min(m.length, 6)); return dans.some(w => w.startsWith(r)); })) return false; }
    return true;
  };
  const trier = () => {
    const [champ, sens] = etat.tri.split('-');
    const arr = ordre0.slice();
    if (etat.tri !== 'ordre') arr.sort((a, b) => ((+a.dataset[champ] || 0) - (+b.dataset[champ] || 0)) * (sens === 'desc' ? -1 : 1));
    for (const f of arr) grille.insertBefore(f, vide); // déplace les nœuds existants : jamais de doublon
  };
  const ecrireAdresse = () => {
    if (!o.adresse) return;
    const u = new URL(location.href);
    for (const g of groupes) { const k = g.dataset.filtreGroupe; etat[k] === 'tout' ? u.searchParams.delete(k) : u.searchParams.set(k, etat[k]); }
    for (const c of curseurs) { const k = c.dataset.filtreMax; etat[k] === defauts[k] ? u.searchParams.delete(k) : u.searchParams.set(k, etat[k]); }
    etat.tri === 'ordre' ? u.searchParams.delete('tri') : u.searchParams.set('tri', etat.tri);
    etat.q ? u.searchParams.set('q', etat.q) : u.searchParams.delete('q');
    etat.village ? u.searchParams.set('village', etat.village) : u.searchParams.delete('village');
    history.replaceState(history.state, '', u);
  };

  let flip = null;
  function appliquer(anime) {
    const etatFlip = anime && !s.calme ? Flip.getState(fiches) : null;
    flip?.progress(1); flip?.kill(); flip = null;
    trier();
    let n = 0;
    for (const f of fiches) { const ok = correspond(f, etat); f.hidden = !ok; if (ok) n++; }
    if (vide) vide.hidden = n > 0;
    if (compte) compte.textContent = n;
    if (compteMot) compteMot.textContent = n > 1 ? o.mots[1] : o.mots[0];
    for (const c of curseurs) { const out = root.querySelector(`[data-sortie="${c.dataset.filtreMax}"]`); if (out) out.textContent = o.format(etat[c.dataset.filtreMax]); }
    // Boutons : état pressé, nombre de résultats, rubrique vide grisée.
    for (const g of groupes) {
      const k = g.dataset.filtreGroupe;
      for (const b of g.querySelectorAll('button[data-valeur]')) {
        const v = b.dataset.valeur;
        const nb = fiches.filter(f => correspond(f, { ...etat, [k]: v })).length;
        b.setAttribute('aria-pressed', String(etat[k] === v));
        const rubriqueVide = nb === 0 && etat[k] !== v;
        rubriqueVide ? b.setAttribute('aria-disabled', 'true') : b.removeAttribute('aria-disabled');
        const sp = b.querySelector('.cff__nb'); if (sp) sp.textContent = nb;
      }
    }
    ecrireAdresse();
    if (etatFlip) {
      flip = Flip.from(etatFlip, {
        duration: o.duree, ease: 'power3.inOut', absolute: true, scale: false, nested: true,
        onEnter: els => gsap.fromTo(els, { opacity: 0, scale: .94 }, { opacity: 1, scale: 1, duration: o.duree * .8, delay: o.duree * .15 }),
        onLeave: els => gsap.to(els, { opacity: 0, scale: .94, duration: o.duree * .5 }),
        onComplete: () => { flip = null; recadrer(); s.rafraichir(); },
      });
    } else { recadrer(); s.rafraichir(); }
  }
  // Si la grille a raccourci et que l'on se retrouve sous elle, on revient en haut du catalogue.
  function recadrer() {
    const r = root.getBoundingClientRect();
    if (r.bottom < innerHeight * .4) {
      const eh = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 0;
      const y = r.top + scrollY - eh;
      if (s.lenis) s.lenis.scrollTo(y, { immediate: s.calme }); else scrollTo({ top: y, behavior: s.calme ? 'auto' : 'smooth' });
    }
  }

  const surClic = e => {
    const b = e.target.closest('[data-filtre-groupe] button[data-valeur]');
    if (b && root.contains(b)) {
      etat[b.closest('[data-filtre-groupe]').dataset.filtreGroupe] = b.dataset.valeur; appliquer(true); return;
    }
    if (e.target.closest('[data-reinit]')) {
      for (const g of groupes) etat[g.dataset.filtreGroupe] = 'tout';
      for (const c of curseurs) { etat[c.dataset.filtreMax] = defauts[c.dataset.filtreMax]; c.value = c.max; }
      etat.tri = 'ordre'; if (tri) tri.value = 'ordre';
      etat.q = ''; etat.village = ''; if (champTexte) champTexte.value = ''; if (champVillage) champVillage.value = '';
      appliquer(true);
    }
  };
  let minuteur = 0;
  const surCurseur = e => { etat[e.target.dataset.filtreMax] = +e.target.value; clearTimeout(minuteur); minuteur = setTimeout(() => appliquer(true), 90); };
  const surTri = () => { etat.tri = tri.value; appliquer(true); };
  root.addEventListener('click', surClic);
  for (const c of curseurs) c.addEventListener('input', surCurseur);
  tri?.addEventListener('change', surTri);
  let minuteurTexte = 0;
  const surTexte = () => { clearTimeout(minuteurTexte); minuteurTexte = setTimeout(() => { etat.q = champTexte.value.trim(); appliquer(true); }, 220); };
  const surVillage = () => { etat.village = champVillage.value; appliquer(true); };
  champTexte?.addEventListener('input', surTexte);
  champVillage?.addEventListener('change', surVillage);
  const formRecherche = champTexte?.form;
  const surEnvoi = e => { e.preventDefault(); clearTimeout(minuteurTexte); etat.q = champTexte.value.trim(); if (champVillage) etat.village = champVillage.value; appliquer(true); root.scrollIntoView({ block: 'start' }); };
  formRecherche?.addEventListener('submit', surEnvoi);
  appliquer(false);
  return {
    detruire() { root.removeEventListener('click', surClic); for (const c of curseurs) c.removeEventListener('input', surCurseur); tri?.removeEventListener('change', surTri); flip?.kill(); },
    appliquer,
  };
}
