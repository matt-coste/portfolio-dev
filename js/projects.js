/**
 * projects.js
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('projects');
  initFooter();
  applyTranslations();
  render();
  window.onLangChange = () => { render(); applyTranslations(); };
});

let activeFilter = 'all';
let aspectFilter = 'all';

function render() {
  const l = State.lang;
  document.getElementById('page-label').textContent = l === 'fr' ? 'Réalisations' : 'Work';
  document.getElementById('page-title').textContent = l === 'fr' ? 'Projets' : 'Projects';
  document.getElementById('page-desc').textContent  = l === 'fr'
    ? 'Compétitions, projets scolaires et projets personnels — dev et UX/UI.'
    : 'Competitions, school and personal projects — dev and UX/UI.';
  renderFilters();
  renderGrid();
}

function renderFilters() {
  const typeFilters = [
    { key: 'all',      label: t('filter_all') },
    { key: 'personal', label: t('filter_personal') },
    { key: 'school',   label: t('filter_school') },
    { key: 'pro',      label: t('filter_pro') },
  ];
  const aspectFilters = [
    { key: 'all', label: t('filter_all') },
    { key: 'dev', label: 'DEV' },
    { key: 'ux',  label: 'UX/UI' },
  ];

  document.getElementById('filters-bar').innerHTML = `
    ${typeFilters.map(f => `
      <button class="filter-btn ${activeFilter === f.key ? 'active' : ''}"
              data-filter="${f.key}">${f.label}</button>
    `).join('')}
    <div class="filter-sep"></div>
    ${aspectFilters.map(f => `
      <button class="filter-btn aspect-filter ${aspectFilter === f.key ? 'active' : ''}"
              data-aspect="${f.key}">${f.label}</button>
    `).join('')}
  `;
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; renderFilters(); renderGrid(); });
  });
  document.querySelectorAll('[data-aspect]').forEach(btn => {
    btn.addEventListener('click', () => { aspectFilter = btn.dataset.aspect; renderFilters(); renderGrid(); });
  });
}

function renderGrid() {
  const container = document.getElementById('projects-grid');
  let projs = [...DATA.projects];
  if (activeFilter !== 'all') projs = projs.filter(p => p.type === activeFilter);
  if (aspectFilter !== 'all') projs = projs.filter(p => p.aspects.includes(aspectFilter));

  if (projs.length === 0) {
    container.innerHTML = `<div class="empty-state" style="grid-column:1/-1">${t('filter_all')}</div>`;
    return;
  }
  container.innerHTML = '';
  projs.forEach((proj, i) => {
    const card = document.createElement('a');
    card.className = 'card proj-list-card reveal';
    card.href = `project.html?id=${proj.id}`;
    card.style.transitionDelay = `${i * 0.06}s`;

    const badgeCls = proj.type === 'personal' ? 'badge-gold' :
                     proj.type === 'school'   ? 'badge-purple' : 'badge-blue';

    const hasDev = proj.aspects.includes('dev');
    const hasUx  = proj.aspects.includes('ux');

    card.innerHTML = `
      <div class="plc-header">
        <span class="badge ${badgeCls}">${tField(proj.badge)}</span>
        <div class="plc-aspects">
          ${hasDev ? `<span class="aspect-pill ap-dev">DEV</span>` : ''}
          ${hasUx  ? `<span class="aspect-pill ap-ux">UX/UI</span>` : ''}
        </div>
      </div>
      <div class="plc-title">${proj.title}</div>
      <div class="plc-subtitle">${tField(proj.subtitle)}</div>
      <p class="plc-summary">${tField(proj.summary)}</p>
      <div class="plc-tags">
        ${proj.tags.slice(0, 5).map(tg => `<span class="tag">${tg}</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });
  revealOnScroll(document.querySelectorAll('.proj-list-card.reveal'));
}
