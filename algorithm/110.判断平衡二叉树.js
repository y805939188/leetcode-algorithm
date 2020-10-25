/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 最坏情况下复杂度是 O(n2^) 也就是节点呈链式结构的时候
 * 平均情况下是 O(nlogn)
 * 
 * 复杂度 O(n) 的看 c嘎嘎 解法
 */

const getMaxDeep = (root) => {
  if (!root) return 0;
  const leftDeep = getMaxDeep(root.left);
  const rightRight = getMaxDeep(root.right);
  return Math.max(leftDeep, rightRight) + 1;
}

var isBalanced = function(root) {
  if (!root) return true;
  const left = getMaxDeep(root.left);
  const right = getMaxDeep(root.right);

  if (Math.abs(left - right) >= 2) return false;

  const res1 = isBalanced(root.left);
  const res2 = isBalanced(root.right);
  return res1 && res2;
};