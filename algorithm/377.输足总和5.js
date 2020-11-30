/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 
 * 思路1:
 *  暴力递归回溯
 */

 /**
  * 
  * 思路2:
  *   递归
  *   但是容易超时 就算加了缓存 如果 target 贼大但是 nums 里的都贼小也容易超时
  */
var combinationSum4 = function(nums, target) {
  const _cache = {};
  const _combinationSum4 = (arr, sum) => {
    if (_cache[sum]) return _cache[sum];
    if (sum === 0) return 1;
    const res = [];
    for (let i = 0; i < nums.length; i++) {
      if ((sum - nums[i]) < 0) continue;
      res.push(_combinationSum4(arr, sum - nums[i]));
    }
    if (!res.length) return 0;
    const _res = res.reduce((a, b) => (a + b));
    _cache[sum] = _res;
    return _res;
  }
  return _combinationSum4(nums, target);
};

/**
 * 思路3:
 *  动态规划
 *  注意如果遍历到的 nums 中的某个数字等于当前的 target 的话
 *  要给 res[target] += 1
 */
var combinationSum4 = function(nums, target) {
  const res = new Array(target + 1).fill(0);
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i < nums[j]) continue;
      if (nums[j] === i) {
        res[i] += 1;
      }
      res[i] += res[i - nums[j]];
    }
  }
  return res[res.length - 1];
};
