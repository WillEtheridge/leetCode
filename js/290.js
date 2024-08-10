/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false

*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(" ") // split string into array of words
    console.log(words)

    

    const wordsMap = new Map();
    const patternMap = new Map()

    for (let i = 0; i < words.length; i++) {
        let patternValue = wordsMap.get(words[i]) // get pattern value for a word
        if (!patternValue) {
            wordsMap.set(words[i], pattern[i]); // map pattern value to a word
            if (patternMap.get(pattern[i])) {
                return false;
            } else {
                patternMap.set(pattern[i], true)
                patternValue = pattern[i]
            }
        }
        if (patternValue !== pattern[i]) {
            return false;
        }
    }

    return true;
    
};

console.log(wordPattern("xbabx", "dog cat tree cat dog"))