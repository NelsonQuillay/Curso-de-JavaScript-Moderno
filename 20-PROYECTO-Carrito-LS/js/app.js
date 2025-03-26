//Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners () {
    //cuando agregar un curso presionando "agregar al cariito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //muestras los cursos de local storage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })

    //vacias el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reseteamos el arreglo

        limpiarHTML();//eliminamos todo del HTML  
    })
};


//funciones
function agregarCurso (event) {
    event.preventDefault();
    if(event.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = event.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
};

//eliminar un curso del carrito
function eliminarCurso(event) {
    if(event.target.classList.contains('borrar-curso')) {
        // console.log(event.target);
        // console.log(event.target.getAttribute('data-id'));
        const cursoID = event.target.getAttribute('data-id');

        //elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoID);
        carritoHTML();                                                                                                                                                                                      
    }
}

//lee el contenido del HTML al que le dimos click y extraer la info del curso
function leerDatosCurso (curso) {
    // console.log(curso);
    
    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }

    //revisa si un elemento ya exite en el carrito
    const existe = articulosCarrito.some(curso=> curso.id ===infoCurso.id);
    if(existe) {
        //actualizar la cantidad
         const curso = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso;//retorna el objeto actualizado
            }else{
                return curso;//retorna los objetos que no son los duplicados
            }
         });
         articulosCarrito = [...curso];
    } else {
        //agregar elemento al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    };

    console.log(articulosCarrito);

    carritoHTML();
};

//Muestra el carrito de compras en el HTML
function carritoHTML () {

    //limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso=>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${imagen}" width="100"></img>
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href"#" class="borrar-curso" data-id="${id}"> X </a>
        </td>
    `;
        // row.innerHTML = `
        //     <td>
        //         <img src="${curso.imagen}" width="100"></img>
        //     </td>
        //     <td>${curso.titulo}</td>
        //     <td>${curso.precio}</td>
        //     <td>${curso.cantidad}</td>
        //     <td>
        //         <a href"#" class="borrar-curso" data-id="${curso.id}"> X </a>
        //     </td>
        // `;

        //agrega el HTML del carrito en el tbody
        contenedorCarrito.appendChild(row)
    });

    //agregar al carrito de compras al storage
    sincronizarStorage();

};

function sincronizarStorage () {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

};

//elimina los curso de tbody
function limpiarHTML () {
    //forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}