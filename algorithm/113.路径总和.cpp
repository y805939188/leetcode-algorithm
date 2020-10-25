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
  public:
    vector<vector<int>> pathSum(TreeNode* root, int sum) {
      vector<vector<int>> res;
      if (!root) return res;
      if (!root -> left && !root -> right) {
        if (sum - (root -> val) == 0) {
          vector<int> temp;
          temp.push_back(root -> val);
          res.push_back(temp);
          return res;
        }
      } else {
        if (root -> left) {
          vector<vector<int>> leftPath = pathSum(root -> left, sum - (root -> val));
          for (int i = 0; i < leftPath.size(); i++) {
            vector<int> temp = leftPath[i];
            vector<int> temp2;
            temp2.push_back(root -> val);
            for (int j = 0; j < temp.size(); j++) {
              temp2.push_back(temp[j]);
            }
            res.push_back(temp2);
          }
        }
        if (root -> right) {
          vector<vector<int>> rightPath = pathSum(root -> right, sum - (root -> val));
          for (int i = 0; i < rightPath.size(); i++) {
            vector<int> temp = rightPath[i];
            vector<int> temp2;
            temp2.push_back(root -> val);
            for (int j = 0; j < temp.size(); j++) {
              temp2.push_back(temp[j]);
            }
            res.push_back(temp2);
          }
        }
      }
      return res;
    }
};
