function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [];
  queue.push(root);
  const res = [];
  while(queue.length) {
    const temp = [];
    res.push(temp);
    let ind = queue.length;
    while(ind--) {
      const n = queue.shift();
      n.left && queue.push(n.left);
      n.right && queue.push(n.right);
      temp.push(n.val);
    }
  }
  return res;
};
