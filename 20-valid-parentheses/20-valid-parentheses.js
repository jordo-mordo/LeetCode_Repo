/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //input: string
    //output: boolean
    //constraints: always at least one char, only relevent chars
    //edge case: only one char
    
    //____________________________________________________
    
    //if string has odd amount of characters
    if (s.length % 2 === 1) {
        //return false
        return false;
    }
    
    //create array holding starting chars
    let starters = [];
    //create char object for ending symbols: ), ], }
    let chars = {
        ')': '(',
        ']': '[',
        '}': '{',
    }
    //iterate over string
    for(const char of s) {
        //if current char is an 'ender'
        if (char in chars) {
            //if last starter is NOT a match
            if (starters[starters.length - 1] !== chars[char]) {
                //return false
                return false;
            }
            //else it does match the last starter
            else {
                //remove last starter from array
                starters.pop();
            }
        }
        else {
            //else push it to starters array
            starters.push(char);
        }
    }
    
    //return validity of having no starters remaining in the array
    return starters.length === 0;
};