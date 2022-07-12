/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let result = -1;
    let sum = 0;
    let tempSum = 0;
    
    nums.forEach((val) => {
        sum += val;
    });
    
    nums.forEach((val, index) => {
        if (result === -1) {
            if (tempSum === sum - val - tempSum) {
                result = index;
            }
            tempSum += val;
        }
    });
    
    return result;
};