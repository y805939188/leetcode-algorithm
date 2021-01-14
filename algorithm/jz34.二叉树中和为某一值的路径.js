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
  if (!root) return [];
  const res = [];
  const _pathSum = (node, sum, tmp, target) => {
    const current = node.val;
    const left = node.left;
    const right = node.right;
    if (left || right) {
      left && _pathSum(left, current + sum, [...tmp, current], target);
      right && _pathSum(right, current + sum, [...tmp, current], target);
    } else {
      if (current + sum === target) {
        res.push([...tmp, current]);
      }
    }
  }
  if (root.left || root.right) {
    _pathSum(root, 0, [], sum);
  } else {
    if (root.val === sum) {
      res.push([root.val]);
    }
  }
  return res;
};