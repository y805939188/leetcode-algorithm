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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  const res = [];
  if (!root) return 0;
  function _pathSum1(node, num, path) {
    if (!node.left && !node.right) {
      if (!num) res.push(path);
    }
    else if (!num) {
      res.push(path);
    }
    if (node.left) {
      if (num <= 0) {
        _pathSum1(node.left, num, `${node.left.val}`);
      } else {
        _pathSum1(node.left, num - node.left.val, `${path},${node.left.val}`);
      }
      _pathSum1(node.left, num, '');
      // _pathSum2(node.left, num, '');
    }
    if (node.right) {
      if (num <= 0) {
        _pathSum1(node.right, num, `${node.right.val}`);
      } else {
        _pathSum1(node.right, num - node.right.val, `${path},${node.right.val}`);
      }
      _pathSum1(node.right, num, '');
      // _pathSum2(node.right, num, '');
    }
  }
  function _pathSum2(node, num, path) {
    if (node.left) {
      _pathSum1(node.left, num - node.left.val, `${path},${node.left.val}`);
    }
    if (node.right) {
      _pathSum1(node.right, num - node.right.val, `${path},${node.right.val}`);
    }
  }
  _pathSum1(root, sum - root.val, root.val);
  _pathSum1(root, sum, '');
  // _pathSum2(root, sum, '');
  console.log(res);
};
// [10,5,-3,3,2,null,11,3,-2,null,1] 8

// [5,3,2,3,1,3,2,3,null,null,null,null,1]
// 4