/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];

  const _subsets = (arr, tmp, start) => {
    res.push(tmp);
    if (start >= arr.length) return;
    for (let i = start; i < arr.length; i++) {
      const _n = arr[i];
      const _tmp = [...tmp];
      _tmp.push(_n);
      _subsets(arr, _tmp, i + 1);
    }
  }
  _subsets(nums, [], 0);

  return res;
};