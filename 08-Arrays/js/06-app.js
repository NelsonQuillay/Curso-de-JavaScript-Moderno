//! funciones declarativa

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
    precio: 90
};

let resultado;

resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];


console.table(resultado);

//! funciones declarativa