function palindrome(userWord) {
    let palabra = 0;
    let final = userWorld.length - 1;

    while (palabra < userWord.length) {
        if (userWord[palabra] === final) {
            palabra++;
            final--;
        }
        return true;
    }
    return false;


}


