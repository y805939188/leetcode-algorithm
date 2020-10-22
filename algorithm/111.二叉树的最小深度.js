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

var minDepth = function(root) {
  if (!root) return 0;
  if (!root.left && root.right) {
    return minDepth(root.right) + 1;
  } else if (root.left && !root.right) {
    return minDepth(root.left) + 1;
  } else if (root.left && root.right) {
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
  } else {
    return 1;
  }
};

// [2,null,3,null,4,null,5,null,6]
