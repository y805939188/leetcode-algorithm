#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 思路2:
 *  递归
 *  如果没有 root 说明是找到了叶子节点
 *  如果发现等于 p 或者 q 则说明找到了目标节点 直接返回
 *  在该层递归的上一层判断
 *    1. 如果 左右节点均有值 说明找到了公共祖先节点
 *    2. 如果 左右两棵子树只有一个有值的话说明当前左或右子树有值 直接返回
 *    3. 如果 都是 null 则直接返回 null
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root) return nullptr;
    if (root == p || root == q) {
      return root;
    }
    TreeNode* l = lowestCommonAncestor(root -> left, p, q);
    TreeNode* r = lowestCommonAncestor(root -> right, p, q);
    if (l && r) {
      return root;
    }
    return r ? r : l;
  }
};