/**
 * @param {number} n
 * @return {number}
 * 
 * 思路: 递归可以 但是如果数字大的话就会栈溢出或者超时
 * 像这种 在 leetcode 上就过不去 数字给到 35 的时候就栈溢出了
 */
var climbStairs = function(n) {
  const res = [];

  const _climbStairs = (arr, sum, tmp, target) => {
    if (sum === target) {
      res.push(sum);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const _n = arr[i];
        const _tmp = [...tmp];
        const _sum = sum + _n;
        _tmp.push(_n);
        _climbStairs(arr, _sum, _tmp, target);
      }
    }
  }
  _climbStairs([1, 2], 0, [], n);
  return res;
};

console.log(climbStairs(3));
