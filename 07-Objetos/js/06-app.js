const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300,
    disponible: true,
    info: {
        medidas: {
            peso: '1 kg',
            largo: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

// const {info: {fabricacion: {pais}}} = producto; 
// console.log(pais);


const {pais} = producto.info.fabricacion
console.log(pais);
