const btnOpenMenu = document.querySelector(".navbar__menu-open");
const btnCloseMenu = document.querySelector(".navbar__menu-close");
const navbarMenu = document.querySelector(".navbar__list");
const overlay = document.querySelector(".overlay");

btnOpenMenu.addEventListener("click", () => {
  navbarMenu.classList.add("open-menu");
  btnCloseMenu.classList.add("open-menu");
  overlay.classList.add("open-menu");
});

btnCloseMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open-menu");
  btnCloseMenu.classList.remove("open-menu");
  overlay.classList.remove("open-menu");
});
