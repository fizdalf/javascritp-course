// (Celsius × 9/5) + 32 = Fahrenheit

let temperatura_en_celsius = 25;

 function convertir_celsium_a_fahrenheit (){
    let temperatura_en_fahrenheit = temperatura_en_celsius * 9/5 + 32;
    return console.log("La temperatura de " + temperatura_en_celsius + "ºC equivale a " + temperatura_en_fahrenheit + "ºF.");
};

 convertir_celsium_a_fahrenheit();