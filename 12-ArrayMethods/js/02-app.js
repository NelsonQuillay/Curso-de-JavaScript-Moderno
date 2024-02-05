const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//encontrar indice de abril
meses.forEach ((mes, indice) => {
    if(mes === 'Abril') {
        console.log(`${mes} encontrado en el indice ${indice}`);
    }
})

// con findIndex 
const indice2 = meses.findIndex (mes => mes === 'Abril');

console.log(`encontrado en el indice ${indice2}`);

//! si hay elementos repetidos findIndex no lo toma. findIndex encuentra el primer elemento y de lo devuelve.
const indice3 = carrito.findIndex (producto => producto.precio === 100);
console.log(`se encuentra en el indice ${indice3}`);