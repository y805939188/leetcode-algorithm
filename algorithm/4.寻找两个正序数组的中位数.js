/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const lengthAll = nums1.length + nums2.length;
  if (!lengthAll) return 0;
  const parity = lengthAll % 2 > 0 ? 0 : 1; // 大于 0 说明是奇数 否则偶数
  const temp = (lengthAll / 2) | 0;
  const middleNums = parity ? [temp - 1,temp] : temp;
  const res = [];
  let a = b = 0;
  while(true) {
    const num1 = nums1[a];
    const num2 = nums2[b];
    if (typeof(num1) === 'number' && typeof(num2) === 'number') {
      if (num1 > num2) {
        res.push(num2);
        b++;
      } else {
        res.push(num1);
        a++;
      }
    } else {
      if (!(typeof(num1) === 'number') && !(typeof(num2) === 'number')) break;
      typeof(num1) === 'number' ? res.push(num1) && a++ : typeof(num2) === 'number' ? res.push(num2) && b++ : null;
    }
    if (a >= nums1.length && b >= nums2.length) break;
  }
  console.log(middleNums);
  console.log(res);
  return parity ? (res[middleNums[0]] + res[middleNums[1]]) / 2 : res[temp];
};
