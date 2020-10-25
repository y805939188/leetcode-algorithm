/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
  const res = [];
  if (!root) return res;
  function _pathSum(node, num, path) {
    if (!node.left && !node.right) {
      if (!num) {
        res.push(path.split(','));
      }
    } else {
      if (node.left) {
        _pathSum(node.left, num - node.left.val, path + ',' + node.left.val);
      }
      if (node.right) {
        _pathSum(node.right, num - node.right.val, path + ',' + node.right.val);
      }
    }
  }
  _pathSum(root, sum - root.val, root.val.toString());
  return res;
};
