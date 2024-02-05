//  Event Bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const tituloP = document.querySelector('.titulo');

//! Event Bubbling = el evento se propaga hacia lo demas
//! cuando haces click en titulo la consola te muestra el titulo pero tambien info y card.
//! cuando haces click en info la consola te muestra info pero tambien card.

// cardDiv.addEventListener('click', () => {
//     console.log('click en card');
// });

// infoDiv.addEventListener('click', () => {
//     console.log('click en info');
// });

// tituloP.addEventListener('click', () => {
//     console.log('click en titulo');
// });

//! con stopPropagation podemos frenar el event Bubbling
cardDiv.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('click en card');
});

infoDiv.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('click en info');
});

tituloP.addEventListener('click', (event) => {
    event.stopImmediatePropagation();
    console.log('click en titulo');
});