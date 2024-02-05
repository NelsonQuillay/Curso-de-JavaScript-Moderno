const dineroEfectivo = 200;
const tarjetaCredito = 800;
const totalPagar = 500;

if (dineroEfectivo >= totalPagar) {
    console.log(`puedes comprar el producto con efectivo`);
} else if (tarjetaCredito >= totalPagar) {
    console.log(`puedes comprar el producto con tarjeta de credito`);
} else {
    console.log(`no hay suficiente dinero para comprar el producto`);
}