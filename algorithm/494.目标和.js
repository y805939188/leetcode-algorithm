/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 * 
 * 思路1:
 *  递归
 *  就从 0 开始 每次也不用内部循环 因为是线性的 每个元素都要被遍历到
 *  每次递归都可以选择当前这个元素是 + 或者 -
 */
var findTargetSumWays = function(nums, S) {
  const _findTargetSumWays = (arr, target, start) => {
    if (start > arr.length) return 0;
    if (start === arr.length) {
      if (target === 0) return 1;
      return 0;
    }
    const positiveNumber = _findTargetSumWays(arr, target + (+arr[start]), start + 1);
    const negativeNumber = _findTargetSumWays(arr, target + (-arr[start]), start + 1);
    return positiveNumber + negativeNumber;
  }
  return _findTargetSumWays(nums, S, 0);
};

/**
 * 思路2:
 *  动态规划
 *  不行 想不出来... 看评论有大佬用数学的方式推导出状态转移方程...
 *  你大爷的为啥???????????
 *  哭了......
 *  还是我笨......
 */
var findTargetSumWays = function(nums, S) {
  const res = new Array(nums.length).fill(0);


};
