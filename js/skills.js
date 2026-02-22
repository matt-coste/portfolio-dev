/**
 * skills.js
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('skills');
  initFooter();
  applyTranslations();
  render();
  window.onLangChange = () => { render(); applyTranslations(); };
});

let activeFilter = 'all';

function render() {
  const l = State.lang;
  document.getElementById('page-label').textContent = l === 'fr' ? 'Expertise' : 'Expertise';
  document.getElementById('page-title').textContent = l === 'fr' ? 'Compétences' : 'Skills';
  document.getElementById('page-desc').textContent = l === 'fr'
    ? 'Développement, design UX/UI, langues et outils — une vue d\'ensemble de mes savoir-faire.'
    : 'Development, UX/UI design, languages and tools — an overview of my expertise.';
  renderFilters();
  renderBody();
}

function renderFilters() {
  const l = State.lang;
  const filters = [
    { key: 'all', label: t('filter_all') },
    { key: 'dev', label: 'DEV' },
    { key: 'ux', label: 'UX/UI' },
    { key: 'lang', label: l === 'fr' ? 'Langues' : 'Languages' },
    { key: 'tools', label: l === 'fr' ? 'Outils' : 'Tools' },
  ];
  document.getElementById('filters-bar').innerHTML = filters.map(f => `
    <button class="filter-btn ${activeFilter === f.key ? 'active' : ''}"
            data-filter="${f.key}">${f.label}</button>
  `).join('');
  document.querySelectorAll('[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => { activeFilter = btn.dataset.filter; renderFilters(); renderBody(); });
  });
}

function renderBody() {
  const body = document.getElementById('skills-body');
  const l = State.lang;
  const s = DATA.skills;
  const sections = [];

  if (activeFilter === 'all' || activeFilter === 'dev') {
    sections.push({
      accent: 'var(--accent2)',
      label: l === 'fr' ? 'Développement' : 'Development',
      groups: [
        { title: 'Frontend', items: s.dev.frontend },
        { title: 'Backend', items: s.dev.backend },
        { title: l === 'fr' ? 'Base de données' : 'Database', items: s.dev.database },
        { title: 'DevOps', items: s.dev.devops },
        { title: l === 'fr' ? 'Autres' : 'Other', items: s.dev.other },
      ],
    });
  }

  if (activeFilter === 'all' || activeFilter === 'ux') {
    sections.push({
      accent: 'var(--accent3)',
      label: 'UX/UI Design',
      groups: [
        { title: l === 'fr' ? 'Outils' : 'Tools', items: s.ux.tools },
        { title: l === 'fr' ? 'Méthodes' : 'Methods', items: s.ux.methods },
      ],
    });
  }

  if (activeFilter === 'all' || activeFilter === 'lang') {
    sections.push({
      accent: 'var(--accent)',
      label: l === 'fr' ? 'Langues' : 'Languages',
      groups: [{ title: '', items: s.languages, isLang: true }],
    });
  }

  if (activeFilter === 'all' || activeFilter === 'tools') {
    sections.push({
      accent: 'var(--accent)',
      label: l === 'fr' ? 'Productivité' : 'Productivity',
      groups: [{ title: '', items: s.productivity }],
    });
  }

  body.innerHTML = sections.map(sec => `
    <div class="skills-section reveal">
      <div class="skills-section-header">
        <span class="skills-section-dot" style="background:${sec.accent}"></span>
        <h2 class="skills-section-title">${sec.label}</h2>
      </div>
      <div class="skills-groups">
        ${sec.groups.map(group => `
          <div class="skills-group">
            ${group.title ? `<p class="section-title">${group.title}</p>` : ''}
            <div class="skill-bars">
              ${group.items.map(item => `
                <div class="skill-bar-wrap reveal">
                  <div class="skill-bar-header">
                    <span class="skill-bar-name">${item.name}</span>
                    <span class="skill-bar-level">
                      ${group.isLang ? tField(item.label) : levelLabel(item.level)}
                    </span>
                  </div>
                  <div class="skill-bar-track">
                    <div class="skill-bar-fill"
                         data-level="${levelToWidth(item.level)}"
                         style="background:${sec.accent}">
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // Animate bars on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        const fill = e.target.querySelector('.skill-bar-fill');
        if (fill) fill.style.width = fill.dataset.level + '%';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.skill-bar-wrap').forEach(el => io.observe(el));
  revealOnScroll(document.querySelectorAll('.skills-section.reveal'));
}

function levelLabel(level) {
  const l = State.lang;
  if (level >= 90) return l === 'fr' ? 'Expert' : 'Expert';
  if (level >= 75) return l === 'fr' ? 'Avancé' : 'Advanced';
  if (level >= 55) return l === 'fr' ? 'Intermédiaire' : 'Intermediate';
  return l === 'fr' ? 'Notions' : 'Beginner';
}

// Map level to a discrete percentage so equal labels = equal bar width
function levelToWidth(level) {
  if (level >= 90) return 95;
  if (level >= 75) return 72;
  if (level >= 55) return 48;
  return 24;
}
