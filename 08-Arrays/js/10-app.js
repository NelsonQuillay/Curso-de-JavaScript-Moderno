const carrito = [
    {nombre: 'monitor', precio: 300},
    {nombre: 'teclado', precio: 100},
    {nombre: 'mouse', precio: 20},
    {nombre: 'PC', precio: 4000},
    {nombre: 'USB', precio: 7},
];


const nuevoarreglo = carrito.forEach(function(producto){
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio} `;
})

const nuevoarreglo2 = carrito.map(function(producto){
    return `Nombre: ${producto.nombre} - Precio: ${producto.precio} `;
})

console.log(nuevoarreglo);
console.log(nuevoarreglo2);