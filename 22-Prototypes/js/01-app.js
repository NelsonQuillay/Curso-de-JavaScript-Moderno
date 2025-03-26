const cliente = {
    nombre: 'Nelson',
    saldo: 500,
}

console.log(cliente);

function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

const quillay = new Cliente ('Quillay', 1000);
console.log(quillay);