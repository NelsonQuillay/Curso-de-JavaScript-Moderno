const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre']



//!.concat
const resultado = meses.concat(meses2);
console.log(resultado);

const resultado2 = meses.concat(meses2, meses3, 'Otro mes');
console.log(resultado2);

//! (...)spread operator
const resultado3 = [...meses, ...meses2]
console.log(resultado3);

//! si se agrega un elemento mas como string no modifica el arreglo original
const resultado4 = [...meses, ...meses2, ...meses3, 'Otro mes ']
console.log(resultado4);

const resultado5 = [...meses, ...meses2, ...meses3, ...'Otro mes']
console.log(resultado5);