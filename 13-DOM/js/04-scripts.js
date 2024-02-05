//!querySelector

//.(PUNTO) accedo a la clases
// va a devolver como maximo un solo elememto, el primero que encuentre
const card = document.querySelector('.card');
console.log(card);

//podemos tener selectores especifico como CSS
//.premiun tiene a hijo a info por eso se deja un espacio entre ellos, sin el espacio hace referencia a dos clases distintas
const info = document.querySelector('.premium .info');
console.log(info);

//Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)'); //'section.hospedaje tambien se puede escribir de esta manera para ser mas especifico
console.log(segundoCard);

//#(NUMERAL) accedo al id
//Seleccionar el formulario // va a seleccionar el primero que encuentre
const formulario = document.querySelector('#formulario'); //('.contenido-hero #formulario') si hay dos id igual en el mismo documento 'no es lo recomendado'
console.log(formulario);

//'...'(colocar etiqueta) etiqueta HTML
//Seleecionar elemento HTML
const navegacion = document.querySelector('nav'); // seria como poner ('.navegacion') esta dentro de una etiqueta nav de HTML
console.log(navegacion);

   