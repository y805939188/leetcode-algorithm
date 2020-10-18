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
 * @return {number[]}
 */
// [1,2,3,4,5,6,7,8,null,null,9,null,null,null,null,null,null,10,11]
// [8,4,2,5,10,9,11,1,6,3,7]
var inorderTraversal = function(root) {
  const res = [];
  if (!root) return res;
  const stack = [];
  let currentNode = root;
  while(true) {
    if (currentNode.left) {
      stack.push(currentNode);
      currentNode = currentNode.left;
    } else if (currentNode.right) {
      res.push(currentNode.val);
      currentNode = currentNode.right;
    } else {
      while(!currentNode.right) {
        res.push(currentNode.val);
        currentNode = stack.pop();
        if (!currentNode) return res;
      }
      res.push(currentNode.val);
      currentNode = currentNode.right;
    }
  }
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val);
  this.left = (left===undefined ? null : left);
  this.right = (right===undefined ? null : right);
}

const node11 = new TreeNode(11, null, null);
const node10 = new TreeNode(10, null, null);
const node9 = new TreeNode(9, node10, node11);
const node8 = new TreeNode(8, null, null);
const node7 = new TreeNode(7, null, null);
const node6 = new TreeNode(6, null, null);
const node5 = new TreeNode(5, null, node9);
const node4 = new TreeNode(4, node8, null);
const node3 = new TreeNode(3, node6, node7);
const node2 = new TreeNode(2, node4, node5);
const node1 = new TreeNode(1, node2, node3);
// const node1 = new TreeNode(1, null, null);

inorderTraversal(node1);
