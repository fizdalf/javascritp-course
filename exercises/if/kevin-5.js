const firstNumber = parseInt(process.argv[2]);
const secondNumber = parseInt(process.argv[3]);
const operation = process.argv[4];

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const prod = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const mod = firstNumber % secondNumber;


if (operation === "sum") {
    console.log("Sum of " + firstNumber + " and " + secondNumber + " is " + sum);
} else if (operation === "sub") {
    console.log("Sub of " + firstNumber + " and " + secondNumber + " is " + sub);
} else if (operation === "prod") {
    console.log("Prod of " + firstNumber + " and " + secondNumber + " is " + prod);
} else if (operation === "div") {
    console.log("Div of " + firstNumber + " and " + secondNumber + " is " + div);
} else if (operation === "mod") {
    console.log("Mod of " + firstNumber + " and " + secondNumber + " is " + mod);
} else {
    console.log("Invalid Operation");
}




