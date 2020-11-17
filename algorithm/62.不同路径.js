/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * 
 * 思路1:
 *  暴力递归回溯 注意 m n 在作为参数的时候需要都减 1
 *  因为数组是从 0 开始的
 */
var uniquePaths = function(m, n) {
  const res = [];
  const _uniquePaths = (directions, tmp, x1, y1, x2, y2) => {
    if (x1 === x2 && y1 === y2) {
      res.push(tmp);
    } else if (x1 >= x2) {
      const _tmp = [...tmp];
      const _i = directions[i];
      _tmp.push(_i);
      _uniquePaths(directions, _tmp, x1, y1 + 1, x2, y2);
    } else if (y1 >= y2) {
      const _tmp = [...tmp];
      const _i = directions[i];
      _tmp.push(_i);
      _uniquePaths(directions, _tmp, x1 + 1, y1, x2, y2);
    } else {
      for(let i = 0; i < directions.length; i++) {
        const _tmp = [...tmp];
        const _i = directions[i];
        _tmp.push(_i);
        if (_i === 'right') {
          _uniquePaths(directions, _tmp, x1 + 1, y1, x2, y2);
        } else if (_i === 'under') {
          _uniquePaths(directions, _tmp, x1, y1 + 1, x2, y2);
        }
      }
    }
  }

  _uniquePaths(['right', 'under'], [], 0, 0, m - 1 ,n - 1);
  return res.length;
};


/**
 * 思路2:
 *  算每个小格子到右下角的路径数量的话
 *  可以先算 当前小格子 右边的小格子 到右下角的路径数量
 *  然后再算 当前小格子 下边的小格子 到右下角的路径数量
 *  之后这俩相加就好了
 *  当往下走或者往右走碰壁的时候 只需要返回 1 就好
 *  因为此时只能往下或者往右
 * 
 *  然后顺便可以用缓存作为优化
 */

var uniquePaths = function(m, n) {
  if (m === 1 && n === 1) return 1;
  const _m = {};
  const _uniquePaths = (x1, y1, x2, y2) => {
    if (x1 === x2 && y1 === y2) return 0;
    if (x1 >= x2) return 1;
    if (y1 >= y2) return 1;
    if (_m[`${x1},${y1}`]) return _m[`${x1},${y1}`];
    const _right_paths = _uniquePaths(x1 + 1, y1, x2, y2);
    const _under_paths = _uniquePaths(x1, y1 + 1, x2, y2);
    _m[`${x1},${y1}`] = _right_paths + _under_paths;
    return _right_paths + _under_paths;
  }
  return _uniquePaths(0, 0, m - 1, n - 1);
};


