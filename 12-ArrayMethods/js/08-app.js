
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];


//! spread operator con arreglo de indices
const meses2 = ['Agosto', ...meses]
console.log(meses2);


//! spread operator con objeto
const producto = {nombre: 'Disco duro', precio: 850};
const carrito2 = [...carrito, producto];
console.log(carrito2);

const producto2 = [{nombre: 'Disco duro', precio: 850},
{nombre: 'Memoria', precio: 250}];
const carrito3 = [...carrito, producto2];
console.log(carrito3);

const producto3 = [{nombre: 'Disco duro', precio: 850},
{nombre: 'Memoria', precio: 250}];
const carrito4 = [...carrito, ...producto3]; 
console.log(carrito4);
