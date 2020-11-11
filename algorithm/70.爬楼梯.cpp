#include "iostream"
#include "string"
#include "vector"
#include "map"
using namespace std;

/**
 * 使用递归的话 思路很简单 但是容易爆栈
 * 可以使用动态规划的思路
 *    将一个大的问题分解成一个个小的问题
 *    比如这里的爬楼梯
 *    每次可以上 一层 或 两层
 *    那么第一次可以选择 爬一层 或者 爬两层
 *    相应的第二次再爬的时候就剩下 n - 1 层 或者 n - 2 层
 *    只要把这俩相加就好了 和斐波那契数列很类似
 *    
 */

// 第二种递归方法
// class Solution {
// public:
//   int climbStairs(int n) {
//     if (n == 0) return 1;
//     if (n == 1) return 1;
//     if (n == 2) return 2;
//     return climbStairs(n - 1) + climbStairs(n - 2);
//   }
// };


// 第三种方法
// 由于自顶向下递归的过程中很有很多重复计算的步骤
// 比如 n = 3 的时候
// 往下计算 n = 2 以及 n = 1 的递归时
// 由于 n = 2 也要计算 n = 1 的结果
// 所以 n = 1 这个就重复计算了
// 因此可以将其缓存
// 时间复杂度 O(n) 因为每个 n 都计算了一次
// class Solution {
// private:
//   map<int, int> _m;
// public:
//   int climbStairs(int n) {
//     if (n == 0) return 1;
//     if (n == 1) return 1;
//     if (n == 2) return 2;
//     if (_m[n]) {
//       return _m[n];
//     } else {
//       int _n = climbStairs(n - 1) + climbStairs(n - 2);
//       _m[n] = _n;
//       return _n;
//     }
//   }
// };


// 第四种使用动态规划的思路将自顶向上转化成自底向上
// 可以使用循环 先计算出最基本的底层的结果
// 然后根据底层的结果往上推导
class Solution {
public:
  int climbStairs(int n) {
    vector<int> _v(n, -1);
    if (n == 0) return 0;
    _v[0] = 1;
    if (n == 1) return 1;
    _v[1] = 1;
    if (n == 2) return 2;
    _v[2] = 2;

    unsigned i = 3;
    while(i < _v.size()) {
      _v[i] = _v[i - 1] + _v[i - 2];
      i++;
    }
    return _v[_v.size() - 1] + _v[_v.size() - 2];
  }
};
int main(void) {

  return 0;
}
