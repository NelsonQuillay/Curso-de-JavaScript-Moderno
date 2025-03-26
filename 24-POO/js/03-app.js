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

// herencia

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;

    }

    static bienvenida() { //reescribir un metodo 
        return `Bienvenido al cajero de empresa`
    }
};

const nelson = new Cliente("Nelson", 500);
const empresa = new Empresa ("Mecanizados S.A.", 100000, 266845632, 'Mecanica')
console.log(empresa.mostrarInformacion());

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());