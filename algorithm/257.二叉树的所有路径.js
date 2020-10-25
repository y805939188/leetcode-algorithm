/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 * 思路2: 看 c嘎嘎 版
 */
var binaryTreePaths = function(root) {
  const res = [];
  if (!root) return res;
  function _binaryTreePaths(node, str) {
    if (!node) {

    } else if (!node.left && !node.right) {
      res.push(str);
    } else {
      if (node.left) {
        _binaryTreePaths(node.left, `${str}->${node.left.val}`);
      }
      if (node.right) {
        _binaryTreePaths(node.right, `${str}->${node.right.val}`);
      }
    }
  }
  _binaryTreePaths(root, `${root.val}`);
  return res;
};
