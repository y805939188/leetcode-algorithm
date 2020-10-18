/**
 * @param {TreeNode} root
 * @return {number[]}
 * 
 * 思路:
 *  后序遍历有个问题就是
 *  当前处理的如果是某个右节点
 *  然后往上递归找她的父节点的时候
 *  它的父节点永远有右节点
 *  所以得特殊判断一下是否右节点已经处理完毕
 */
var postorderTraversal = function(root) {
  const res = [];
  if (!root) return res;
  const stack = [];
  let prevNode = null;
  let currentNode = root;
  while(true) {
    if (currentNode.left) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else if (currentNode.right) {
      stack.push(currentNode);
      currentNode = currentNode.right;
    } else {
      // 这里除了判断没有右节点 还得判断是否当前节点的右节点已经处理完毕
      while (!currentNode.right || (currentNode.right && currentNode.right === prevNode)) {
        res.push(currentNode.val);
        // 通过一个额外的变量来保存已经处理完的节点
        prevNode = currentNode;
        currentNode = stack.pop();
        if (!currentNode) return res;
      }
      stack.push(currentNode);
      currentNode = currentNode.right;
    }
  }
};

// [1,2,3,4,5,6,7,null,null,null,8,null,null,null,null,9,10]
// [4,9,10,8,5,2,6,7,3,1]

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

// const node10 = new TreeNode(10, null, null);
// const node9 = new TreeNode(9, null, null);
// const node8 = new TreeNode(8, node9, node10);
// const node7 = new TreeNode(7, null, null);
// const node6 = new TreeNode(6, null, null);
// const node5 = new TreeNode(5, null, node8);
// const node4 = new TreeNode(4, null, null);
// const node3 = new TreeNode(3, node6, node7);
// const node2 = new TreeNode(2, node4, node5);
// const node1 = new TreeNode(1, node2, node3);
const node1 = new TreeNode(1, null, null);
postorderTraversal(node1);


