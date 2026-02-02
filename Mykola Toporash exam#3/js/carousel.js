(function () {
  'use strict';

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const slides = document.querySelectorAll('.slide');

  if (!nextBtn || !prevBtn || !slides.length) return;

  let currentIndex = 0;

  function showSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.style.display = i === currentIndex ? 'flex' : 'none';
    });
  }

  nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
  prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));

  showSlide(0);
})();
