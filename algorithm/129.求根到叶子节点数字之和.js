/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  const res = [];
  if (!root) return 0;
  function _sumNumbers(node, path) {
    if (!node.left && !node.right) {
      res.push(path);
    } else {
      if (node.left) {
        _sumNumbers(node.left, `${path}${node.left.val}`);
      }
      if (node.right) {
        _sumNumbers(node.right, `${path}${node.right.val}`);
      }
    }
  }
  _sumNumbers(root, root.val);
  return res.reduce((a, b) => ((+a) + (+b)));
};
