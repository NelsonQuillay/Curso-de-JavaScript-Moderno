const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

let resultado;
carrito.forEach((producto, indice) => {
    if(producto.nombre ==='Tablet') {
        resultado = carrito[indice]
    }
})

console.log(resultado);

//find devuelve un objeto nuevo y va a retomar el primer elemento que cumpla con las condicion

const resultado2 = carrito.find( producto => producto.nombre === 'Tablet')
console.log(resultado2);