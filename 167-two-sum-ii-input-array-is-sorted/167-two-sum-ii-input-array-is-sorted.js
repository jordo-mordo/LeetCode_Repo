/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //create pointer at start and end of array
    //iterate through array
        //calculate total
        //if total is bigger than target move right pointer inward
        //if total is smaller than target move left pointer inward
        //if total is the target return indeces plus one each
    
    let left = 0;
    let right = numbers.length - 1;
    
    for (let num of numbers) {
        let total = numbers[left] + numbers[right];
        if (total > target) {
            right--;
        }
        else if (total < target) {
            left++;
        }
        else if (total === target) {
            return [left + 1, right + 1];
        }
    }
};