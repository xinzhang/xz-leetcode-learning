/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

You must do this in-place without making a copy of the array.
Minimize the total number of operations. 

Input: nums = [0, 1, 0, 3, 12],
Output: [1, 3, 12, 0, 0].

Input: nums = [0, 0, 0, 3, 1],
Output: [3, 1, 0, 0, 0].

*/

/**
 * @param nums: an integer array
 * @return:
 */
const moveZeroesUseArray = function(nums) {
    let result = [];
    let zeroCnt = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeroCnt++;
        } else {
            result.push(nums[i]);
        }
    }

    for (let i = 0; i < zeroCnt; i++) {
        result.push(0);
    }

    return result;
};

//in place replacement
const moveZeroes = function(nums) {
    let zeroCnt = 0;
    for (let i = nums.length; i > 0; i--) {
        if (nums[i - 1] === 0) {
            zeroCnt++;
            nums.splice(i - 1, 1);
        }
    }

    for (let i = 0; i < zeroCnt; i++) {
        nums.push(0);
    }
};

nums1 = [0, 1, 0, 3, 12];
nums2 = [0, 0, 0, 3, 1];

moveZeroes(nums1);
console.log(nums1);

moveZeroes(nums2);
console.log(nums2);
