//! funciones imperativa

const carrito = [];

const producto = {
    nombre: 'monitor',
    precio: 500
};

const producto2 = {
    nombre: 'celular',
    precio: 2000
};

const producto3 = {
    nombre: 'teclado',
    precio: 100
};

const producto4 = {
    nombre: 'box',
    precio: 9
};


carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)
carrito.unshift(producto4)


//! funciones imperativa


//?eleminar el ultimo elemento del arreglo
// carrito.pop();
// console.table(carrito)

//?eliminar el primer elemento del arreglo
// carrito.shift();
// console.table(carrito)

//?eliminar elemento/os dentro del arreglo
carrito.splice(1,2)
console.table(carrito)