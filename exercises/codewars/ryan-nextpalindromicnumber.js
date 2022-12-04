// make a function named nexPal() that gives the next palindromic number bigger than the number given.
function isAPalindromic(num) {
    for (let i = 0; i < number.length / 2; i++) {
        if (num.charAt(i) != num.charAt(num.length - i - 1)){
            return false;
        }
    }
    return true;
}
let firstNum = process.argv[2];
let testNum = firstNum;
let theNum = "";
function nexPal(firstNum) {
    for (let i = testNum; i >= testNum; i++) {
        let testNum = + 1;
        if (isAPalindromic(testNum)) {
            let testNum = theNum;
        } else {
            nexPal()
        }
    }
}



console.assert(nexPal(1) === 11, "nextPal should return 11 when given 1");
console.assert(nexPal(11) === 22, "nextPal should return 22 when given 11");


