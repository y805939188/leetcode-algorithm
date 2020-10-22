# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Solution:
  def maxDepth(self, root):
    if not root: return 0
    queue = [root]
    deep = 1;
    while len(queue):
      queueLen = len(queue)
      while queueLen:
        queueLen -= 1
        temp = queue[0:1][0]
        queue = queue[1:]
        if temp.left: queue.append(temp.left)
        if temp.right: queue.append(temp.right)
      deep += 1
    return deep
