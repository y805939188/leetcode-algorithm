/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  function _isSymmetric(a, b) {
    if (!a && !b) return true;
    if (a && !b) return false;
    if (!a && b) return false;
    let res1, res2;
    if (a.val === b.val) {
      res1 = _isSymmetric(a.left, b. right);
      res2 = _isSymmetric(a.right, b.left);
    }
    return !!(res1 && res2);
  }
  return _isSymmetric(root, root);
};