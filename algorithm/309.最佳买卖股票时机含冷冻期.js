/**
 * @param {number[]} prices
 * @return {number}
 * 思路1:
 *  递归
 *  感觉像是一个状态机
 */
// var maxProfit = function(prices) {
//   if (!prices.length) return 0;
//   if (prices.length === 1) return 0;
//   const res = [];
//   const _maxProfit = (arr, day, type, sum, have) => {
//     if (day >= arr.length) {
//       res.push(sum);
//     } else {
//       if (type === 'buy') {
//         if (have) {
//           const a = _maxProfit(arr, day, 'sell', sum, true);
//           const b = _maxProfit(arr, day, 'wait', sum, true);
//         } else {
//           const _sum = sum - arr[day];
//           const a = _maxProfit(arr, day + 1, 'sell', _sum, true);
//           const b = _maxProfit(arr, day + 1, 'wait', _sum, true);
//         }
//       } else if (type === 'sell') {
//         if (have) {
//           const _sum = sum + arr[day];
//           const a = _maxProfit(arr, day + 1, 'wait', _sum, false);
//         } else {
//           const a = _maxProfit(arr, day, 'buy', sum, false);
//           const b = _maxProfit(arr, day, 'wait', sum, false);
//         }
//       } else if (type === 'wait') {
//         if (have) {
//           const a = _maxProfit(arr, day + 1, 'sell', sum, true);
//           const b = _maxProfit(arr, day + 1, 'wait', sum, true);
//         } else {
//           const a = _maxProfit(arr, day + 1, 'buy', sum, false);
//           const b = _maxProfit(arr, day + 1, 'wait', sum, false);
//         }
//       }
//     }
//   }

//   for (let i = 0; i < prices.length; i++) {
//     _maxProfit(prices, i, 'buy', 0, false);
//   }
//   return Math.max(0, ...res);
// };

var maxProfit = function(prices) {
  if (!prices.length) return 0;
  if (prices.length === 1) return 0;
  const _cache = {};
  const _maxProfit = (arr, day, type, sum, have) => {
    if (day >= arr.length) return sum;
    if (_cache[`${day},${type},${sum},${have}`]) return _cache[`${day},${type},${sum},${have}`];
    if (type === 'buy') {
      if (have) {
        const a = _maxProfit(arr, day, 'sell', sum, true);
        const b = _maxProfit(arr, day, 'wait', sum, true);
        const val =  Math.max(a, b);
        _cache[`${day},${type},${sum},${have}`] = val;
        return val;
      } else {
        const _sum = sum - arr[day];
        const a = _maxProfit(arr, day + 1, 'sell', _sum, true);
        const b = _maxProfit(arr, day + 1, 'wait', _sum, true);
        const val =  Math.max(a, b);
        _cache[`${day},${type},${sum},${have}`] = val;
        return val;
      }
    } else if (type === 'sell') {
      if (have) {
        const _sum = sum + arr[day];
        const a = _maxProfit(arr, day + 1, 'wait', _sum, false);
        const val =  Math.max(a, _sum);
        _cache[`${day},${type},${sum},${have}`] = val;
        return val;
      } else {
        const a = _maxProfit(arr, day, 'buy', sum, false);
        const b = _maxProfit(arr, day, 'wait', sum, false);
        const val =  Math.max(a, b);
        _cache[`${day},${type},${sum},${have}`] = val;
        return val;
      }
    } else if (type === 'wait') {
      if (have) {
        const a = _maxProfit(arr, day + 1, 'sell', sum, true);
        const b = _maxProfit(arr, day + 1, 'wait', sum, true);
        const val =  Math.max(a, b);
        _cache[`${day},${type},${sum},${have}`] = val;
        return val;
      } else {
        const a = _maxProfit(arr, day + 1, 'buy', sum, false);
        const b = _maxProfit(arr, day + 1, 'wait', sum, false);
        const val =  Math.max(a, b);
        _cache[`${day},${type},${sum},${have}`] = val;
        return val;
      }
    }
  }
  const res = [];
  for (let i = 0; i < prices.length; i++) {
    res.push(_maxProfit(prices, i, 'buy', 0, false));
  }
  return Math.max(0, ...res);
};

/**
 * 思路2:
 *  设置一个 "第 i 天时 持有股票的时候的最大值" hold[i]
 *  以及一个 "第 i 天时 没有股票的时候的最大值" unhold[i]
 * 
 *  注意 当在第三天以后 如果今天是买入的话 那么它的前一天 一定是冻结或者等待或者卖出
 *  
 */
var maxProfit = function(prices) {
  if (!prices.length) return 0;
  if (prices.length === 1) return 0;
  const hold = [0 - prices[0]];
  const unhold = [0];
  for (let i = 1; i < prices.length; i++) {
    hold.push(Math.max(i >= 2 ? unhold[i - 2] - prices[i] : unhold[i - 1] - prices[i], hold[i - 1]));
    unhold.push(Math.max(unhold[i - 1], hold[i - 1] + prices[i]));
  }
  console.log(JSON.stringify(hold))
  console.log(JSON.stringify(unhold))
  return unhold[unhold.length - 1];
};
