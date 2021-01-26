const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const menuBurger = () => {
    nav.classList.toggle("active");
}

burger.addEventListener('click', menuBurger)