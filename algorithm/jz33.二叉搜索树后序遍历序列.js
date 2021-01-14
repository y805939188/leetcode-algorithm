/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  const _verifyPostorder = (arr) => {
    const _len = arr.length;
    if (!_len) return true;
    const _current = arr[_len - 1];
    // 先遍历一遍, 如果出现前面都是小于最后一位, 然后有一个大于最后一位了
    // 说明进入到右子树了, 继续遍历如果突然出现一个小于最后一位的
    // 说明有问题 不符合erchasousuosh 
    let flag = false;
    for (let i = 0; i < _len - 1; i++) {
      if (arr[i] < _current && flag) return false;
      if (arr[i] > _current) flag = true;
    }
    // 走到这里说明起码左子树和右子树一个都小于 root 一个都大于 root
    if (arr[_len - 1] > arr[_len - 2]) {
      // 进入这里说明没有右子树
      return _verifyPostorder(arr.slice(0, arr.length-1));
    }
    
    // 进到这里就需要把左子树和右子树分开递归了
    const _left = arr.filter(item => item < _current);
    const _right = arr.filter(item => item > _current);
    const _leftRes = _verifyPostorder(_left);
    const _rightRes = _verifyPostorder(_right);
    return _leftRes && _rightRes;
  }
  return _verifyPostorder(postorder); 
};