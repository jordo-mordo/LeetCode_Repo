/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //i: array of nums
    //o: integer for length of new array
    //c: array is already sorted, at least one value
    //e: only one value, all duplicates

    
    //iterate over array
    for (let i = 0; i < nums.length; i++) {
        //if last number equals current number
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }
    //return counter
    console.log(nums);
    return nums.length;
    
};