/* Contact : numéro en très grand, demandes sur les fiches, formulaire simulé, porteur du projet. */
import { html } from '../../outils/gabarit.mjs';
import { icone, pictogramme } from '../gabarits/icones.mjs';
import { carteVallee } from '../gabarits/composants.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'grok/contact-carnet-1280.webp' };

export default (c) => {
  const t = (k) => c.t(`contact.${k}`);
  const demandes = [['d1', 'modification', 'marteau'], ['d2', 'retrait', 'plus'], ['d3', 'revendication', 'cle'], ['d4', 'donnees', 'enveloppe']];
  return html`
<section class="tete-contact" id="debut">
  <div class="conteneur tete-contact-grille">
    <div class="tete-contact-texte">
      <p class="surtitre">${t('surtitre')}</p>
      <h1 class="contact-titre"><span class="contact-titre-petit">${t('titreLong')}</span><a class="numero-geant" href="tel:${c.site.contact.telephoneLien}" data-action-principale aria-label="${c.s('contact.appeler')}" data-effet="numero">${[...c.site.contact.telephone].map((ch, i) => (ch === ' ' ? html`<span class="numero-espace"> </span>` : html`<span class="numero-chiffre" style="--i:${i}">${ch}</span>`))}</a></h1>
      <p class="tete-contact-mail" data-info-cle><a href="mailto:${c.site.contact.email}">${icone('enveloppe')}${c.site.contact.email}</a></p>
      <p class="masque-ecran-tres-bas">${t('texte')}</p>
    </div>
    ${c.media({ nom: 'grok/contact-carnet', alt: c.s('contact.alt'), cadrage: '50% 55%', priorite: true, classe: 'tete-contact-media', sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-anime="rideau" data-iris-centre' })}
  </div>
</section>

<section class="demandes" id="demandes">
  <div class="conteneur">
    <header class="section-tete">
      <p class="surtitre">${t('demandesSurtitre')}</p>
      <h2 data-anime="lignes">${t('demandesTitre')}</h2>
    </header>
    <div class="demandes-grille">
      <ul class="demandes-liste" data-anime="cascade">${demandes.map(([k, sujet, ic]) => html`<li class="demande">
        <span class="fiche-icone teinte-sable">${icone(ic)}</span>
        <h3>${t(k)}</h3>
        <p>${t(`${k}Texte`)}</p>
        <a class="demande-lien" href="${c.url('contact', 'formulaire', `sujet=${sujet}`)}" data-sans-transition data-meme-page>${t('choisir')}${icone('fleche')}</a>
      </li>`)}</ul>
      <form class="formulaire" id="formulaire" data-formulaire novalidate>
        <h3>${t('formTitre')}</h3>
        <div class="champ"><label for="c-sujet">${t('sujet')}</label><select id="c-sujet" name="sujet" required>
          <option value="question">${t('sujetQuestion')}</option>
          <option value="modification">${t('sujetModification')}</option>
          <option value="retrait">${t('sujetRetrait')}</option>
          <option value="revendication">${t('sujetRevendication')}</option>
          <option value="donnees">${t('sujetDonnees')}</option>
        </select></div>
        <div class="champ"><label for="c-activite">${t('activite')}</label><input id="c-activite" name="activite" type="text" autocomplete="organization"></div>
        <div class="champs-deux">
          <div class="champ"><label for="c-nom">${t('nom')}</label><input id="c-nom" name="nom" type="text" required autocomplete="name"></div>
          <div class="champ"><label for="c-email">${t('email')}</label><input id="c-email" name="email" type="email" required autocomplete="email"></div>
        </div>
        <div class="champ"><label for="c-tel">${t('tel')}</label><input id="c-tel" name="tel" type="tel" autocomplete="tel" inputmode="tel"></div>
        <div class="champ"><label for="c-message">${t('message')}</label><textarea id="c-message" name="message" rows="5" required></textarea></div>
        <p class="mention-donnees">${t('donnees')}</p>
        <p><button type="submit" class="bouton">${icone('enveloppe')}${t('envoyer')}</button></p>
        <p data-message-envoi hidden tabindex="-1" data-texte="${c.s('contact.envoye')}"></p>
      </form>
    </div>
  </div>
</section>

<section class="porteur" id="porteur">
  <div class="conteneur porteur-grille">
    <div class="porteur-texte">
      <p class="surtitre">${t('porteurSurtitre')}</p>
      <h2 data-anime="lignes">${t('porteurTitre')}</h2>
      <p>${t('porteurTexte')}</p>
      <p class="porteur-adresse">${pictogramme('porteur-picto')}<span>${t('porteurAdresse')}</span></p>
    </div>
    <div class="porteur-carte">${carteVallee(c, { classe: 'vallee--avrieux' })}</div>
  </div>
</section>
`;
};
