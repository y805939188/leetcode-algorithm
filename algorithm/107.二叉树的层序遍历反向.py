# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Solution:
  def levelOrderBottom(self, root):
    if not root: return []
    queue = [root]
    res = []
    while len(queue):
      queueLen = len(queue)
      tempList = []
      while queueLen:
        queueLen -= 1
        temp = queue[0:1][0]
        queue = queue[1:]
        if temp.left: queue.append(temp.left)
        if temp.right: queue.append(temp.right)
        tempList.append(temp.val)
      res = [tempList] + res
      tempList = []
    return res


node5 = TreeNode(5)
node4 = TreeNode(4)
node3 = TreeNode(3)
node2 = TreeNode(2)
node2.left = node4
node2.right = node5
node1 = TreeNode(1)
node1.left = node2
node1.right = node3

Solution().levelOrderBottom(node1)
