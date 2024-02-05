const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}

// const name1 = producto.nombre
// console.log(name1);

//Destructuring --- distrocshuin
const {nombre} = producto;

console.log(nombre);

//? Destructuring con arreglos

const num = [10, 20, 30, 40, 50];

const [primero, segundo, tercero] = num;

console.log(primero);
console.log(tercero);

const [ , , , cuarto] = num;
console.log(cuarto);

const [primer, ...tercer] = num;
console.log(tercer);