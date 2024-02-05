const busqueda = document.querySelector('.busqueda');

// busqueda.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })

//keydown(cuando presiona la tecla ocurre el evento) 
//keyup(cuando presionas la tecla y luego la sueltas ocurre el evento)
//blur(cuando ingresas al input y luego haces click afuera del input se ejecuta el blur "Se recomienda para validaciones")
//copy(cundo copias lo que esta escrito dentro del input se ejecuta)
//paste(cuando pego un texto en el input)
//cut(cuando cortas ub texto en el input)
//input(se ejecuta cuando realizar cualquier cosa excepto el blur)  

busqueda.addEventListener('input', (event) => {
   if(event.target.value === '') {
       console.log('no encontraste nada');
   }
})