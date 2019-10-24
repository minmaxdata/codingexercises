/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
      console.log('max profit', maxProfit);
    }
  }
  return maxProfit
};
let array = [7, 1, 5, 3, 6, 4];
let result = maxProfit(array);
console.log('result', result);
array = [1, 2, 3, 4, 5];
result = maxProfit(array);
console.log('result', result);
array = [7, 6, 4, 3, 1];
result = maxProfit(array);
console.log('result', result);