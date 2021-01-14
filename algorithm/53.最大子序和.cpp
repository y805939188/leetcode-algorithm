#include "iostream"
#include "string"
#include "vector"
using namespace std;

/**
 * 
 */
class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    if (nums.empty()) return 0;
    vector<int> res(nums.size());
    res[0] = nums[0];
    for (unsigned i = 1; i < nums.size(); i++) {
      res[i] = max(nums[i], res[i - 1] + nums[i]);
    }
  }
};
int main(void) {

  return 0;
}
