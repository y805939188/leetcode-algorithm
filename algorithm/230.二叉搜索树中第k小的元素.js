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
 * @param {number} k
 * @return {number}
 * 
 * 思路:
 *  找第 k 小的数字 由于是二叉搜素树
 *  所以可以从底向上遍历
 *  先一路干到左节点
 *  然后按照中序遍历的顺序 给外部 ++index
 *  当外部的 index === k 了 说明找到了第 k 小的节点
 */
var kthSmallest = function(root, k) {
  // 注意！leetcode 提交之后不能把 index 放在 kthSmallest 函数外面
  // 丫有缓存的 会导致不通过
  let index = 0;
  const _kthSmallest = (node, k) => {
    if (!node || index > k) return null;
    let l = _kthSmallest(node.left, k);
    if (++index === k) return node.val;
    let r = _kthSmallest(node.right, k);
    return l || r;
  }
  return _kthSmallest(root, k);
};
