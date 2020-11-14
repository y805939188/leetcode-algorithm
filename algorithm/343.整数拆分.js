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


/**
 * 思路:
 *  可以把 '4 分割后的最大乘积' 转为 [ 1 * '3 分割后的最大乘积', 2 * '2 分割后的最大乘积', 3 * '1 分割后的最大乘积' ]
 *  注意还有一种情况是不分割 也要添加进数组
 *
 *  可以推导出 => arr = [1, 1, max(1 * arr[1], ((3 - 1) * 1), 2 * arr[0], (3 - 2) * 2, max(1 * arr[2], (4 - 1) * 1, 2 * arr[1], (4 - 2) * 2, 3 * arr[0], (4 - 3) * 3), ...]
 *  
 *  最开头的 1 是 '分割 1 之后的最大乘积', 第二个 1 是 '分割 2 之后的最大乘积'
 *  之后 '分割 3 之后的最大乘积' 就要根据前面两位来算了
 *  (3 - 1) * 1 和 (3 - 2) * 2 表示 '从 3 里头分出去一个 1' 之后按理应该求 '分割 1 之后的最大乘积'
 *  但是其实这里有个坑儿 就是不分割 1 的情况下 1 * 3 也应该作为一个待定的值
 */
var integerBreak = function(n) {
  const list = [1, 1];
  for (let i = 2; i < n; i++) {
    const res = [];
    for (let j = 0; j < list.length; j++) {
      res.push((j + 1) * list[list.length - (j + 1)]);
      // 记住上面那些算出来的都是把儿子切割的情况
      // 还少了一种不切割儿子而是直接让前面的乘以后面儿子的情况
      res.push(((i + 1) - (j + 1)) * (j + 1));
    }
    list.push(Math.max(...res));
  }
  return list[list.length - 1];
};
