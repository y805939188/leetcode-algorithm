/**
 * 思路:
 *  和 198 号 打家劫舍 1 是几乎一样的
 *  只不过由于变成了环形的房子
 *  所以 第一家和最后一家不能共存
 *  于是就可以分成两种情况
 *  第一种是 从数组中干掉第一家
 *  第二种是 从数组中干掉最后一家
 *  最后取两种情况的 max 就好
 */
var rob = function(nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  const _rob = function(nums) {
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
  const a = _rob(nums.slice(0, nums.length - 1));
  const b = __rob(nums.slice(1));
  return Math.max(a, b);
};