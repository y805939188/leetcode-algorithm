#include "iostream"
#include "string"
#include "vector"
#include "map"
using namespace std;

/**
 * 思路:
 *  递归回溯
 *  但是有个难点 就是这题给的数组里头可能会有重复的
 *  但是结果中的元素还不能都相同 所以比如 [2, 1, 2] - 3 这种的
 *  结果如果是 [ [2, 1], [1, 2] ] 就不行了
 *  所以需要去重
 *  最简单的方法 先排序 然后把每次的结果放心 map 里 每次对比一下
 *  这样可行 但是如果 [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1...] 重复的超级多
 *  就肯定会超时
 *  所以更可行的思路是 先排序
 *  然后在遍历某一层的时候 保证当前这个数字和上一个数字不能相等 如果相等就直接 continue
 *  注意必须是 i > start 而不能是 i >= start
 *  因为如果 等于 的话 i - 1 拿到的数字是上一层的那个数
 */

class Solution {
private:
  vector<vector<int>> res;
  int target;

  void _combinationSum2(vector<int>& arr, vector<int> tmp, int sum, int start) {
    if (sum > target) {
      return;
    } else if (sum == target) {
        res.push_back(tmp);
    } else {
      for (unsigned i = start; i < arr.size(); i++) {
        int _num = arr[i];
        int _sum = sum + _num;
        if (i > start && arr[i - 1] == _num) {
          continue;
        }
        tmp.push_back(_num);
        _combinationSum2(arr, tmp, _sum, i + 1);
        tmp.pop_back();
      }
    }
  }

public:
  vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
    this -> target = target;
    vector<int> tmp;
    sort(candidates.begin(), candidates.end());
    _combinationSum2(candidates, tmp, 0, 0);
    return res;
  }
};

int main(void) {

  return 0;
}
