/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    //input: an integer
    //output: boolean
    //constraints: -231 <= x <= 231 - 1
    //edge case: 1 digit
    //___________________________________________________________
    
    //stringify number
    let stringX = JSON.stringify(x);
    //convert string to array
    stringX = stringX.split('');
    //if array is matches the reverse version
    if (stringX.join('') === stringX.reverse().join('')) {
        //return true
        return true;
    }
    //return false
    return false;
}