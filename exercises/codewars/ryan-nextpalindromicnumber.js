// make a function named nexPal() that gives the next palindromic number bigger than the number given.
function nextPal(num) {
    for (let i = 0; i < number.length / 2; i++) {
        if (num.charAt(i) != num.charAt(num.length - i - 1)){
            return false;
        }
    }
    return true;
}

