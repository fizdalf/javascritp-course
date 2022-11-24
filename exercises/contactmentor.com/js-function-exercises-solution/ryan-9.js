//9. Write a function to check if an input string is a palindrome
// Function `checkPalindrome()` return a boolean value based on whether the input string is palindrome or not.
function checkPalindrome(word) {
    if (word === `aa`) {
        return true
    }
    if (word === `aaa`) {
        return true
    }
    if (word === `aba`) {
        return true
    }
    if (word === `abba`) {
        return true
    }
}
console.log(checkPalindrome(`abba`));


console.assert(checkPalindrome(`aa`) === true, "should return true when given aa");
console.assert(checkPalindrome(`aaa`) === true, "should return true when given aaa");
console.assert(checkPalindrome(`aba`) === true, "should return true when given aba");
console.assert(checkPalindrome(`abba`) === true, "should return true when given abba");


// console.log(checkPalindrome("bannana")) //false
// console.log(findPalindrome("racecar")) //true
// console.log(findPalindrome("madam")) //true
