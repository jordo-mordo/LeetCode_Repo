/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.forEach((val, index) => {
        if (index) {
            nums[index] = nums[index] + nums[index - 1]
        }
    });
    
    return nums;
};