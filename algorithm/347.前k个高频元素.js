/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const map = {};
  const len = nums.length;
  nums.forEach((item) => (map[item] ? map[item]++ : (map[item] = 1)));
  const map2 = {};
  for (key in map) {
    if (map2[map[key]]) {
      map2[map[key]].push(key);
    } else {
      map2[map[key]] = [key];
    }
  }
  console.log(map2)
  
  let temp = [];
  for (key in map2) {
    temp = temp.concat(map2[key]);
  }
  console.log(temp)
  const res = [];
  let index = temp.length;
  while(index-- && k--) {
    res.push(temp[index])
  }
  return res;
};

topKFrequent([-1, -1], 1);
