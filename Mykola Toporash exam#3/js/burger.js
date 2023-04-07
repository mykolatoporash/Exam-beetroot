const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenuItems = document.querySelector('.nav-items');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
  hamburgerMenuItems.classList.toggle('open');
});
