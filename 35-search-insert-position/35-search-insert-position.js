/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //i: array of nums
    //o: integer representing index
    //c: at least one element, nums are distinct and sorted
    //e: array contains only one value
    
    //iterate over list of nums
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        //if element equals target
        if (num === target) {
            //return index
            return i;
        }
        //if element is larger than target
        if (num > target) {
            //return last index
            return i;
        }
    }
    return nums.length;
};