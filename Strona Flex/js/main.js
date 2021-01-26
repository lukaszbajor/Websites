const burger = document.querySelector(".burger");
const mainBurger = document.querySelector(".burger__bars");
const closeBurger = document.querySelector(".burger__bars-close");
const nav = document.querySelector(".nav");
const navItemsBox = document.querySelector(".nav__items");
const navItemAll = document.querySelectorAll(".nav__item");
const footerYear = document.querySelector(".footer__number-year");

const clipPathEffect = () => {
  nav.classList.toggle("nav-active");
  if (nav.classList.contains("nav-active")) {
    mainBurger.style.display = "none";
    closeBurger.style.display = "block";
  } else {
    mainBurger.style.display = "block";
    closeBurger.style.display = "none";
  }
  navItemsBox.classList.toggle("nav-animation");
  navItemAll.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      navItemsBox.classList.remove("nav-animation");
      mainBurger.style.display = "block";
      closeBurger.style.display = "none";
    });
  });
};

const currentYear = function () {
  const year = new Date().getFullYear();
  footerYear.textContent = year + " ";
};
currentYear();
burger.addEventListener("click", clipPathEffect);
