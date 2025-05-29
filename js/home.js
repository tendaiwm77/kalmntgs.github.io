// Counter animation for stats
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });

  // Fade-in on scroll
  const fadeSections = document.querySelectorAll(".fade-in-section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  fadeSections.forEach(section => observer.observe(section));
});

<!-- Other content above... -->

<!-- 📌 Place this at the end of your HTML file -->
<script>
  const carousel = document.querySelector('.stats-carousel');
  const dots = document.querySelectorAll('.dot');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const totalSlides = dots.length;
  let currentSlide = 0;
  let autoSlide;

  function goToSlide(index) {
    currentSlide = (index + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlide() {
    goToSlide(currentSlide - 1);
  }

  rightArrow.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
  });

  leftArrow.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoSlide();
    });
  });

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  // Init
  goToSlide(0);
  startAutoSlide();
</script>
