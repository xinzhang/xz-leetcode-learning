function twoSum(nums, target) {
  let result = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (result[target - num] != null) {
      return [result[target - num], i];
    }

    result[num] = i;
  }
}

const nums = [2, 7, 11, 15];
const target = 13;

console.log(twoSum(nums, target));
