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

  renderTechGraph();
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
    { href: 'skills.html', icon: '⬡', label: l === 'fr' ? 'Compétences' : 'Skills' },
    { href: 'experiences.html', icon: '◈', label: l === 'fr' ? 'Expériences' : 'Experience' },
    { href: 'projects.html', icon: '◻', label: l === 'fr' ? 'Projets' : 'Projects' },
    { href: 'education.html', icon: '◇', label: l === 'fr' ? 'Formation' : 'Education' },
    { href: 'about.html', icon: '◯', label: l === 'fr' ? 'À propos' : 'About' },
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
    const typeCls = e.type === 'cdi' ? 'badge-blue' : e.type === 'stage' ? 'badge-purple' : 'badge-gold';
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
    const badgeCls = proj.type === 'personal' ? 'badge-gold' : proj.type === 'school' ? 'badge-purple' : 'badge-blue';
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

// ─────────────────────────────────────────────────────────────
// TECH GRAPH
// ─────────────────────────────────────────────────────────────
function renderTechGraph() {
  const container = document.querySelector('.hero-grid-deco');
  if (!container) return;
  container.innerHTML = '';

  // Map techno → projets
  const techMap = {};
  DATA.projects.forEach(proj => {
    proj.tags.forEach(tag => {
      if (!techMap[tag]) techMap[tag] = [];
      if (!techMap[tag].find(p => p.id === proj.id)) techMap[tag].push(proj);
    });
  });

  const excluded = DATA.personal.graphExcludeTags || [];
  const techs = Object.entries(techMap)
    .filter(([tag]) => !excluded.includes(tag))
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 8)
    .map(([tag]) => tag);

  const initPct = [
    { top: 6, left: 30 },
    { top: 18, left: 65 },
    { top: 30, left: 8 },
    { top: 44, left: 50 },
    { top: 56, left: 15 },
    { top: 65, left: 68 },
    { top: 78, left: 35 },
    { top: 88, left: 55 },
  ];

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'graph-svg');
  container.appendChild(svg);

  let activeTag = null;
  let projNodes = [];
  const techNodes = {};

  // ── Créer les nœuds techno ──────────────────────────────────
  techs.forEach((tag, i) => {
    const pct = initPct[i] || { top: 10 + i * 11, left: 10 + (i % 2) * 50 };
    const isUx = ['Figma', 'DaVinci Resolve', 'UX Research', 'Design Systems', 'Wireframing', 'Prototyping'].includes(tag);

    const el = document.createElement('div');
    el.className = 'graph-node tech-node';
    el.dataset.tag = tag;
    el.style.top = `${pct.top}%`;
    el.style.left = `${pct.left}%`;
    el.innerHTML = `
      <span class="node-dot" style="background:${isUx ? 'var(--accent3)' : 'var(--accent2)'}"></span>
      <span class="node-label">${tag}</span>
    `;
    container.appendChild(el);
    techNodes[tag] = { el };
    makeDraggable(el, tag);
  });

  // Clic en dehors = fermer
  container.addEventListener('click', e => {
    if (!e.target.closest('.graph-node')) { clearGraph(); activeTag = null; }
  });

  // Clic sur nœud techno
  Object.entries(techNodes).forEach(([tag, { el }]) => {
    el.addEventListener('click', e => {
      if (el._wasDragged) return;
      e.stopPropagation();
      if (activeTag === tag) { clearGraph(); activeTag = null; }
      else { clearGraph(); activeTag = tag; el.classList.add('active'); showProjects(tag); }
    });
  });

  // ── Récupère les bounding boxes de TOUS les nœuds techno ────
  // en coordonnées relatives au container
  function getTechBoxes() {
    const cR = container.getBoundingClientRect();
    return Object.entries(techNodes).map(([tag, { el }]) => {
      const r = el.getBoundingClientRect();
      return {
        tag,
        x1: r.left - cR.left,
        y1: r.top - cR.top,
        x2: r.left - cR.left + r.width,
        y2: r.top - cR.top + r.height,
        cx: r.left - cR.left + r.width / 2,
        cy: r.top - cR.top + r.height / 2,
        w: r.width,
        h: r.height,
      };
    });
  }

  // ── Vérifie si un rectangle centre(px,py) taille(pw,ph)
  //    chevauche une liste de boîtes (avec marge de sécurité) ──
  function overlapsAny(px, py, pw, ph, boxes, margin) {
    const x1 = px - pw / 2 - margin;
    const y1 = py - ph / 2 - margin;
    const x2 = px + pw / 2 + margin;
    const y2 = py + ph / 2 + margin;
    return boxes.some(b => !(x2 < b.x1 || x1 > b.x2 || y2 < b.y1 || y1 > b.y2));
  }

  // ── Trouver une position libre par spirale angulaire ─────────
  function findFreePosition(nx, ny, baseAngle, techBoxes, placedBoxes, cW, cH) {
    // Taille estimée d'un nœud projet (avant rendu)
    const PW = 160, PH = 34;
    const margin = 12; // px de marge supplémentaire

    // On teste des spirales : distance croissante × angles décalés
    const distSteps = [140, 170, 200, 230, 110, 260];
    const angleSteps = 24; // 360 / 24 = 15° d'incrément

    for (const dist of distSteps) {
      for (let a = 0; a < angleSteps; a++) {
        const deg = baseAngle + (a * (360 / angleSteps));
        const rad = deg * Math.PI / 180;
        let px = nx + Math.cos(rad) * dist;
        let py = ny + Math.sin(rad) * dist;

        // Contraindre dans le container
        px = Math.max(PW / 2 + margin, Math.min(cW - PW / 2 - margin, px));
        py = Math.max(PH / 2 + margin, Math.min(cH - PH / 2 - margin, py));

        // Vérifier collision avec nœuds techno
        if (overlapsAny(px, py, PW, PH, techBoxes, margin)) continue;

        // Vérifier collision avec projets déjà placés
        if (overlapsAny(px, py, PW, PH, placedBoxes, margin)) continue;

        return { px, py };
      }
    }

    // Dernier recours : position forcée loin du centre
    const rad = baseAngle * Math.PI / 180;
    return {
      px: Math.max(PW / 2, Math.min(cW - PW / 2, nx + Math.cos(rad) * 200)),
      py: Math.max(PH / 2, Math.min(cH - PH / 2, ny + Math.sin(rad) * 200)),
    };
  }

  // ── Afficher les projets ─────────────────────────────────────
  function showProjects(tag) {
    const projects = techMap[tag];
    const cW = container.offsetWidth;
    const cH = container.offsetHeight;

    // Centre du nœud actif
    const cR = container.getBoundingClientRect();
    const nR = techNodes[tag].el.getBoundingClientRect();
    const nx = nR.left - cR.left + nR.width / 2;
    const ny = nR.top - cR.top + nR.height / 2;

    // Boîtes obstacles = tous les nœuds techno (y compris le nœud actif)
    const techBoxes = getTechBoxes();
    const placedBoxes = []; // projets déjà placés dans ce batch

    const count = Math.min(projects.length, 5);
    const angleSlice = 360 / count;

    projects.slice(0, 5).forEach((proj, i) => {
      // Angle de base uniformément réparti, avec un offset de 15° pour varier
      const baseAngle = i * angleSlice + 15;
      const { px, py } = findFreePosition(nx, ny, baseAngle, techBoxes, placedBoxes, cW, cH);

      // Enregistrer comme obstacle pour les suivants
      placedBoxes.push({ x1: px - 80, y1: py - 17, x2: px + 80, y2: py + 17 });

      // Trait SVG
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('x1', nx); line.setAttribute('y1', ny);
      line.setAttribute('x2', px); line.setAttribute('y2', py);
      line.setAttribute('class', 'graph-line');
      svg.appendChild(line);

      // Nœud projet
      const pNode = document.createElement('a');
      pNode.className = 'graph-node proj-node';
      pNode.href = `project.html?id=${proj.id}`;
      pNode.style.left = `${px}px`;
      pNode.style.top = `${py}px`;
      pNode.innerHTML = `<span class="node-label">${proj.title}</span>`;
      container.appendChild(pNode);
      projNodes.push(pNode);

      setTimeout(() => pNode.classList.add('visible'), i * 70);
    });

    repelNodes(nx, ny, tag);
  }

  // ── Répulsion quadratique ─────────────────────────────────────
  function repelNodes(nx, ny, excludeTag) {
    const repelRadius = 230;
    const maxPush = 110;

    Object.entries(techNodes).forEach(([tag, { el }]) => {
      if (tag === excludeTag) return;
      const cR = container.getBoundingClientRect();
      const nR = el.getBoundingClientRect();
      const cx = nR.left - cR.left + nR.width / 2;
      const cy = nR.top - cR.top + nR.height / 2;
      const dx = cx - nx, dy = cy - ny;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < repelRadius && dist > 0) {
        const ratio = 1 - dist / repelRadius;
        const force = ratio * ratio * maxPush;
        el.style.transition = 'transform .45s cubic-bezier(.4,0,.2,1)';
        el.style.transform = `translate(${(dx / dist) * force}px, ${(dy / dist) * force}px)`;
        el._repelled = true;
      }
    });
  }

  function resetRepel() {
    Object.values(techNodes).forEach(({ el }) => {
      if (el._repelled) {
        el.style.transition = 'transform .4s cubic-bezier(.4,0,.2,1)';
        el.style.transform = '';
        el._repelled = false;
      }
    });
  }

  function clearGraph() {
    projNodes.forEach(n => n.remove());
    projNodes = [];
    svg.innerHTML = '';
    Object.values(techNodes).forEach(({ el }) => el.classList.remove('active'));
    resetRepel();
  }

  // ── Drag & drop fluide ────────────────────────────────────────
  function makeDraggable(el, tag) {
    let startCX, startCY, startEL, startET;
    let dragging = false, rafId = null;
    let latestCX = 0, latestCY = 0;
    let wasActive = false;

    function getClient(e) { return e.touches ? e.touches[0] : e; }

    function onStart(e) {
      if (e.button !== undefined && e.button !== 0) return;
      const client = getClient(e);
      startCX = client.clientX;
      startCY = client.clientY;

      const cR = container.getBoundingClientRect();
      const nR = el.getBoundingClientRect();
      startEL = nR.left - cR.left;
      startET = nR.top - cR.top;

      el.style.transition = 'none';
      el.style.left = `${startEL}px`;
      el.style.top = `${startET}px`;

      dragging = false;
      el._wasDragged = false;

      document.addEventListener('mousemove', onMove);
      document.addEventListener('touchmove', onMove, { passive: false });
      document.addEventListener('mouseup', onEnd);
      document.addEventListener('touchend', onEnd);
    }

    function onMove(e) {
      e.preventDefault();
      const client = getClient(e);
      latestCX = client.clientX;
      latestCY = client.clientY;

      const dx = latestCX - startCX;
      const dy = latestCY - startCY;

      if (!dragging && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) {
        dragging = true;
        el._wasDragged = true;
        el.classList.add('dragging');

        if (activeTag === tag) {
          wasActive = true;
          clearGraph();
          activeTag = null;
        }
      }
      if (!dragging) return;

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const cdx = latestCX - startCX;
        const cdy = latestCY - startCY;
        const cR = container.getBoundingClientRect();
        const newL = Math.max(0, Math.min(cR.width - el.offsetWidth, startEL + cdx));
        const newT = Math.max(0, Math.min(cR.height - el.offsetHeight, startET + cdy));
        el.style.left = `${newL}px`;
        el.style.top = `${newT}px`;
      });
    }

    function onEnd() {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('mouseup', onEnd);
      document.removeEventListener('touchend', onEnd);
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }

      el.classList.remove('dragging');
      el.style.transition = '';

      if (dragging && wasActive) {
        setTimeout(() => {
          activeTag = tag;
          el.classList.add('active');
          showProjects(tag);
          wasActive = false;
        }, 80);
      }

      dragging = false;
      setTimeout(() => { el._wasDragged = false; }, 50);
    }

    el.addEventListener('mousedown', onStart);
    el.addEventListener('touchstart', onStart, { passive: false });
  }
}