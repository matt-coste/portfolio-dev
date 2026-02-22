/**
 * project.js — Project detail page
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('projects');
  initFooter();

  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  const proj   = DATA.projects.find(p => p.id === id);

  if (!proj) {
    document.getElementById('detail-title').textContent = 'Project not found.';
    return;
  }

  let currentAspect = proj.aspects.includes('dev') ? 'dev' : 'ux';

  // Lightbox
  let lbPhotos = [], lbCurrent = 0;
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lightbox-img');
  const lbCap   = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev  = document.getElementById('lightbox-prev');
  const lbNext  = document.getElementById('lightbox-next');

  function lbOpen(photos, idx) {
    lbPhotos = photos; lbCurrent = idx; lbShow();
  }
  function lbShow() {
    const p = lbPhotos[lbCurrent];
    const src   = typeof p === 'string' ? p : p.src;
    const label = typeof p === 'object' && p.label ? p.label : '';
    lbImg.src = src;
    lbCap.textContent = label;
    lb.classList.toggle('has-nav', lbPhotos.length > 1);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function lbClose_() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => lbImg.src = '', 300);
  }
  function lbStep(d) {
    lbCurrent = (lbCurrent + d + lbPhotos.length) % lbPhotos.length;
    lbImg.style.opacity = '0';
    setTimeout(() => { lbShow(); lbImg.style.opacity = '1'; }, 150);
  }
  lbClose.addEventListener('click', lbClose_);
  lbPrev.addEventListener('click',  () => lbStep(-1));
  lbNext.addEventListener('click',  () => lbStep(1));
  lb.addEventListener('click', e => { if (e.target === lb) lbClose_(); });
  document.addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape')     lbClose_();
    if (e.key === 'ArrowLeft')  lbStep(-1);
    if (e.key === 'ArrowRight') lbStep(1);
  });

  render();
  window.onLangChange = () => { render(); applyTranslations(); };

  function render() {
    document.title = `${proj.title} — Matt Coste`;
    document.getElementById('back-link').textContent = t('back');

    const badgeCls = proj.type === 'personal' ? 'badge-gold' :
                     proj.type === 'school'   ? 'badge-purple' : 'badge-blue';

    document.getElementById('detail-meta').innerHTML = `
      <span class="badge ${badgeCls}">${tField(proj.badge)}</span>
      ${proj.tags.map(tg => `<span class="tag">${tg}</span>`).join('')}
    `;
    document.getElementById('detail-title').textContent    = proj.title;
    document.getElementById('detail-subtitle').textContent = tField(proj.subtitle);
    document.getElementById('detail-summary').textContent  = tField(proj.summary);

    // Actions
    const actions = document.getElementById('detail-actions');
    actions.innerHTML = '';
    if (proj.figmaUrl) {
      const a = document.createElement('a');
      a.href = proj.figmaUrl;
      a.target = '_blank';
      a.rel = 'noopener';
      a.className = 'btn-action';
      a.textContent = t('view_figma');
      actions.appendChild(a);
    }

    renderGallery();
    renderToggle();
    renderBody();
  }

  function renderGallery() {
    const galleryEl = document.getElementById('detail-gallery');
    if (!proj.images || proj.images.length === 0) {
      galleryEl.style.display = 'none';
      return;
    }
    galleryEl.style.display = 'grid';
    galleryEl.innerHTML = proj.images.map((img, i) => {
      // Support both simple string src and object { src, label }
      const src   = typeof img === 'string' ? img : img.src;
      const label = typeof img === 'object' && img.label ? tField(img.label) : '';
      return `
        <div class="gallery-item" data-idx="${i}">
          <img src="${src}" alt="${label}" loading="lazy">
          ${label ? `<div class="gallery-label">${label}</div>` : ''}
        </div>
      `;
    }).join('');
    galleryEl.querySelectorAll('.gallery-item').forEach(item => {
      item.addEventListener('click', () => {
        const idx = parseInt(item.dataset.idx);
        const photos = proj.images.map(img => ({
          src:   typeof img === 'string' ? img : img.src,
          label: typeof img === 'object' && img.label ? tField(img.label) : '',
        }));
        lbOpen(photos, idx);
      });
    });
  }

  function renderToggle() {
    const hasDev = proj.aspects.includes('dev') && proj.content.dev;
    const hasUx  = proj.aspects.includes('ux')  && proj.content.ux;
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
              id="btn-ux"  ${!hasUx  ? 'disabled' : ''}>UX/UI</button>
    `;
    document.getElementById('btn-dev').addEventListener('click', () => {
      currentAspect = 'dev'; renderToggle(); renderBody();
    });
    document.getElementById('btn-ux').addEventListener('click', () => {
      currentAspect = 'ux'; renderToggle(); renderBody();
    });
  }

  function renderBody() {
    const body    = document.getElementById('detail-body');
    const content = proj.content[currentAspect];
    const l       = State.lang;

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
