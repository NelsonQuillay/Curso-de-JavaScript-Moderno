class Cliente {

    #nombre; // nombre se puede declarar como un campo privado y solamente se puede acceder por medio de una clase

    constructor(nombre, saldo){
        this.#nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de $${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`
    }

};

const nelson = new Cliente ('Nelson', 500);
console.log(nelson.nombre);
// console.log(nelson.#nombre);
console.log(nelson.mostrarInformacion());



class Clientes {
    
    #apellido;

    setApellido(apellido) {
        this.#apellido = apellido;
    }

    getApellido() {
        return this.#apellido;
    }
};

const quillay = new Clientes();
quillay.setApellido('Quillay')
console.log(quillay.getApellido());
