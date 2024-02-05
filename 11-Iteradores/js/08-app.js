//! for in itera sobre un objeto

const automovil = {
    modelo: 'camaro',
    año: 1960,
    motor: '6.0 V'
};

 for (const prop in automovil) {

        console.log(prop);
};

for (let [prop, valor] of Object.entries(automovil)) {
    console.log(prop);
    console.log(valor);
}
 