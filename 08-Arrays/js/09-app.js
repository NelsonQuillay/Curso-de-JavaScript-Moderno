const carrito = [
    {nombre: 'monitor', precio: 300},
    {nombre: 'teclado', precio: 100},
    {nombre: 'mouse', precio: 20},
    {nombre: 'PC', precio: 4000},
    {nombre: 'USB', precio: 7},
];


// for (let i = 0; i < carrito.length; i++) {
//     const nombre = carrito[i].nombre;
//     const precio = carrito[i].precio;
//     const nombrePrecio = `Nombre: ${carrito[i].nombre} - Precio: ${carrito[i].precio} `;
//     console.log(nombre);
//     console.log(precio);
//     console.log(nombrePrecio);
// }   


carrito.forEach(function(producto){
    const nombrePrecio = `Nombre: ${producto.nombre} - Precio: ${producto.precio} `;
    console.log(nombrePrecio);
})