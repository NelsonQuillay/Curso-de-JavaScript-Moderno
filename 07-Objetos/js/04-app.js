const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}

const name1 = producto.nombre
console.log(name1);

//Destructuring --- distrocshuin
const {nombre, precio, disponible} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);