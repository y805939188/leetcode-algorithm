/**
 * 这样用字符串来回传的话 边界多 效率低
 * 下次做要用数组
 */

function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  if (!nums.length) return res;
  const tmp_res: string[] = [];
  const _permuteUnique = (arr: number[], tmp: string) => {
    let t = tmp.split(',');
    if (tmp && (t.length === nums.length)) {
      if (tmp_res.indexOf(tmp) === -1) {
        tmp_res.push(tmp);
        const _t = t.map((item) => Number(item));
        res.push(_t);
      }
    } else {
      const len: number = arr.length;
      for (let i: number = 0; i < len; i++) {
        const tmp_arr = [...arr];
        const tmp_str = tmp_arr.splice(i, 1)[0];
        const _tmp = tmp ? tmp + ',' + tmp_str : `${tmp_str}`;
        _permuteUnique(tmp_arr, _tmp);
      }
    }
  }

  _permuteUnique(nums, '');
  return res;
};

permuteUnique([1]);
