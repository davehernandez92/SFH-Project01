

const hamburguer = document.querySelector('.nav__hamburger');
const sideMenu = document.querySelector('.side__menu');
const sideItem = document.querySelectorAll('.side__item')
const bookTrip = document.getElementById('bookTrip');
const submitButton = document.getElementById('submitButton');
const form = document.querySelector('.form');


// Menu on click for book trip 
bookTrip.addEventListener('click', (e) => {
    location.href = '/bookTrip';
});

//Hamburger on click event & show menu

hamburguer.addEventListener('click', () => {
    sideMenu.classList.toggle("show__menu");

}); 

sideItem.forEach(item => {
    
    item.addEventListener('click', () => {
        sideMenu.classList.toggle("show__menu");
    })
});

// Form validation 

submitButton.disabled = true;

let checkInput = () => {
    const date = document.querySelector('.dateInput');
    const email = document.querySelector('.emailInput');
    const location = document.getElementById('locations');
    
    if( date.value !='' && email.value != '' && location.value != 'none' ){
        submitButton.disabled = false;
    } else{
        submitButton.disabled = true;

    }
   
 }

form.addEventListener('change', () => {
    checkInput()
})









