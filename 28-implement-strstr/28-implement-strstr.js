/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    //input: two strings
    //output: integer
    //constraints: strings always at least 1 char
    //edge case: needle is empty, strings match
    
    //if needle is empty string or strings match
    if (needle === '' || haystack === needle){
        //return 0
        return 0;
    }
    
    
    //iterate over haystack
    for (let i = 0; i < haystack.length; i++){
        //if current character matches first char of needle
        if (haystack[i] === needle[0]) {
            //if substring of haystack of needles length matches needle
            if (haystack.substring(i, i + needle.length) === needle) {
                //return index
                return i;
            }
        }
    }
    //return -1 if not found
    return -1;
};