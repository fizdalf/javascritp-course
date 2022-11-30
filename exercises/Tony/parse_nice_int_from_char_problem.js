/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
The first character in the string is always a number.
*/

function ageNumber (girl_age) {
    // let years_old = girl_age.split("");
    console.log("Edad:") // No consigo concatenar el texto con el número de la edad, sin que este se vuelva string.
    return console.log (parseInt(girl_age.split("")[0]));
    //sin el parseInt devuelve el valor 4 pero como texto, no como número.
}

ageNumber("9 years old");

