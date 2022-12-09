

function palindrome(palabra) {
     palabra = sollos;
    let userWord= "lossol";
    let final = userWord.length - 1;

    while (palabra < userWord.length) {
        if (userWord[palabra] === userWord[final]) {
            palabra++;
            final--;
            return console.log("ok");
        }
        return console.log("ok");
    }
    return console.log("Mal");
}


