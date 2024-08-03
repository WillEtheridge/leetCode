/*
Given an integer numRows, return the first numRows of Pascal's triangle.

*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let returnArray = [[1]];
    if(numRows === 1) {
        return returnArray
    }
    for (let i = 2; i <= numRows; i++){
        let tempArray = [];
        for (let j = 0; j < i; j++) {
            let a = returnArray[i-2][j-1] || 0;
            let b = returnArray[i-2][j] || 0;
            tempArray.push(a + b)
        }
        returnArray.push(tempArray)
    }
    return returnArray;
};

console.log(generate(50))

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
