#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 思路:
 *  和 js 版本的思路一样 不过可以写得更简洁
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
private:
  TreeNode* _sortedArrayToBST(vector<int>& nums, int l, int r) {
    if (l > r) return nullptr;
    int mid = (l + r) / 2;
    TreeNode* node = new TreeNode(nums[mid]);
    node -> left = _sortedArrayToBST(nums, l, mid - 1);
    node -> right = _sortedArrayToBST(nums, mid + 1, r);
    return node;
  }
public:
  TreeNode* sortedArrayToBST(vector<int>& nums) {
    return _sortedArrayToBST(nums, 0, nums.size() - 1);
  }
};

int main(void) {

  return 0;
}
