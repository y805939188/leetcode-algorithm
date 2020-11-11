#include "iostream"
#include "string"
#include "vector"
#include "map"
#include "algorithm"
using namespace std;

/**
 * 思路2:
 *  自顶向下递归
 *  每个元素往下走的时候只能选他的左路或者右路
 *  这样就以 "左边最小的和" 以及 "右边最小的和" 为递归结构
 *  最终遍历到最底层的时候以直接返回当前的元素就可以了
 *  中间为了优化可以加一层缓存
 */
// [[1], [2,3],[7,8,9,0],[3,7,6,5,1]]
// class Solution {
// private:
//   map<string, int> _cache_m;

//   int _minimumTotal(vector<vector<int>>& triangle, int index, int prevIndex) {
//     if (index >= triangle.size() - 1) {
//       return triangle[index][prevIndex];
//     }
//     string _s = to_string(index) + "-" + to_string(prevIndex);
//     if (_cache_m[_s]) return _cache_m[_s];
//     int _left_sum = _minimumTotal(triangle, index + 1, prevIndex);
//     int _right_sum = _minimumTotal(triangle, index + 1, prevIndex + 1);
//     int _res = triangle[index][prevIndex] + (_left_sum > _right_sum ? _right_sum : _left_sum);
//     _cache_m[_s] = _res;
//     return _res;
//   }
// public:
//   int minimumTotal(vector<vector<int>>& triangle) {
//     return _minimumTotal(triangle, 0, 0);
//   }
// };

/**
 * 思路3:
 * 动态规划
 * 先计算最下层加上倒数第二层的每个值 加的时候选择 min 的
 * 然后依次往上走
 */
class Solution {
private:
  int _minimumTotal(vector<vector<int>>& triangle) {
    for (unsigned i = triangle.size() - 1; i--; ) {
      vector<int> tmp = triangle[i];
      for (unsigned j = 0; j < tmp.size(); j++) {
        triangle[i][j] += min(triangle[i + 1][j], triangle[i + 1][j + 1]);
      }
    }
    return triangle[0][0];
  }
public:
  int minimumTotal(vector<vector<int>>& triangle) {
    return _minimumTotal(triangle);
  }
};


int main(void) {

  return 0;
}
