const twoSum = (nums, target) => {
    const result = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (result[target - num] != undefined) {
            return [result[target - num], i];
        }
        result[num] = i;
    }
};

nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
