/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 
 * 思路:
 *  反过来想 是否 wordDict 中的单词可以组合成 s
 */


/**
 * 
 * 思路1:
 *  递归回溯
 */
var wordBreak = function(s, wordDict) {
  const res = [];
  const _wordBreak = (arr, tmp, str, target) => {
    if (_str.length > target.length) {
      return;
    } else if (_str.length === target.length) {
      if (_str === target) {
        res.push(tmp);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        const _tmp = [...tmp];
        const _str = str + arr[i];
        _tmp.push(arr[i]);
        _wordBreak(arr, _tmp, _str, target);
      }
    }
  }
  _wordBreak(wordDict, [], '', s);
  return !!res.length;
};


/**
 * 思路2:
 *  递归
 *  容易超时
 */
var wordBreak = function(s, wordDict) {
  const _cache = {};
  const _wordBreak = (str) => {
    if (typeof _cache[str] === 'boolean') return _cache[str];
    if (str.length > s.length) return false;
    if (str.length === s.length) return str === s;
    for (let i = 0; i < wordDict.length; i++) {
      const _current = wordDict[i];
      const use = _wordBreak(str + _current);
      _cache[str + _current] = use;
      if (use) return true;
    }
    return false;
  }
  for (let i = 0; i < wordDict.length; i++) {
    const res = _wordBreak('', i);
    if (res) return res;
  }
  return false;
};


/**
 * 思路3:
 *  动态规划
 *  设置状态为: res[i] 表示 s 的前 i 字母是否可以用 wordDict 拼出来
 *  状态转移方程是: res[i] = (res[j] 并且 wordDict 是否包含 s 的 (i - j) 范围的字符)
 *  比如说 res[3] 那就看
 *    res[1] 以及 wordDict.includes(s.slice(1, 3)) 或者
 *    res[2] 以及 wordDict.includes(s.slice(2, 3)) 或者
 *    wordDict.includes(s.slice(0, 3))
 */

// "aaaaaaa"
// ["aaaa","aaa"]

// "bccdbacdbdacddabbaaaadababadad"
// ["cbc","bcda","adb","ddca","bad","bbb","dad","dac","ba","aa","bd","abab","bb","dbda","cb","caccc","d","dd","aadb","cc","b","bcc","bcd","cd","cbca","bbd","ddd","dabb","ab","acd","a","bbcc","cdcbd","cada","dbca","ac","abacd","cba","cdb","dbac","aada","cdcda","cdc","dbc","dbcb","bdb","ddbdd","cadaa","ddbc","babb"]

// "aebbbbs"
// ["a","aeb","ebbbb","s","eb"]
var wordBreak = function(s, wordDict) {
  const res = new Array(s.length).fill(false);
  for (let i = 0; i < s.length; i++) {
    const _str = s.slice(0, i + 1);
    for (let j = 0; j <= i; j++) {
      const left = _str.slice(0, j + 1);
      const right = _str.slice(j + 1, _str.length);
      if (
        // (wordDict.includes(left) && wordDict.includes(right)) ||
        (res[j] && wordDict.includes(right)) ||
        wordDict.includes(_str)
      ) {
        res[i] = true;
      }
    }
  }
  console.log(res);
  return res[s.length - 1];
};
