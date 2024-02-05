// for (let i = 0; i < 10; i++) {
//     if (i===5) {
//         console.log(`Este es el numero 5`);
//         // break; // detiene la ejecucion del for
//         continue; // detiene el ciclo pero deja que se siga ejecutando el for
//     }
//     console.log(`Numero: ${i}`);
// };

const carrito = [
    {nombre: 'monitor', precio: 300, descuento: false},
    {nombre: 'teclado', precio: 100, descuento: false},
    {nombre: 'mouse', precio: 20, descuento: true},
    {nombre: 'PC', precio: 4000, descuento: false},
    {nombre: 'USB', precio: 7, descuento: true},
];

for (let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`${carrito[i].nombre} "tiene descuento"`);
        continue;
    }
    console.log(carrito[i].nombre);
}