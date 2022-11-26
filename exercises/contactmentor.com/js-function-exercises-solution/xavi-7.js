// Function `countVowel()` returns the number of vowels in input string. Learn more about JavaScript String methods from javatpoint.com/javascript-string.

function isAVowel(character) {
    const lowerCaseCharacter = character.toLowerCase();
    return lowerCaseCharacter === "a" || lowerCaseCharacter === "e" || lowerCaseCharacter === "i" || lowerCaseCharacter === "o" || lowerCaseCharacter === "u";
}

function countVowel(word) {
    let result = 0;
    for (const character of word) {
        result += isAVowel(character);// result = result + Number(isAVowel(character));
    }
    return result;
}

console.assert(countVowel("a") === 1, "countVowel should return 1 when given 'a'");
console.assert(countVowel("e") === 1, "countVowel should return 1 when given 'e'");
console.assert(countVowel("i") === 1, "countVowel should return 1 when given 'i'");
console.assert(countVowel("o") === 1, "countVowel should return 1 when given 'o'");
console.assert(countVowel("u") === 1, "countVowel should return 1 when given 'u'");
console.assert(countVowel("b") === 0, "countVowel should return 0 when given 'b'");
console.assert(countVowel("A") === 1, "countVowel should return 1 when given 'A'");
console.assert(countVowel("E") === 1, "countVowel should return 1 when given 'E'");
console.assert(countVowel("I") === 1, "countVowel should return 1 when given 'I'");
console.assert(countVowel("O") === 1, "countVowel should return 1 when given 'O'");
console.assert(countVowel("U") === 1, "countVowel should return 1 when given 'U'");

console.assert(countVowel("Aa") === 2, "countVowel should return 2 when given 'Aa'");
console.assert(countVowel("Ab") === 1, "countVowel should return 1 when given 'Ab'");
console.assert(countVowel("AaA") === 3, "countVowel should return 3 when given 'AaA'");

console.assert(countVowel("Hello") === 2, "countVowel should return 2 when given 'Hello'") //2
console.assert(countVowel("Umbrella") === 3, "countVowel should return 3 when given 'Umbrella'") //3
