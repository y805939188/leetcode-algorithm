#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 思路:
 *  从右上角开始走
 *  1. 如果当前值大于 target 就 x--;
 *  2. 如果当前值小于 target 就 y++;
 *  3. 如果相等就直接 return true;
 */
class Solution {
public:
  bool findNumberIn2DArray(vector<vector<int>>& matrix, int target) {
    if (!matrix.size()) return false;
    int x = matrix[0].size() - 1;
    int y = 0;
    while(x >= 0 && y < matrix.size()) {
      if (matrix[y][x] > target) {
        x--;
      } else if (matrix[y][x] < target) {
        y++;
      } else {
        return true;
      }
    }
    return false;
  }
};


int main(void) {

  return 0;
}
