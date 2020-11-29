/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {

  const up = new Array(nums.length).fill(0);
  const down = new Array(nums.length).fill(0);
  if (nums[1] > nums[0]) {
    up[0] = 1;
  } else {
    down[0] = 1;
  }
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // up[]
      } else {

      }
    }
  }

};
