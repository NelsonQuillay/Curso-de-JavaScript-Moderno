const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');


//! declarar la funcion en la mismo addEventListener
// btnFlotante.addEventListener('click', () => {
//     console.log('Diste click');
// });

//! llamar la funcion en addEventListener
// btnFlotante.addEventListener('click', mostrarOcultarFooter);

// function mostrarOcultarFooter () {
//     console.log('Diste click !!!!');
// };

btnFlotante.addEventListener('click', mostrarOcultarFooter);

/*function mostrarOcultarFooter () {
    if(footer.classList.contains('activo')) { // consulta si tiene la clase activo, si no esta pasa al else y agrega la clase activo
        footer.classList.remove('activo'); // si tiene la clase activo, se ejecuta la funcion remove para eliminar la clase activo
        btnFlotante.classList.remove('activo');
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
    }

};*/

//! se puede utilizar this porque mando a llamar a btnFlotante
function mostrarOcultarFooter () {
    if(footer.classList.contains('activo')) { // consulta si tiene la clase activo, si no esta pasa al else y agrega la clase activo
        footer.classList.remove('activo'); // si tiene la clase activo, se ejecuta la funcion remove para eliminar la clase activo
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
};
