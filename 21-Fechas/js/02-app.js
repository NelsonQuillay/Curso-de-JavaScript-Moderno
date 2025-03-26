const diaHoy = new Date();

moment.locale('es');

console.log(moment().format('MMMM DD YYYY h:mm:ss a'));

console.log(moment().format('LLLL', diaHoy));

console.log(moment().add(5,'days').calendar());