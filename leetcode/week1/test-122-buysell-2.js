/*
Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., 
  buy one and sell one share of the stock multiple times).

  Input: [7,1,5,3,6,4]
  Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
             Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_1 = function (prices) {
    let total = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] > prices[i]) {
            total += prices[i + 1] - prices[i];
        }
    }
    return total;
};

var maxProfit =  function(prices) {
  let i = 0, buy, sell, profit = 0, N = prices.length - 1;
  while (i < N) {
      while (i < N && prices[i + 1] <= prices[i]) i++;
      buy = prices[i];

      while (i < N && prices[i + 1] > prices[i]) i++;
      sell = prices[i];

      profit += sell - buy;
  }
  return profit;
}

const prices1 = [7, 1, 5, 3, 6, 4];
const prices2 = [1, 2, 3, 4, 5];
const prices3 = [7, 6, 4, 3, 1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
