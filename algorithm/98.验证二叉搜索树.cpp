#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 思路2:
 *  用递归的思想
 *  从上到下 对每个节点都验证一下它的左右子节点是否符合规则
 *  同时还要将该节点作为根节点 对它子节点以及子节点的子节点们做同样的逻辑
 *  注意每次在做子节点的递归判断的时候都需要把祖先节点传进去做判断
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
private:
  bool leftNodeIsValid(TreeNode* node, TreeNode* parent) {
    if (!node) return true;
    bool res = true;
    if (node -> val >= parent -> val) return false;
    if (node -> left && ((node -> left -> val) >= (node -> val))) {
      res = false;
    }
    if (node -> right && ((node -> right -> val) <= (node -> val))) {
      res = false;
    }
    if (node -> right && ((node -> right -> val) > (node -> val))) {
      if ((node -> right -> val) >= parent -> val) {
        res = false;
      }
    }
    if (res) {
      bool l = leftNodeIsValid(node -> left, parent);
      if (!l) {
        return false;
      };
      bool r = leftNodeIsValid(node -> right, parent);
      if (!r) {
        return false;
      }
    }
    return res;
  }
  bool rightNodeIsValid(TreeNode* node, TreeNode* parent) {
    if (!node) return true;
    bool res = true;
    if (node -> val <= parent -> val) return false;
    if (node -> left && ((node -> left -> val) >= (node -> val))) {
      res = false;
    }
    if (node -> left && ((node -> left -> val) < (node -> val))) {
      if ((node -> left -> val) <= parent -> val) {
        res = false;
      }
    }
    if (node -> right && ((node -> right -> val) <= (node -> val))) {
      res = false;
    }
    if (res) {
      bool l = rightNodeIsValid(node -> left, parent);
      if (!l) {
        return false;
      };
      bool r = rightNodeIsValid(node -> right, parent);
      if (!r) {
        return false;
      };
    }
    return res;
  }
public:
  bool isValidBST(TreeNode* root) {
    if (!root) return true;
    if (!(root -> left) && !(root -> right)) return true;
    bool l = leftNodeIsValid(root -> left, root);
    bool r = rightNodeIsValid(root -> right, root);
    bool l2 = isValidBST(root -> left);
    bool r2 = isValidBST(root -> right);
    return l && r && l2 && r2;
  }
};

int main(void) {

  return 0;
}
