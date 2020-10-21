# Definition for a binary tree node.
class TreeNode:
  def __init__(self, x):
    self.val = x
    self.left = None
    self.right = None

class Solution:
  def rightSideView(self, root):
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
      res = res + [tempList.pop()]
      tempList = []
    return res
