/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //input: array of nums
    //output: array of two indeces that equal target
    //constraints: number can not be added to itself, exactly one solution
    //edge case: array of only two numbers
    //__________________________________________________________
    
    //if array length is 2, return both indeces
    if (nums.length === 2) {
        return [0,1];
    }
    
    //set up empty hash table
    let numsObj = {};
    //index through array
    for(let i=0; i < nums.length; i++) {
        const val = nums[i]
        //store the target - current index
        const diff = target - val;
        //if the difference is included in hash table
        if (diff in numsObj) {
            //return indeces of both values
            return [numsObj[diff], i]
        }
        //add value to hash table
        numsObj[val] = i;
    }
    
    return [];
};