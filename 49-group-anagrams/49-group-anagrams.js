/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};
    
    for (let word of strs) {
        const key = [...word].sort().join('');
        
        if (!map[key]) {
            map[key] = [];
        }
        
        map[key].push(word);
    }
    
    return Object.values(map);
};