function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

Cliente.prototype.tipoCliente = function () {
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo = 'Prefer';
    }
    return tipo;
};

Cliente.prototype.nombreSaldoTipo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, tipo: ${this.tipoCliente()}`
};

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo = this.saldo - retira;
};


function Persona (nombre, saldo, telefono) {
    // this.nombre = nombre;
    // this.saldo = saldo;
    Cliente.call(this, nombre, saldo)
    this.telefono = telefono;
};

Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente; 


const nelson = new Persona ('Nelson', 70000, '2664874562');
console.log(nelson);
console.log(nelson.nombreSaldoTipo());


Persona.prototype.mostrarTelefono = function () {
    return `El telefono de esta persona es ${this.telefono}`
};

console.log(nelson.mostrarTelefono());