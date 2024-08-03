/*

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
  and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


*/


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Attempt 1
var merge = function (nums1, m, nums2, n) {
    if (n !== 0) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (nums2[j] >= nums1[i]) {
                    break;
                } else {
                    nums1.pop();
                    nums1.splice(i, 0, nums2[j]);
                    nums2.splice(j, 1);
                    m++;
                    n--;
                }
            }
        }
        console.log(nums1)
        console.log(nums2)
        while (n > 0) {
            nums1.pop();
            nums1.splice(m, 0, nums2[0]);
            nums2.shift()
            m++;
            n--;
        }
    }
    console.log(nums1)
};

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//nums1 = [1], m = 1, nums2 = [], n = 0
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

// Attempt 2 using .sort()

var merge2 = function (nums1, m, nums2, n) {
    var j = 0;
    for (i = nums1.length; i >= m; i--) {
        if (nums1[i] === 0) {
            nums1.splice(i, 1, nums2[j]);
            j++;
        }
    }
    nums1.sort((a, b) => (a - b));
    console.log(nums1)
};

merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
