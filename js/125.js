/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 1) {
        return true
    }

    // Strip all non letter characters from string
    const cleanString = s.replace(/[^a-zA-Z0-9]/g, "");
    // make string all lower case
    const lowerCaseString = cleanString.toLowerCase()
    const lcsLength = lowerCaseString.length

    // loop through string, compare first to last etc
    for (let i = 0; i <= Math.ceil(lcsLength / 2); i++) {
        if (lowerCaseString[i] !== lowerCaseString[lcsLength - i - 1]) {
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("0P"))