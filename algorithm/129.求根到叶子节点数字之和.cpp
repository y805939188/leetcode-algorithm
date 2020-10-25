#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
private:
  vector<string> _getPaths(TreeNode* node) {
    vector<string> res;
    if (!node) return res;
    if (!node -> left && !node -> right) {
      res.push_back(to_string(node -> val));
      return res;
    }
    vector<string> leftPaths = _getPaths(node -> left);
    for (vector<string>::size_type i = 0; i < leftPaths.size(); i++) {
      res.push_back(to_string(node -> val) + leftPaths[i]);
    }
    vector<string> rightPaths = _getPaths(node -> right);
    for (vector<string>::size_type j = 0; j < rightPaths.size(); j++) {
      res.push_back(to_string(node -> val) + rightPaths[j]);
    }
    return res;
  }
public:
  int sumNumbers(TreeNode* root) {
    vector<string> paths = this -> _getPaths(root);
    int res = 0;
    for (vector<string>::size_type i = 0; i < paths.size(); i++) {
      res = res + stoi(paths[i]);
    }
    return res;
  }
};
