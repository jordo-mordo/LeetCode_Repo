/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
//     const mod = 1e9+7;
//     const dp = function(i, lastChar) {
//         if (i === n) {
//             return 1;
//         }
        
//         let ans = 0;
//         if (lastChar === 'a') {
//             ans += dp(i+1,'e');
//         }
//         else if (lastChar === 'e') {
//             ans += dp(i+1,'a') + dp(i+1, 'i');
//         }
//         else if (lastChar === 'i') {
//             ans += dp(i+1,'a') + dp(i+1, 'e') + dp(i+1, 'o') + dp(i+1, 'u');
//         }
//         else if (lastChar === 'o') {
//             ans += dp(i+1,'i') + dp(i+1, 'u');
//         }
//          else if (lastChar === 'u') {
//             ans += dp(i+1,'a');
//         }
        
//         return ans % mod;
//     }
    
    
    
//     return (dp(1, 'a') + dp(1, 'e') + dp(1, 'i') + dp(1, 'o') + dp(1, 'u')) % mod;
    
    const mod = 1e9+7;
    let dp = Array(5).fill(1); // base condition a e i o u, each 1 way
    for (let i = 1; i < n; i++) {
        let ndp = Array(5).fill(0);
        ndp[0] = dp[1]; // a -> e
        ndp[1] = (dp[0] + dp[2]) % mod; // e -> a/i
        ndp[2] = (dp[0] + dp[1] + dp[3] + dp[4]) % mod; // i -> a/e/o/u
        ndp[3] = (dp[2] + dp[4]) % mod; // o -> i/u
        ndp[4] = dp[0]; // u -> a
        dp = ndp;
    }
    let res = 0;
    for (const e of dp) {
        res += e;
        if (res >= mod) res -= mod;
    }
    return res;
};