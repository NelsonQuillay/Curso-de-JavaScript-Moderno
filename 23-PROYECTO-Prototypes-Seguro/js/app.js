// Constructuros

function Seguro (marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

function UI () {};

// Llenar las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for (let i = max; i > min; i--) {
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
        
    }
};

//muestra alerta en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error')
    } else {
        div.classList.add('correcto')
    };

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;


    //insertar en el HTML
    const formulario =  document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'))
    
};


//instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', ()=> {
    ui.llenarOpciones();// llena el select con los años.
});


//Crear campo de validacion

eventListener();
function eventListener () {
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
};

function cotizarSeguro (event) {
    event.preventDefault(); 
 
    // leer la marca selecionada
    const marca = document.querySelector('#marca').value;

    // leer el año selecionado
    const year = document.querySelector('#year').value;

    // leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value; 
    
    if(marca==='' || year==='' || tipo ==='') {
        ui.mostrarMensaje('Todos los campos son obigatorios', 'error');
    }else{
        console.log('si paso');
    }
}