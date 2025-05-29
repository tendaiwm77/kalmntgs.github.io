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
