/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
  if (!digits) return [];
  const phone = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  }
  const res = [];
  const _letterCombinations = (digits, str, index) => {
    if (index >= digits.length) {
      res.push(str);
    } else {
      const arr = phone[digits[index]] || [];
      for (let i = 0; i < arr.length; i++) {
        _letterCombinations(digits, str + arr[i], index + 1);
      }
    }
  }
  _letterCombinations(digits, '', 0);
  return res;
};

letterCombinations('23');
