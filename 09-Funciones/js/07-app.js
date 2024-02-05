iniciandoApp();
// segundaFuncion(); 

function iniciandoApp () {
    console.log('Iniciando App...');
    segundaFuncion();
};



function segundaFuncion () {
    console.log('Desde la segunda funcion');
    usuarioAutenticado('Nelson')
};


function usuarioAutenticado (usuario) {
    console.log('Autenticando usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}