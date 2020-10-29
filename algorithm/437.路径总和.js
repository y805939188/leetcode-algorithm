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
 * 
 * 思路:
 *  把每个节点都作为 root
 *  然后看这个 root 下的所有符合条件的路径
 */
var pathSum = function(root, sum) {
  const res = [];
  if (!root) return 0;
  function _findPath(node, num, path) {
    if (num - node.val === 0) {
      res.push(path);
    }
    // 注意这里当满足了 num - node.val 的时候不能直接 else
    // 因为就算当前的节点满足上面条件 如果它下面有还有子节点的话
    // 如果有负数 加加减减之后可能又满足条件了
    if (node.left) {
      _findPath(node.left, num - node.val, `${path},${node.left.val}`);
    }
    if (node.right) {
      _findPath(node.right, num - node.val, `${path},${node.right.val}`);
    }
  }

  function _pathSum(root) {
    _findPath(root, sum, root.val.toString());
    if (root.left) _pathSum(root.left, sum);
    if (root.right) _pathSum(root.right, sum);
  }
  _pathSum(root);

  // console.log(res);
  return res.length;
};
// [10,5,-3,3,2,null,11,3,-2,null,1] 8

// [5,3,2,3,1,3,2,3,null,null,null,null,1]
// 4