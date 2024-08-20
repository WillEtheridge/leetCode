/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.


*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// V1 - n^2 complexity
var isAnagramSlow = function(s, t) {
    let tArray = [...t]
    for (let i = 0; i < s.length; i++) {
        let index = tArray.indexOf(s[i])
        if (index === -1) {
            return false;
        } else tArray.splice(index, 1)
    }

    // handle any left over letters
    if (tArray.length > 0) {
        return false;
    }
    return true;
};

//v2 n complexity

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const count = new Array(26).fill(0); // Array for 26 lowercase English letters

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++; // Increment count for char in s
        count[t.charCodeAt(i) - 97]--; // Decrement count for char in t
    }

    // Check if all counts are zero
    for (let i = 0; i < 26; i++) {
        if (count[i] !== 0) {
            return false;
        }
    }

    return true;
};


console.log(isAnagram("a", "ab"))