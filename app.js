const hamburguer = document.querySelector('.nav__hamburger');
const sideMenu = document.querySelector('.side__menu');
const sideItem = document.querySelectorAll('.side__item')

hamburguer.addEventListener('click', () => {
    sideMenu.classList.toggle("show__menu");

})

sideItem.forEach(item => {
    
    item.addEventListener('click', () => {
        sideMenu.classList.toggle("show__menu");
    })
});