/**
 * global.js — Shared across all pages
 * Theme, i18n, header, footer
 */

// ── BOOT ─────────────────────────────────────────────────────
(function () {
  const theme = localStorage.getItem('theme') || 'dark';
  const lang = localStorage.getItem('lang') || 'en';
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.setAttribute('lang', lang);
})();

// ── i18n ─────────────────────────────────────────────────────
const I18N = {
  en: {
    nav_home: 'Home',
    nav_skills: 'Skills',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_education: 'Education',
    nav_about: 'About',
    footer_rights: 'All rights reserved',
    back: '← Back',
    filter_all: 'All',
    filter_cdi: 'Full-time',
    filter_alternance: 'Work-study',
    filter_stage: 'Internship',
    filter_personal: 'Personal',
    filter_school: 'School',
    filter_pro: 'Professional',
    sort_recent: '↓ Recent',
    sort_old: '↑ Oldest',
    toggle_dev: 'DEV',
    toggle_ux: 'UX/UI',
    no_ux: 'No UX/UI aspect for this item.',
    no_dev: 'No DEV aspect for this item.',
    environment: 'Tech Stack',
    present: 'Present',
    view_figma: '↗ View on Figma',
    download_cv: 'Download Resume',
    cv_ats: 'ATS Resume',
    cv_design: 'Design Resume',
    cv_choose_format: 'Choose format',
    available_soon: 'Coming soon',
  },
  fr: {
    nav_home: 'Accueil',
    nav_skills: 'Compétences',
    nav_experience: 'Expériences',
    nav_projects: 'Projets',
    nav_education: 'Formation',
    nav_about: 'À propos',
    footer_rights: 'Tous droits réservés',
    back: '← Retour',
    filter_all: 'Tout',
    filter_cdi: 'CDI',
    filter_alternance: 'Alternance',
    filter_stage: 'Stage',
    filter_personal: 'Personnel',
    filter_school: 'Scolaire',
    filter_pro: 'Professionnel',
    sort_recent: '↓ Récent',
    sort_old: '↑ Ancien',
    toggle_dev: 'DEV',
    toggle_ux: 'UX/UI',
    no_ux: 'Pas d\'aspect UX/UI pour cet élément.',
    no_dev: 'Pas d\'aspect DEV pour cet élément.',
    environment: 'Stack technique',
    present: 'Aujourd\'hui',
    view_figma: '↗ Voir sur Figma',
    download_cv: 'Télécharger le CV',
    cv_ats: 'CV ATS',
    cv_design: 'CV Design',
    cv_choose_format: 'Choisir le format',
    available_soon: 'Bientôt disponible',
  },
};

// ── STATE ────────────────────────────────────────────────────
const State = {
  _theme: localStorage.getItem('theme') || 'dark',
  _lang: localStorage.getItem('lang') || 'en',

  get theme() { return this._theme; },
  get lang() { return this._lang; },

  setTheme(t) {
    this._theme = t;
    localStorage.setItem('theme', t);
    document.documentElement.setAttribute('data-theme', t);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = t === 'dark' ? '☀' : '☾';
  },

  setLang(l) {
    this._lang = l;
    localStorage.setItem('lang', l);
    document.documentElement.setAttribute('lang', l);
    applyTranslations();
    const btn = document.querySelector('.lang-toggle');
    if (btn) btn.textContent = l === 'en' ? 'FR' : 'EN';
    if (typeof window.onLangChange === 'function') window.onLangChange();
  },

  toggleTheme() { this.setTheme(this._theme === 'dark' ? 'light' : 'dark'); },
  toggleLang() { this.setLang(this._lang === 'en' ? 'fr' : 'en'); },
};

function t(key) {
  return (I18N[State.lang] || I18N.en)[key] || key;
}

function tField(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[State.lang] || field.en || '';
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
}

// ── HEADER ───────────────────────────────────────────────────
function initHeader(activePage) {
  const pages = [
    { id: 'home', key: 'nav_home', href: 'index.html' },
    { id: 'skills', key: 'nav_skills', href: 'skills.html' },
    { id: 'experience', key: 'nav_experience', href: 'experiences.html' },
    { id: 'projects', key: 'nav_projects', href: 'projects.html' },
    { id: 'education', key: 'nav_education', href: 'education.html' },
    { id: 'about', key: 'nav_about', href: 'about.html' },
  ];

  const header = document.getElementById('site-header');
  if (!header) return;

  const themeIcon = State.theme === 'dark' ? '☀' : '☾';
  const langLabel = State.lang === 'en' ? 'FR' : 'EN';

  header.innerHTML = `
  <div class="header-left">
    <a class="home-back-btn" href="matt-coste.github.io">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
       <path d="M8 1L1 7.5V15H6V10.5H10V15H15V7.5L8 1Z"/>
      </svg>
    </a>
    <a class="site-logo" href="index.html">
      <span class="logo-name">${DATA.personal.name_header}</span>
    </a>
  </div>
    <div class="header-right">
      <nav>
        <ul class="site-nav">
          ${pages.map(p => `
            <li><a href="${p.href}" data-i18n="${p.key}" ${p.id === activePage ? 'class="active"' : ''}>${t(p.key)}</a></li>
          `).join('')}
        </ul>
      </nav>
      <div class="header-controls">
        <button class="theme-toggle" id="theme-toggle" title="Toggle theme">${themeIcon}</button>
        <button class="lang-toggle" id="lang-toggle">${langLabel}</button>
      </div>
      <button class="burger" id="burger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  // Mobile menu
  // Remplace tout le bloc "Mobile menu" dans initHeader()
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.innerHTML = pages.map(p => `
  <a href="${p.href}" data-i18n="${p.key}" ${p.id === activePage ? 'class="active"' : ''}>${t(p.key)}</a>
`).join('');


  document.getElementById('theme-toggle').addEventListener('click', () => State.toggleTheme());
  document.getElementById('lang-toggle').addEventListener('click', () => State.toggleLang());
  document.getElementById('burger').addEventListener('click', () => {
    const burger = document.getElementById('burger');
    const menu = document.getElementById('mobile-menu');
    burger.classList.toggle('open');
    menu.classList.toggle('open');
  });
  document.getElementById('mobile-menu').querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('burger').classList.remove('open');
      document.getElementById('mobile-menu').classList.remove('open');
    });
  });
}

// ── FOOTER ───────────────────────────────────────────────────
function initFooter() {
  const footer = document.getElementById('site-footer');
  if (!footer) return;
  footer.innerHTML = `
    <span class="footer-copy">© ${new Date().getFullYear()} ${DATA.personal.name} — <span data-i18n="footer_rights">${t('footer_rights')}</span></span>
    <div class="footer-links">
      <a href="${DATA.personal.links.github}" target="_blank" rel="noopener">GitHub</a>
      <a href="${DATA.personal.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
      <a href="${DATA.personal.links.figma}" target="_blank" rel="noopener">Figma</a>
    </div>
  `;
}

// ── FORMAT DATE ──────────────────────────────────────────────
function formatPeriod(period) {
  if (!period) return '';
  const fmt = (str) => {
    if (!str) return t('present');
    const [y, m] = str.split('-');
    if (!m) return y;
    const d = new Date(parseInt(y), parseInt(m) - 1, 1);
    const locale = State.lang === 'fr' ? 'fr-FR' : 'en-US';
    return d.toLocaleDateString(locale, { month: 'short', year: 'numeric' });
  };
  return `${fmt(period.start)} — ${fmt(period.end)}`;
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function revealOnScroll(elements, threshold = 0.07) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold });
  elements.forEach(el => io.observe(el));
  return io;
}

// ── TYPE LABEL ───────────────────────────────────────────────
function typeLabel(type) {
  const map = {
    cdi: { en: 'Full-time', fr: 'CDI' },
    alternance: { en: 'Work-study', fr: 'Alternance' },
    stage: { en: 'Internship', fr: 'Stage' },
    cdd: { en: 'Fixed-term', fr: 'CDD' },
  };
  return tField(map[type] || { en: type, fr: type });
}
