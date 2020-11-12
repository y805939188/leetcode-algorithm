#include "iostream"
#include "string"
#include "vector"
#include "algorithm"
using namespace std;

/**
 * 思路1:
 *  递归回溯
 *  但是这样的话容易超时
 */

class Solution {
private:
  int _minPathSum(vector<vector<int>>& grid, int x, int y) {
    if (y > grid.size() - 1) return NULL;
    if (x > grid[0].size() - 1) return NULL;
    if ((x == grid[0].size() - 1) && (y == grid.size() - 1)) return grid[y][x];
    int _current = grid[y][x];
    int _right_sum = _minPathSum(grid, x + 1, y);
    int _under_sum = _minPathSum(grid, x, y + 1);
    if (!_right_sum) return _current + _under_sum;
    if (!_under_sum) return _current + _right_sum;
    return _current + min(_right_sum, _under_sum);
  }
public:
  int minPathSum(vector<vector<int>>& grid) {
    return _minPathSum(grid, 0 ,0);
  }
};

int main(void) {

  return 0;
}
