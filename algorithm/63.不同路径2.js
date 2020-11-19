/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * 
 * 思路1:
 *  递归回溯
 *  没啥好说的 暴力解法 数组大了容易超时
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const res = [];

  const _uniquePathsWithObstacles = (grid, tmp, x1, y1, x2, y2) => {
    if (x1 === x2 && y1 === y2) {
      res.push(tmp);
    } else if (grid[y1][x1] === 1) {
      return
    } else if (x1 === x2) {
      const _tmp = [...tmp];
      _tmp.push('under');
      _uniquePathsWithObstacles(grid, _tmp, x1, y1 + 1, x2, y2);
    } else if (y1 === y2) {
      const _tmp = [...tmp];
      _tmp.push('right');
      _uniquePathsWithObstacles(grid, _tmp, x1 + 1, y1, x2, y2);
    } else {
      for (let i = 0; i < 2; i++) {
        const _tmp = [...tmp];
        i === 1 ? _tmp.push('under') : _tmp.push('right');
        if (i === 1) {
          _uniquePathsWithObstacles(grid, _tmp, x1, y1 + 1, x2, y2);
        } else {
          _uniquePathsWithObstacles(grid, _tmp, x1 + 1, y1, x2, y2);
        }
      }
    }
  }
  _uniquePathsWithObstacles(
    obstacleGrid,
    [],
    0,
    0,
    obstacleGrid[0].length - 1,
    obstacleGrid.length - 1
  );

  return res.length;
};

/**
 * 思路2:
 *  还是递归
 *  坑儿还是挺多的
 *  边界条件很气人
 *  1. 注意最右下角如果是 1 那就直接 return 0
 *  2. 如果当前的坐标是 1 也直接 return 0
 *  3. [[0]] 直接  return 1
 *  4. 当 x1 === x2 或者 y1 === y2 时候 要从当前这个坐标直接往 下/后 遍历
 *     一旦出现一个是 1 的那么就直接 return 0 因为此路不通了
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
  const grid = obstacleGrid;
  const _cache = {};
  const _uniquePathsWithObstacles = (x1, y1, x2, y2) => {
    if (grid[y2][x2] === 1) return 0;
    if (grid[y1][x1] === 1) return 0;
    if (!x2 && !y2) return 1;
    if (x1 === x2 && y1 === y2) return 0;
    if (_cache[`${y1},${x1}`]) return _cache[`${y1},${x1}`];
    if (x1 === x2) {
      for (let i = y1; i < y2; i++) {
        if (grid[i][x1] === 1) return 0;
      }
      return 1;
    } else if (y1 === y2) {
      for (let i = x1; i < x2; i++) {
        if (grid[y1][i] === 1) return 0;
      }
      return 1;
    }
    const _right_paths_num = _uniquePathsWithObstacles(x1 + 1, y1, x2, y2);
    const _under_paths_num = _uniquePathsWithObstacles(x1, y1 + 1, x2, y2);
    _cache[`${y1},${x1}`] = _right_paths_num + _under_paths_num;
    return _right_paths_num + _under_paths_num;
  }
  return _uniquePathsWithObstacles(0, 0, grid[0].length - 1, grid.length - 1);
};

/**
 * 思路3:
 *  动态规划
 *  注意 [[0]] 之类的边界
 *  以及最开始要初始化一个对应 grid 的二维数组
 *  初始化时二维数组中的所有元素都是 0
 *  只需要把 最右下角的填充为 1 就可以了
 *  然后判断如果当前元素有障碍物 直接 continue
 *  因为当前元素如果是障碍物的话
 *  那么该元素对于右和下都是不可取的
 */
// [[0,1,1,1,0,1,0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,1],[0,1,1,0,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,1,0,1,0]]
var uniquePathsWithObstacles = function(obstacleGrid) {
  const grid = obstacleGrid;
  const x2 = grid[0].length - 1;
  const y2 = grid.length - 1;
  const arr = new Array(y2 + 1).fill(new Array(x2 + 1).fill(0)).map(item => [...item]);
  if (grid[y2][x2] === 1) return 0;
  if (!x2 && !y2) return 1;
  arr[y2][x2] = 1;
  for (let y1 = y2 + 1; y1--;) {
    for (let x1 = x2 + 1; x1--;) {
      if (x1 === x2 && y1 === y2) continue;
      if (grid[y1][x1] === 1) continue;
      if (x1 === x2) {
        arr[y1][x1] = arr[y1 + 1][x1];
      } else if (y1 === y2) {
        arr[y1][x1] = arr[y1][x1 + 1];
      } else {
        arr[y1][x1] = arr[y1 + 1][x1] + arr[y1][x1 + 1];
      }
    }
  }
  return arr[0][0];
};
