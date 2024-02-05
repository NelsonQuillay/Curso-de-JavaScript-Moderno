const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]


// comprobar si un valor existe en eun arreglo

meses.forEach( mes => {
    if (mes === 'Enero') {
        console.log(`Si existe ${mes}`);
    };
});

// utilizando array methods
const resultado = meses.includes('Enero'); //includes no funciona en el array de objetos 
console.log(resultado);

//en un arreglo con .some
const existe2 = meses.some (mes => mes === 'Marzo');

console.log(existe2);


// en un arreglo de objetos se utiliza .some
const existe = carrito.some (producto => producto.nombre === 'Celular');

console.log(existe);