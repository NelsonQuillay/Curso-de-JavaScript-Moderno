
function revisarPuntaje (puntaje) {
    if (puntaje>400) {
        console.log('excelente');
        return;
    };
    if (puntaje>200) {
        console.log('buen trabajo');
        return;
    };
};

revisarPuntaje(300);