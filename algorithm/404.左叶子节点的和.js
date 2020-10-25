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
var sumOfLeftLeaves = function(root) {
  function _sumOfLeftLeaves(node, isLeft) {
    if (!node) return 0;
    if (!node.left && !node.right) {
      if (isLeft) return node.val;
      return 0;
    }
    const ll = _sumOfLeftLeaves(node.left, true);
    const rl = _sumOfLeftLeaves(node.right, false);
    return ll + rl;
  }
  return _sumOfLeftLeaves(root, false);
};
