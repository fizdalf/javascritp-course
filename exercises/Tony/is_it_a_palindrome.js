//Write a function that checks if a given string (case insensitive) is a palindrome.
//Palabra o frase que se lee igual al derecho y al revés

// let fraseArray = frase.split("");
// let frase_al_revesArray = fraseArray.reverse();
// let frase_al_reves = frase_al_revesArray.join("");

function palindrome (frase){
    let frase_al_reves = frase.split("").reverse().join("");
    if (frase.toLowerCase() === frase_al_reves.toLowerCase()){
        return console.log(`La palabra ${frase} es un palindrome.`);
    }
    else {
        return console.log(`La palabra ${frase} no es un palindrome.`);
    }
}

palindrome("SoMeTemOs");

