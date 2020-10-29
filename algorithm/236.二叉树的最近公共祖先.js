/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 * 思路1:
 *  这个是找普通二叉树的公共祖先节点
 *  可以用往下遍历的方法 找到 p 和 q 的所有父亲节点的链路
 *  之后再比较从 root 节点到它们自己本身的这两条链路上的最后一个相同的节点就可以了
 */
var lowestCommonAncestor = function(root, p, q) {
  const _findNodeFater = (root, target) => {
    const res = [];
    if (!root || !target) return res;
    let currentNode = root;
    let prevNode = null;
    while(true) {
      if (currentNode.val === target.val) {
        res.push(currentNode);
        return res;
      }
      if (currentNode.left) {
        res.push(currentNode);
        currentNode = currentNode.left;
      } else if (currentNode.right) {
        res.push(currentNode);
        currentNode = currentNode.right;
      } else {
        while(!currentNode.right || (currentNode.right === prevNode)) {
          prevNode = currentNode;
          currentNode = res.pop();
          if (!currentNode) return res;
        }
        res.push(currentNode);
        currentNode = currentNode.right;
      }
    }
  }

  const pFater = _findNodeFater(root, p);
  const qFater = _findNodeFater(root, q);
  for (let i = pFater.length; i--;) {
    const pi = pFater[i].val;
    for (let j = qFater.length; j--;) {
      const qj = qFater[j].val;
      if (pi === qj) return pFater[j];
    } 
  }
};
