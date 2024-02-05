//forEach

const pendientes = ['tareas', 'comer', 'estudiar', 'trabajar', 'baño'];

pendientes.forEach ( pendientes => {
    console.log(`${pendientes}`);
})

pendientes.forEach ((pendientes, index) => {
    console.log(`${index} : ${pendientes}`);
})

const carrito = [
    {nombre: 'monitor', precio: 300},
    {nombre: 'teclado', precio: 100},
    {nombre: 'mouse', precio: 20},
    {nombre: 'PC', precio: 4000},
    {nombre: 'USB', precio: 7},
];

const nuevoArreglo = carrito.forEach ( producto => `${producto.nombre}`)

const nuevoArreglo2 = carrito.map ( producto => `${producto.nombre}`)

console.log(nuevoArreglo);
console.log(nuevoArreglo2);