/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let product = 1;
    let ascend = nums.map(val => {
       product *= val;
        return product;
    });
    product = 1;
    let descend = nums.reverse().map(val => {
        product *= val;
        return product
    }).reverse();
    
    let index = 0;
    let results = [];
    while(index < nums.length) {
        let left = ascend[index - 1];
        if (left === undefined) left = 1;
        let right = descend[index + 1];
        if (right === undefined) right = 1;
        console.log(left, '*', right, '=', left*right)
        results.push(left * right);
        index++;
    }
    return results;
};