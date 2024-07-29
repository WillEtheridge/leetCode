/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false


*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const matchObj = {
        "(": ")",
        "{": "}",
        "[": "]"
    };

    let stack = [];

    for (let i = 0; i < s.length; i ++) {
       
        const char = s[i];

        // If char is opening bracket add to stack
        if (matchObj[char]) {
            stack.push(char)
        } else {
            // Remove last opening bracket from array and add to const openingBracket
            const openingBracket = stack.pop();
            if (matchObj[openingBracket] !== char) {
                return false;
            }
        }
    }
    // If stack is empty return true otherwise return false
    return stack.length === 0;
};

console.log(isValid("([{}])"))