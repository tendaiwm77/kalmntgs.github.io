// Wait for everything to load, then hide loader and start animations
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (loader) {
    loader.style.display = 'none';
  }

  // Animate hero content fade-in
  const heroContent = document.getElementById('hero-content');
  if (heroContent) {
    heroContent.classList.add('visible');
  }

  // Animate accordion items on scroll with IntersectionObserver
  const accordionDetails = document.querySelectorAll('#accordion-section details');
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, options);

  accordionDetails.forEach(detail => observer.observe(detail));
});
