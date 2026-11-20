/* Parcours propres à Réseau HMV : recherche et filtres du carnet, favoris (deux onglets, donnée abîmée),
   carte (choix d'un village par l'adresse), formulaire de référencement (aperçu en direct, étapes). */
export default async function ({ contexte, attendrePret, attendre, BASE, R, T }) {
  const { ctx, page } = await contexte({ taille: T('390×844') });
  try {
    const compte = () => page.evaluate(() => ({ n: +document.querySelector('[data-compte]').textContent, visibles: [...document.querySelectorAll('.grille-fiches .fiche')].filter((f) => !f.hidden).length }));

    /* Carnet : filtre par rubrique, recherche libre, village, effacement. */
    await page.goto(BASE + '/carnet', { waitUntil: 'load' });
    await attendrePret(page);
    const depart = await compte();
    if (depart.n !== depart.visibles || depart.n < 10) R.echec('carnet', `compteur ${depart.n} pour ${depart.visibles} fiches visibles au départ`, { page: '/carnet', taille: '390×844' });
    await page.click('[data-filtre-groupe="rubrique"] [data-valeur="commerces"]');
    await attendre(1200);
    const commerces = await compte();
    const toutesCommerces = await page.evaluate(() => [...document.querySelectorAll('.grille-fiches .fiche')].filter((f) => !f.hidden).every((f) => f.dataset.rubrique === 'commerces'));
    if (!toutesCommerces || commerces.n !== commerces.visibles || !commerces.n) R.echec('carnet', 'le filtre Commerces montre d’autres rubriques ou un compteur faux', { page: '/carnet', taille: '390×844' });
    if (!page.url().includes('rubrique=commerces')) R.echec('carnet', 'le filtre n’est pas gardé dans l’adresse', { page: '/carnet' });
    await page.fill('.tete-carnet [name="q"]', 'boulangerie');
    await attendre(1200);
    const boulangerie = await compte();
    if (boulangerie.visibles !== 1) R.echec('carnet', `recherche « boulangerie » dans Commerces : ${boulangerie.visibles} fiches au lieu de 1`, { page: '/carnet' });
    await page.click('[data-reinit] >> nth=0');
    await attendre(1200);
    if ((await compte()).visibles !== depart.visibles) R.echec('carnet', 'Tout effacer ne rend pas toutes les fiches', { page: '/carnet' });
    await page.goto(BASE + '/carnet?q=menuisier', { waitUntil: 'load' });
    await attendrePret(page);
    if ((await compte()).visibles !== 1) R.echec('carnet', 'recherche « menuisier » (adresse) : la fiche Menuiserie n’est pas trouvée', { page: '/carnet' });
    await page.goto(BASE + '/carnet?village=Modane', { waitUntil: 'load' });
    await attendrePret(page);
    const modane = await page.evaluate(() => [...document.querySelectorAll('.grille-fiches .fiche')].filter((f) => !f.hidden).every((f) => f.dataset.village === 'Modane'));
    if (!modane) R.echec('carnet', 'le village Modane (adresse) montre d’autres villages', { page: '/carnet' });

    /* Favoris : ajout, compteur de l'accueil, second onglet, donnée abîmée. */
    await page.goto(BASE + '/carnet', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('.fiche:not([hidden]) .fiche-coeur').first().click();
    await attendre(500);
    const autre = await ctx.newPage();
    await autre.goto(BASE + '/', { waitUntil: 'load' });
    await attendrePret(autre);
    const nb = await autre.evaluate(() => document.querySelector('[data-favoris-nombre]')?.textContent);
    if (nb !== '1') R.echec('favoris', `compteur de l’accueil à « ${nb} » après un favori ajouté`, { page: '/' });
    await autre.close();
    await page.evaluate(() => localStorage.setItem('reseauhmv:favoris', '{abîmé'));
    await page.reload({ waitUntil: 'load' });
    if ((await attendrePret(page)) === 'jamais-pret') R.echec('favoris', 'une donnée abîmée bloque le site', { page: '/carnet' });
    await page.evaluate(() => localStorage.removeItem('reseauhmv:favoris'));

    /* Carte : un village choisi par l'adresse affiche ses adresses. */
    await page.goto(BASE + '/carte?village=bessans', { waitUntil: 'load' });
    await attendrePret(page);
    const bessans = await page.evaluate(() => { const p = document.querySelector('[data-panneau-village="bessans"]'); return p && !p.hidden && p.textContent.includes('Sherpa'); });
    if (!bessans) R.echec('carte', '?village=bessans n’ouvre pas le panneau de Bessans avec ses adresses', { page: '/carte' });

    /* Référencer : l'aperçu suit la saisie, l'étape suivante refuse un champ vide. */
    await page.goto(BASE + '/referencer', { waitUntil: 'load' });
    await attendrePret(page);
    await page.locator('.fpe__carte:has([value="artisans"])').click();
    await page.fill('#f-specialite', 'Menuiserie');
    await attendre(300);
    const rub = await page.evaluate(() => document.querySelector('[data-apercu-rubrique]').textContent);
    if (rub !== 'Artisans · Menuiserie') R.echec('referencer', `aperçu de la rubrique : « ${rub} »`, { page: '/referencer' });
    await page.click('[data-suivant]');
    await attendre(600);
    await page.click('[data-suivant]');
    await attendre(600);
    const erreur = await page.evaluate(() => !!document.querySelector('#f-village[aria-invalid="true"]'));
    if (!erreur) R.echec('referencer', 'l’étape 2 passe sans village', { page: '/referencer' });
  } finally { await ctx.close(); }
}
