#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 思路2:
 *  如果 key 小于当前节点的 val 那就可以只在它的左节点中删除
 *  如果 key 大于当前节点的 val 那就可以只在它的右节点中删除
 *  如果 key 等于当前节点的 val 那就可以分情况判断删除了
 *    情况1: 当前节点是叶子节点 直接 return null 就好
 *    情况2: 当前节点只有左节点或右节点 直接 return 存在的那个方向的节点就好
 *    情况3: 当前节点左右还有一堆子树 就一直往下遍历 找到左节点的最大值或右节点的最小值
 */

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
  TreeNode* _deleteNode(TreeNode* node, int key) {
    if (!node) return nullptr;
    if (key > node -> val) {
      node -> right = _deleteNode(node -> right, key);
    } else if (key < node -> val) {
      node -> left = _deleteNode(node -> left, key);
    } else {
      // key == node -> val
      if (!(node -> left) && !(node -> right)) {
        return nullptr;
      } else if ((node -> left) && !(node -> right)) {
        return node -> left;
      } else if (!(node -> left) && (node -> right)) {
        return node -> right;
      } else {
        // 如果进入这里 说明该节点下头可能还有一堆子树
        // 这种情况的话 可以有两种情况
        // 要么找它左子树的最大值 要么找它右子树的最小值

        // 假设这里要找它左子树的最大值
        TreeNode* temp = node -> left;
        while (temp -> right) {
          // 首先疯狂的往下遍历 找到一个没有右节点的节点
          // 该节点就是最大值
          temp = temp -> right;
        }
        // 但是这里有两种情况
        // 第一种情况是该节点就是叶子节点 可以痛快的替换
        // 第二种情况就是该节点还有左节点 需要考虑让当前 temp 的父节点的右节点指向该节点的左节点

        // 不过有简单的方法就是 直接让 node 的 val 变成最大值
        // 然后递归调用 delete 方法 在 node 的左子树中删除那个最大值的节点
        node -> val = temp -> val;
        node -> left = _deleteNode(node -> left, temp -> val);
      }
    }
    return node;
  }
public:
  TreeNode* deleteNode(TreeNode* root, int key) {
    return _deleteNode(root, key);
  }
};