const valido = true;
const puedePagar = true;

//ternario
// console.log(valido && puedePagar ? 'Si puede' : 'No puede' );


//ternario anidado
console.log(valido ? puedePagar ? 'si es valido y puede' : 'si es valido y no puede' : 'No puede' );