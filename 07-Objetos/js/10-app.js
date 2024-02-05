const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300,
    disponible: true
};

const medidas = {
    peso: '1 kg',
    tamaño: '1m'
};

const resultados =  Object.assign(producto, medidas);
console.log(resultados);

//spread operator
const resultados2 = {...producto, ...medidas}
console.log(resultados2);