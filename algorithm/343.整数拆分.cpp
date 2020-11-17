#include "iostream"
#include "string"
#include "vector"
#include "algorithm"
using namespace std;

/**
 * 
 */

/**
 * 思路:
 *  可以把 '4 分割后的最大乘积' 转为 [ 1 * '3 分割后的最大乘积', 2 * '2 分割后的最大乘积', 3 * '1 分割后的最大乘积' ]
 *  注意还有一种情况是不分割 也要添加进数组
 *
 *  可以推导出 => arr = [1, 1, max(1 * arr[1], ((3 - 1) * 1), 2 * arr[0], (3 - 2) * 2, max(1 * arr[2], (4 - 1) * 1, 2 * arr[1], (4 - 2) * 2, 3 * arr[0], (4 - 3) * 3), ...]
 *  
 *  最开头的 1 是 '分割 1 之后的最大乘积', 第二个 1 是 '分割 2 之后的最大乘积'
 *  之后 '分割 3 之后的最大乘积' 就要根据前面两位来算了
 *  (3 - 1) * 1 和 (3 - 2) * 2 表示 '从 3 里头分出去一个 1' 之后按理应该求 '分割 1 之后的最大乘积'
 *  但是其实这里有个坑儿 就是不分割 1 的情况下 1 * 3 也应该作为一个待定的值
 */

class Solution {
public:
  int integerBreak(int n) {
    vector<int> res;
    res.push_back(1);
    res.push_back(1);
    for (unsigned i = 2; i < n; i++) {
      vector<int> _tmp;
      for (unsigned j = 0; j < res.size(); j++) {
        _tmp.push_back((j + 1) * res[res.size() - (j + 1)]);
        // 记住上面那些算出来的都是把儿子切割的情况
        // 还少了一种不切割儿子而是直接让前面的乘以后面儿子的情况
        _tmp.push_back(((i + 1) - (j + 1)) * (j + 1));
      }
      res.push_back(*max_element(_tmp.begin(), _tmp.end()));
    }
    return res[res.size() - 1];
  }
};

int main(void) {

  return 0;
}
