/**
 * @param {number[]} nums
 * @return {boolean}
 * 
 * 思路1:
 *  暴力解法 递归回溯
 */
// var canPartition = function(nums) {
//   const sum = nums.reduce((a, b) => (a + b));
//   if (sum % 2) return false;
//   const res = [];
//   const _canPartition = (arr, tmp, sum, index, target) => {
//     if (sum === target) {
//       res.push(tmp);
//     } else if (sum > target) {
//       return;
//     } else {
//       for (let i = index; i < arr.length; i++) {
//         const _n = arr[i];
//         const _sum = sum + _n;
//         const _tmp = [...tmp];
//         _tmp.push(_n);
//         _canPartition(arr, _tmp, _sum, i + 1, target);
//       }
//     }
//   }
//   _canPartition(nums, [], 0, 0, sum / 2);
//   return res.length === 2;
// };
// console.log(canPartition([1,5,11,5]));



/**
 * 思路2:
 *  自顶向下递归
 */
// var canPartition = function(nums) {
//   const sum = nums.reduce((a, b) => (a + b));
//   if (sum % 2) return false;
//   const _cache = {};
//   const _canPartition = (arr, target, index) => {
//     if (typeof _cache[`${target},${index}`] === 'boolean') return _cache[`${target},${index}`];
//     if (index >= arr.length) return false;
//     if (target < 0) return false;
//     if (!target) return true;
//     const res = _canPartition(arr, target - arr[index], index + 1) || _canPartition(arr, target, index + 1);
//     _cache[`${target},${index}`] = res;
//     return res;
//   }
//   return _canPartition(nums, sum / 2, 0);
// };
// console.log(canPartition([1,5,11,5]));


/**
 * 思路3:
 *  动态规划
 */
var canPartition = function(nums) {
  const sum = nums.reduce((a, b) => (a + b));
  if (sum % 2) return false;
  const target = sum / 2;
  const res = new Array(nums.length).fill(undefined).map(() => new Array(target).fill(-1));

  


}
