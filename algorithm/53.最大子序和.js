/**
 * @param {number[]} nums
 * @return {number}
 */
// 这题是求最大连续子序和 如果用下面这种递归的话 那求的是 最大和
// var maxSubArray = function(nums) {
//   const _maxSubArray = (start) => {
//     if (start >= nums.length) return 0;
//     const a = nums[start] + _maxSubArray(start + 1);
//     const b = _maxSubArray(start + 1);
//     return Math.max(a, b);
//   }
//   return _maxSubArray(0);
// };

// 动态规划
var maxSubArray = function(nums) {

};
