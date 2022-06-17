/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    //input: string representing roman numerals
    //output: integer converted from that string
    //constraints: string will be at least one char long, limited roman numerals, guaranteed to be a valid number
    //edge case: one char long
    
    //create data object
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    //convert string to array
    s = s.split('');
    //if array is length of 1
    if (s.length === 1) {
        //return converted number
        return romanNumerals[s[0]];
    }
    
    //convert each element to an integer
    const nums = s.map((char, index) => {
        return romanNumerals[char];
    })
    //create sum value set to 0
    let sum = 0;
    //create last char value set to 0
    let lastNum = 0;
    //Iterate over the list of integers
    for (const num of nums) {
        //if current num bigger than last num
        if (num > lastNum) {
            //subtract last num from sum
            sum -= lastNum;
        }
        //else
        else {
            //add last num to sum
            sum += lastNum;
        }
        //set last num variable to current num
        lastNum = num;
    }
    //add last integer value to sum
    sum += lastNum;
    //return the total sum
    return sum;
};