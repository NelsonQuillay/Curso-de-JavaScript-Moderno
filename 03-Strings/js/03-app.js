const producto = 'monitor 24 pulgadas '
const precio = '30 USD'

console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));
console.log(producto+'con un descuento de: '+precio);
console.log(producto,'con un descuento de: ',precio);
console.log(`el producto ${producto} tiene un precio de $ ${precio}`);