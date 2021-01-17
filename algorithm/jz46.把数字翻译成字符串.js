/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function(num) {

  const _translateNum = (str) => {
    if (!str) return 0;
    if (str.length === 1) return 1;
    if (str.length === 2) {
      // 得 >= 10 不然会有类似 506 这种情况
      if (+(str[0] + str[1]) <= 25 && +(str[0] + str[1]) >= 10) {
        return 2;
      } else {
        return 1;
      }
    };
    let res = translateNum(str.substring(1));
    if (+(str[0] + str[1]) <= 25 && +(str[0] + str[1]) >= 10) {
      res += translateNum(str.substring(2));
    }
    return res;
  }

  return _translateNum(String(num), 0);
};