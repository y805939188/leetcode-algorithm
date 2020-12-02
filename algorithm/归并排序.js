const mergeSort = (list) => {

  const _merge = (arr1, arr2) => {
    const res = [];
    let i = j = 0;
    while(true) {
      if (arr1[i] > arr2[j]) {
        res.push(arr2[j++]);
      } else {
        res.push(arr1[i++]);
      }
      if (i >= arr1.length) {
        res.push(...arr2.slice(j));
        break;
      } else if (j >= arr2.length) {
        res.push(...arr1.slice(i));
        break;
      }
    }
    return res;
  }

  // const _split = (arr, left, right) => {
  //   if (left === right) return [arr[right]];
  //   const mid = ((left + right) / 2) | 0;
  //   return _merge(_split(arr, left, mid), _split(arr, mid + 1, right));
  // }

  const _mergeSort = (arr, left, right) => {
    if (left === right) return [arr[right]];
    const mid = ((left + right) / 2) | 0;
    const _left_sort = _mergeSort(arr, left, mid);
    const _right_sort = _mergeSort(arr, mid + 1, right);
    if (_left_sort[_left_sort.length - 1] <= _right_sort[_right_sort.length - 1]) {
      return _left_sort.concat(_right_sort);
    }
    return _merge(_mergeSort(arr, left, mid), _mergeSort(arr, mid + 1, right));
  }
  return _mergeSort(list, 0, list.length - 1);
  // return _split(list, 0, list.length - 1);
}
