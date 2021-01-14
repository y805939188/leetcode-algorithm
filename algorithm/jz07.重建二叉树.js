/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
class Node {
  constructor(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
var buildTree = function(preorder, inorder) {
  if (!preorder.length) return null;
  const _buildLeft = (_preorder, _inorder) => {
    if (!_inorder.length) return null;
    return buildTree(_preorder, _inorder);
  }
  const _buildRight = (_preorder, _inorder) => {
    if (!_inorder.length) return null;
    return buildTree(_preorder, _inorder);
  }
  const _left = inorder.slice(0, inorder.indexOf(preorder[0]));
  const _right = inorder.slice(inorder.indexOf(preorder[0]) + 1);
  return new Node(
    preorder[0],
    _buildLeft(
      preorder.slice(1, _left.length + 1),
      _left
    ),
    _buildRight(
      preorder.slice(_left.length + 1),
      _right
    )
  );
};
var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]
buildTree(preorder, inorder)
