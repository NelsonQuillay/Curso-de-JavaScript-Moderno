localStorage.removeItem('meses');

const meses = ['enero', 'febrero', 'marzo'];
// const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', JSON.stringify(meses)) 

const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('abril');
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray));
mesesArray.push('junio');
localStorage.setItem('meses', JSON.stringify(mesesArray));

localStorage.clear();