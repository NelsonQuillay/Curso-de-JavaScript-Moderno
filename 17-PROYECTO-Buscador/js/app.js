//! VARIABLES

const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//contenedor para los resultados

const resultados = document.querySelector('#resultado');
const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda

const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

//! EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    //muestra los autos al cargar
    mostrarAutos(autos);


    //llena las opciones de años
    llenarSelect();
})

//event listener para los select de busqueda
marca.addEventListener('change', (event)=>{
    datosBusqueda.marca = event.target.value;
    filtrarAuto();
});

year.addEventListener('change', (event)=>{
    datosBusqueda.year = parseInt(event.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', (event)=>{
    datosBusqueda.minimo = event.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', (event)=>{
    datosBusqueda.maximo = event.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (event)=>{
    datosBusqueda.puertas = parseInt(event.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (event)=>{
    datosBusqueda.transmision = event.target.value;
    filtrarAuto();
});

color.addEventListener('change', (event)=>{
    datosBusqueda.color = event.target.value;
    console.log(datosBusqueda);
    filtrarAuto();
});

//! FUNCIONES

function mostrarAutos (autos) {

    limpiarHTML(); //elimina el HTML previo

    autos.forEach(auto => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            Marca: ${marca} / Modelo: ${modelo} / Año: ${year} / Puertas: ${puertas} / Transmision: ${transmision} / Precio: ${precio} / Color: ${color}
        `;


        // insertar en el HTML
        resultados.appendChild(autoHTML);
    })
};

//limpiar HTML
function limpiarHTML () {
    while(resultados.firstChild){
        resultados.removeChild(resultados.firstChild)
    }
};


//Generar los años del select

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion) //agrega las opciones de cada año al select
    }
};

//funcion que filtra en base a la busqueda

function filtrarAuto () {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    // console.log(resultado);

    if(resultado.length) {
        mostrarAutos(resultado);
    }else{
        noResultado();
    };
    
};

function noResultado () {

    limpiarHTML(); 

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados';
    resultados.appendChild(noResultado);
};


function filtrarMarca (auto) {
    // if(datosBusqueda.marca) {
    //     return auto.marca === datosBusqueda.marca;
    // }

    const {marca} = datosBusqueda
    if(marca) {
        return auto.marca === marca;
    }
    return auto;
};

function filtrarYear (auto) {
    const {year} = datosBusqueda
    if(year) {
        return auto.year === year;
    }
    return auto;
};

function filtrarMinimo (auto) {
    const {minimo} = datosBusqueda
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
};

function filtrarMaximo (auto) {
    const {maximo} = datosBusqueda
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
};

function filtrarPuertas (auto) {
    const {puertas} = datosBusqueda
    if(puertas) {
        return auto.puertas === puertas;
    }
    return auto;
};

function filtrarTransmision (auto) {
    const {transmision} = datosBusqueda
    if(transmision) {
        return auto.transmision === transmision;
    }
    return auto;
};

function filtrarColor (auto) {
    const {color} = datosBusqueda
    if(color) {
        return auto.color === color;
    }
    return auto;
};