/**
 * @param {number} n
 * @return {number}
 * 思路1:
 *  就用暴力的递归回溯把所有的解都求出来
 *  之后咔咔相乘就好
 *  但是时间复杂度贼鸡儿高
 *  所以需要优化 比如动态规划
 */
// var integerBreak = function(n) {
//   const _arr = new Array(n - 1).fill(undefined).map((a, b) => b + 1);
//   const _res = [];
//   const _intergerBreak = (arr, sum, tmp, start, target) => {
//     if (sum > target) {
//       return;
//     } else if (sum === target) {
//       _res.push(tmp);
//     } else {
//       for (let i = start; i < arr.length; i++) {
//         const _n = arr[i];
//         const _sum = _n + sum;
//         const _tmp = [...tmp];
//         _tmp.push(_n);
//         _intergerBreak(arr, _sum, _tmp, i, target);
//       }
//     }
//   }
//   _intergerBreak(_arr, 0, [], 0, n);
//   return _res;
// };


// 递归解法2
// _intergerBreak 表示分割完 target 后的最大乘积
// 
// var integerBreak = function(n) {
//   const _cahce = {};
//   const _intergerBreak = (target) => {
//     if (target === 1) return 1;
//     if (target === 2) return 1;
//     if (_cahce[target]) return _cahce[target];
//     const res = [];
//     for (let i = 1; i < target; i++) {
//       res.push(i * _intergerBreak(target - i));
//       res.push(i * (target - i));
//     }
//     const _res = Math.max(...res);
//     _cahce[target] = _res;
//     return _res;
//   }
//   return _intergerBreak(n);
// };

// console.log(integerBreak(3));
// console.log(integerBreak(4));
