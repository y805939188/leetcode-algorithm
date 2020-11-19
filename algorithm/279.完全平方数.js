/**
 * @param {number} n
 * @return {number}
 * 
 * 思路1:
 *  递归回溯
 *  先把小于 n 的完全平方数都搞出来
 *  然后就正常地递归回溯就好
 */
var numSquares = function(n) {
  const arr = [];
  for (let i = 1; i ** 2 <= n; i++) {
    arr.push(i ** 2);
  }
  const res = [];
  const _numSquares = (arr, tmp, sum, target) => {
    if (sum > target) {
      return;
    } else if (sum === target) {
      res.push(tmp);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const _n = arr[i];
        const _sum = sum + _n;
        const _tmp = [...tmp];
        _tmp.push(_n);
        _numSquares(arr, _tmp, _sum, target);
      }
    }
  }
  _numSquares(arr, [], 0, n);

  return res.reduce((a, b) => (a.length < b.length ? a : b)).length;
};

/**
 * 思路2:
 *  递归
 *  比如求 12 的最少平方和数量的话
 *  12 之前的完全平方数为 [1, 4, 9]
 *  那就可以拆分成
 *  min[ getNumSquares(12 - 1), getNumSquares(12 - 4), getNumSquares(12 - 9) ]
 *  注意当 n 正好是某个数的完全平方和的时候可以直接 return 1
 *  以此类推
 */
var numSquares = function(n) {
  const _getSquares = (t) => {
    const arr = [];
    for (let i = 1; i ** 2 <= t; i++) {
      arr.push(i ** 2);
    }
    return arr;
  }
  const _cache = {};
  const _numSquares = (arr, target) => {
    if (_cache[target]) return _cache[target];
    if (arr[arr.length - 1] === target) return 1;
    const list = [];
    for (let i = 0; i < arr.length; i++) {
      const res = 1 + _numSquares(_getSquares(target - arr[i]), target - arr[i]);
      list.push(res);
    }
    const _r = Math.min(...list);
    _cache[target] = _r;
    return _r;
  }
  return _numSquares(_getSquares(n), n);
};

/**
 * 思路3:
 *  动态规划
 *  把 n 拆成最少的完全平方数的和
 *  
 *  动态规划的话 规律大概如下
 *  假设求 7 的平方和的话
 *  7 前面有 [1, 4] 两个完全平方数
 *  于是就可以有 min( [ 1 + getMin(7 - 1), 1 + getMin(7 - 4) ] )
 *  意思就是 先求出 7 - 1 也就是 6 的完全平方和, 再看如果 7 - 4 之后能有的平方和
 *  然后他们俩都要加上 1 因为本身这次也是一次
 *  最后取个最小值
 *  就这么依次往下类推就好
 * 
 *   arr = [
 *     1,
 *     min([ 1 + getMin(2 - 1) ]),
 *     min([ 1 + getMin(3 - 1) ]),
 *     min([ 1 ]),
 *     min([ 1 + getMin(5 - 1), 1 + getMin(5 - 4) ]),
 *     min([ 1 + getMin(6 - 1), 1 + getMin(6 - 5) ]),
 *     min([ 1 + getMin(7 - 1), 1 + getMin(7 - 4) ]),
 *     min([ 1 + getMin(8 - 1), 1 + getMin(8 - 4) ]),
 *     min([ 1 ]),
 *     ......
 *     ......
 *   ]
 */

var numSquares = function(n) {
  const _getSquares = (t) => {
    const arr = [];
    for (let i = 1; i ** 2 <= t; i++) {
      arr.push(i ** 2);
    }
    return arr;
  }
  const res = [1];
  const getMin = (n) => {
    return res[n - 1];
  }
  for (let i = 1; i < n; i++) {
    const _tmp = [];
    const _l = _getSquares(i + 1);
    if (_l[_l.length - 1] === (i + 1)) {
      res[i] = 1;
    } else {
      for (let j = 0; j < _l.length; j++) {
        _tmp.push( 1 + getMin( (i + 1) - _l[j] ) );
      }
      res[i] = Math.min(..._tmp);
    }
  }
  return res[n - 1];
}


/**
 * 思路4:
 *  可以利用 四平方定理
 *  (数学真他娘的是个好东西)
 */

/**
 * 思路5:
 *  抽象成 图
 */