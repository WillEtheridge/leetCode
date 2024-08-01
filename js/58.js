/*

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal
substring
consisting of non-space characters only.

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {

    // var which is have we reached a word
    let wordReached = false;
    // var to set the index of the last letter in a word
    let lastLetterIndex

    // loop backwards through the string
    for (let i = s.length - 1; i >= 0; i--){
        if (!wordReached) {
            if (s[i] !== " "){
                lastLetterIndex = i;
                wordReached = true;
            }
        } else {
            if (s[i] === " "){
                console.log(lastLetterIndex)
                console.log(i)
                return lastLetterIndex - i;
            }
        }
    }
    return lastLetterIndex + 1
};

