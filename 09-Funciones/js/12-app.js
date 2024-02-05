const carrito = [
    {nombre: 'monitor', precio: 300},
    {nombre: 'teclado', precio: 100},
    {nombre: 'mouse', precio: 20},
    {nombre: 'PC', precio: 4000},
    {nombre: 'USB', precio: 7},
];

const nuevoarreglo2 = carrito.map(producto => `Nombre: ${producto.nombre} - Precio: ${producto.precio}`)

carrito.forEach(producto => console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}`))

console.log(nuevoarreglo2);