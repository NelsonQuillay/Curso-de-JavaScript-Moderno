const producto = {
    nombre: 'monitor de 24 pulgadas',
    precio: 300,
    disponible: true
}

producto.imagen = 'imagen.jpg';
delete producto.disponible;

console.log(producto);