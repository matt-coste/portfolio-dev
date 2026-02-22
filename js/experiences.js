/**
 * experiences.js
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('experience');
  initFooter();
  applyTranslations();
  render();

  window.onLangChange = () => { render(); applyTranslations(); };
});

let activeFilter = 'all';
let sortAsc = false;

function render() {
  const l = State.lang;
  document.getElementById('page-label').textContent = l === 'fr' ? 'Parcours' : 'Career';
  document.getElementById('page-title').textContent = l === 'fr' ? 'Expériences' : 'Experience';
  document.getElementById('page-desc').textContent  = l === 'fr'
    ? 'Mon parcours professionnel — développement logiciel et design UX/UI.'
    : 'My professional journey — software development and UX/UI design.';

  renderFilters();
  renderList();
}

function renderFilters() {
  const l = State.lang;
  const types = [
    { key: 'all',       label: t('filter_all') },
    { key: 'cdi',       label: t('filter_cdi') },
    { key: 'alternance',label: t('filter_alternance') },
    { key: 'stage',     label: t('filter_stage') },
  ];

  document.getElementById('filters-bar').innerHTML = `
    ${types.map(tp => `
      <button class="filter-btn ${activeFilter === tp.key ? 'active' : ''}"
              data-filter="${tp.key}">${tp.label}</button>
    `).join('')}
    <div class="filter-sep"></div>
    <button class="filter-btn" id="sort-btn">${sortAsc ? t('sort_old') : t('sort_recent')}</button>
  `;

  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      renderFilters();
      renderList();
    });
  });
  document.getElementById('sort-btn').addEventListener('click', () => {
    sortAsc = !sortAsc;
    renderFilters();
    renderList();
  });
}

function renderList() {
  const container = document.getElementById('exp-list');
  let exps = [...DATA.experiences];

  if (activeFilter !== 'all') exps = exps.filter(e => e.type === activeFilter);
  exps.sort((a, b) => {
    const da = a.period.start || '0000';
    const db = b.period.start || '0000';
    return sortAsc ? da.localeCompare(db) : db.localeCompare(da);
  });

  if (exps.length === 0) {
    container.innerHTML = `<div class="empty-state">${t('filter_all')}</div>`;
    return;
  }

  container.innerHTML = '';
  exps.forEach((exp, i) => {
    const card = document.createElement('a');
    card.className = 'exp-list-card reveal';
    card.href = `experience.html?id=${exp.id}`;
    card.style.transitionDelay = `${i * 0.06}s`;

    const typeCls = exp.type === 'cdi' ? 'badge-blue' :
                    exp.type === 'stage' ? 'badge-purple' : 'badge-gold';

    const hasUx  = exp.content.ux  !== null;
    const hasDev = exp.content.dev !== null;

    card.innerHTML = `
      <div class="elc-left">
        <div class="elc-meta">
          <span class="badge ${typeCls}">${typeLabel(exp.type)}</span>
          <span class="elc-period">${formatPeriod(exp.period)}</span>
          <span class="elc-location">${exp.location}</span>
        </div>
        <div class="elc-company">${exp.company}</div>
        <div class="elc-role">${tField(exp.role)}</div>
        <p class="elc-summary">${tField(exp.summary)}</p>
        <div class="elc-tags">
          ${exp.tags.map(tg => `<span class="tag">${tg}</span>`).join('')}
        </div>
      </div>
      <div class="elc-right">
        <div class="elc-aspects">
          ${hasDev ? `<span class="aspect-pill ap-dev">DEV</span>` : ''}
          ${hasUx  ? `<span class="aspect-pill ap-ux">UX/UI</span>` : ''}
        </div>
        <span class="elc-arrow">→</span>
      </div>
    `;
    container.appendChild(card);
  });

  revealOnScroll(document.querySelectorAll('.exp-list-card.reveal'));
}
