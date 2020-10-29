/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 思路1:
 *  如果是正儿八经的二分搜索树的话
 *  按照中序遍历之后排出来的肯定是从小到大
 */
// [3,null,30,10,null,null,15,null,45]
var isValidBST = function(root) {
  const res = [];
  function _sort(root) {
    if (!root) return;
    _sort(root.left);
    res.push(root.val);
    _sort(root.right);
  }
  _sort(root);
  let isValid = true;
  // console.log(res);
  res.forEach((item, index) => {
    if (index > 0 && item <= res[index - 1]) isValid = false;
  });
  return isValid;
};
