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

var maxDepth = function(root) {
  if (!root) return 0;
  const leftDeep = maxDepth(root.left);
  const rightDeep = maxDepth(root.right);
  const max = Math.max(leftDeep, rightDeep);
  return max + 1;
};
