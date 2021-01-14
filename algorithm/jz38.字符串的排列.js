/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  const res = [];
  const _permutation = (arr, tmp) => {
    if (!arr.length) {
      res.push(tmp.join(''));
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (i >= 1) {
          if (arr[i - 1] === arr[i]) continue;
        }
        const _arr = [...arr];
        const _tmp = [...tmp, arr[i]];
        _arr.splice(i, 1);
        _permutation(_arr, _tmp);
      }
    }
  }
  _permutation(s.split('').sort((a, b) => (a.charCodeAt() - b.charCodeAt())), []);
  return res;
};
