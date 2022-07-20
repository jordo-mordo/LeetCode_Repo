/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end;
    
    if (s === '') return 0;
    if (s.length === 1) return 1;
    const helper = (string) => {
        return new Set(string).size === string.length;
    }
    
    for (let i = 1; i < s.length; i++) {
        end = i;
        console.log(s.slice(start, end + 1));
        if (!helper(s.slice(start, end + 1))) {
            start++;
        }
    }
    
    return end - start + 1;
};