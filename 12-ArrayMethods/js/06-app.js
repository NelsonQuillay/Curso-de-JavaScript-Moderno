const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//! todos los elementos de arreglo debe cumplir esa condicion para que EVERY te devuelva un TRUE

const resultado = carrito.every(producto => producto.precio < 1000);
console.log(resultado);


//! al menos 1 elementos de arreglo debe cumplir esa condicion para que SOME te devuelva un TRUE

const resultado2 = carrito.some(producto => producto.precio > 600);
console.log(resultado2);