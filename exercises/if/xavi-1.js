
const AGE_OF_ADULTNESS = 18;
const userAge = process.argv[2];
let isAMinor = userAge < AGE_OF_ADULTNESS;
if (isAMinor) {
    console.log('No Puedes entrar.');
} else {
    // age has to be >= 18
    console.log('Entra y diviértete!');
}
// Ejercicio
// En caso de que el usuario sea menor, se mostrará por pantalla (console.log) "No puedes entrar."
// En caso de que el usuario sea mayor, si tiene entre 25 y 30 años, se mostrará por pantalla "Aquí tienes un chupito gratis. Entra y diviertete"
// En caso de que el usuario sea mayor, si tiene más de 30 años, se mostrará por pantalla, "A donde vas tu tutankamon. Tira para casa"
// en cualquier otro caso se mostrará por pantalla "Adelante, que lo pases bien"º


if(age < 18){
    console.log("no puedes entrar");
}
else if(age > 24 < 31){
    console.log("Aquí tienes el chupito gratis. Entra y diviertete");
}
else if(age > 30){
    console.log("Adonde vas tu tutankamon. Tira par casa");
}
else{
    console.log("Adelante que lo pases bien");
}
