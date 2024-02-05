const aprendiendo = function (tecnologia) {
    console.log(`Aprendiendo ${tecnologia}`);
};
aprendiendo('JavaScript');


// const aprendiendo2 = (tecnologia) => `Aprendiendo ${tecnologia}`;

//!cuando se pasa un solo parametro se puede eleminar los ()
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}`;
console.log(aprendiendo2('js'));



const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;
console.log(aprendiendo3('js', 'node'));