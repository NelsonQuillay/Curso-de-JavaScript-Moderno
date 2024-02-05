const enlace = document.createElement('a');

//agregandole el texto
enlace.textContent = 'Nelson Quillay';

//añadiendo href
enlace.href = '/nelson-quillay';
enlace.target = "_blank";
enlace.setAttribute ('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
//! para utilizar "funcion flecha (arrow function)" se debe definir antes de llamarla
//const miFuncion = () => alert('Diste click') 
enlace.onclick = miFuncion;
// console.log(enlace);

//seleccionar la navegacion
const nav = document.querySelector('nav');
// nav.appendChild(enlace);// "appendChild" seleccionando el padre se le puede agregar un hijo al ultimo
// console.log(nav.children); // para saber las posiciones de los hijos
nav.insertBefore(enlace, nav.children[1]); //inserBeFore "insertar antes de" // nav.children[1] <--- es el nodo de referencia


//! si queres llamarla antes y luego definirla utiliza "declaracion de funcion (function declaration)"
function miFuncion () {
    alert('Diste clic')
}


// crear un card de forma dinamica 

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Congreso de JS';
parrafo2.classList.add('titulo');
console.log(parrafo2);


const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por personas';
parrafo3.classList.add('precio');
console.log(parrafo3);
 
// console.log(parrafo3);

// crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/js.png';

//crear el card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

//asignar lainfo
card.appendChild(info);

//insertar en el HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card); //al final de la lista
contenedor.insertBefore(card, contenedor.children[0]); // al principo de la lista



console.log(card);

