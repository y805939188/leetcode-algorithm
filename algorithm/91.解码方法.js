/**
 * @param {string} s
 * @return {number}
 * 
 * 说白了就是给一个全数字的字符串
 * 让这些数字字符一或多个自由组合
 * 组合出来的不能大于 26
 * 看有多少种组合方法
 * 
 * 思路1:
 *  递归回溯 暴力解法
 */
// var numDecodings = function(s) {
//   const res = [];
//   const _numDecodings = (tmp, str) => {
//     if (!str) {
//       res.push(tmp);
//     } else {
//       for (let i = 0; i < str.length; i++) {
//         const _tmp = [...tmp];
//         const _s = str.substr(0, i + 1);
//         if (Number(_s) > 26) return;
//         _tmp.push(str.substr(0, i + 1));
//         _numDecodings(_tmp, str.slice(i + 1));
//       }  
//     }
//   }
//   _numDecodings([], s);
//   return res.length;
// };

/**
 * 思路2:
 *  
 */

// var numDecodings = function(s) {
//   if (s.length === 0) return 0;
//   if (s.length === 1) return 1;
//   const _t = s.substr(s.length - 2);
//   if (_t[0] === '0') return numDecodings(s.slice(0, s.length - 1));
//   if (( +_t > 26 )) return 0;
//   return numDecodings(s.slice(0, s.length - 1)) + numDecodings(s.slice(0, s.length - 2));
// };
// numDecodings('102');
