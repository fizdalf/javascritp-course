/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
The first character in the string is always a number.
*/

let girl_age = "4 years old";

function ageNumber () {
    let years_old = girl_age.split("");
    return console.log (parseInt(years_old[0])); //sin el parseInt devuelve el valor 4 pero como texto, no como número.
};

ageNumber();

