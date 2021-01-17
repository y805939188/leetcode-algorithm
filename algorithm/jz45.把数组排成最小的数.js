/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  // const res = [];
  // const _minNumber = (arr, tmp) => {
  //   if (!arr.length) {
  //     res.push(tmp.join(''));
  //   } else {
  //     for (let i = 0; i < arr.length; i++) {
  //       const _arr = [...arr];
  //       const current = _arr[i];
  //       const _tmp = [...tmp, current];
  //       _arr.splice(i, 1);
  //       _minNumber(_arr, _tmp);
  //     }
  //   }
  // }
  // _minNumber(nums, []);
  // return res.reduce( (a, b) => (Number(a) > Number(b) ? b : a), Infinity );
  return nums.map((item) => (String(item))).sort((a, b) => {
    // let aLen = 0, bLen = 0;
    // while(true) {
    //   // if (+a[aLen] < +b[bLen]) return b[bLen].charCodeAt() - a[aLen].charCodeAt();
    //   // if (+a[aLen] > +b[bLen]) return a[aLen].charCodeAt() - b[bLen].charCodeAt();
    //   if (+a[aLen] < +b[bLen]) return b[bLen] - a[aLen];
    //   if (+a[aLen] > +b[bLen]) return a[aLen] - b[bLen];
    //   if (!a[aLen + 1] && !b[bLen + 1]) return -1;
    //   if (a[aLen + 1]) {
    //     aLen++;
    //   }
    //   if (b[bLen + 1]) {
    //     bLen++;
    //   }
    // }
    return +(a + b) - +(b + a);
  }).join('');
};
