//Write a function that checks if a given string (case insensitive) is a palindrome.
//Palabra o frase que se lee igual al derecho y al revés

// let fraseArray = frase.split("");
// let frase_al_revesArray = fraseArray.reverse();
// let frase_al_reves = frase_al_revesArray.join("");

function palindrome(word) {
    let wordInLowerCase = word.toLowerCase();
    let reversedWord = wordInLowerCase.split("").reverse().join("");
    return wordInLowerCase === reversedWord;
}

let word = "SoMeTemOsa";
console.log(`La palabra ${word} ${palindrome(word) ? '' : 'no '}es un palindrome.`);


