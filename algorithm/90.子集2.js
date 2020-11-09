/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 思路:
 *  回溯递归
 *  整体基本上和组合总和差不多
 *  需要注意的地方就是重复元素需要先排序
 *  排序好之后确保在同一层循环的时候要把相同的元素跳过
 */
var subsetsWithDup = function(nums) {
  const res = [];
  nums = nums.sort();
  const _subsetsWithDup = (arr, tmp, start) => {
    res.push(tmp);
    if (start >= nums.length) return;
    for (let i = start; i < arr.length; i++) {
      const _n = arr[i];
      if (i > start && arr[i] == arr[i - 1]) continue;
      const _tmp = [...tmp];
      _tmp.push(_n);
      _subsetsWithDup(arr, _tmp, i + 1);
    }
  }
  _subsetsWithDup(nums, [], 0);
  return res;
};
