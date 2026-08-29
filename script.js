// Perioperative Partners — light interactions
(() => {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Sticky nav shadow when scrolled
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 8) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Smooth-scroll for in-page anchor links.
  // Native CSS smooth-scroll doesn't always fire when the page is embedded in
  // an iframe (e.g. the /computer/a artifact preview) because the iframe's
  // history can't fully update the outer URL. Attaching an explicit handler
  // that calls scrollIntoView() is robust in both standalone and iframe contexts.
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const href = a.getAttribute('href');
    if (!href || href === '#' || href.length < 2) return;
    a.addEventListener('click', (e) => {
      const id = href.slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      // Update the hash without triggering another scroll jump.
      if (history.replaceState) history.replaceState(null, '', '#' + id);
      // Move focus for a11y (without stealing scroll).
      const prev = target.getAttribute('tabindex');
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (prev === null) target.removeAttribute('tabindex');
      else target.setAttribute('tabindex', prev);
    });
  });

  // Reveal on scroll (respect reduced motion)
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    const targets = document.querySelectorAll('.section, .services, .services__intro, .hero__inner, .hero__meta, .bleed__quote, .service, .who__card, .pathway li');
    targets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => io.observe(el));
  }
})();
