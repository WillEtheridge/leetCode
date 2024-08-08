/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.

Return true if n is a happy number, and false if not.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

    const squareAndSum = (number) => {
        let workingArray = Array.from(String(number), Number)
        let sum = 0;
        // loop and square numbers
        for (let i = 0; i < workingArray.length; i++) {
            sum += workingArray[i] * workingArray[i];
        }
        if (sum === 1) {
            return true;
        } else if (sum === n || sum === 4 || sum === 16 || sum == 37 || sum == 58) {
            return false;
        } else {
           return squareAndSum(sum)
        }
    }
    return squareAndSum(n);

};

console.log(isHappy(11))