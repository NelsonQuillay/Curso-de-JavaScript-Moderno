class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de $${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }

};

const nelson = new Cliente("Nelson", 500);
console.log(nelson.mostrarInformacion());
console.log(nelson);

console.log(Cliente.bienvenida());



const Cliente2 = class {
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
};

const quillay = new Cliente2("Quillay", 1000);
console.log(quillay);
