/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    //two choices can be made each time
    let index1 = 1;
    let index2 = 1;
    //start from second to last position
    for (let i = 0; i < n - 1; i++) {
        //count previous two steps from position
        const temp = index1;
        index1 = index1 + index2;
        index2 = temp;
    }

    return index1;
};