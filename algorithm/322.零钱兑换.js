/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 * 
 * 思路1:
 *  递归 注意硬币面值的数组需要排序
 *  否则 if (target === arr[index]) return 1 这一步就会有问题
 *  因为 index + 1 可能比它小 也可能符合题意
 */

// [195,265,404,396]
// 3239
// [186,419,83,408]
// 6249
var coinChange = function(coins, amount) {
  if (!amount) return 0;
  const _cache = {};
  const _coinChange = (arr, target, index) => {
    if (typeof _cache[`${target},${index}`] === 'number') return _cache[`${target},${index}`];
    if (!target) return 0;
    if (index >= arr.length) return 0;
    if (arr[index] > target) return 0;
    if (target === arr[index]) return 1;
    const a = _coinChange(arr, target, index + 1);
    _cache[`${target},${index + 1}`] = a;
    const b = target - arr[index] ? _coinChange(arr, target - arr[index], index) : 1;
    _cache[`${target - arr[index]},${index}`] = b;
    let res;
    if (a > 0 && b > 0) {
      res = Math.min(a, b + 1);
    } else if (a > 0) {
      res = a;
    } else if (b > 0) {
      res = 1 + b;
    } else {
      res = 0;
    }
    _cache[`${target},${index}`] = res;
    return res;
  }
  const res = _coinChange(coins.sort((a, b) => (a - b)), amount, 0);
  return res || -1;
};

/**
 * 思路2:
 *  也是递归
 *  不过可以考虑成 每次从 coins 中拿取一个
 *  然后下一轮还可以在 coins 中任意拿取一个
 *  所以可以搞成一个循环
 * 
 *  但是需要注意 Math.min 有可能里头啥也没有 啥也没有的时候会返回无限大/小
 */
// var coinChange = function(coins, amount) {
//   if (!amount) return 0;
//   const _cache = {};
//   const _coinChange = (arr, target) => {
//     if (target === 0) return 0;
//     if (typeof _cache[target] === 'number') return _cache[target];
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (target >= arr[i]) {
//         res.push(1 + _coinChange(arr, target - arr[i]));
//       }
//     }
//     _cache[target] = Math.min(...res);
//     return _cache[target];
//   }
//   const res = _coinChange(coins, amount);
//   return (!res || res === Infinity) ? -1 : res;
// };


/**
 * 思路3:
 *  动态规划
 */
