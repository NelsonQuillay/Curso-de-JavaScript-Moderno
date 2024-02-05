const reproductor = {
     reproducir: function (id) { //! Esto de llama METODO DE PROPIEDAD porque el valor es una funcion
        console.log(`Reproduciendo cancion ${id}`);
     },
     pausar: function () {
        console.log('Pausando...');
     },
     crearPlayList: function (nombre) {
        console.log(`Se creo la Play List de ${nombre}`);
     },
     reproduciendoPlayList: function (nombre) {
        console.log(`Estas escuchando la Play List ${nombre}`);
     }
};
reproductor.reproducir(30);
reproductor.reproducir(10);
reproductor.pausar(); 

//agregar propiedades por fuera del objeto
reproductor.borrar = function (id) {
    console.log(`Borrando cancion ${id}`);
}
reproductor.borrar(30);

reproductor.crearPlayList('cumbia');
reproductor.reproduciendoPlayList('cuarteto');