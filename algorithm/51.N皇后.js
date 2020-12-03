/**
 * @param {number} n
 * @return {string[][]}
 * 
 * 思路:
 *  递归回溯
 *  该思路可以可到正确的结果
 *  但是为啥会有好多重复值呢
 *  暂时还没想明白
 */
var solveNQueens = function(n) {
  const res = [];
  // 创建一个棋盘 初始值全是点儿
  const checkerBoard = new Array(n).fill(undefined).map(i => new Array(n).fill('.'));
  const _solveNQueens = (tmp, x, y, target, current) => {
    if (current > target) {
      // 如果当前下棋的数量已经超过 target 就直接 return
      return;
    } else if (current === target) {
      // 如果当前下的棋子数正好等于目标的 n 那就找到了一个结果
      res.push(tmp.map(i => i.join('')));
    } else {
      // 如果还没有下够 n 颗皇后
      for (let j = 0; j < y; j++) {
        // 第 0 到当前的行数 扫描第 x 列 如果某个棋盘有 Q 说明不能放这儿 直接 return
        if (tmp[j][x] === 'Q') return;
      }

      let _x = x, _y = y;
      while(true) {
        // 扫描当前坐标的左上对角线
        _x--;
        _y--;
        // 如果 _x 或者 _y 越界就 break
        if (_x < 0 || _y < 0) break;
        if (tmp[_y][_x] === 'Q') return;
      }
      _x = x, _y = y;
      while(true) {
        // 扫描当前坐标的右上对角线
        _x++;
        _y--;
        // 如果 _x 或者 _y 越界就 break
        if (_x >= n || _y < 0) break;
        if (tmp[_y][_x] === 'Q') return;
      }

      // 复制一份儿棋盘 因为 array 是引类型 也是为了回溯时候能保证棋盘还是上一次的状态
      const _tmp = tmp.map(item => [...item]);
      // 暂时把皇后下到当前坐标
      _tmp[y][x] = 'Q';
      for (let i = 0; i < n; i++) {
        // 从下一行的第 0 位开始挨个儿试
        _solveNQueens(_tmp, i, y + 1, target, current + 1);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    // 第一次可能下在从左往右数第 i 个位置 下一步要下在第 0 行 目标是下 n 颗皇后, 当前已经下了 0 颗
    _solveNQueens(checkerBoard, i, 0, n, 0);
  }
  
  console.log(res);
};