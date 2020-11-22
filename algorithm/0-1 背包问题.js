/**
 * 一般寻求最优解的问题 需要设置约束条件(也就是参数)
 * 比如背包问题:
 *  给定 n 件物品 物品的重量为 w，物品的价值为 v
 *  现挑选物品放入背包中 假定背包能承受的最大重量为 C
 *  问应该如何选择装入背包中的物品，使得装入背包中物品的总价值最大
 * 
 * 这个问题就有两个约束条件 分别是 n 个物品以及 容量为 C
 * 也就是可以有如下状态:
 *  F(n, C): 考虑将 n 个物品放进容量为 C 的背包, 使其价值最大
 *  此时有两种存放的策略:
 *    1. F(i, c) = F(i - 1, c) 也就是说 不管当前这个 从下一个开始考虑放不放
 *    2. F(i, c) = v(i) + F(i - 1, C - w(i)) 也就是放当前这个 从总重量里头减去
 *  之后这俩取 max 这就是它的状态转移方程
 */

 /**
  * 
  * @param {重量的数组} w 
  * @param {价值的数组} v 
  * @param {总重量} C 
  */
const knapsack01 = (w, v, C) => {
  
  const _knapsack01 = (_n, _C, index) => {
    if (index >= w.length) {
      return 0;
    }
    const res1 = _knapsack01(_n - 1, _C, index + 1);

    const res2 = _C >= w[index] ? v[index] + _knapsack01(_n - 1, _C - (index + 1), index + 1) : 0;
    return Math.max(res1, res2);
  } 
  return _knapsack01(w.length - 1, C, 0);
}

// console.log(knapsack01([1,2,3], [6, 10, 12], 5));

/**
 * 动态规划的思路:
 *  
 */
const knapsack02 = (w, v, C) => {
  // 设置 高度为物品总数量, 宽度为背包能容纳的总重量 的二维数组
  // 注意 总重量可以等于 因为重量可以是 0 也可以和 C 一样重 所以是 小于等于
  const res = new Array(w.length).fill(undefined).map(() => new Array(C).fill(0));
  for (let i = 0; i <= C; i++) {
    // 设置初始值 初始值就是当容积为 i 的时候 背包放入 0 号物品的最大价值 
    res[0][i] = i >= w[0] ? v[0] : 0;
  }
  for (let i = 1; i < w.length; i++) {
    for (let j = 0; j <= C; j++) {
      // 第一种放入的策略 不放入当前为 i 的物品 只看它上面(之前)的那个物品的价值
      res[i][j] = res[i - 1][j];
      // 第二种策略 放入当前为 i 的物品 然后再加上 j - 当前物品重量 时的最大价值 
      if (j >= w[i]) {
        res[i][j] = Math.max(res[i][j], v[i] + res[i - 1][j - w[i]]);
      }
    }
  }
  // console.log(res);
  return res[w.length - 1][C];
}
console.log(knapsack02([1, 2, 3], [6, 10, 12], 5));
