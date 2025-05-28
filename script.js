// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const heroContent = document.getElementById('hero-content');
  const accordionItems = document.querySelectorAll('details');

  // Observer for hero section fade-in
  const heroObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        heroContent.classList.add('visible');
        heroObserver.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.5
  });

  if (heroContent) {
    heroObserver.observe(heroContent);
  }

  // Observer for each accordion detail fade-in
  const accordionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        accordionObserver.unobserve(entry.target); // Animate only once
      }
    });
  }, {
    threshold: 0.2
  });

  accordionItems.forEach(item => accordionObserver.observe(item));
});
