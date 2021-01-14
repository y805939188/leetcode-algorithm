/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * 思路1:
 *  递归回溯 肯定超时
 */
var threeSum = function(nums) {
  const res = [];

  const _threeSum = (arr, tmp, target, current, num, start) => {
    if (num >= 3) {
      if (current === target) {
        res.push(tmp);
      }
    } else {
      for (let i = start; i < arr.length; i++) {
        if (i > start && arr[i] === arr[i - 1]) continue;
        const _tmp = [...tmp];
        const _current = current + arr[i];
        _tmp.push(arr[i]);
        _threeSum(arr, _tmp, target, _current, num + 1, i + 1);
      }
    }
  }
  _threeSum(nums.sort((a, b) => (a - b)), [], 0, 0, 0, 0);

  console.log(res);
};

/**
 * 思略2:
 *  先排序
 *  然后设置个双指针, 左边一个右边一个
 *  之后遍历它俩中间的
 *  如果仨数加一块儿是 0 是就是结果
 *  可以左指针 ++ 右指针 --
 *  如果小于 0 的话 左指针++
 *  大于 0 的话 右指针 --
 *  另外最外层要有个循环 分别以每个 i 作为做指针
 */
var threeSum = function(nums) {
  
};
