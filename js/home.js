/**
 * home.js — Home page
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('home');
  initFooter();
  applyTranslations();
  renderHero();
  renderStats();
  renderQuickNav();
  renderRecentExperiences();
  renderRecentProjects();

  window.onLangChange = () => {
    renderHero();
    renderStats();
    renderQuickNav();
    renderRecentExperiences();
    renderRecentProjects();
    applyTranslations();
  };
});

function renderHero() {
  const p = DATA.personal;
  const l = State.lang;

  document.getElementById('hero-name').textContent = p.name;
  document.getElementById('hero-location').textContent = p.location;
  document.getElementById('hero-summary').textContent = p.summary[l] || p.summary.en;

  // Animated titles
  const titles = p.titles[l] || p.titles.en;
  const colors = ['var(--accent2)', 'var(--accent3)', 'var(--accent)'];
  document.getElementById('hero-titles').innerHTML = titles.map((title, i) => `
    <span class="hero-title-item">
      <span class="dot-sm" style="background:${colors[i % colors.length]}"></span>
      ${title}
    </span>
  `).join('');

  document.getElementById('btn-experience').textContent =
    l === 'fr' ? 'Voir mes expériences →' : 'See my experience →';
  document.getElementById('btn-projects').textContent =
    l === 'fr' ? 'Voir mes projets' : 'See projects';
}

function renderStats() {
  const stats = DATA.personal.stats[State.lang] || DATA.personal.stats.en;
  document.getElementById('stats-bar').innerHTML = stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('');
}

function renderQuickNav() {
  const l = State.lang;
  const links = [
    { href: 'skills.html',      icon: '⬡', label: l === 'fr' ? 'Compétences' : 'Skills' },
    { href: 'experiences.html', icon: '◈', label: l === 'fr' ? 'Expériences' : 'Experience' },
    { href: 'projects.html',    icon: '◻', label: l === 'fr' ? 'Projets' : 'Projects' },
    { href: 'education.html',   icon: '◇', label: l === 'fr' ? 'Formation' : 'Education' },
    { href: 'about.html',       icon: '◯', label: l === 'fr' ? 'À propos' : 'About' },
  ];
  document.getElementById('quick-nav').innerHTML = links.map(lk => `
    <a href="${lk.href}" class="qn-item">
      <span class="qn-icon">${lk.icon}</span>
      ${lk.label}
    </a>
  `).join('');
}

function renderRecentExperiences() {
  const l = State.lang;
  const container = document.getElementById('recent-experiences');
  const exp = DATA.experiences.slice(0, 3);

  document.getElementById('label-experience').textContent =
    l === 'fr' ? 'Expérience' : 'Experience';
  document.getElementById('title-experience').textContent =
    l === 'fr' ? 'Dernières expériences' : 'Recent experience';
  document.getElementById('see-all-exp').textContent =
    l === 'fr' ? 'Tout voir' : 'See all';

  container.innerHTML = '';
  exp.forEach((e, i) => {
    const card = document.createElement('a');
    card.className = 'card exp-card reveal';
    card.href = `experience.html?id=${e.id}`;
    card.style.transitionDelay = `${i * 0.08}s`;

    const typeCls = e.type === 'cdi' ? 'badge-blue' :
                    e.type === 'stage' ? 'badge-purple' : 'badge-gold';

    card.innerHTML = `
      <div class="exp-card-meta">
        <span class="badge ${typeCls}">${typeLabel(e.type)}</span>
        <span class="tag">${formatPeriod(e.period)}</span>
      </div>
      <div class="exp-card-company">${e.company}</div>
      <div class="exp-card-role">${tField(e.role)}</div>
      <div class="exp-card-tags">
        ${e.tags.slice(0, 4).map(tg => `<span class="tag">${tg}</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });

  revealOnScroll(document.querySelectorAll('#recent-experiences .reveal'));
}

function renderRecentProjects() {
  const l = State.lang;
  const container = document.getElementById('recent-projects');
  const projects = DATA.projects.slice(0, 3);

  document.getElementById('label-projects').textContent =
    l === 'fr' ? 'Projets' : 'Projects';
  document.getElementById('title-projects').textContent =
    l === 'fr' ? 'Projets récents' : 'Recent projects';
  document.getElementById('see-all-proj').textContent =
    l === 'fr' ? 'Tout voir' : 'See all';

  container.innerHTML = '';
  projects.forEach((proj, i) => {
    const card = document.createElement('a');
    card.className = 'card proj-card reveal';
    card.href = `project.html?id=${proj.id}`;
    card.style.transitionDelay = `${i * 0.08}s`;

    const badgeCls = proj.type === 'personal' ? 'badge-gold' :
                     proj.type === 'school'   ? 'badge-purple' : 'badge-blue';

    card.innerHTML = `
      <div class="proj-card-badge">
        <span class="badge ${badgeCls}">${tField(proj.badge)}</span>
      </div>
      <div class="proj-card-title">${proj.title}</div>
      <div class="proj-card-summary">${tField(proj.summary)}</div>
      <div class="proj-card-tags">
        ${proj.tags.slice(0, 4).map(tg => `<span class="tag">${tg}</span>`).join('')}
      </div>
    `;
    container.appendChild(card);
  });

  revealOnScroll(document.querySelectorAll('#recent-projects .reveal'));
}
