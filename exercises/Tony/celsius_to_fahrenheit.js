// (Celsius × 9/5) + 32 = Fahrenheit

function convertir_celsium_a_fahrenheit (gradosCelsius) {return gradosCelsius * 9/5 + 32}

console.log(`20ºC equivalen a ${convertir_celsium_a_fahrenheit(20)}ºF`);
console.log(`30ºC equivalen a ${convertir_celsium_a_fahrenheit(30)}ºF`);
console.log(`40ºC equivalen a ${convertir_celsium_a_fahrenheit(40)}ºF`);

console.assert(convertir_celsium_a_fahrenheit(20) , "Expect 68");