/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = {};
    let res = [];
    
    let bucket = nums.map(() => {
	    return [];
    });
    bucket.push([]);
    
    for (let num of nums) {
        map[num] = map[num] + 1 || 1;
    }
    
    for (const [key, value] of Object.entries(map)) {
        bucket[value].push(key);
    }
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            for (let n of bucket[i]) {
                res.push(n);
                if (res.length === k)
                    return res;
            }
        }
    }
};