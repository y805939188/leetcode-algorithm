#include "iostream"
#include "vector"
#include "map"
using namespace std;

/**
 * 思路:
 *  1. 两层遍历
 *  2. 放进map
 */

class Solution {
public:
  vector<int> twoSum(vector<int>& nums, int target) {
    vector<int> res;
    if (!nums.size()) return res;
    map<int, int> m;
    for (unsigned i = 0; i < nums.size(); i++) {
      if (m.find(target - nums[i]) != m.end()) {
        res.push_back(m[target - nums[i]]);
        res.push_back(i);
        return res;
      } else {
        m[nums[i]] = i;
      }
    }
    return res;
  }
};
