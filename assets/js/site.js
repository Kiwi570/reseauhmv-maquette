/* Effets propres à Réseau HMV. Le socle gère l'ouverture, le voile, l'en-tête, les boucles et la bibliothèque d'effets.
   Effets du plan (data-effet) : onglets, donne, vallee, fiche-qui-s-ecrit, fiches, etapes, numero. */
import { demarrer, etat, rafraichir, quand, allerAncre } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body;

/* ---------- Jour (Europe/Paris) : ordre du jour, date affichée ---------- */
function jourParis() {
  const p = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const v = Object.fromEntries(p.map((x) => [x.type, x.value]));
  return { cle: `${v.year}-${v.month}-${v.day}`, n: Math.floor(Date.UTC(+v.year, +v.month - 1, +v.day) / 86400000) };
}
function hachage(t) { let h = 2166136261; for (let i = 0; i < t.length; i++) { h ^= t.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }

function ordreDuJour() {
  const j = jourParis();
  const date = $('[data-aujourdhui]');
  if (date) date.textContent = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', day: 'numeric', month: 'long' }).format(new Date());
  /* Les quatre cartes changent de place chaque jour (la grande en premier). */
  $$('.carte-jour').forEach((c) => {
    const place = (+c.dataset.ordre + j.n) % 4;
    c.dataset.place = String(place);
    c.style.order = String(place);
  });
  /* Carnet : sans recherche, ordre neutre qui change chaque jour (comme le carnet en ligne). */
  const grille = $('.grille-fiches');
  if (grille) {
    const vide = $('[data-vide]', grille);
    $$('.fiche', grille).sort((a, b) => hachage(a.dataset.id + j.cle) - hachage(b.dataset.id + j.cle)).forEach((f) => grille.insertBefore(f, vide));
  }
}

/* ---------- Favoris (dans ce navigateur seulement) ---------- */
const CLE_FAVORIS = 'reseauhmv:favoris';
function lireFavoris() { try { const v = JSON.parse(localStorage.getItem(CLE_FAVORIS) || '[]'); return Array.isArray(v) ? v.filter((x) => typeof x === 'string') : []; } catch { try { localStorage.removeItem(CLE_FAVORIS); } catch {} return []; } }
function ecrireFavoris(l) { try { localStorage.setItem(CLE_FAVORIS, JSON.stringify(l)); } catch {} }
let catalogue = null;
function afficherFavoris() {
  const fav = lireFavoris();
  $$('[data-favoris-nombre]').forEach((n) => { n.textContent = String(fav.length); });
  $$('[data-favori-bouton]').forEach((b) => {
    const oui = fav.includes(b.dataset.favoriBouton);
    b.setAttribute('aria-pressed', String(oui));
    const fiche = b.closest('.fiche'); if (fiche) fiche.dataset.favori = oui ? 'oui' : 'non';
    const nom = fiche ? ($('.fiche-nom', fiche)?.textContent || '').trim() : '';
    b.setAttribute('aria-label', oui ? `Retirer ${nom} des favoris` : `Ajouter ${nom} aux favoris`);
  });
}
function envolCoeur(depuis) {
  const cible = $('.filtres-puces--favoris [data-valeur="oui"]');
  if (!gsap || !cible) return;
  const a = depuis.getBoundingClientRect(), b = cible.getBoundingClientRect();
  if (b.bottom < 0 || b.top > innerHeight) return;
  const c = document.createElement('span');
  c.className = 'envol-coeur'; c.setAttribute('aria-hidden', 'true'); c.setAttribute('data-audit-ignorer', '');
  c.innerHTML = depuis.querySelector('svg').outerHTML;
  document.body.appendChild(c);
  gsap.set(c, { left: a.left + a.width / 2 - 13, top: a.top + a.height / 2 - 13 });
  gsap.to(c, { x: b.left + 20 - (a.left + a.width / 2), duration: .7, ease: 'power1.inOut' });
  gsap.to(c, { y: b.top + b.height / 2 - (a.top + a.height / 2), duration: .7, ease: 'back.in(1.6)', onComplete: () => { c.remove(); cible.classList.add('bat'); setTimeout(() => cible.classList.remove('bat'), 500); } });
}
function initFavoris() {
  afficherFavoris();
  document.addEventListener('click', (e) => {
    const b = e.target.closest('[data-favori-bouton]');
    if (!b) return;
    const id = b.dataset.favoriBouton;
    const fav = lireFavoris();
    const i = fav.indexOf(id);
    if (i >= 0) fav.splice(i, 1); else { fav.push(id); envolCoeur(b); }
    ecrireFavoris(fav);
    afficherFavoris();
    b.classList.remove('bat'); void b.offsetWidth; b.classList.add('bat');
    if (catalogue && /favori=oui/.test(location.search)) catalogue.appliquer(true);
  });
  window.addEventListener('storage', (e) => { if (e.key === CLE_FAVORIS) { afficherFavoris(); catalogue?.appliquer(false); } });
}

/* ---------- Le répertoire : onglets (clic, flèches, Début, Fin) ---------- */
function initRegistre() {
  const reg = $('[data-registre]');
  if (!reg) return;
  const onglets = $$('[role="tab"]', reg);
  const panneaux = $$('[role="tabpanel"]', reg);
  const images = $$('[data-image-rubrique]', reg);
  const choisir = (i, focus) => {
    onglets.forEach((o, k) => { o.setAttribute('aria-selected', String(k === i)); o.tabIndex = k === i ? 0 : -1; });
    panneaux.forEach((p, k) => { p.hidden = k !== i; });
    const nom = panneaux[i].dataset.image;
    images.forEach((f) => f.classList.toggle('est-visible', f.dataset.imageRubrique === nom));
    if (gsap) gsap.fromTo(panneaux[i].children, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .45, stagger: .04, ease: 'power2.out', overwrite: true });
    if (focus) onglets[i].focus();
    rafraichir();
  };
  onglets.forEach((o, i) => o.addEventListener('click', () => choisir(i)));
  reg.addEventListener('keydown', (e) => {
    const i = onglets.indexOf(document.activeElement);
    if (i < 0) return;
    const pas = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (pas) { e.preventDefault(); choisir((i + pas + onglets.length) % onglets.length, true); }
    else if (e.key === 'Home') { e.preventDefault(); choisir(0, true); }
    else if (e.key === 'End') { e.preventDefault(); choisir(onglets.length - 1, true); }
  });
  /* Effet « onglets » : la rangée sort de la tranche quand la section arrive. */
  const liste = $('.registre-onglets', reg);
  if (gsap && window.ScrollTrigger && liste) {
    gsap.fromTo(liste, { x: -36 }, { x: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: reg, start: 'top 80%', once: true } });
    gsap.fromTo(onglets, { xPercent: -40, opacity: 0 }, { xPercent: 0, opacity: 1, duration: .6, stagger: .035, ease: 'power3.out', scrollTrigger: { trigger: reg, start: 'top 80%', once: true } });
  }
}

/* ---------- Aujourd'hui : la donne ---------- */
function initDonne() {
  const cartes = $$('.carte-jour');
  if (!cartes.length || !gsap || !window.ScrollTrigger) return;
  const tries = cartes.slice().sort((a, b) => +a.dataset.place - +b.dataset.place);
  gsap.fromTo(tries, { y: 120, opacity: 0, rotation: (i) => (i % 2 ? 2 : -2) },
    { y: 0, opacity: 1, rotation: 0, duration: .9, stagger: .12, ease: 'power3.out', clearProps: 'transform',
      scrollTrigger: { trigger: '.donne', start: 'top 85%', once: true } });
}

/* ---------- La vallée : la rivière se trace, les villages s'allument ---------- */
function initVallee() {
  if (!gsap || !window.ScrollTrigger) return;
  $$('.vallee').forEach((v) => {
    const riviere = $('.vallee-riviere', v);
    const points = $$('.vallee-point', v).sort((a, b) => parseFloat(getComputedStyle(a).getPropertyValue('--o')) - parseFloat(getComputedStyle(b).getPropertyValue('--o')));
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    tl.fromTo(v, { y: 30, scale: .97 }, { y: 0, scale: 1, duration: 1, ease: 'power2.out' }, 0);
    if (riviere) tl.fromTo(riviere, { strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 1 }, 0);
    points.forEach((p) => {
      const o = parseFloat(p.style.getPropertyValue('--o')) || 0;
      tl.fromTo($('.vp', p), { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: .12, ease: 'back.out(2.4)' }, Math.max(0, o * .92 - .04));
    });
    const auChargement = v.hasAttribute('data-vallee-interactive');
    if (auChargement) { tl.pause(0); quand('pret', () => tl.duration(2.2).play(0)); }
    else window.ScrollTrigger.create({ trigger: v, start: 'top 85%', end: 'center 45%', scrub: .6, animation: tl });
  });
}

/* ---------- Votre activité : la fiche s'écrit au défilement ---------- */
function initFicheQuiSEcrit() {
  const f = $('.fiche--demo');
  if (!f || !gsap || !window.ScrollTrigger) return;
  const champs = $$('.demo-champ', f).sort((a, b) => +a.style.getPropertyValue('--n') - +b.style.getPropertyValue('--n'));
  const tampon = $('.tampon', f);
  const tl = gsap.timeline({ defaults: { ease: 'none' } });
  const petit = innerWidth < 560;
  tl.fromTo(f, { rotation: petit ? -2 : -7, y: 60 }, { rotation: petit ? 0 : -2, y: 0, duration: .5, ease: 'power2.out' }, 0);
  champs.forEach((c, i) => tl.fromTo(c, { '--p': 0 }, { '--p': 1, duration: .14 }, .08 + i * .13));
  if (tampon) tl.fromTo(tampon, { '--tampon': 0 }, { '--tampon': 1, duration: .1, ease: 'power2.in' }, .92);
  window.ScrollTrigger.create({ trigger: f.closest('.pro'), start: 'top 70%', end: 'center 40%', scrub: .5, animation: tl });
}

/* ---------- Carnet : catalogue (module), fiches qui arrivent ---------- */
async function initCarnet() {
  const cff = $('[data-module="catalogue-filtres-flip"]');
  if (!cff) return;
  const { init } = await import('./modules/catalogue-filtres-flip.js?v=1');
  catalogue = await init(cff, { mots: ['fiche', 'fiches'], texte: '.tete-carnet [name="q"]', village: '.tete-carnet [name="village"]', format: (n) => String(n) });
  const filtres = $('[data-filtres]');
  /* Les fiches arrivent à l'écran par lots (propriétés translate et scale : Flip garde transform et opacity). */
  if (!document.documentElement.matches('[data-arrivee="retour"], .secours') && 'IntersectionObserver' in window) {
    const fiches = $$('.grille-fiches .fiche');
    fiches.forEach((f) => f.classList.add('fiche--attente'));
    let rang = 0, minuteur = 0;
    const io = new IntersectionObserver((entrees) => {
      entrees.filter((e) => e.isIntersecting).forEach((e) => {
        io.unobserve(e.target);
        e.target.style.setProperty('--d', `${(rang++ % 6) * 60}ms`);
        requestAnimationFrame(() => e.target.classList.remove('fiche--attente'));
      });
      clearTimeout(minuteur); minuteur = setTimeout(() => { rang = 0; }, 200);
    }, { rootMargin: '0px 0px -6% 0px' });
    fiches.forEach((f) => io.observe(f));
  }
  if (gsap && window.ScrollTrigger) {
    if (filtres) gsap.fromTo(filtres, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: filtres, start: 'top 90%', once: true } });
    window.ScrollTrigger.sort(); window.ScrollTrigger.refresh();
  }
}

/* ---------- La carte : choisir un village ---------- */
function initCarte() {
  const panneau = $('.carte-panneau');
  if (!panneau) return;
  const vide = $('[data-panneau-vide]', panneau);
  const fiches = $$('[data-panneau-village]', panneau);
  const choisir = (id, ecrire = true) => {
    fiches.forEach((f) => { f.hidden = f.dataset.panneauVillage !== id; });
    vide.hidden = !!id;
    $$('.carte-plan .vallee-point').forEach((p) => p.classList.toggle('est-choisi', p.dataset.village === id));
    $$('[data-choisir-village]', panneau).forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.choisirVillage === id)));
    if (ecrire) { const u = new URL(location.href); id ? u.searchParams.set('village', id) : u.searchParams.delete('village'); history.replaceState(history.state, '', u); }
    const f = fiches.find((x) => x.dataset.panneauVillage === id);
    if (f && gsap) gsap.fromTo(f, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: .4, ease: 'power2.out' });
    if (f) { const t = $('h2', f); t.tabIndex = -1; t.focus({ preventScroll: true }); if (matchMedia('(max-width: 900px)').matches) { const r = panneau.getBoundingClientRect(); if (r.top > innerHeight * .6 || r.top < 0) window.scrollTo({ top: scrollY + r.top - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 0) - 12 }); } }
    rafraichir();
  };
  panneau.addEventListener('click', (e) => {
    const b = e.target.closest('[data-choisir-village]'); if (b) { choisir(b.dataset.choisirVillage); return; }
    if (e.target.closest('[data-retour-liste]')) choisir('');
  });
  $$('.carte-plan .vallee-point').forEach((p) => p.addEventListener('click', () => choisir(p.dataset.village)));
  const depart = new URLSearchParams(location.search).get('village');
  if (depart && fiches.some((f) => f.dataset.panneauVillage === depart)) choisir(depart, false);
}

/* ---------- Référencer : formulaire (module) et fiche en direct ---------- */
async function initReferencer() {
  const fpe = $('[data-module="formulaire-par-etapes"]');
  if (!fpe) return;
  const { init } = await import('./modules/formulaire-par-etapes.js?v=1');
  await init(fpe, { sujet: 'Référencement Réseau HMV' });
  const form = $('[data-fiche-source]');
  const ap = $('[data-fiche-apercu]');
  const defaut = {};
  ['nom', 'rubrique', 'village', 'texte'].forEach((k) => { const el = $(`[data-apercu-${k}]`, ap); defaut[k] = el.textContent; });
  const iconeDefaut = $('[data-apercu-icone]', ap).innerHTML;
  const maj = () => {
    const v = (n) => (form.elements[n]?.value || '').trim();
    const r = form.querySelector('[name="rubrique"]:checked');
    $('[data-apercu-nom]', ap).textContent = v('nom') || defaut.nom;
    $('[data-apercu-rubrique]', ap).textContent = r ? [r.dataset.nom, v('specialite')].filter(Boolean).join(' · ') : (v('specialite') || defaut.rubrique);
    $('[data-apercu-village]', ap).textContent = v('village') || defaut.village;
    const d = v('description');
    $('[data-apercu-texte]', ap).textContent = d ? (d.length > 180 ? d.slice(0, 177) + '…' : d) : defaut.texte;
    const ic = $('[data-apercu-icone]', ap);
    if (r) { const src = r.closest('label').querySelector('.fpe__icone'); ic.className = 'fiche-icone ' + [...src.classList].find((x) => x.startsWith('teinte-')); ic.innerHTML = src.innerHTML; }
    else { ic.className = 'fiche-icone teinte-sable'; ic.innerHTML = iconeDefaut; }
    const tel = $('[data-apercu-tel]', ap); tel.hidden = !v('tel'); $('span', tel).textContent = v('tel');
  };
  form.addEventListener('input', maj);
  form.addEventListener('change', (e) => {
    maj();
    if (e.target.matches('[data-apercu-photo]')) {
      const f = e.target.files?.[0]; const boite = $('[data-apercu-image]', ap);
      if (f && /^image\/(jpeg|png|webp)$/.test(f.type) && f.size <= 5 * 1024 * 1024) { let img = $('img', boite); if (!img) { img = document.createElement('img'); img.alt = ''; boite.appendChild(img); } img.src = URL.createObjectURL(f); boite.hidden = false; } else boite.hidden = true;
      rafraichir();
    }
    if (gsap && e.target.name === 'rubrique') gsap.fromTo(ap, { scale: .97 }, { scale: 1, duration: .4, ease: 'back.out(2)' });
  });
  fpe.addEventListener('formulaire:envoye', () => {
    const fin = $('.fpe__fin', fpe);
    requestAnimationFrame(() => { const r = fin.getBoundingClientRect(); if (r.top < 0 || r.top > innerHeight * .7) window.scrollTo({ top: scrollY + r.top - (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--entete-h')) || 0) - 24 }); });
  });
  maj();
  const carton = $('.fpe__carton', fpe);
  if (gsap && window.ScrollTrigger && carton) gsap.fromTo(carton, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: carton, start: 'top 90%', once: true } });
}

/* ---------- Recherche de l'accueil et de la 404 : mène au carnet filtré ---------- */
function initRecherche() {
  $$('[data-recherche]').forEach((f) => {
    if (f.closest('.tete-carnet')) return; /* le carnet filtre sur place */
    f.addEventListener('submit', () => { if (!f.action.includes('#')) f.action = f.action.split('#')[0] + '#resultats'; });
  });
}

/* ---------- Liens vers la même page avec un choix prérempli (contact : ?sujet=…#formulaire) ---------- */
function initMemePage() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[data-meme-page]');
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey) return;
    const url = new URL(a.href, location.href);
    if (url.pathname.replace(/\.html$/, '') !== location.pathname.replace(/\.html$/, '')) return;
    e.preventDefault(); e.stopPropagation();
    url.searchParams.forEach((valeur, nom) => {
      document.querySelectorAll(`[data-formulaire] [name="${CSS.escape(nom)}"]`).forEach((c) => { c.value = valeur; c.dispatchEvent(new Event('change', { bubbles: true })); });
    });
    history.replaceState(history.state, '', url.pathname + url.search);
    allerAncre(url.hash);
  }, true);
}

/* ---------- Numéro géant (contact) ---------- */
function numero(tl, a = 0) {
  const lien = $('[data-effet="numero"]');
  if (!lien || !gsap) return;
  const cible = tl || gsap;
  if (tl) {
    tl.fromTo(lien, { y: 24 }, { y: 0, duration: .8, ease: 'power3.out' }, a)
      .fromTo($$('.numero-chiffre', lien), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .55, stagger: .035, ease: 'power3.out' }, a);
  } else {
    cible.fromTo(lien, { y: 24 }, { y: 0, duration: .8, ease: 'power3.out', delay: .15 });
    cible.fromTo($$('.numero-chiffre', lien), { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: .55, stagger: .035, ease: 'power3.out', delay: .15 });
  }
}

/* ---------- Premier écran de l'accueil ---------- */
const OUV = { lignes: '.ouv-ligne', reste: '.ouv-pastille, .ouv-accroche, .ouv-recherche, .ouv-infos', onglets: '.tranche li' };
function ouvertureAccueil(tl, a) {
  if (!$('.ouv')) return;
  tl.fromTo(OUV.lignes, { yPercent: 112, y: 0 }, { yPercent: 0, y: 0, duration: .8, stagger: .09, ease: 'power3.out' }, a)
    .fromTo(OUV.reste, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .07, ease: 'power3.out' }, a + .12);
  if ($(OUV.onglets)) tl.fromTo(OUV.onglets, { x: 70 }, { x: 0, duration: .5, stagger: .025, ease: 'back.out(1.6)' }, a + .2);
}

demarrer({
  preparer() {
    ordreDuJour();
    initFavoris();
    initRegistre();
    initDonne();
    initVallee();
    initFicheQuiSEcrit();
    initCarte();
    initRecherche();
    initMemePage();
    initCarnet();
    initReferencer();
    /* État de départ du premier écran de l'accueil (sa partie animée par le projet). */
    if (gsap && $('.ouv') && etat && document.documentElement.dataset.arrivee !== 'retour') {
      gsap.set(OUV.lignes, { yPercent: 112, y: 0 });
      gsap.set(OUV.reste, { y: 22, opacity: 0 });
    }
  },
  /* Intro (≈ 2,3 s) : la couverture bleue du carnet se pose, le pictogramme glisse jusqu'à la recherche
     (l'objet d'ouverture de la page), puis la couverture s'ouvre depuis sa spirale comme une page. */
  jouer() {
    if (!gsap) return null;
    const panneau = $('[data-ouverture]');
    const objet = $('[data-ouverture-objet]', panneau);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo('.anneaux--couverture i', { scaleX: 0, transformOrigin: '0 50%' }, { scaleX: 1, duration: .35, stagger: .03 }, 0)
      .fromTo(objet, { scale: .7, opacity: 0, rotation: -6 }, { scale: 1, opacity: 1, rotation: 0, duration: .55, ease: 'back.out(1.8)' }, .1)
      .fromTo('.ouverture-nom', { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: .5 }, .3)
      .fromTo('.ouverture-trait', { scaleX: 0 }, { scaleX: 1, duration: .45 }, .45)
      .fromTo('.ouverture-ligne', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .4 }, .55)
      .to('.ouverture-nom, .ouverture-trait, .ouverture-ligne', { opacity: 0, duration: .25 }, 1.0);
    /* Le pictogramme glisse jusqu'à l'objet d'ouverture de la page. */
    const cible = $('[data-iris-centre]');
    if (cible && objet) {
      const r = cible.getBoundingClientRect(), p = objet.getBoundingClientRect();
      const visible = r.bottom > 0 && r.top < innerHeight;
      const cx = visible ? (r.width > 240 ? r.left + 34 : r.left + r.width / 2) : innerWidth / 2;
      const cy = visible ? Math.min(innerHeight * .85, Math.max(innerHeight * .15, r.top + Math.min(r.height, innerHeight - r.top) / 2)) : innerHeight / 2;
      tl.to(objet, { x: cx - (p.left + p.width / 2), y: cy - (p.top + p.height / 2), scale: .42, duration: .5, ease: 'power3.inOut' }, 1.0);
    }
    /* La couverture s'ouvre depuis la spirale. */
    tl.to(objet, { opacity: 0, duration: .15 }, 1.5)
      .fromTo(panneau, { rotationY: 0, transformPerspective: 1800, transformOrigin: '0% 50%' }, { rotationY: -90, duration: .8, ease: 'sine.inOut' }, 1.45)
      .set(panneau, { visibility: 'hidden' }, 2.25);
    ouvertureAccueil(tl, 1.62);
    numero(tl, 1.7);
    return tl;
  },
  etatFinal() {
    if (!gsap) return;
    gsap.set([OUV.lignes, OUV.reste, OUV.onglets].join(', '), { clearProps: 'transform,opacity' });
    gsap.set('[data-ouverture], [data-ouverture-objet]', { clearProps: 'transform,opacity,visibility' });
    const lien = $('[data-effet="numero"]');
    if (lien) gsap.set([lien, ...$$('.numero-chiffre', lien)], { clearProps: 'transform,opacity' });
  },
  arrivee() {
    if (!gsap) return;
    const tl = gsap.timeline();
    ouvertureAccueil(tl, .15);
    numero(tl, .2);
  },
});
