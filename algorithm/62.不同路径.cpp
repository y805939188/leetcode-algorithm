#include "iostream"
#include "string"
#include "vector"
#include "map"
using namespace std;

/**
 * 思路3:
 *  动态规划
 *  从第 (m, n - 1) 个小格格开始算
 *  算这个格子到右侧 也就是终点有多少种路径
 *  应该有 getPaths(m + 1, n) + getPaths(m, n + 1) 条
 *  由于 n + 1 就是终点 m + 1 又没有路径了 所以这里只能是 1
 *  然后看 (m, n - 2) 到终点的路径有几条
 *  应该有 getPaths(m + 1, n - 2) + getPaths(m, n - 1)
 *  m + 1 没有路了 n - 1 只有一条 所以共有 1 + 0 条路径
 *  以此类推直到找到 getPaths(0, 0)
 */

class Solution {
private:
  int _uniquePaths(int x, int y) {
    map<string, int> _m;
    for (unsigned i = y; i--;) {
      for (unsigned j = x; j--;) {
        if (i == y - 1 && j == x - 1) {
          _m[to_string(x) + ',' + to_string(y)] = 0;
        } else if (i == y - 1) {
          _m[to_string(x) + ',' + to_string(y)] = 1;
        } else if (j == x - 1) {
          _m[to_string(x) + ',' + to_string(y)] = 1;
        } else {
          _m[to_string(x) + ',' + to_string(y)] =
            _m[to_string(x + 1) + ',' + to_string(y)] +
            _m[to_string(x) + ',' + to_string(y + 1)];
        }
      }
    }
    return _m["0,0"];
  }
public:
  int uniquePaths(int m, int n) {
    if (m == 1 && n == 1) return 1;
    return _uniquePaths(m, n);
  }
};

int main(void) {

  return 0;
}
