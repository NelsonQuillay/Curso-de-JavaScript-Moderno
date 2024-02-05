const usuario = false;
const puedePagar = true;

if (usuario && puedePagar) {
    console.log('si puede pagar');
} else if (!usuario){
    console.log('inicia sesion');
} else if (!puedePagar){
    console.log('No hay fondos suficiente');
} else {
    console.log('no puedes comprar');
}