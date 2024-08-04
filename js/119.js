/*

Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let array = [[1]];
    if(rowIndex === 0) {
        return array
    }
    for (let i = 2; i <= rowIndex + 1; i++){
        let tempArray = [];
        for (let j = 0; j < i; j++) {
            let a = array[i-2][j-1] || 0;
            let b = array[i-2][j] || 0;
            tempArray.push(a + b)
        }
        array.push(tempArray)
    }
    console.log(array)
    return array[rowIndex];
    
};

console.log(getRow(1))