/* ═══════════════════════════════════════════
   NAM Lab — Interactive Scripts
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  // ── Loader ──
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('is-hidden');
    setTimeout(() => {
      document.querySelectorAll('.hero [data-anim]').forEach(el => el.classList.add('is-visible'));
    }, 200);
  }, 1400);

  // ── Cursor Glow ──
  const glow = document.getElementById('cursorGlow');
  if (window.innerWidth > 1024 && glow) {
    let mx = 0, my = 0, gx = 0, gy = 0;
    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; glow.classList.add('is-active'); });
    document.addEventListener('mouseleave', () => glow.classList.remove('is-active'));
    (function anim() {
      gx += (mx - gx) * .07; gy += (my - gy) * .07;
      glow.style.left = gx + 'px'; glow.style.top = gy + 'px';
      requestAnimationFrame(anim);
    })();
  }

  // ── Scroll Animations ──
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        e.target.querySelectorAll('[data-count]').forEach(c => animCount(c));
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -30px 0px' });
  document.querySelectorAll('[data-anim]:not(.hero [data-anim])').forEach(el => obs.observe(el));

  // Counter observer for stats bar
  document.querySelectorAll('.hero__stat').forEach(el => {
    const co = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('[data-count]').forEach(c => animCount(c)); co.unobserve(e.target); } });
    }, { threshold: .5 });
    co.observe(el);
  });

  function animCount(el) {
    if (el.dataset.done) return;
    el.dataset.done = '1';
    const t = parseFloat(el.dataset.count), dec = t % 1 !== 0, dur = 2200, s = performance.now();
    (function tick(now) {
      const p = Math.min((now - s) / dur, 1), e = 1 - Math.pow(1 - p, 4);
      el.textContent = dec ? (e * t).toFixed(1) : Math.round(e * t);
      if (p < 1) requestAnimationFrame(tick);
    })(s);
  }

  // ── Nav scroll ──
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('nav--scrolled', scrollY > 50), { passive: true });

  // ── Mobile menu ──
  const burger = document.getElementById('burger'), mm = document.getElementById('mobileMenu');
  if (burger && mm) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-open'); mm.classList.toggle('is-open');
      document.body.style.overflow = mm.classList.contains('is-open') ? 'hidden' : '';
    });
    mm.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mm.classList.remove('is-open'); burger.classList.remove('is-open'); document.body.style.overflow = '';
    }));
  }

  // ── Smooth scroll ──
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); window.scrollTo({ top: t.offsetTop - 80, behavior: 'smooth' }); }
    });
  });

  // ── Service Accordions ──
  document.querySelectorAll('.svc__head').forEach(h => {
    h.addEventListener('click', () => {
      const s = h.parentElement, wasOpen = s.classList.contains('is-open');
      document.querySelectorAll('.svc.is-open').forEach(d => d.classList.remove('is-open'));
      if (!wasOpen) s.classList.add('is-open');
    });
  });
  const first = document.querySelector('.svc');
  if (first) first.classList.add('is-open');

  // ── Parallax Orbs ──
  if (window.innerWidth > 1024) {
    const orbs = document.querySelectorAll('.hero__orb');
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - .5) * 2, y = (e.clientY / innerHeight - .5) * 2;
      orbs.forEach((o, i) => { const f = (i + 1) * 12; o.style.transform = `translate(${x*f}px,${y*f}px)`; });
    });
  }

});
