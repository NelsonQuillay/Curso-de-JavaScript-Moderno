// Constructuros

function Seguro (marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
};

//Realiza la cotizacion de los datos
Seguro.prototype.cotizarSeguro = function () {
    /* 
        1= Americano 1.15
        2= Asiatico 1.05
        3= Europeo 1.35
    */

    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '1':
            cantidad= base * 1.15;
            break;
        case '2':
            cantidad= base * 1.05;
            break;
        case '3':
            cantidad= base * 1.35;
            break;
        default:
            break;
    }

    // Leer el año 
    const diferencia = new Date().getFullYear()-this.year
    // const diferencia = 2020 - this.year
    const diferenciaAño = diferencia*3
    cantidad = cantidad - ((diferenciaAño*cantidad)/100)

    // Cada año que la diferencia es mayor, el costo va a reducir en un 3%
    console.log(cantidad);

    // basico 30% mas
    // completo 50% mas

    if(this.tipo === 'basico') {
        cantidad *= 1.30; 
    }else{
        cantidad *= 1.50; 
    }

    return cantidad;
    
}

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

    setTimeout(() => {
        div.remove();
    }, 3000);
    
};

UI.prototype.mostrarResultado = (total, seguro) => {

    const {marca, year, tipo} = seguro

    let textoMarca;

    switch (marca) {
        case "1":
            textoMarca = "Americano";
            break;
        case "2":
            textoMarca = "Asiatico";
            break;
        case "3":
            textoMarca = "Europeo";
            break;
        default:
            break;
    }
    
    // crear un resultado
    const div = document.createElement('div');
    div.classList.add('mt-10');   

    div.innerHTML=`
        <p class="header">Tu Resumen</p>
        <P class="font-bold">Marca: <span class= "font-normal"> ${textoMarca} </span></p>
        <P class="font-bold">Año: <span class= "font-normal"> ${year} </span></p>
        <P class="font-bold">Tipo: <span class= "font-normal capitalize"> ${tipo} </span></p>
        <P class="font-bold">Total: <span class= "font-normal"> $ ${total} </span></p>
    `;

    const resultadoDiv = document.querySelector("#resultado");
    
    // mostrar spinner
    const spinner = document.querySelector("#cargando");
    spinner.style.display = "block";

    setTimeout(() => {
        spinner.style.display = "none";//se borra el spinner
        resultadoDiv.appendChild(div);// se muestra el resultado
    }, 3000);
}

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
        return;
    }
    ui.mostrarMensaje('Cotizando...', 'correcto');

    // ocultar las cotizaciones previas
    const resultados = document.querySelector("#resultado div");
    if(resultados != null) {
        resultados.remove();
    }

    // Instanciar el seguro
    const seguro = new Seguro (marca, year, tipo);
    const total = seguro.cotizarSeguro();

    // Utilizar el prototype que va a utiliza
    ui.mostrarResultado(total, seguro);

}