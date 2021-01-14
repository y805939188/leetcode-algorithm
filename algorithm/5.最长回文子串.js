/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
// 容易超时
// var longestPalindrome = function(s) {
//   if (!s) return '';
//   const _isPalindrome = (str) => (str === str.split('').reverse().join(''));
//   // let i = 0, j = 1;
//   let maxStr = '';
//   for (let i = 1; i < s.length; i++) {
//       for (let j = 0; j < s.length - 1; j++) {
//           const _str = s.slice(j, i);
//           if (_isPalindrome(_str)) {
//               maxStr = _str.length > maxStr.length ? _str : maxStr;
//           }
//       }
//   }
//   return maxStr;
// };

// 时间复杂度也高 不过在 O(n^2) 对于 1000 以内长度的 s 可以接受
var longestPalindrome = function(s) {
  if (!s) return '';
  if (s.length === 1) return s;
  let maxStr = '';
  let a = b = '';
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      a = a + s[j];
      b = s[j] + b;
      if (a === b) maxStr = maxStr.length > a.length ? maxStr : a;
    }
    a = b = '';
  }
  return maxStr;
};

// 思路2: 动态规划
// 回文串的最大特点就是 如果一个字符串是回文串 那把它掐头去尾之后中间的部分也是回文的
// 所以状态转移方程是假设 i, j 表示 dp[i][j] dp中的 i 到 j 是否是回文
// 如果 str[i] === str[j]
