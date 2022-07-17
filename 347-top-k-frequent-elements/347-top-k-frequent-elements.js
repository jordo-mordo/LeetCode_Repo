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
  bucket[value].push(Number(key));
}

bucket = bucket.filter(values => values.length > 0);
bucket = bucket.reverse();
bucket.forEach(vals => res.push(...vals));
res = res.slice(0, k)
    
    return res;
};