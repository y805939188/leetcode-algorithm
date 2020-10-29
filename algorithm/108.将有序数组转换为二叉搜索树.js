/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 思路:
 *  由于是二分搜索树
 *  所以当一个数组以有序状态排列的时候
 *  先找中间的点 然后再找中间的点的左边数组的中间的点
 *  以及中间的点右边数组的中间的点
 *  这俩点就是分别是中间点的左右子节点
 *  然后递归
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function(nums) {
  if (!nums || !nums.length) return null;
  const _getMiddle = (nums, left, right) => {
    if (left > right) return [null, -1];
    if (!nums.length) return [null, -1];
    const mid = ((left + right) / 2) | 0; // 这里可改成 left + (right - left) / 2 防止整数溢出
    return [nums[mid], mid];
  }

  const _sortedArrayToBST = (arr, left, right, parent, parentIndex) => {
    if (!parent) return null;
    const [leftMid, leftIndex] = _getMiddle(arr, left, parentIndex - 1);
    const [rightMid, rightIndex] = _getMiddle(arr, parentIndex + 1, right);
    parent.left = typeof leftMid === 'number' ? new TreeNode(leftMid) : null;
    parent.right = typeof rightMid === 'number' ? new TreeNode(rightMid) : null;
    _sortedArrayToBST(arr, left, parentIndex - 1, parent.left, leftIndex);
    _sortedArrayToBST(arr, parentIndex + 1, right, parent.right, rightIndex);
    return parent;
  }
  const [mid, index] = _getMiddle(nums, 0, nums.length - 1);
  const node = new TreeNode(mid);
  const root = _sortedArrayToBST(nums, 0, nums.length - 1, node, index);
  return root;
};

sortedArrayToBST([0, 1, 2, 3, 4, 5]);
