/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 思路1:
 *  递归
 *  注意在 index + 2 的时候有可能会越界
 *  越界就走不到 push 了
 *  所以这种情况应该手动把 current 添加进去
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  const _cache = {};
  const _thiefMaxValue = (arrs, index) => {
    if (_cache[index]) return _cache[index];
    const currentValue = arrs[index];
    if (!currentValue) return 0;
    const _tmp_max = [];
    for (let i = index + 2; i < arrs.length; i++) {
      _tmp_max.push(currentValue + _thiefMaxValue(arrs, i));
    }
    if (!_tmp_max.length) _tmp_max.push(currentValue);
    const _max = Math.max(..._tmp_max);
    _cache[index] = _max;
    return _max;
  }
  const _res = [];
  for (let i = 0; i < nums.length; i++) {
    _res.push(_thiefMaxValue(nums, i));
  }
  return Math.max(..._res);
};

/**
 * 思路2:
 *  动态规划
 * 
 * 举个🌰: [2, 7, 3, 9, 1]
 * =>
 * res = max([
 *   max(2 + valueMax(3), valueMax(9), valueMax(1)),
 *   max(7 + valueMax(9), valueMax(1)),
 *   max(3 + valueMax(1)),
 *   max(9, valueMax(1)),
 *   1
 * ]);
 * =>
 * res = max([
 *   max(2 + res[length - 3], 2 + res[length - 2], 2 + res[length - 1]),
 *   max(7 + res[length - 2], 7 + res[length - 1]),
 *   max(3 + res[length - 1]),
 *   max(9, 1),
 *   1
 * ]);
 * 
 * 需要注意的是 从倒数第三个房子开始 每次都要把它后面的隔一个房子之后的那些房子都要加上 然后取最大
 * 因为除了可以 从第一个房子到第三个房子 还可以直接从第一个房子到第四个/第五个/第六个等房子
 */

var rob = function(nums) {
  const res = [];
  const len = nums.length;
  res.unshift(nums[len - 1] || 0);
  res.unshift(Math.max(nums[len - 2], nums[len - 1]) || 0);
  if (len <= 2) return Math.max(...res);
  let j = 0;
  for (let i = len - 2; i--;) {
    const _tmp = [];
    res.slice(2).forEach((item) => _tmp.unshift(nums[i] + item));
    _tmp.unshift(nums[i] + res[res.length - (j++) - 1]);
    res.unshift(Math.max(..._tmp));
  }
  return Math.max(...res);
};

console.log(rob([4,1,2,7,1]));
