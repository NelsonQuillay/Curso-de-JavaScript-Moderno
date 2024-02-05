//Switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`pagaste con ${metodoPago} `);
        break;
    case 'tarjeta':
        console.log(`pagaste con ${metodoPago} `);
        break;
    default:
        console.log(`tu metodo de pago no fue aceptado`);
        break;
};

function pagar() {
    console.log('pagando...');
};