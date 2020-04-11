/* 
Input: [2,2,1]
Output: 1

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((prev, current) => (prev ^= current), 0);
};

console.log(singleNumber([4, 1, 2, 2, 1]));

console.log(singleNumber([ 2, 2, 1]));