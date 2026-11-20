/* Référencer mon activité : formulaire en cinq étapes, fiche qui se remplit en direct. */
import { html, brut } from '../../outils/gabarit.mjs';
import { icone, anneaux } from '../gabarits/icones.mjs';

export const page = { cle: 'referencer', fichier: 'referencer', imagePartage: 'grok/referencer-atelier-1280.webp' };

export default (c) => {
  const R = c.donnees.rubriques;
  const V = c.donnees.villages.villages;
  const t = (k) => c.t(`referencer.${k}`);
  return html`
<section class="tete-ref" id="debut">
  <div class="conteneur tete-ref-grille">
    <div class="tete-ref-texte">
      <p class="surtitre">${t('surtitre')}</p>
      <h1 data-anime="lignes">${t('titre')}</h1>
      <p class="masque-ecran-bas">${t('texte')}</p>
      <ul class="coches" data-anime="cascade">${[1, 2, 3].map((n) => html`<li>${icone('coche')}${t(`p${n}`)}</li>`)}</ul>
      <p class="tete-ref-actions"><a class="bouton" href="#formulaire" data-action-principale data-sans-transition>${icone('plus')}${t('action')}</a><span class="tete-ref-info" data-info-cle>${t('info')}</span></p>
    </div>
    ${c.media({ nom: 'grok/referencer-atelier', alt: c.s('referencer.alt'), cadrage: '50% 55%', priorite: true, classe: 'tete-ref-media', sizes: '(max-width: 760px) 100vw, 42vw', attrs: 'data-anime="rideau" data-iris-centre' })}
  </div>
</section>

<section class="ref-form" id="formulaire">
  <div class="conteneur">
    <header class="section-tete">
      <h2 data-anime="lignes">${t('formTitre')}</h2>
      <p class="section-texte">${t('formTexte')}</p>
    </header>
    <div class="ref-grille">
      <section class="fpe" data-module="formulaire-par-etapes" aria-label="${c.s('referencer.formTitre')}">
        <div class="fpe__carton" data-effet="etapes">
          <form class="fpe__form" novalidate data-fiche-source>
            <fieldset class="fpe__etape" data-etape="${c.s('referencer.e1')}">
              <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${t('e1Question')}</h3></legend>
              <div class="fpe__groupe fpe__cartes fpe__cartes--rubriques" data-libelle="${c.s('referencer.e1')}">
                ${R.map((r, i) => html`<label class="fpe__carte"><input type="radio" name="rubrique" value="${r.cle}" data-nom="${r.nom}"${i === 0 ? brut(' required') : ''}><span class="fpe__icone teinte-${r.teinte}">${icone(r.icone)}</span><span class="fpe__carte-titre">${r.nom}</span></label>`)}
              </div>
              <div class="fpe__champ"><label for="f-specialite">${t('e1Specialite')}</label><input id="f-specialite" name="specialite" type="text" placeholder="${c.s('referencer.e1SpecialiteExemple')}" data-libelle="${c.s('referencer.e1Specialite')}"></div>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('referencer.e2')}">
              <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${t('e2Question')}</h3></legend>
              <div class="fpe__champ"><label for="f-village">${t('e2Village')}</label><select id="f-village" name="village" required data-libelle="${c.s('referencer.e2Village')}"><option value="">${c.t('commun.tousVillages')}</option>${V.map((v) => html`<option value="${v.complet || v.nom}">${v.complet || v.nom}</option>`)}</select></div>
              <p class="fpe__lib" id="lib-zones">${t('e2Zones')}</p>
              <div class="fpe__groupe fpe__puces" role="group" aria-labelledby="lib-zones" data-libelle="${c.s('referencer.e2Zones')}">${[1, 2, 3, 4, 5].map((n) => html`<label class="fpe__puce"><input type="checkbox" name="zones" value="${c.s(`referencer.zone${n}`)}"><span>${t(`zone${n}`)}</span></label>`)}</div>
              <div class="fpe__champ"><label for="f-adresse">${t('e2Adresse')}</label><input id="f-adresse" name="adresse" type="text" autocomplete="street-address" data-libelle="${c.s('referencer.e2Adresse')}"></div>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('referencer.e3')}">
              <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${t('e3Question')}</h3></legend>
              <div class="fpe__champ"><label for="f-contact">${t('e3Contact')}</label><input id="f-contact" name="contact" type="text" required autocomplete="name" data-libelle="${c.s('referencer.e3Contact')}"></div>
              <div class="fpe__champ"><label for="f-nom">${t('e3Nom')}</label><input id="f-nom" name="nom" type="text" required autocomplete="organization" data-libelle="${c.s('referencer.e3Nom')}"></div>
              <div class="fpe__deux">
                <div class="fpe__champ"><label for="f-tel">${t('e3Tel')}</label><input id="f-tel" name="tel" type="tel" required autocomplete="tel" inputmode="tel" data-libelle="${c.s('referencer.e3Tel')}"></div>
                <div class="fpe__champ"><label for="f-email">${t('e3Email')}</label><input id="f-email" name="email" type="email" autocomplete="email" data-libelle="${c.s('referencer.e3Email')}"></div>
              </div>
              <div class="fpe__champ"><label for="f-site">${t('e3Site')}</label><input id="f-site" name="site" type="url" placeholder="https://" data-libelle="${c.s('referencer.e3Site')}"></div>
              <div class="fpe__deux">
                <div class="fpe__champ"><label for="f-facebook">${t('e3Facebook')}</label><input id="f-facebook" name="facebook" type="text" data-libelle="${c.s('referencer.e3Facebook')}"></div>
                <div class="fpe__champ"><label for="f-instagram">${t('e3Instagram')}</label><input id="f-instagram" name="instagram" type="text" data-libelle="${c.s('referencer.e3Instagram')}"></div>
              </div>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('referencer.e4')}">
              <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${t('e4Question')}</h3></legend>
              <div class="fpe__champ"><label for="f-description">${t('e4Description')}</label><textarea id="f-description" name="description" rows="5" required minlength="20" maxlength="600" data-libelle="${c.s('referencer.e4Description')}"></textarea></div>
              <div class="fpe__champ"><label for="f-horaires">${t('e4Horaires')}</label><input id="f-horaires" name="horaires" type="text" data-libelle="${c.s('referencer.e4Horaires')}"></div>
              <div class="fpe__deux">
                <div class="fpe__champ"><label for="f-logo">${t('e4Logo')}</label><input id="f-logo" name="logo" type="file" accept="image/jpeg,image/png,image/webp" data-hors-recap></div>
                <div class="fpe__champ"><label for="f-photo">${t('e4Photo')}</label><input id="f-photo" name="photo" type="file" accept="image/jpeg,image/png,image/webp" data-hors-recap data-apercu-photo></div>
              </div>
              <p class="fpe__aide">${t('e4Aide')}</p>
            </fieldset>
            <fieldset class="fpe__etape" data-etape="${c.s('referencer.e5')}" data-recap>
              <legend class="fpe__legende"><h3 class="fpe__titre" tabindex="-1">${t('e5Question')}</h3></legend>
              <div class="fpe__recap"></div>
              <label class="fpe__case"><input type="checkbox" name="accord" value="oui" required data-hors-recap><span>${t('e5Accord')}</span></label>
              <label class="fpe__case"><input type="checkbox" name="facebook-accord" value="oui" data-libelle="Facebook"><span>${t('e5Facebook')}</span></label>
              <p class="mention-donnees">${t('e5Donnees')}</p>
            </fieldset>
            <div class="fpe__nav">
              <button type="button" class="bouton bouton--contour" data-precedent>${t('retour')}</button>
              <button type="button" class="bouton" data-suivant>${t('continuer')}${icone('fleche')}</button>
              <button type="submit" class="bouton">${t('envoyer')}</button>
            </div>
          </form>
          <div class="fpe__fin" hidden tabindex="-1">
            <h3>${t('finTitre')}</h3>
            <p>${t('finTexte')}</p>
            <p data-resume></p>
            <button type="button" class="bouton bouton--contour" data-recommencer>${t('recommencer')}</button>
          </div>
        </div>
      </section>
      <aside class="ref-apercu" aria-label="${c.s('referencer.apercu')}">
        <p class="ref-apercu-lib">${icone('etincelle')}${t('apercu')}</p>
        <article class="fiche fiche--apercu" data-fiche-apercu>
          ${anneaux(5, 'anneaux anneaux--fiche')}
          <div class="ref-apercu-photo" data-apercu-image hidden></div>
          <div class="fiche-tete"><span class="fiche-icone teinte-sable" data-apercu-icone>${icone('plus')}</span><span class="fiche-rubrique" data-apercu-rubrique>${t('apercuRubrique')}</span></div>
          <p class="fiche-nom" data-apercu-nom>${t('apercuNom')}</p>
          <p class="fiche-lieu">${icone('repere')}<span data-apercu-village>${t('apercuVillage')}</span></p>
          <p class="fiche-note" data-apercu-texte>${t('apercuTexte')}</p>
          <p class="fiche-tel" data-apercu-tel hidden>${icone('telephone')}<span></span></p>
        </article>
      </aside>
    </div>
  </div>
</section>

<section class="ensuite" id="ensuite">
  <div class="conteneur">
    <header class="section-tete">
      <p class="surtitre">${t('ensuiteSurtitre')}</p>
      <h2 data-anime="lignes">${t('ensuiteTitre')}</h2>
    </header>
    <div class="ensuite-piste">
      <svg class="ensuite-trait" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" data-fx="trace"><path d="M10 20 C 200 4, 300 36, 500 20 S 800 4, 990 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>
      <ol class="ensuite-liste" data-anime="cascade">${[1, 2, 3, 4].map((n) => html`<li><span class="ensuite-n">${n}</span><h3>${t(`s${n}`)}</h3><p>${t(`s${n}Texte`)}</p></li>`)}</ol>
    </div>
    <p class="ensuite-facebook" data-anime>${icone('groupe')}<span>${t('facebook')}</span></p>
  </div>
</section>

<section class="appel-pro" id="appel">
  <div class="conteneur appel-pro-grille">
    <h2 data-anime="lignes">${t('appelTitre')}</h2>
    <p data-anime class="appel-pro-contacts"><a href="tel:${c.site.contact.telephoneLien}">${icone('telephone')}${c.site.contact.telephone}</a><a href="mailto:${c.site.contact.email}">${icone('enveloppe')}${c.site.contact.email}</a></p>
    <p data-anime>${c.lien('contact', { classe: 'bouton', texte: t('appelAction'), attrs: 'data-survol="magnetique"' })}</p>
  </div>
</section>
`;
};
