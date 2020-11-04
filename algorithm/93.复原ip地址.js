/**
 * @param {string} s
 * @return {string[]}
 * 
 * 思路:
 *  回溯递归
 *  因为 ip 地址每位最多就只有 3 位
 *  所以可以设置次数为 3 的循环
 *  第一次读一个 第二次读两个 第三次读三个
 *  然后分别把这三次读到的内容做判断 如果符合条件
 *  就把它们截掉 用剩下的做下一轮的递归
 */
var restoreIpAddresses = function(s) {
  const res = [];
  if (s.length < 4 || s.length > 12) return res;
  const _restoreIpAddresses = (str, tmp, recursionNum) => {
    if (recursionNum > 4) return;
    if (recursionNum === 4 && str !== '') return;
    if (recursionNum === 4 && str === '') {
      !res.includes(tmp) && res.push(tmp);
    } else {
      if (!str) return;
      for (let i = 0; i < 3; i++) {
        const _str = str.substr(0, i + 1);
        if (_str.length >= 2 && _str[0] === '0') return;
        if (_str === '') return;
        if (Number(_str) > 255) return;
        _tmp = tmp ? `${tmp}.${_str}` : _str;
        _restoreIpAddresses(str.substr(i + 1), _tmp, recursionNum + 1);
      }
    }
  }
  _restoreIpAddresses(s, '', 0);
  return res;
};
restoreIpAddresses("2222");
