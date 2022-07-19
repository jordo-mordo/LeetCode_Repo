/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '');
    s = s.toLowerCase();
    s = s.split('');
    return JSON.stringify(s) === JSON.stringify(s.reverse())
};