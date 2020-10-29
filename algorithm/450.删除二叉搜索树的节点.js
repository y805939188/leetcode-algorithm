/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 * 
 * 思路1:
 *  先把树按照顺序给干成数组 因为是二叉搜索树
 *  所以中序遍历之后肯定是按顺序的
 *  然后遍历一遍把符合条件的干掉
 *  再然后把数组重新处理成二叉树
 */

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var deleteNode = function(root, key) {
  if (!root) return null;
  let res = [];
  const _sort = (node) => {
    if (!node) return null;
    _sort(node.left);
    res.push(node);
    _sort(node.right);
  }
  _sort(root);
  const _toTree = (arr, l, r) => {
    if (l > r) return null;
    const mid = ((l + r) / 2) | 0;
    const node = new TreeNode(arr[mid].val);
    node.left = _toTree(arr, l, mid - 1);
    node.right = _toTree(arr, mid + 1, r);
    return node;
  }
  res = res.filter((item) => (item.val !== key));
  return _toTree(res, 0, res.length - 1);
};
