// const meses = ['enero', 'febreo', 'marzo'];

// meses.push('abril');
// meses.push('mayo')

// console.table(meses);

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
    precio: 200
};


carrito.push(producto)
carrito.push(producto2)
carrito.unshift(producto3)

console.table(carrito)

//! funciones imperativa