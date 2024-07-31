/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4




*/

var searchInsert = function(nums, target) {
    let lower = 0;
    let upper = nums.length;

    var split = function() {

        // Base case: if lower >= upper, we've found our insertion point
        if (lower >= upper) {
            return lower;
        }

        if (upper - lower === 1) {
            if (target > nums[lower]) {
                return upper;
            } else {
                return lower;
            }
        }

        let splitPoint = Math.floor((upper + lower) / 2);
        let arrayNum = nums[splitPoint];

        if (arrayNum === target) {
            return splitPoint;
        }

        if (target > arrayNum) {
            lower = splitPoint + 1;
            return split();
        } else {
            upper = splitPoint;
            return split();
        }
    };

    return split();
};

console.log(searchInsert([1,3,5,6], 7))

/*

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4


*/