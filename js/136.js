/*

Topics
Companies
Hint

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:

Input: nums = [2,2,1]
Output: 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {

    if (nums.length === 1) {
        return nums[0]
    }
    
    while (nums.length > 0) {
        let tempNum = nums[0];
        //console.log(tempNum)
        // first removal
        nums.splice(0, 1);
        let secondIndex = nums.indexOf(tempNum);
        if (secondIndex !== -1) {
            nums.splice(secondIndex, 1);
            continue;
        } else {
            return tempNum
        }
        
    }
};

console.log(singleNumber([4,1,2,1,2]))