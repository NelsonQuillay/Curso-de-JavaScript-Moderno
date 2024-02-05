//! declaracion de funcion (function declaration)
//! ES LA UNICA FUNCION QUE SE PUEDE LLAMAR O UTILIZAR ANTES DE DEFINIRLA
sumar();//<--------------------
function sumar () {
    console.log(2+2);
};


//! expresion de funcion (function expression)
const sumar2 = function () {
    console.log(3+3); 
};
sumar2();//<--------------------



//! funcion flecha (arrow function)
const sumar3 = () => {
    console.log(4+4);
};
sumar3();//<--------------------
