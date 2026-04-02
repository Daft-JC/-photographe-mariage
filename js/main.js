/* ===================================================
   PHOTOGRAPHE MARIAGE — JavaScript Principal
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initMobileMenu();
  initHero();

  // Pages spécifiques
  if (document.querySelector('.portfolio-masonry')) {
    initPortfolioFilter();
    initLightbox();
  }
  if (document.querySelector('.contact-form-el')) {
    initContactForm();
  }
});

/* ---------------------------------------------------
   NAVIGATION — scroll + lien actif
   --------------------------------------------------- */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  function onScroll() {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Lien actif
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
}

/* ---------------------------------------------------
   MENU MOBILE
   --------------------------------------------------- */
function initMobileMenu() {
  const toggle  = document.getElementById('navToggle');
  const mobile  = document.getElementById('navMobile');
  const closeBtn = document.getElementById('navMobileClose');
  if (!toggle || !mobile) return;

  function open() {
    mobile.classList.add('open');
    toggle.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    mobile.classList.remove('open');
    toggle.classList.remove('open');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', open);
  if (closeBtn) closeBtn.addEventListener('click', close);
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
}

/* ---------------------------------------------------
   ANIMATIONS AU SCROLL (Intersection Observer)
   --------------------------------------------------- */
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('.fade-up, .fade-in').forEach(el => obs.observe(el));
}

/* ---------------------------------------------------
   HERO — animation d'entrée
   --------------------------------------------------- */
function initHero() {
  const bg = document.querySelector('.hero-bg');
  if (!bg) return;
  requestAnimationFrame(() => {
    setTimeout(() => bg.classList.add('loaded'), 80);
  });
}

/* ---------------------------------------------------
   FILTRE PORTFOLIO
   --------------------------------------------------- */
function initPortfolioFilter() {
  const tabs  = document.querySelectorAll('.filter-tab');
  const items = document.querySelectorAll('.gallery-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const cat = tab.dataset.filter;

      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      items.forEach(item => {
        const show = cat === 'all' || item.dataset.category === cat;
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

/* ---------------------------------------------------
   LIGHTBOX
   --------------------------------------------------- */
function initLightbox() {
  const lightbox  = document.getElementById('lightbox');
  if (!lightbox) return;

  const img    = lightbox.querySelector('.lightbox-img');
  const close  = lightbox.querySelector('.lightbox-close');
  const prev   = lightbox.querySelector('.lightbox-prev');
  const next   = lightbox.querySelector('.lightbox-next');

  let srcs  = [];
  let idx   = 0;

  function getVisibleSrcs() {
    return [...document.querySelectorAll('.gallery-item:not(.hidden) img')]
      .map(i => i.src);
  }

  function openLB(src) {
    srcs = getVisibleSrcs();
    idx  = srcs.indexOf(src);
    img.src = src;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLB() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    idx = (idx + dir + srcs.length) % srcs.length;
    img.style.opacity = '0';
    setTimeout(() => {
      img.src = srcs[idx];
      img.style.opacity = '1';
    }, 220);
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.querySelector('img')?.src;
      if (src) openLB(src);
    });
  });

  close.addEventListener('click', closeLB);
  prev.addEventListener('click',  () => navigate(-1));
  next.addEventListener('click',  () => navigate(1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLB(); });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')      closeLB();
    if (e.key === 'ArrowLeft')   navigate(-1);
    if (e.key === 'ArrowRight')  navigate(1);
  });
}

/* ---------------------------------------------------
   FORMULAIRE DE CONTACT
   --------------------------------------------------- */
function initContactForm() {
  const form    = document.querySelector('.contact-form-el');
  const success = document.querySelector('.form-success');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Envoi en cours…';
    btn.disabled = true;

    // Simulation envoi (à remplacer par votre backend / service mail)
    setTimeout(() => {
      form.style.display = 'none';
      if (success) success.style.display = 'block';
    }, 1600);
  });
}
