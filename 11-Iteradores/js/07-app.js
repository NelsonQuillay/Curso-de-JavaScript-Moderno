//! for of itera sobre un arreglo

const pendientes = ['tareas', 'comer', 'estudiar', 'trabajar', 'baño'];


const carrito = [
    {nombre: 'monitor', precio: 300},
    {nombre: 'teclado', precio: 100},
    {nombre: 'mouse', precio: 20},
    {nombre: 'PC', precio: 4000},
    {nombre: 'USB', precio: 7},
];

for ( let pendi of pendientes ) {
    console.log(pendi);
};

for ( let producto of carrito) {
    console.log(producto.nombre);
}