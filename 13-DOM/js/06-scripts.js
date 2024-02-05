const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText); // si en el CSS  "visibility: hidden" no lo encontra
// console.log(encabezado.textContent); // si lo encuentra
// console.log(encabezado.innerHTML); // se trae el HTML

// const nuevotitulo = 'Hola Nelson Quillay'
// document.querySelector('.contenido-hero h1').textContent = nuevotitulo

const imagen = document.querySelector('.card img');
imagen.src = 'img/descarga.jpg'
console.log(imagen);