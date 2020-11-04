#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 思路:
 *  递归回溯
 *  类似全排列
 *  每次迭代都从 0 截取到 i 作为 str1
 *  再从 i + 1 截取到最后作为 str2
 *  之后每次都判断 str1 是否是回文
 *  是的话对 str2 也就是后面的字符做递归
 *  当 str2 为空的时候就是扫描完成的时候 可以推入结果
 *  另外注意当每次递归完成后 由于 vector 或者说引用类型的特点
 *  会导致上一轮迭代推进去的东西还在里头 所以需要将 arr 的内容都回溯到上一次
 *  可以通过提前设置一个临时变量把上一次的 arr 内容保存下来
 */

class Solution {
private:
  vector<vector<string>> res;
  bool _isPalindrome(vector<string> str) {
    unsigned a = 0;
    unsigned b = str.size() - 1;
    while(b > a) {
      if (str[a++] == str[b--]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  bool _isPalindrome(string str) {
    unsigned a = 0;
    unsigned b = str.size() - 1;
    while(b > a) {
      if (str[a++] == str[b--]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  };

  void _partition(string str, vector<string> arr) {
    if (!str.size()) {
      res.push_back(arr);
    } else {
      for (unsigned i = 0; i < str.size(); i++) {
        string tmp1 = str.substr(0, i + 1);
        string tmp2 = str.substr(i + 1);
        vector<string> tmp_arr(arr);
        if (_isPalindrome(tmp1)) {
          arr.push_back(tmp1);
          _partition(tmp2, arr);
          arr = tmp_arr;
        }
      }
    }
  };

public:
  vector<vector<string>> partition(string s) {
    vector<string> tmp;
    _partition(s, tmp);
    return res;
  }
};

int main(void) {
  Solution* s = new Solution();
  vector<vector<string>> res = s -> partition("efe");
  return 0;
}
