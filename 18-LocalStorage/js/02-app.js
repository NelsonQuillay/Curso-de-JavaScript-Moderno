const nombre = localStorage.getItem('Nombre');
console.log(nombre);

const productoString = localStorage.getItem('cliente');
console.log(productoString);

const productoObject = localStorage.getItem('cliente');
console.log(JSON.parse(productoObject));

const mesesString = localStorage.getItem('meses');
console.log(mesesString);

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses)
console.log(mesesArray);