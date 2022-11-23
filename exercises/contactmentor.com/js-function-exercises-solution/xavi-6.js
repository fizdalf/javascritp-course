// 6. Write a function to reverse a number
// Function `reverseNum()` returns the reversed number for the given argument number value.

function reverseNum(number) {
    let modifiedNumber = number;
    let result = 0;

    while (modifiedNumber !== 0) {
        result = result * 10;
        result = result + modifiedNumber % 10;
        modifiedNumber = Math.trunc(modifiedNumber / 10);
    }

    return result;
}


function reverseNaive(num) {
    const numAsString = "" + num;
    let result = "";
    for (let i = 0; i < numAsString.length; i++) {
        result += numAsString[numAsString.length - i - 1];
    }
    return parseInt(result);
}

function reverseNumString(num) {
    return parseInt(Array.from(num.toString()).reverse().join(""));
}

console.assert(reverseNumString(1) === 1, "should return 1 when given 1");
console.assert(reverseNumString(2) === 2, "should return 2 when given 2");
console.assert(reverseNumString(10) === 1, "should return 1 when given 10");
console.assert(reverseNumString(11) === 11, "should return 11 when given 11");
console.assert(reverseNumString(12) === 21, "should return 21 when given 12");
console.assert(reverseNumString(13) === 31, "should return 31 when given 13");
console.assert(reverseNumString(14) === 41, "should return 41 when given 14");
console.assert(reverseNumString(19) === 91, "should return 91 when given 19");
console.assert(reverseNumString(20) === 2, "should return 2 when given 20");
console.assert(reverseNumString(21) === 12, "should return 12 when given 21");
console.assert(reverseNumString(29) === 92, "should return 29 when given 92");
console.assert(reverseNumString(98) === 89, "should return 89 when given 98");
console.assert(reverseNumString(100) === 1, "should return 1 when given 100");
console.assert(reverseNumString(105) === 501, "should return 501 when given 105");
console.assert(reverseNumString(999) === 999, "should return 999 when given 999");
console.assert(reverseNumString(987) === 789, "should return 789 when given 987");
console.assert(reverseNumString(9876) === 6789, "should return 6789 when given 9876");
console.assert(reverseNumString(-9876) === 6789, "should return 6789 when given -9876");
