/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 思路:
 *  动态规划
 *  想看是否能从最左边到最右边的话
 *  可以看 某一个点儿的 index
 *  加上 这个点儿能往右跳的距离的这段儿范围内的所有点儿 只要有一个是 true
 *  那就说明该点儿也能是 true
 */
var canJump = function(nums) {
  if (!nums.length) return false;
  if (nums.length === 1) return true;
  const res = new Array(nums.length).fill(false);
  res[nums.length - 1] = true;
  nums[nums.length - 2] >= 1 && (res[nums.length - 2] = true);

  for (let i = nums.length - 2; i--;) {
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (j >= nums.length) break;
      (res[j] === true) && (res[i] = true);
    }
  }
  return res[0];
};
