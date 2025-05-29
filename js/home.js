// Fade-in animation for elements with the class 'fade-in-section'
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in-section');

  // Options for the IntersectionObserver
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  // Callback for when elements enter viewport
  const appearOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  // Check if browser supports IntersectionObserver
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(appearOnScroll, appearOptions);
    faders.forEach(fader => observer.observe(fader));
  } else {
    // Fallback: make all fade-in sections visible immediately
    faders.forEach(fader => fader.classList.add('visible'));
  }
});

