/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// First attempt
var majorityElemenFirst = function(nums) {

    if (nums.length === 1 || nums.length === 2) {
        return nums[0]
    }

    const map = new Map() // Initialize a map
    const targetNum = Math.ceil(nums.length / 2) 

    for (let i = 0; i < nums.length; i++) {
        console.log(map)
        const current = map.get(nums[i]);
        if (current) {
            map.set(nums[i], current + 1);
            if (current + 1 >= targetNum) {
                return nums[i]
            }
        } else {
            map.set(nums[i], 1)
        }
    }
};

//

// Second attempt - Boyer-Moore Voting Algorithm

var majorityElement = function(nums) {
    let majority = nums[0];
    let count = 1;

    for (let i = 1; i < nums.length; i++){
        if (nums[i] ===  majority) {
            count ++;
        } else {
            count --;
        }
        if (count === 0) {
            majority = nums[i];
            count = 1;
        }
    }
    return majority;

}
console.log(majorityElement([3,2,3,4,3]))