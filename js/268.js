/*

268. Missing Number
Easy
Topics
Companies

Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Attempt 1 - n^2 run time
var missingNumber1 = function(nums) {

    for (let i = 0; i <= nums.length; i++) {
        const index = nums.indexOf(i);
        //console.log(i)
        if (index === -1 ) {
            return i;
        }
    }
};



var missingNumber = function(nums) {
    const n = nums.length;
    const fullTotal = (n * (n + 1)) / 2
    const sum = nums.reduce((total, val) => total + val, 0)
    return fullTotal - sum;
}

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))