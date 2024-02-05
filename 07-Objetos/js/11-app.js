const nombre = 'bicicleta';
const precio = 100;

const producto = {
    nombre: 'monitor',
    precio: 300,
    disponible: true,
    info: function() {
        console.log(`El producto: ${nombre} tiene un precio de ${precio}`);
    },
    infoThis: function () {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    },
};

const producto2 = {
    nombre: 'televisor',
    precio: 900,
    disponible: true,
    info: function() {
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`);
    },
};

producto.info()
producto.infoThis()
producto2.info()