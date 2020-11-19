/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 思路:
 *  递归回溯
 *  算和 一直往下递归 当小于 target 的时候就继续往下加
 *  大于的时候就放弃 等于的时候就 push 结果
 *  需要注意的是 每次循环不能从 0 开始
 *  因为虽然每个数字可以和自己相加 但是不能和它前面的相加
 *  虽然没有问题 但是会导致元素一样而顺序不一样的结果也被加入到 res
 */
var combinationSum = function(candidates, target) {
  const res = [];

  const _combinationSum = (arr, tmpArr, sum, index) => {
    if (sum > target) {
      return;
    } else if (sum === target) {
      res.push(tmpArr);
    } else {
      for (let i = index; i < arr.length; i++) {
        const _tmpArr = [...tmpArr];
        const _tmp = arr[i];
        const _sum = sum + _tmp;
        _tmpArr.push(_tmp);
        _combinationSum(arr, _tmpArr, _sum, i);
      }
    }
  }
  _combinationSum(candidates, [], 0, 0);
  return res;
};
