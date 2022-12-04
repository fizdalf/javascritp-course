//Write a function that checks if a given string (case insensitive) is a palindrome.
//Palabra o frase que se lee igual al derecho y al revés

function palindrome (frase){
    let fraseLowerCase = frase.toLowerCase();

    if (fraseLowerCase === fraseLowerCase.split("").reverse().join("")){
        return frase;
    }
}

console.assert(palindrome("SoMeTemOs") , "Expected True");
console.assert(palindrome("perro"), "Expected False, la palabra `perro` no es un palindrome.");

