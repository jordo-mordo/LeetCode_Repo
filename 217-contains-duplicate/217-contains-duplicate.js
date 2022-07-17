/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    // let vals = {};
    // let result = false;
    // nums.forEach((val, index) => {
    //     if (vals[val]) {
    //         result = true;
    //     } else {
    //         vals[val] = true;
    //     }
    // });
    // return result;
    
    return new Set(nums).size !== nums.length;
};