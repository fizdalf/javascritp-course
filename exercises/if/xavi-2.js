// el sistema recibe tres numeros, muestra por pantalla el mayor de ellos


let firstNumber = process.argv[2];
let secondNumber = process.argv[3];
let thirdNumber = process.argv[4];

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber);
} else {
    console.log(thirdNumber);
}
