/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    //i: subsequence and fullString
    //o: boolean
    
    s = s.split('');
    t = t.split('');
    
    if (s.length > t.length) {
        return false;
    }
    
    for (let char of t) {
        if (!s.length) {
            break;
        }
        
        if(char === s[0]) {
            s.shift();
        }
    }
    
    return !s.length;
};