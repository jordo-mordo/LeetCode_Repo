/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    //input: array of strings
    //output: a string representing the longest common prefix
    //constraints: array will always have at least one string, only lower-case english letters
    //edge case: string might be empty, there is no common prefix, only one word
    
    
    if (strs.length === 1) {
        return strs[0];
    }
    //store first word in array and remove
    const firstWord = strs.shift();
    //create letter counter variable equal to first word length
    let letterCounter = firstWord.length;
    //iterate over first word
    for (let i = 0; i < firstWord.length; i++) {
        //check if each letter does not match the same index of other words in the array
        let match = true;
        let char = firstWord[i];
        for(const word of strs) {
            if (word[i] !== char) {
                match = false;
            }
        }
        if (!match) {
            //store index into letter counter value
            letterCounter = i;
            //break loop
            break;
        }
    }
    //return substring of first word using letter counter
    return firstWord.substring(0, letterCounter);
};