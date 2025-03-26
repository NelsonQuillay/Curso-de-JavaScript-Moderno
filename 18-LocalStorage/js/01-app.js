localStorage.setItem('Nombre', 'Quillay')

localStorage.setItem('Numero', 26)

const producto = {
    nombre: 'Pepito',
    edad: 50,
};

const productoString = JSON.stringify(producto);
localStorage.setItem('cliente', productoString);


const meses = ['enero', 'febrero', 'marzo'];
// const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', JSON.stringify(meses)) 