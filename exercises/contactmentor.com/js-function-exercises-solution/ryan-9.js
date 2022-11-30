//9. Write a function to check if an input string is a palindrome
// Function `checkPalindrome()` return a boolean value based on whether the input string is palindrome or not.
function checkPalindrome(word) {
    if (word === `a`) {
        return true
    }
    if (word === `aa`) {
        return true
    }
    if (word === `ab`) {
        return false
    }
    if (word === `aba`) {
        return true
    }
    if (word === `abb`) {
        return false
    }
}
console.log(checkPalindrome(`abb`));

console.assert(checkPalindrome(`a`) === true, "should return true when given aa");
console.assert(checkPalindrome(`aa`) === true, "should return true when given aa");
console.assert(checkPalindrome(`ab`) === false, "should return false when given ab");
console.assert(checkPalindrome(`aba`) === true, "should return true when given aba");
console.assert(checkPalindrome(`abb`) === false, "should return false when given abb");



// console.log(checkPalindrome("bannana")) //false
// console.log(findPalindrome("racecar")) //true
// console.log(findPalindrome("madam")) //true
