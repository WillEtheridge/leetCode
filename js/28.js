/*
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.

Example 2:

Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.


*/
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// Initial Implementation
var strStr = function(haystack, needle) {

    for (let i = 0; i < haystack.length; i++){
        console.log(haystack[i])
        if (haystack[i] === needle[0]){
            if (needle.length === 1) {
                return i;
            }
            for (let j = 1; j < needle.length; j++ ) {
                if (haystack[i+j] === needle[j]){
                    if (j === needle.length - 1) {
                        return i
                    } else continue;
                } else {
                    break; 
                }
            }
        }
    }
    return -1;
};

//console.log(strStr("mississippi", "issippi"))
//console.log(strStr("atest", "test"))

// KMP Algorithm

var strStr1 = function(haystack, needle) {
    if (needle.length === 0) return 0;  // Edge case: empty needle

    const lps = new Array(needle.length).fill(0);
    console.log(lps)

}

strStr1("atest", "test")
