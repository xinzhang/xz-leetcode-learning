// const twoSum = (nums, target) => {
//     const result = {};
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (result[target - num] != undefined) {
//             return [result[target - num], i];
//         }
//         result[num] = i;
//     }
// };

// bruteforce
const twoSum = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
console.log(twoSum(nums, 13));
console.log(twoSum(nums, 26));
