/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 
 * 思路:
 *  回溯递归
 *  有点像是全排列 不过变成了组合
 *  组合的话就需要有个数字来表示递归的轮次 以便达到了 k 值后退出
 *  迭代的时候先选出一个 然后把这个数组包括它前面的全都切掉
 *  因为题目规则时不要求顺序 所以 [1, 2] 和 [2, 1] 是一样的
 *  所以要把当前以及前面的都切掉
 *  之后递归 递归完了一定要注意把临时的数组也回溯成上一轮的样子
 */
var combine = function(n, k) {
  const res = [];
  if (n <= 0) return res;

  const _combine = (arr, current, recursionNum) => {
    let _tmp_current = [...current];
    if (recursionNum >= k) {
      res.push(current);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const _arr = [...arr];
        const _n = _arr[i];
        _arr.splice(0, i + 1);
        _tmp_current.push(_n);
        _combine(_arr, _tmp_current, recursionNum + 1);
        _tmp_current = [...current];
      }
    }
  }

  const arr = new Array(n).fill(null).map((item, index) => index + 1);
  
  if (n <= k) return [arr];

  _combine(arr, [], 0);
  return res;
};

combine(4, 2);
