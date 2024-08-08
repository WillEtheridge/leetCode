/*

Given a string columnTitle that represents the column title as appears in an Excel sheet, 
return its corresponding column number.

For example:

A -> 1
B -> 2
C -> 3
...
Z -> 26
AA -> 27
AB -> 28 
...
*/


/**
 * @param {string} columnTitle
 * @return {number}
 */

// V1
var titleToNumberA = function (columnTitle) {

    let columnNumber = 0;

    let base = 26;
    let powerOf = 0;

    for (let i = columnTitle.length - 1; i >= 0; i--) {
         let num = columnTitle.charCodeAt(i) - 64;
         let multiplier = Math.pow(base, powerOf)
         columnNumber += num * multiplier
         powerOf++
    }
    return columnNumber;
};


// V2
var titleToNumber = function(columnTitle) {
    const base = 26;
    let columnNumber = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        const charValue = columnTitle.charCodeAt(i) - 64;
        columnNumber = columnNumber * base + charValue;
    }

    return columnNumber;
};