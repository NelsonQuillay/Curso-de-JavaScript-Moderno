//  const primerEnlace = document.querySelector('a'); //busca la primera etiqueta de HTML <a>

//  console.log(primerEnlace);

//  primerEnlace.remove(); // elimino la primera etiqueta <a> o el primer elemento
//! se elimina el elemento por si mismo ()



//! Eliminar desde el padre
const nav = document.querySelector('nav');

console.log(nav.children);

nav.removeChild(nav.children[2]);
//! se debe pasar la referencia del elemento que quieres eliminar (nav.children[2])

