/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let buy = 0;
    let sell = 1;
    let maxProfit = 0;
                                                    //length is 6
    while (sell < prices.length) {                    //sell index is 5
        let profit = prices[sell] - prices[buy];     // profit is: 2
        maxProfit = Math.max(maxProfit, profit);    // max profit is: 4
        if (prices[sell] < prices[buy]) {           //
            buy = sell;                             // buy -> 1
        }
        sell++;                                     // sell 6
    }
    
    return maxProfit;
};