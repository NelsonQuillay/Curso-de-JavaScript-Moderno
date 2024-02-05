const producto = {
    nombre: 'televisor',
    precio: 900,
    disponible: true,
};


// keys el metodo te devuelve un arreglo con las prop del objeto
console.log(Object.keys(producto));

// values el metodo te devuelve un arreglo con los valores del objeto
console.log(Object.values(producto));

// entries el metodo te devuelve un arreglo de arreglos con las prop y los valores del objeto
console.log(Object.entries(producto));