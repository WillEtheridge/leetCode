/*
The complement of an integer is the integer you get when you flip
 all the 0's to 1's and all the 1's to 0's in its binary representation.

For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.

Given an integer num, return its complement.

Example 1:

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

*/

var findComplement = function(num) {

    // Convert to binary string
    const binaryString = num.toString(2)

    // create new string
    let inverseString = ""

    // loop through binary string and reverse
    for (let i = 0; i < binaryString.length; i ++) {
        if (binaryString[i] === "1") {
            inverseString += "0"
        } else {
            inverseString += "1"
        }
    }
    
    // parse inverse string into number and return
    return parseInt(inverseString, 2) 
};

console.log(findComplement(5))
