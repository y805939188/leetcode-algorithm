/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  if (s.length === 1) return 1;
  let _temp = {};
  let a = 0, b = 0;
  let max = 0;
  while(true) {
    if (b >= s.length) break;
    if (typeof _temp[s[b]] !== 'number') {
      _temp[s[b++]] = b - 1;
      continue;
    } else {
      max = Math.max(max, b - a);
      const _tmp = _temp[s[b]];
      a = _tmp + 1;
      _temp = {};
      for (let i = a; i <= b; i++) {
        _temp[s[i]] = i;
      }
      b++;
    }
  }
  return Math.max(max, b - a);
};
