// Variables

const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


// Event Listeners
eventListeners();

function eventListeners() {
    //cuando el usuario agrega un nuevo tweet
    formulario.addEventListener('submit', agregarTweets);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', ()=>{
        tweets = JSON.parse(localStorage.getItem('tweets')) || []; 

        crearHTML();
    })
};


// Funciones


function agregarTweets (event) {
    event.preventDefault();

    //textear donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validacion 
    if(tweet==='') {
        mostrarError('no puede ir vacio');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    };

    //añadir al arreglo de tweets
    tweets = [...tweets, tweetObj];
    console.log(tweets);

    //una vez agregado, crear HTML
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
};

//mostrar mensaje de error

function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //elimina la alerta 
    setTimeout(() => {
       mensajeError.remove(); 
    }, 3000);
};

// Muestra un listado de los tweets
function crearHTML() {

    limpiarHTML();

    if(tweets.length > 0) {
        tweets.forEach(tweet => {
            //agregar un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.textContent = 'X';

            //añadir la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id); 
            };

            //crear HTML
            const li = document.createElement('li');
            
            //añadir el texto
            li.textContent = tweet.tweet; //innerText tmb se puede utilizar

            //asignar el boton
            li.appendChild(btnEliminar);

            //insertar en el HTML
            listaTweets.appendChild(li);

        });
    }

    sincronizarStorage();

};

//agregar los tweets actuales a localstorage
function sincronizarStorage () {
    localStorage.setItem('tweets', JSON.stringify(tweets));
};

//elimina un tweet
function borrarTweet (id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    crearHTML();   
};

//limpiar el HTML
function limpiarHTML() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
};