//!querySelectorAll

const card = document.querySelectorAll('.card');
console.log(card);

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);


// si un elemento no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); // no arroja error, solo me entrega un arreglo vacio