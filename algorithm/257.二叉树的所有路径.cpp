#include "iostream"
#include "string"
#include "vector"
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

/**
 * 思路:
 *  每次执行函数都创建一个数组
 *  然后递归地得到它子节点的路径
 *  之后循环一下连接起来
 */
class Solution {
public:
  vector<string> binaryTreePaths(TreeNode* root) {
    vector<string> res;
    if(!root) return res;
    if(!root -> left && !root -> right) {
      res.push_back(to_string(root -> val));
      return res;
    }
    vector<string> leftRes = binaryTreePaths(root -> left);
    for(unsigned i = 0; i < leftRes.size(); i++) {
      res.push_back(to_string(root -> val) + "->" + leftRes[i]);
    }
    vector<string> rightRes = binaryTreePaths(root -> right);
    for(unsigned i = 0; i < rightRes.size(); i++) {
      res.push_back(to_string(root -> val) + "->" + rightRes[i]);
    }
    return res;
  }
};
