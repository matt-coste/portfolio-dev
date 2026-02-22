/**
 * experience.js — Detail page
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('experience');
  initFooter();

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const exp = DATA.experiences.find(e => e.id === id);

  if (!exp) {
    document.getElementById('detail-role').textContent = 'Experience not found.';
    return;
  }

  let currentAspect = exp.content.dev ? 'dev' : 'ux';

  render();
  window.onLangChange = () => { render(); applyTranslations(); };

  function render() {
    document.title = `${tField(exp.role)} — Matt Coste`;
    document.getElementById('back-link').textContent = t('back');

    const typeCls = exp.type === 'cdi' ? 'badge-blue' :
      exp.type === 'stage' ? 'badge-purple' : 'badge-gold';

    document.getElementById('detail-meta').innerHTML = `
      <span class="badge ${typeCls}">${typeLabel(exp.type)}</span>
      <span class="tag">${formatPeriod(exp.period)}</span>
      <span class="tag">${exp.location}</span>
    `;
    document.getElementById('detail-role').textContent = tField(exp.role);
    document.getElementById('detail-company').textContent = exp.company;
    document.getElementById('detail-summary').textContent = tField(exp.summary);

    renderToggle();
    renderBody();
  }

  function renderToggle() {
    const hasDev = exp.content.dev !== null;
    const hasUx = exp.content.ux !== null;
    const toggle = document.getElementById('aspect-toggle');

    if (!hasDev || !hasUx) {
      toggle.style.display = 'none';
      return;
    }
    toggle.style.display = 'flex';
    toggle.innerHTML = `
      <button class="aspect-btn ${currentAspect === 'dev' ? 'active-dev' : ''}"
              id="btn-dev" ${!hasDev ? 'disabled' : ''}>DEV</button>
      <button class="aspect-btn ${currentAspect === 'ux' ? 'active-ux' : ''}"
              id="btn-ux"  ${!hasUx ? 'disabled' : ''}>UX/UI</button>
    `;
    document.getElementById('btn-dev').addEventListener('click', () => {
      currentAspect = 'dev'; renderToggle(); renderBody();
    });
    document.getElementById('btn-ux').addEventListener('click', () => {
      currentAspect = 'ux'; renderToggle(); renderBody();
    });
  }

  function renderBody() {
    const body = document.getElementById('detail-body');
    const content = exp.content[currentAspect];
    const l = State.lang;

    if (!content) {
      body.innerHTML = `<div class="empty-state">${t('no_' + currentAspect)}</div>`;
      return;
    }
    const data = content[l] || content.en;

    body.innerHTML = `
      ${data.context ? `<div class="content-context">${data.context}</div>` : ''}

      <div class="detail-env">
        <p class="section-title">${t('environment')}</p>
        <div class="env-pills">
          ${data.environment.map(e => `<span class="tag">${e}</span>`).join('')}
        </div>
      </div>

      ${data.sections.map(sec => `
        <div class="content-section">
          <h3>${sec.title}</h3>
          <ul>${sec.items.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      `).join('')}
    `;
  }
});
