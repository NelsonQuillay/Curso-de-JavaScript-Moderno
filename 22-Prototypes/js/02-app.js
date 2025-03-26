function Cliente (nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
};

const quillay = new Cliente ('Quillay', 1000);


function formatearCliente(cliente) {
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}`;
};

function formatearEmpresa(empresa) {
    const {nombre, saldo, categoeria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoeria}`;
};

console.log(formatearCliente(quillay));

function Empresa(nombre, saldo, categoeria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoeria = categoeria;
};

const nelson = new Empresa ('Nelson S.A.', 1000000, 'Empresario');
console.log(formatearEmpresa(nelson));