//Write a function to find the count of a letter in a string

function letterCount(a, b){
    let count = 0;
    for (const character of a) {
        if(character === b){
            count++;
        }
    }
    return count;
}

console.log(letterCount("Hola", "o"),1); // 1
console.log(letterCount("Hola", "k"),0); // 0
console.log(letterCount("Hola", "l"),1); // 1
console.log(letterCount("mamacita", "a"),3); // 3
console.log(letterCount("mamacita", "m"),2); // 2


