// for (let i = 0; i < 10; i++) {
//     console.log(`Numero: ${i}`);
// };

// for (let i = 1; i < 10; i++) {
//     if(i % 2 === 0) {
//         console.log(`Numero ${i} es par`);
//     } else {
//         console.log(`Numero ${i} es impar`);
//     }
    
// };

const carrito = [
    {nombre: 'monitor', precio: 300},
    {nombre: 'teclado', precio: 100},
    {nombre: 'mouse', precio: 20},
    {nombre: 'PC', precio: 4000},
    {nombre: 'USB', precio: 7},
];
console.log(carrito.length);

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);
    
}