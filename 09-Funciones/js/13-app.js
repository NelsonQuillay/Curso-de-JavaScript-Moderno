const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo cancion ${id}`),
    pausar: () => console.log('Pausando...'),
    borrar: id => console.log(`Borrando cancion ${id}`),
    crearPlayList: nombre => console.log(`Se creo la Play List de ${nombre}`),
    reproduciendoPlayList: nombre => console.log(`Estas escuchando la Play List ${nombre}`),
    set nuevaCancion (cancion) { // set es una forma para agregar valores
        this.cancion = cancion; // this para que lo busque dentro del objeto
        console.log(`Agregando ${cancion}`);
    },
    get obtenerCancion () { //get para obtener esos valores
        console.log(`${this.cancion}`);// this para que lo busque dentro del objeto
    }
};
reproductor.nuevaCancion = 'caña doble';
reproductor.obtenerCancion;

reproductor.reproducir(30);
reproductor.reproducir(10);
reproductor.pausar(); 
reproductor.borrar(30);
reproductor.crearPlayList('cumbia');
reproductor.reproduciendoPlayList('cuarteto');