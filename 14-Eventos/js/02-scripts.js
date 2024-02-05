const nav = document.querySelector('nav');

// registrar un evento
/*nav.addEventListener('click', () => { //! click cuando haces click con el mause
    console.log('click en nav');
});*/

nav.addEventListener('mouseenter', () => { //! cuando estas con el puntero del mause sobre el boton antes de hacer click
    console.log('estas sobre el boton');
    nav.style.backgroundColor = 'transparent'
});

nav.addEventListener('mouseout', () => { //! cuando saliste del boton sin hacer click
    console.log('saliste del boton sin hacer click');
    nav.style.backgroundColor = 'black'
});

// mouseup (cuando sueltas al mouse) - mousedown (similar al click) - dblclicl (doble click)