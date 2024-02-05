const formulario = document.querySelector('#formulario');

// formulario.addEventListener('submit',(event) => {
//     event.preventDefault();

//     console.log('buscando...');

//     console.log(event.target.method);

//     console.log(event.target.action);

// });

formulario.addEventListener('submit', validarFormulario);

function validarFormulario (event) {
    event.preventDefault();

    console.log('buscando...');

    console.log(event.target.method);

    console.log(event.target.action);
};
