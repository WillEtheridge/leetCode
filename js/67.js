/*
Given two binary strings a and b, return their sum as a binary string.

Example 1:

Input: a = "11", b = "1"
Output: "100"

Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// Initial Attempt
var addBinary = function (a, b) {
    let longer
    let shorter
    let returnArray = [];

    // Determine which string is longer
    if (a.length >= b.length) {
        longer = a;
        shorter = b;
    } else {
        longer = b;
        shorter = a;
    }

    // Reverse strings and turn to array
    var reverseAndReturnArray = function (s) {
        return s.split("").reverse()
    }

    const longerArray = reverseAndReturnArray(longer)
    const shorterArray = reverseAndReturnArray(shorter)

    // Loop 
    for (let i = 0; i < longerArray.length; i++) {
        if (!shorterArray[i]) {
            shorterArray[i] = 0;
        }

        // Convert to numbers
        let a = Number(longerArray[i]);
        let b = Number(shorterArray[i]);

        let result = a + b;

        if (result > 1) {
            result -= 2;

            // Ensure next index exists
            if (i + 1 < longerArray.length) {
                longerArray[i + 1] = Number(longerArray[i + 1]) + 1;
            } else {
                longerArray.push(1);
            }
        }
        returnArray.push(result);
    }

    return returnArray.reverse().join("")

};

//a = "1010", b = "1011"

console.log(addBinary("11", "1"))

// Learnt about BigInt

var addBinaryBigInt = function(a, b) {
    let sum = BigInt('0b'+a) + BigInt('0b'+b)
    return sum.toString(2)
};