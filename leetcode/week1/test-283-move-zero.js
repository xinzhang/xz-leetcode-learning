/*
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

Input: [0, 0, 1]
Output: [ 1, 0, 0]

Input: [2, 1]


You must do this in-place without making a copy of the array.
Minimize the total number of operations
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const timing = require("../timing");

var moveZeroes_1 = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  while (i < j) {
    while (nums[j] === 0) j--;
    while (nums[i] !== 0) i++;
    if (nums[i] === 0) {
      let m = nums[i];
      nums[i] = nums[j];
      nums[j] = m;
      i++;
    }
  }
  return nums;
};

var moveZeroes_2 = function (nums) {
  if (nums.length === 1) {
    return nums;
  }

  return nums[0] === 0
    ? [...moveZeroes_2(nums.slice(1)), 0]
    : [nums[0], ...moveZeroes_2(nums.slice(1))];
};

var moveZeroes_3 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    console.log(i, nums);
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
};

var moveZeroes_4 = function (nums) {
  return nums.filter((x) => x !== 0).concat(...nums.filter((x) => x === 0));
};

var moveZeroes = function (nums) {
  let i = 0,
    j = 1,
    len = nums.length;
  for (i, j; j < len; ) {
    if (nums[i] == 0 && nums[j] !== 0) {
      let m = nums[i];
      nums[i] = nums[j];
      nums[j] = m;
      i++;
      j++;
      continue;
    }
    while (nums[i] !== 0 && i <= len) i++;
    j = i + 1;
    while (nums[j] === 0 && j <= len) j++;
  }
  return nums;
};

// timing(moveZeroes, [0, 1, 0, 3, 12]);

//console.log(moveZeroes([2, 1]));
console.log(moveZeroes_4([0,1,0,3,12]));
