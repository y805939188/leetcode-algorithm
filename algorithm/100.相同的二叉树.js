/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!q && !p) return true;
  if (!p && q) return false;
  if (p && !q) return false;
  if (p.val !== q.val) return false;
  const res1 = isSameTree(p.left, q.left);
  const res2 = isSameTree(p.right, q.right);
  return res1 && res2;
};