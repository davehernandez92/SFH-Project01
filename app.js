const hamburguer = document.querySelector('.nav__hamburger');
const sideMenu = document.querySelector('.side__menu');

hamburguer.addEventListener('click', () => {
    sideMenu.classList.toggle("show__menu");
})