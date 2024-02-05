// object literal
const producto = {
    nombre: 'televisor',
    precio: 900,
    disponible: true,
};

// object constructor 

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    
}

const producto2 = new Producto ('monitor', 500);
console.log(producto2);

const producto3 = new Producto ('bicicleta', 700);
console.log(producto3);