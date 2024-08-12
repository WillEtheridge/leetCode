/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R

And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);

 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"

*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let obj = {}

    let row = 1;
    let direction = 1
    
    for (let j = 0; j < s.length; j ++) {
        if (!obj[row]) {
            obj[row] = ""
        }
        obj[row] += s[j];
        if ( row == 1) {
            direction = 1
        } else if ( row == numRows) {
            direction = -1
        }
        row += direction
    }
    let returnString = ""

    // Handle edge where s.length > numRows
    if (s.length < numRows) {
        console.log("we're here")
        numRows = s.length
    }
    for (let i = 1; i <= numRows; i++ ) {
        returnString += obj[i]
    }
    return returnString;
};

