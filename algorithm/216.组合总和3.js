/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 * 
 * 思路:
 *  递归回溯
 *  就是从 1 ~ 9 的数组中 选出和为 n 长度为 k 的元素组合
 *  注意设置好递归迭代的次数就可以了
 */
var combinationSum3 = function(k, n) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const res = [];

  const _combinationSum3 = (arr, tmp, start, recursion, sum) => {
    if (recursion === k) {
      sum === n && res.push(tmp);
    } else if (recursion > k) {
      return;
    } else {
      for (let i = start; i < arr.length; i++) {
        const _n = arr[i];
        const _tmp = [...tmp];
        _tmp.push(_n);
        _combinationSum3(arr, _tmp, i + 1, recursion + 1, sum + _n);
      }
    }
  }

  _combinationSum3(arr, [], 0, 0, 0);
  return res;
};
