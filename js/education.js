/**
 * education.js
 */
document.addEventListener('DOMContentLoaded', () => {
  initHeader('education');
  initFooter();
  applyTranslations();
  render();
  window.onLangChange = () => { render(); applyTranslations(); };
});

function render() {
  const l = State.lang;
  document.getElementById('page-label').textContent = l === 'fr' ? 'Parcours académique' : 'Academic background';
  document.getElementById('page-title').textContent = l === 'fr' ? 'Formation' : 'Education';

  const container = document.getElementById('edu-list');
  container.innerHTML = '';

  DATA.education.forEach((edu, i) => {
    const card = document.createElement('div');
    card.className = 'edu-card reveal';
    card.style.transitionDelay = `${i * 0.1}s`;

    card.innerHTML = `
      <div class="edu-card-header">
        <div class="edu-card-left">
          <div class="edu-period">${edu.period}</div>
          <h2 class="edu-institution">${edu.institution}</h2>
          <p class="edu-location">${edu.location}</p>
        </div>
        <img class="edu-logo" src="${edu.logo}" alt="${edu.institution}">
      </div>
      <div class="edu-card-body">
        <div class="edu-degree">${tField(edu.degree)}</div>
        <div class="edu-field">${tField(edu.field)}</div>
        <ul class="edu-highlights">
          ${(tField(edu.highlights) || (edu.highlights[l] || edu.highlights.en) || []).map(h => `
            <li>${h}</li>
          `).join('')}
        </ul>
      </div>
    `;
    container.appendChild(card);
  });

  revealOnScroll(document.querySelectorAll('.edu-card.reveal'));
}
