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


const quillay = new Cliente('Quillay', 5588)
console.log(quillay.tipoCliente());
console.log(quillay.nombreSaldoTipo());
quillay.retiraSaldo(1000);
console.log(quillay.nombreSaldoTipo());
console.log(quillay);





// function Empresa(nombre, saldo, categoria) {
//     this.nombre = nombre;
//     this.saldo = saldo;
//     this.categoria = categoria;
// };

// const nelson = new Empresa ('Nelson S.A.', 1000000, 'Empresario');
// console.log(nelson);