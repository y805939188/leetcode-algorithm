/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) return null;
  const temp = root.right;
  root.right = root.left;
  root.left = temp;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};
