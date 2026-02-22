/**
 * about.js
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('about');
  initFooter();
  applyTranslations();
  render();
  initCvModal();
  window.onLangChange = () => { render(); applyTranslations(); initCvModal(); };
});

function render() {
  const l = State.lang;
  const p = DATA.personal;
  const hobbies = p.hobbies[l] || p.hobbies.en;
  const softSkills = p.softSkills[l] || p.softSkills.en;
  const titles = p.titles[l] || p.titles.en;

  document.getElementById('about-wrap').innerHTML = `
    <!-- Hero section -->
    <div class="about-hero reveal">
      <div class="about-hero-text">
        <p class="page-label">${l === 'fr' ? 'À propos' : 'About me'}</p>
        <h1 class="page-title">${p.name}</h1>
        <p class="about-titles">${titles.join(' · ')}</p>
        <p class="about-summary">${p.summary[l] || p.summary.en}</p>
        <div class="about-links">
          <a href="${p.links.github}" target="_blank" rel="noopener" class="about-link">
            <span class="about-link-icon">⌥</span> GitHub
          </a>
          <a href="${p.links.linkedin}" target="_blank" rel="noopener" class="about-link">
            <span class="about-link-icon">◈</span> LinkedIn
          </a>
          <a href="${p.links.figma}" target="_blank" rel="noopener" class="about-link">
            <span class="about-link-icon">◻</span> Figma
          </a>
          <a href="${p.links.instagram}" target="_blank" rel="noopener" class="about-link">
            <span class="about-link-icon">◯</span> Instagram
          </a>
          <button class="about-link about-mail-btn" id="mail-copy-btn" data-email="${p.email}">
            <span class="about-link-icon">✉</span>
            <span id="mail-copy-label">${l === 'fr' ? 'Mail' : 'Mail'}</span>
          </button>
        </div>
      </div>
      <div class="about-photo-wrap">
        <div class="about-photo-frame">
          <img src="${p.photo}" alt="${p.name}" class="about-photo"
               onerror="this.closest('.about-photo-frame').classList.add('no-photo')">
          <div class="about-photo-placeholder">M</div>
        </div>
        <a href="${p.photoPortfolio}" target="_blank" rel="noopener" class="photo-portfolio-link">
          <span>📷</span>
          <span>${l === 'fr' ? 'Voir mon portfolio photo' : 'See my photo portfolio'}</span>
          <span>→</span>
        </a>
      </div>
    </div>

    <!-- CV Downloads -->
    <div class="about-section reveal">
      <p class="section-title">${l === 'fr' ? 'Télécharger mon CV' : 'Download my resume'}</p>
      <div class="cv-buttons">
        <button class="cv-btn cv-btn-secondary" id="open-cv-ats">
          <span class="cv-btn-icon">↓</span>
          <span>
            <span class="cv-btn-label">${tField(p.cvs.ats.label)}</span>
            <span class="cv-btn-size">PDF · ${l === 'fr' ? 'Choisir la langue' : 'Choose language'}</span>
          </span>
        </button>
        <button class="cv-btn cv-btn-secondary" id="open-cv-design">
          <span class="cv-btn-icon">↓</span>
          <span>
            <span class="cv-btn-label">${tField(p.cvs.design.label)}</span>
            <span class="cv-btn-size">PDF · PNG · ${l === 'fr' ? 'Choisir la langue' : 'Choose language'}</span>
          </span>
        </button>
      </div>
    </div>

    <!-- Hobbies -->
    <div class="about-section reveal">
      <p class="section-title">${l === 'fr' ? 'Centres d\'intérêt' : 'Interests'}</p>
      <div class="hobbies-grid">
        ${hobbies.map(h => `
          <div class="hobby-card">
            <span class="hobby-icon">${h.icon}</span>
            <div>
              <div class="hobby-label">${h.label}</div>
              <div class="hobby-desc">${h.desc}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Soft skills -->
    <div class="about-section reveal">
      <p class="section-title">${l === 'fr' ? 'Qualités' : 'Soft skills'}</p>
      <div class="soft-skills-wrap">
        ${softSkills.map(s => `<span class="soft-skill-tag">${s}</span>`).join('')}
      </div>
    </div>

    <!-- Contact -->
    <div class="about-section reveal about-contact-section">  
      <p class="section-title">${l === 'fr' ? 'Me contacter' : 'Get in touch'}</p>
      <button class="cv-btn cv-btn-secondary" id="open-cv-ats" onclick="location.href='mailto:${p.email}'">
          <span class="cv-btn-icon">✉</span>
          <span>
            <a class="cv-btn-label">${p.email}</span>
          </span>
        </button>
    </div>
  `;

  // Mail copy button
  document.getElementById('mail-copy-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(DATA.personal.email).then(() => {
      const label = document.getElementById('mail-copy-label');
      const l = State.lang;
      label.textContent = l === 'fr' ? 'Mail copié ✓' : 'Copied ✓';
      setTimeout(() => { label.textContent = 'Mail'; }, 2000);
    });
  });

  // CV buttons
  document.getElementById('open-cv-ats').addEventListener('click', () => openCvModal('ats'));
  document.getElementById('open-cv-design').addEventListener('click', () => openCvModal('design'));

  revealOnScroll(document.querySelectorAll('.about-wrap .reveal'));
}

function initCvModal() {
  const modal = document.getElementById('cv-modal');
  const closeBtn = document.getElementById('cv-modal-close');
  if (!closeBtn) return;
  closeBtn.addEventListener('click', closeCvModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeCvModal(); });
}

function openCvModal(type) {
  const l = State.lang;
  const p = DATA.personal.cvs;
  const modal = document.getElementById('cv-modal');

  if (type === 'ats') {
    document.getElementById('cv-modal-title').textContent =
      l === 'fr' ? 'Choisir la langue du CV ATS' : 'Choose ATS resume language';
    document.getElementById('cv-modal-options').innerHTML = `
      <a href="${p.ats.fr.file}" download class="cv-modal-opt">
        <span class="cv-modal-fmt">🇫🇷 FR</span>
        <span class="cv-modal-sz">${p.ats.fr.size}</span>
        <span class="cv-modal-arrow">↓ PDF</span>
      </a>
      <a href="${p.ats.en.file}" download class="cv-modal-opt">
        <span class="cv-modal-fmt">🇬🇧 EN</span>
        <span class="cv-modal-sz">${p.ats.en.size}</span>
        <span class="cv-modal-arrow">↓ PDF</span>
      </a>
    `;
  } else {
    document.getElementById('cv-modal-title').textContent =
      l === 'fr' ? 'Choisir la langue et le format' : 'Choose language and format';
    document.getElementById('cv-modal-options').innerHTML = `
      <a href="${p.design.fr.pdf.file}" download class="cv-modal-opt">
        <span class="cv-modal-fmt">🇫🇷 FR</span>
        <span class="cv-modal-sz">${p.design.fr.pdf.size}</span>
        <span class="cv-modal-arrow">↓ PDF</span>
      </a>
      <a href="${p.design.fr.png.file}" download class="cv-modal-opt">
        <span class="cv-modal-fmt">🇫🇷 FR</span>
        <span class="cv-modal-sz">${p.design.fr.png.size}</span>
        <span class="cv-modal-arrow">↓ PNG</span>
      </a>
      <a href="${p.design.en.pdf.file}" download class="cv-modal-opt">
        <span class="cv-modal-fmt">🇬🇧 EN</span>
        <span class="cv-modal-sz">${p.design.en.pdf.size}</span>
        <span class="cv-modal-arrow">↓ PDF</span>
      </a>
      <a href="${p.design.en.png.file}" download class="cv-modal-opt">
        <span class="cv-modal-fmt">🇬🇧 EN</span>
        <span class="cv-modal-sz">${p.design.en.png.size}</span>
        <span class="cv-modal-arrow">↓ PNG</span>
      </a>
    `;
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCvModal() {
  document.getElementById('cv-modal').classList.remove('open');
  document.body.style.overflow = '';
}
