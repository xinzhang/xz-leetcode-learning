const prefixSum = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    let num = 0;
    for (let j = i; j < nums.length; j++) {
      num += nums[j];
      if (num === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

nums = [2, 7, 13, 15, 5, 8, 3, 6, 7];
console.log(prefixSum(nums, 13));
