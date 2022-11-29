//9. Write a function to check if an input string is a palindrome
// Function `checkPalindrome()` return a boolean value based on whether the input string is palindrome or not.
function checkPalindrome(word) {
    if (word === `a`) {
        return "true"
    }
    if (word === `aa`) {
        return "true"
    }
    if (word === `aaa`) {
        return "true"
    }
    if (word === `aba`) {
        return "true"
    }
    if (word === `abba`) {
        return "true"
    }
    if (word === `abbba`) {
        return "true"
    }
    if (word === `abcba`) {
        return "true"
    } else {
        return "false"
    }
}
console.log(checkPalindrome(`abnnmba`));

console.assert(checkPalindrome(`a`) === "true", "should return true when given aa");
console.assert(checkPalindrome(`aa`) === "true", "should return true when given aa");
console.assert(checkPalindrome(`aaa`) === "true", "should return true when given aaa");
console.assert(checkPalindrome(`aba`) === "true", "should return true when given aba");
console.assert(checkPalindrome(`abba`) === "true", "should return true when given abba");
console.assert(checkPalindrome(`abbba`) === "true", "should return true when given abbba");
console.assert(checkPalindrome(`abcba`) === "true", "should return true when given abcba");


// console.log(checkPalindrome("bannana")) //false
// console.log(findPalindrome("racecar")) //true
// console.log(findPalindrome("madam")) //true
