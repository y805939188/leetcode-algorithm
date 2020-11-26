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
var lengthOfLIS = function(nums) {
  const _cache = {};
  const _lengthOfLIS = (arr, index, prev) => {
    if (_cache[index]) return _cache[index];
    if (index >= arr.length) return 0;
    if (arr[index] > prev) {
      const res = 1 + _lengthOfLIS(arr, index + 1, arr[index]);
      _cache[index] = res;
      return res;
    }
    const res = _lengthOfLIS(arr, index + 1, arr[index - 1]);
    _cache[index] = res;
    return res;
  }
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    res.push(1 + _lengthOfLIS(nums, i + 1, nums[i]));
  }
  return Math.max(...res);
};
