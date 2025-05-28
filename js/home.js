// Fade-in animation for sections when they scroll into view
document.addEventListener('DOMContentLoaded', () => {
  const fadeSections = document.querySelectorAll('.fade-in-section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optional: run animation only once
      }
    });
  }, { threshold: 0.1 });

  fadeSections.forEach(section => {
    observer.observe(section);
  });
});
