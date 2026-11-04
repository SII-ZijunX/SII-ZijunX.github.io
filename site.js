// Representative works are selected editorially, independently of venue.
  const showSelectedBtn = document.getElementById('show-selected-btn');
  const showAllBtn = document.getElementById('show-all-btn');
  const publications = document.querySelectorAll('#publications .pub');

  function filterPublications(showAll) {
    publications.forEach(pub => {
      pub.hidden = !showAll && pub.dataset.selected !== 'true';
    });
    showSelectedBtn.classList.toggle('is-active', !showAll);
    showAllBtn.classList.toggle('is-active', showAll);
    showSelectedBtn.setAttribute('aria-pressed', String(!showAll));
    showAllBtn.setAttribute('aria-pressed', String(showAll));
  }

  showSelectedBtn.addEventListener('click', () => filterPublications(false));
  showAllBtn.addEventListener('click', () => filterPublications(true));
  filterPublications(false);

  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', function() {
    backToTop.classList.toggle('is-visible', window.scrollY > 220);
  }, { passive: true });
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile navigation toggle
  const siteNav = document.querySelector('.site-nav');
  const menuIcon = document.querySelector('.menu-icon');
  function closeMenu() {
    siteNav.classList.remove('is-open');
    menuIcon.setAttribute('aria-expanded', 'false');
  }
  menuIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    const isOpen = siteNav.classList.toggle('is-open');
    menuIcon.setAttribute('aria-expanded', String(isOpen));
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', function(event) {
    if (!siteNav.contains(event.target)) closeMenu();
  });
  siteNav.querySelectorAll('.page-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Section reveal on scroll and current-section highlight in the nav
  if ('IntersectionObserver' in window) {
    const sections = document.querySelectorAll('.section');

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: '0px 0px -8% 0px' });
      sections.forEach(section => {
        section.classList.add('reveal');
        revealObserver.observe(section);
      });
    }

    const pageLinks = siteNav.querySelectorAll('.page-link');
    const spyObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const current = siteNav.querySelector('.page-link[href="#' + entry.target.id + '"]');
        if (!entry.isIntersecting || !current) return;
        pageLinks.forEach(link => link.classList.toggle('is-current', link === current));
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    pageLinks.forEach(link => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) spyObserver.observe(target);
    });
  }
