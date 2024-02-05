// window.addEventListener ('scroll', () => {
//     console.log('scrolling');
// })

window.addEventListener ('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    // console.log( ubicacion);

    if(ubicacion.top < 700) {
        console.log('Elemento encontrado');
    } else {
        console.log('Aun no encontras el elemento');
    }

})