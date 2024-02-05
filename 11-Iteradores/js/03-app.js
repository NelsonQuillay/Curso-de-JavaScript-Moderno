// FIZZ BUZZ - 10 NUMEROS

// 3-6-9 FIZZ
// 5-10-15 BUZZ
// 15-30-45 FIZZ BUZZ!!!

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} FIZZ BUZZ!!!`);
    } else if (i % 5 === 0) {
        console.log(`${i} BUZZ`);
    } else if (i % 3 === 0) {
        console.log(`${i} FIZZ`);
    } 
}