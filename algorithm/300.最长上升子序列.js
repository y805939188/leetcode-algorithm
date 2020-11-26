/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const res = [];
  const _lengthOfLIS = (arr, index) => {
    const _tmp = [];
    for (let i = index; i < arr.length; i++) {
      (!_tmp.length || arr[i] > _tmp[_tmp.length - 1]) && _tmp.push(arr[i]);
    }
    res.push(_tmp);
  }
  for (let i = 0; i < nums.length; i++) {
    _lengthOfLIS(nums, i);
  }
};

// lengthOfLIS([10,9,2,5,3,7,101,18]);

/**
 * 
 * 思路2:
 *  动态规划
 */
var lengthOfLIS = function(nums) {
  if (nums.length === 0) return 0;
  const arr = new Array(nums.length).fill(1);
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        arr[i] = Math.max(arr[i], 1 + arr[j]);
      }
    }
  }
  return Math.max(...arr);
};
