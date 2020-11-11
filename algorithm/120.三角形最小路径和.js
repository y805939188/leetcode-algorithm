/**
 * @param {number[][]} triangle
 * @return {number}
 * 思路1:
 *  递归回溯
 *  思路较为简单 就是很正常的递归回溯
 *  不过如果数据贼长的话
 *  绝逼超时
 *  所以可以使用动态规划
 */
var minimumTotal = function(triangle) {
  let _min = Infinity;
  const _minimumTotal = (arr, index, sum, prevIndex) => {
    if (index > triangle.length) return;
    if (index === triangle.length) {
      _min = Math.min(_min, sum);
    } else {
      const _tmp = arr[index];
      for (let i = 0; i < _tmp.length; i++) {
        if (i < prevIndex || i > prevIndex + 1) continue;
        const _internal_tmp = _tmp[i];
        const _sum = sum + _internal_tmp;
        _minimumTotal(arr, index + 1, _sum);
      }
    }
  }
  _minimumTotal(triangle, 0, 0, 0);
  return _min;
};
