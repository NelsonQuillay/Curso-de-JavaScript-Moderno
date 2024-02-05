//! declaracion de funcion (function declaration)

function sumar () {
    console.log(2+2);
};

//se manda a llamar la funcion 
sumar();


//! expresion de funcion (function expression)
const sumar2 = function () {
    console.log(3+3); 
};
//se manda a llamar la funcion 
sumar2();


//! funcion flecha (arrow function)
const sumar3 = () => {
    console.log(4+4);
};
//se manda a llamar la funcion 
sumar3();