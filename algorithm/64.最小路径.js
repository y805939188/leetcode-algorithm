/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 思路:
 *  动态规划
 *  从左上角开始到有下角的最短距离
 *  假设右下角的坐标是 x, y
 *  那就可以拆分成 从 (x, y) 到 (x + 1, y + 1) 的最短距离
 *  这个最短距离可以根据 min(currentNumber + getRightNumber(), currentNumber + getUnderNumber()) 拿到
 *  此时 x, y 就是一个最短的 sum 了 然后再计算 (x - 1, y) 到 (x, y) 的最短距离
 *  依次类推 因为每次计算的时候 getRightNumber 以及 getUnderNumber 拿到的那个数字对于
 *  该数字已经是最短的了 所以可以放心地用 currentNumber 去加它们俩
 */
var minPathSum = function(grid) {
  const _getRightNumber = (x, y) => typeof grid[y][x + 1] === 'number' ? grid[y][x + 1] : Infinity;
  const _getUnderNumber = (x, y) => grid[y + 1] ? grid[y + 1][x] : Infinity;
  for (let i = grid.length; i--;) {
    for (let j = grid[0].length - 1; j >= 0; j--) {
      if (i === grid.length - 1 && j === grid[0].length - 1) {
        continue;
      }
      grid[i][j] = Math.min(grid[i][j] + _getRightNumber(j, i), grid[i][j] + _getUnderNumber(j, i));
    }
  }
  return grid[0][0];
};
