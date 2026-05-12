/* =============================================
   SCRIPT — Discord & Minecraft Portfolio
   ============================================= */

// CURSOR
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0, fX = 0, fY = 0;
document.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  cursor.style.left = mouseX + 'px'; cursor.style.top = mouseY + 'px';
});
(function tick() {
  fX += (mouseX - fX) * 0.11; fY += (mouseY - fY) * 0.11;
  cursorFollower.style.left = fX + 'px'; cursorFollower.style.top = fY + 'px';
  requestAnimationFrame(tick);
})();
function addCursorExpand(els) {
  els.forEach(el => {
    el.addEventListener('mouseenter', () => cursorFollower.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursorFollower.classList.remove('expand'));
  });
}
addCursorExpand(document.querySelectorAll('a, button, .feat-card, .badge'));

// NAV SCROLL
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50), { passive: true });

// MOBILE MENU
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('open');
  navToggle.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => {
  mobileMenu.classList.remove('open'); navToggle.classList.remove('open'); document.body.style.overflow = '';
}));

// REVEAL
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
    const idx = Math.max(0, siblings.indexOf(entry.target));
    setTimeout(() => entry.target.classList.add('visible'), Math.min(idx * 70, 280));
    revealObs.unobserve(entry.target);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -32px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// SKILL BARS
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.skill-row__fill').forEach((fill, i) =>
      setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, i * 80));
    skillObs.unobserve(entry.target);
  });
}, { threshold: 0.3 });
document.querySelectorAll('.skills__group').forEach(g => skillObs.observe(g));

// SMOOTH ANCHOR SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight, behavior: 'smooth' });
  });
});

// ACTIVE NAV
const navLinks = document.querySelectorAll('.nav__links a');
const activeObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(l => l.style.color = '');
    const active = document.querySelector(`.nav__links a[href="#${entry.target.id}"]`);
    if (active) active.style.color = 'var(--text-1)';
  });
}, { threshold: 0.45 });
document.querySelectorAll('section[id]').forEach(s => activeObs.observe(s));

// HERO PARALLAX
const orb1 = document.querySelector('.hero__orb--1');
const orb2 = document.querySelector('.hero__orb--2');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (orb1) orb1.style.transform = `translateY(${y * 0.13}px)`;
  if (orb2) orb2.style.transform = `translateY(${y * -0.08}px)`;
}, { passive: true });

// =============================================
// ALL PROJECTS DATA
// =============================================
const DISCORD_LINK = 'https://discord.com/channels/1366388402173382718/1366405111378743400';

const allProjects = [
  // DISCORD
  {
    cat: 'discord', catLabel: 'Discord', title: 'Pakiet brąz',
    desc: 'Mały serwer z podstawowymi kanałami i botami, bez dogłębnej konfiguracji oraz zaawansowanych funkcji.',
    tech: ['dc'], price: '15 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Pakiet iron',
    desc: 'Średniej wielkości serwer z rozbudowanymi kanałami i rangami, konfiguracją bardziej zaawansowanych botów oraz systemem statystyk.',
    tech: ['dc'], price: '30 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Pełny setup serwera Discord',
    desc: 'Rozbudowany serwer z konfiguracją ekonomii, statystyk, weryfikacji, lobby, logów, autoroli oraz estetycznych embedów itd. Pakiet zawiera również przygotowanie podstawowych treści i opisów kanałów.',
    tech: ['dc'], price: '50 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Minecraft + Discord',
    desc: 'Kompleksowy setup serwera Minecraft oraz serwera Discord połączone integracją DiscordSRV. Kanały, rangi, logi, chat synchronizowany między platformami i optymalizacja. (dodatkowe wsparcie techniczne)',
    tech: ['dc'], price: 'od 230 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Kanały',
    desc: 'Pełna konfiguracja kanałów. Ustawienie nazw, opisów i permisji.',
    tech: ['dc'], price: 'od 10 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Rangi',
    desc: 'Pełna konfiguracja rang. Ustawienie nazw i permisji.',
    tech: ['dc'], price: 'od 10 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Konfiguracja botów',
    desc: 'Pełna konfiguracja publicznych botów. Skonfigurowanie automod, antyspam, linki, caps-lock, logi i inne.',
    tech: ['dc'], price: 'od 10 zł',
    btn1: 'Podgląd', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'System ticketów',
    desc: 'Profesjonalny system zgłoszeń z kategoryzacją, wiadomościami i permisjami.',
    tech: ['dc'], price: 'od 10 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Konfiguracja wiadomości',
    desc: 'Konfiguracja automatycznych wiadomości wysyłane przez boty np. wiadomości powitalne. ',
    tech: ['dc'], price: 'od 5 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5865F2'
  },
  {
    cat: 'discord', catLabel: 'Discord', title: 'Inne usługi',
    desc: 'Jeżeli nie znalazłeś tutaj to czego szukasz skontaktuj się przez discorda. Chętnie znajdziemy rozwiązanie!',
    tech: ['dc'], price: '',
    btn1: 'Zapytaj', btn2: 'Przejdź na discorda', color: '#5865F2'
  },
  

  // MINECRAFT
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Pełny setup serwera Minecraft',
    desc: 'Pełna instalacja i konfiguracja serwera minecraft z pluginami, permisjami i optymalizacją pod wydajność. (dodatkowe wsparcie techniczne)',
    tech: ['mc'], price: 'od 200 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Minecraft + Discord',
    desc: 'Kompleksowy setup serwera Minecraft oraz serwera Discord połączone integracją DiscordSRV. Kanały, rangi, logi, chat synchronizowany między platformami i optymalizacja. (dodatkowe wsparcie techniczne)',
    tech: ['mc'], price: 'od 230 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Konfiguracja pluginów',
    desc: 'Pełna konfiguracja pluginów. Ustawienie wszystkich wiadomości oraz zastosowań pluginów.',
    tech: ['mc'], price: 'od 70 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Konfiguracja sieci serwerów',
    desc: 'Setup sieci proxy łączącej kilka serwerów z wspólnym logowaniem i balansowaniem obciążenia.',
    tech: ['mc'], price: 'od 40 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Optymalizacja serwera',
    desc: 'Poprawa TPS, redukcja lag, konfiguracja silnika i timing raport.',
    tech: ['mc'], price: 'od 20 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Konfiguracja części estetycznej',
    desc: 'Całkowita estetyczna konfiguracja wszystkich powiadomień, wiadomości, informacji, tablist itd.',
    tech: ['mc'], price: 'od 50 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'System rang i permisji',
    desc: 'Pełna konfiguracja rang, grup, prefixów i permisji.',
    tech: ['mc'], price: 'od 35 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Połączenie discord - minecraft',
    desc: 'Pełne połączenie serwera discord z serwerem minecraft.',
    tech: ['mc'], price: 'od 35 zł',
    btn1: 'Zapytaj', btn2: 'Zamów', color: '#5ba85a'
  },
  {
    cat: 'minecraft', catLabel: 'Minecraft', title: 'Inne usługi',
    desc: 'Jeżeli nie znalazłeś tutaj to czego szukasz skontaktuj się przez discorda. Chętnie znajdziemy rozwiązanie!',
    tech: ['mc'], price: '',
    btn1: 'Zapytaj', btn2: 'Przejdź na discorda', color: '#5ba85a'
  },
];

function buildModalThumb(color, cat) {
  if (cat === 'discord') {
    return `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <rect width="320" height="140" fill="#181a1e"/>
      <rect x="0" y="0" width="42" height="140" fill="#1a1c20"/>
      <circle cx="21" cy="20" r="14" fill="${color}" fill-opacity=".2" stroke="${color}" stroke-opacity=".4" stroke-width="1"/>
      <circle cx="21" cy="48" r="10" fill="#2a2d34" stroke="#32363f" stroke-width="1"/>
      <circle cx="21" cy="70" r="10" fill="#2a2d34" stroke="#32363f" stroke-width="1"/>
      <rect x="42" y="0" width="106" height="140" fill="#1e2025"/>
      <rect x="50" y="16" width="90" height="6" rx="2" fill="#303540"/>
      <rect x="50" y="30" width="70" height="5" rx="2" fill="#252830"/>
      <rect x="50" y="44" width="80" height="5" rx="2" fill="#252830"/>
      <rect x="50" y="58" width="65" height="5" rx="2" fill="#252830"/>
      <rect x="50" y="78" width="90" height="6" rx="2" fill="#303540"/>
      <rect x="50" y="92" width="75" height="5" rx="2" fill="#252830"/>
      <rect x="148" y="0" width="172" height="140" fill="#22242a"/>
      <rect x="156" y="14" width="110" height="18" rx="3" fill="#2a2d34"/>
      <rect x="162" y="19" width="30" height="8" rx="2" fill="${color}" fill-opacity=".3"/>
      <rect x="198" y="19" width="60" height="8" rx="2" fill="#32363f"/>
      <rect x="156" y="42" width="155" height="14" rx="3" fill="#2a2d34"/>
      <rect x="162" y="47" width="24" height="4" rx="1" fill="${color}" fill-opacity=".5"/>
      <rect x="192" y="47" width="80" height="4" rx="1" fill="#32363f"/>
      <rect x="156" y="66" width="155" height="14" rx="3" fill="#2a2d34"/>
      <rect x="162" y="71" width="24" height="4" rx="1" fill="#5ba85a" fill-opacity=".5"/>
      <rect x="192" y="71" width="60" height="4" rx="1" fill="#32363f"/>
      <rect x="156" y="95" width="155" height="20" rx="4" fill="#2a2d34"/>
      <rect x="162" y="101" width="100" height="8" rx="2" fill="#32363f"/>
    </svg>`;
  } else {
    return `<svg viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:100%">
      <rect width="320" height="140" fill="#181a1e"/>
      <rect x="0" y="0" width="320" height="36" fill="#1a1c20"/>
      <rect x="12" y="13" width="60" height="10" rx="2" fill="#303540"/>
      <rect x="220" y="11" width="88" height="14" rx="3" fill="${color}" fill-opacity=".15" stroke="${color}" stroke-opacity=".3" stroke-width="1"/>
      <rect x="228" y="15" width="72" height="6" rx="1" fill="${color}" fill-opacity=".5"/>
      <rect x="12" y="48" width="142" height="80" rx="4" fill="#1e2025"/>
      <rect x="20" y="56" width="80" height="7" rx="2" fill="#303540"/>
      <rect x="20" y="70" width="126" height="5" rx="2" fill="#252830"/>
      <rect x="20" y="80" width="110" height="5" rx="2" fill="#252830"/>
      <rect x="20" y="90" width="120" height="5" rx="2" fill="#252830"/>
      <rect x="20" y="106" width="48" height="14" rx="3" fill="${color}" fill-opacity=".15" stroke="${color}" stroke-opacity=".3" stroke-width="1"/>
      <rect x="26" y="110" width="36" height="6" rx="1" fill="${color}" fill-opacity=".5"/>
      <rect x="166" y="48" width="142" height="36" rx="4" fill="#1e2025"/>
      <rect x="174" y="58" width="90" height="6" rx="2" fill="#303540"/>
      <rect x="174" y="70" width="126" height="5" rx="2" fill="#252830"/>
      <rect x="166" y="92" width="142" height="36" rx="4" fill="#1e2025"/>
      <rect x="174" y="102" width="80" height="6" rx="2" fill="#303540"/>
      <rect x="174" y="114" width="110" height="5" rx="2" fill="#252830"/>
    </svg>`;
  }
}

function renderModalCards(filter) {
  const grid = document.getElementById('modalGrid');
  grid.innerHTML = '';
  const list = (filter === 'all') ? allProjects : allProjects.filter(p => p.cat === filter);
  list.forEach(p => {
    const isDiscord = p.cat === 'discord';
    const card = document.createElement('article');
    card.className = 'modal-card';
    card.innerHTML = `
      <div class="modal-card__thumb">${buildModalThumb(p.color, p.cat)}</div>
      <div class="modal-card__body">
        <div class="modal-card__meta">
          <span class="modal-card__cat modal-card__cat--${p.cat}">${p.catLabel}</span>
          <span class="modal-card__price">${p.price}</span>
        </div>
        <h3 class="modal-card__title">${p.title}</h3>
        <p class="modal-card__desc">${p.desc}</p>
      </div>
      <div class="modal-card__footer">
        <a href="${DISCORD_LINK}" target="_blank" rel="noopener" class="btn btn--sm btn--${isDiscord ? 'discord-sm' : 'mc-sm'}"><span>${p.btn2}</span></a>
      </div>`;
    grid.appendChild(card);
  });
  addCursorExpand(grid.querySelectorAll('.modal-card, .btn'));
}

// MODAL OPEN / CLOSE
const modalOverlay = document.getElementById('projectsModal');
const closeBtn = document.getElementById('closeModal');
let currentFilter = 'all';

function openModal() {
  renderModalCards(currentFilter);
  // sync active filter button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === currentFilter));
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('showAllProjects').addEventListener('click', openModal);
document.getElementById('showAllProjects2').addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// MODAL FILTERS
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderModalCards(currentFilter);
  });
});

// =============================================
// SEKCJA OPINIE — karuzela 1 karta na raz
// =============================================
(function initReviews() {
  const track    = document.getElementById('reviewsTrack');
  const dotsWrap = document.getElementById('reviewsDots');
  const btnPrev  = document.getElementById('revPrev');
  const btnNext  = document.getElementById('revNext');
  if (!track) return;

  const wrap  = track.parentElement;          // .reviews__track-wrap
  const cards = Array.from(track.querySelectorAll('.rev-card'));
  const total = cards.length;
  let current  = 0;
  let autoTimer = null;

  // ── Szerokość 1 slajdu = szerokość wrappera (100%) ──────────
  function slideW() {
    return wrap.offsetWidth;
  }

  // ── Przejdź do slajdu idx ────────────────────────────────────
  function goTo(idx, animated) {
    if (animated === undefined) animated = true;
    // clamp
    current = Math.max(0, Math.min(idx, total - 1));

    const offset = current * slideW();

    if (animated) {
      track.style.transition = 'transform .48s cubic-bezier(0.4, 0, 0.2, 1)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = 'translateX(-' + offset + 'px)';

    // dots
    dots.forEach(function(d, i) { d.classList.toggle('active', i === current); });

    // buttons dim
    btnPrev.style.opacity = current === 0 ? '.3' : '1';
    btnPrev.style.pointerEvents = current === 0 ? 'none' : '';
    btnNext.style.opacity = current === total - 1 ? '.3' : '1';
    btnNext.style.pointerEvents = current === total - 1 ? 'none' : '';
  }

  // ── Dots ─────────────────────────────────────────────────────
  cards.forEach(function(_, i) {
    var dot = document.createElement('button');
    dot.className = 'rev-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Opinia ' + (i + 1));
    dot.addEventListener('click', function() { clearAuto(); goTo(i); resetAuto(); });
    dotsWrap.appendChild(dot);
  });
  var dots = Array.from(dotsWrap.querySelectorAll('.rev-dot'));
  addCursorExpand(dots);

  // Inicjalizacja
  goTo(0, false);

  // ── Autoplay ─────────────────────────────────────────────────
  function startAuto() {
    autoTimer = setInterval(function() {
      goTo(current < total - 1 ? current + 1 : 0);
    }, 5500);
  }
  function clearAuto() { clearInterval(autoTimer); }
  function resetAuto() { clearAuto(); startAuto(); }
  startAuto();

  // ── Strzałki ─────────────────────────────────────────────────
  btnPrev.addEventListener('click', function() { clearAuto(); goTo(current - 1); resetAuto(); });
  btnNext.addEventListener('click', function() { clearAuto(); goTo(current + 1); resetAuto(); });

  // ── Drag (mysz) — max przesunięcie = 1 karta ─────────────────
  var dragStartX = 0;
  var dragStartCurrent = 0;
  var isDragging = false;
  var THRESHOLD = 60;   // px żeby zmienić slajd

  wrap.addEventListener('mousedown', function(e) {
    isDragging = true;
    dragStartX = e.clientX;
    dragStartCurrent = current;
    track.style.transition = 'none';
    wrap.style.cursor = 'grabbing';
    clearAuto();
    e.preventDefault();
  });

  window.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    var dx = e.clientX - dragStartX;
    // Ogranicz drag: max ± 1 slajd, max ± slideW()
    var maxDrag = slideW() * 0.75;
    var clampedDx = Math.max(-maxDrag, Math.min(maxDrag, dx));
    var baseOffset = dragStartCurrent * slideW();
    track.style.transform = 'translateX(' + (-baseOffset + clampedDx) + 'px)';
  });

  window.addEventListener('mouseup', function(e) {
    if (!isDragging) return;
    isDragging = false;
    wrap.style.cursor = 'grab';
    var dx = e.clientX - dragStartX;
    if (dx < -THRESHOLD) goTo(dragStartCurrent + 1);
    else if (dx > THRESHOLD) goTo(dragStartCurrent - 1);
    else goTo(dragStartCurrent);
    resetAuto();
  });

  // ── Touch (mobile) — max 1 karta na swipe ────────────────────
  var touchStartX = 0;
  var touchStartCurrent = 0;
  var TOUCH_THRESHOLD = 50;

  wrap.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
    touchStartCurrent = current;
    track.style.transition = 'none';
    clearAuto();
  }, { passive: true });

  wrap.addEventListener('touchmove', function(e) {
    var dx = e.touches[0].clientX - touchStartX;
    var maxDrag = slideW() * 0.75;
    var clampedDx = Math.max(-maxDrag, Math.min(maxDrag, dx));
    var baseOffset = touchStartCurrent * slideW();
    track.style.transform = 'translateX(' + (-baseOffset + clampedDx) + 'px)';
  }, { passive: true });

  wrap.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (dx < -TOUCH_THRESHOLD) goTo(touchStartCurrent + 1);
    else if (dx > TOUCH_THRESHOLD) goTo(touchStartCurrent - 1);
    else goTo(touchStartCurrent);
    resetAuto();
  });

  // ── Klawiatura ────────────────────────────────────────────────
  document.addEventListener('keydown', function(e) {
    var section = document.getElementById('reviews');
    if (!section) return;
    var rect = section.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    if (e.key === 'ArrowLeft')  { clearAuto(); goTo(current - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { clearAuto(); goTo(current + 1); resetAuto(); }
  });

  // ── Resize — przelicz pozycję bez animacji ────────────────────
  var resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() { goTo(current, false); }, 80);
  }, { passive: true });

  // ── Cursor expand ─────────────────────────────────────────────
  addCursorExpand(cards);
})();
