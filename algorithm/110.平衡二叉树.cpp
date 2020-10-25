/**
 * 自底向上遍历
 * 先一路递归 直接干到最左边的叶子节点
 * 判断丫是否平衡 不平衡直接返回-1
 * 平衡了再返回高度
 * 之后判断它爹的右节点 同样的判断策略
 * 之后再判断父节点的左右子树是否平衡
 * 不平衡就一路向上返回 -1
 */
#include "iostream"
#include "cmath"
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
  private:
    int getDeep(TreeNode *root) {
      if (!root) return 0;
      int leftDeep = getDeep(root -> left);
      if (leftDeep < 0) return -1;
      int rightDeep = getDeep(root -> right);
      if (rightDeep < 0) return -1;
      if (abs(leftDeep - rightDeep) > 1) return -1;
      return max(leftDeep, rightDeep) + 1;
    };
  public:
    bool isBalanced(TreeNode* root) {
      return getDeep(root) >= 0;
    }
};