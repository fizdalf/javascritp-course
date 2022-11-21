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
    let reverse = 0;
    while(a != 0)
    {
        reverse = reverse * 10;
        reverse = reverse + a%10;
        a = Math.trunc(a/10); // Remove decimal places
    }
    return reverse;
}
console.log(reverseNum(a));

// 7. Count number of Vowels in String
// Function `countVowel()` returns the number of vowels in input string. Learn more about JavaScript String methods
// from javatpoint.com/javascript-string.
let str = process.argv[5];
function countVowel(str) {
    var count = 0;
   str=str.toLowerCase(); // estó hacé que todo sea en minúsculas
    for (let i = 0; i <str.length;i++) {
        if (str.charAt(i)=="a"||str.charAt(i)=="e"||str.charAt(i)=="i"||str.charAt(i)=="o"||str.charAt(i)=="u"){
            count++;
        }
    }
    return count;
}
console.log(countVowel(str));

// 8. Flatten array of arrays using JavaScript reduce
// Function `flattenArr()` flattens a 2D array by combining each sub array into 1D array by using JavaScript reduce.
function flattenArr(arr) {
    return arr.reduce((result, array) => result.concat(array));
}
console.log(flattenArr([[1,2,3],[4,5,6],[7,8,9]]));
// no se pk no me va

//9. Write a function to check if an input string is a palindrome
// Function `checkPalindrome()` return a boolean value based on whether the input string is palindrome or not.
function checkPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) != str.charAt(str.length-i-1)) {
            return false;
        }
    }
    return true;
}
console.log(checkPalindrome(str));

// 10. Write a function to calculate simple interest based on the principle amount
// Function `simpleInt()` returns a final amount based on the simple interest formula provided principal amount,
// rate of interest per year, and time on a yearly basis.


// I ask a small girl how old is she.
var x = "";
function age () {
    var x = rand(x) % 10; // Genera un valor entre 0 y 9
    return `${x} years old`;
}
console.log(age);

// DESCRIPTION:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will
// consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the
// difference of the cuboids' volumes regardless of which is bigger.
//
