function sumar (a, b) {
    return a + b;
};

const resultados = sumar (2, 3);

console.log(resultados);

// Ej mas avanzado


let total = 0;

function agregarCarrito (precio) {
    return total += precio;
};

agregarCarrito (850);
agregarCarrito (100);
agregarCarrito (50);

console.log(`Monto sin impuesto ${total} dolares`);


function calcularImpuesto (total) {
    return total * 1.15;
};

const totalPagar = calcularImpuesto(total);
console.log(`El total a pagar es de: ${totalPagar} dolares`);