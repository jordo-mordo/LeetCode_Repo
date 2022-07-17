/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    let value = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return ([i, map[target - nums[i]]]);
        } else {
            map[nums[i]] = i;
        }
    }
};