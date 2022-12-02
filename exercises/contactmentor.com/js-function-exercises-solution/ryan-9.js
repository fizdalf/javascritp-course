//9. Write a function to check if an input string is a palindrome
// Function `checkPalindrome()` return a boolean value based on whether the input string is palindrome or not.
function checkPalindrome(word) {
    let limit = Math.floor(word.length / 2);
    for (let i = 0; i < limit; i++) {
        if (word.charAt(i) !== word.charAt(word.length - i - 1)) {
            return false;
        }
    }
    return true
}

console.log(checkPalindrome(`abmba`));

console.assert(checkPalindrome(`a`) === true, "should return true when given aa");
console.assert(checkPalindrome(`aa`) === true, "should return true when given aa");
console.assert(checkPalindrome(`ab`) === false, "should return false when given ab");
console.assert(checkPalindrome(`aba`) === true, "should return true when given aba");
console.assert(checkPalindrome(`abb`) === false, "should return false when given abb");
console.assert(checkPalindrome(`abba`) === true, "should return true when given abba");




// console.log(checkPalindrome("bannana")) //false
// console.log(findPalindrome("racecar")) //true
// console.log(findPalindrome("madam")) //true
