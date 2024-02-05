// const navegacion = document.querySelector('.navegacion');

// console.log(navegacion);
// console.log(navegacion.childNodes); // los espacios en blanco son considerados elementos
// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName); //<--- A
// console.log(navegacion.children[1].nodeType); //<--- 1

//const card = document.querySelector ('.card');

//! traversing de padre a hijo "children"

// card.children[1].children[1].textContent = 'Nelson Quillay desde traversing the DOM'
// // console.log(card.children[1].children[1].textContent);
// card.children[0].src = 'img/nelson.jpeg'
// console.log(card.children[0]);

//! traversing de hijo a padre "parentElement"

// console.log(card.parentNode); se recomienda usar parenElement es mas limpio el codigo
// console.log(card.parentElement.parentElement);

//! traversing de hermano a hermano ".nextElementSibling" (siguiente)

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

//! traversing de hermano a hermano ".previousElementSibling" (anterior)

// const ultimoCard = document.querySelector ('.card:last-child');//last-child o para este caso nth-child(4) para ir a la ultima card y desde ahi volver a las anteriores
// console.log(ultimoCard.previousElementSibling);



const navegacion = document.querySelector('.navegacion');

//!para obtener el primer hijo o elemento
// console.log(navegacion.children[0]);
console.log(navegacion.firstElementChild);

//!para obtener el ultimo hijo o elemento
// console.log(navegacion.children[3]);
console.log(navegacion.lastElementChild);