// 1. Write a JavaScript function to print the “Hello World” message
function message () {
    console.log(`Hello World`);
}
message();

let newVar = (a, b) => {console.log(`Hello` + ` World`)};
newVar();

function writeMessage () {
    console.log(`Hello World`);
}
writeMessage();

// 2. Write a function that returns the square of a number
// Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.
let a = process.argv[2];
function findSquare(a) {
    return a*a;
}
console.log(findSquare(a));

// 3. Write a function to convert Celsius to Fahrenheit
// Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`
function calFahrenheit() {
    return (a * 9/5) + 32;
}
console.log(calFahrenheit());

// 4. Write a function to find the area of a given Rectangle
// Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.
let b = process.argv[3];
function rectangleArea(a,b) {
    return `The area of the rectangle ${a} and ${b}  is ${a*b}`;
}
console.log(rectangleArea(a,b));

// 5. Write a function to find the area and perimeter of a Circle
// Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.
let c = process.argv[4];
function circleValues(c) {
    return `From the circle of radius ${c}, the Permieter is ${2*Math.PI*c} and the Area is ${Math.PI*c*c}`;
}
console.log(circleValues(c));

// 6. Write a function to reverse a number
// Function `reverseNum()` returns the reversed number for the given argument number value.
function reverseNum(a) {
    return a
}