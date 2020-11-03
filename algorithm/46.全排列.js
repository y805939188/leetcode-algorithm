/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const _permute = (arr, tmp) => {
    if (!arr.length) {
      res.push(tmp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const _arr = [...tmp];
        _arr.push(arr[i]);
        const _arr2 = [...arr];
        _arr2.splice(i, 1);
        _permute(_arr2, _arr);
      }
    }
  }
  _permute(nums, []);
  return res;
};
