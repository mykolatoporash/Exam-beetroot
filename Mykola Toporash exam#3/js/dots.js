// JS
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".header__nav-item");

window.addEventListener("scroll", () => {
  const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop - 100) - 1;
  navItems.forEach((item, index) => {
    if (index === current) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});

