/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  if (prices.length === 1) return 0;
  const _maxProfit = (arr, day, type, sum) => {
    if (day >= arr.length) return sum;
    if (type === 'buy') {
      const _sum = sum - arr[day];
      const _res1 = _maxProfit(arr, day + 1, 'sell', _sum);
      const _res2 = _maxProfit(arr, day + 1, 'wait', _sum);
      return Math.max(_res1, _res2);
    } else if (type === 'wait') {
      const _res1 = _maxProfit(arr, day + 1, 'sell', sum);
      const _res2 = _maxProfit(arr, day + 1, 'wait', sum);
      return Math.max(_res1, _res2);
    } else if (type === 'sell') {
      return sum + arr[day];
    }
  }

  const res = [];
  for (let i = 0; i < prices.length; i++) {
    res.push(_maxProfit(prices, i, 'buy', 0));
  }
  const res2 = Math.max(...res);
  return res2 < 0 ? 0 : res2;
};
