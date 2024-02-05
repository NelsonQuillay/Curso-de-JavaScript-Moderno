
const efectivo = 500;
const tarjeta = 500;
const disponible = efectivo + tarjeta;
const totalPagar = 900;

if (efectivo >= totalPagar || tarjeta >= totalPagar || disponible >= totalPagar) {
    console.log('Si podes pagar');
} else {
    console.log('No podes pagar');
};