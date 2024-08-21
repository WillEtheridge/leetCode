/*

Given an integer array nums, 
move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.


*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Attempt 1
var moveZeroesSlowly = function(nums) {

    if (nums.length === 1) {
        return nums;
    }

    var count = 0;
    var zeros = 0;
    var handleZeros = function(i) {
        console.log(`count: ${count}`)
        console.log(nums)

        if ((count + zeros) >= nums.length) {
            return;
        }
        if (nums[i] === 0) {
            nums.splice(i, 1)
            nums.push(0)
            count ++
            zeros ++
            return handleZeros(i)
        } else {
            count ++
            return handleZeros(i + 1)
        }
    }
    handleZeros(0)
    return nums;
};

// Attempt 2 with pointers from gpt

var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0;

    // Move all non zero numbers to front of array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0){
            nums[lastNonZeroIndex] = nums[i]
            lastNonZeroIndex ++
        }
    }
    console.log(nums);

    // Replace remaining nums with 0
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
        nums[i] = 0
    }

    return nums;

}

console.log(moveZeroes([1,0]))