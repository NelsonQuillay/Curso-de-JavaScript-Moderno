"use strict";

const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}

// no se puede eliminar ni agregar prop, pero si modificar los valores de las prop ya existentes.
Object.seal (producto);

producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);
console.log(Object.isSealed(producto));

