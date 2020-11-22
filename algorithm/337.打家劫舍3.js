/**
 * 
 * 思路1:
 *  递归
 *  需要求出来的有两种情况
 *  第一种是从当前节点开始偷 然后再去偷它的 left.left + left.right 以及 right.left + right.right
 *  第二种是不偷当前节点 从当前节点的 left 以及 right 开始偷
 *  最终从 (left.left + left.right) + (right.left + right.right) 以及 (left + right) 中取最大值
 */
var rob = function(root) {
  const _cache = new Map();
  const _thief = (node) => {
    if (_cache.has(node)) return _cache.get(node);
    if (!node) return 0;
    let currentVal = node.val;
    if (node.left) currentVal += _thief(node.left.left) + _thief(node.left.right);
    if (node.right) currentVal += _thief(node.right.left) + _thief(node.right.right);
    let _left_val, _right_val;
    _left_val = _thief(node.left);
    _right_val = _thief(node.right);
    const val = Math.max(_left_val + _right_val, currentVal);
    _cache.set(node, val);
    return val;
  }
  return _thief(root);
};


// var rob = function(root) {

//   const _thief = (node) => {
//     if (!node) return 0;
//     const currentVal = node.val;
//     let res = [currentVal];
//     let currentNode = node;
//     while(currentNode.left) {
//       res.push((currentNode.left || 0) && (currentVal + _thief(currentNode.left.left)));
//       currentNode = currentNode.left;
//     }
//     currentNode = node;
//     while(currentNode.left) {
//       res.push((currentNode.left || 0) && (currentVal + _thief(currentNode.left.right)));
//       currentNode = currentNode.left;
//     }
//     let _tmpMax1 = Math.max(...res);
//     if (node === root) console.log(_tmpMax1);
//     res = [currentVal];
//     currentNode = node;
//     while(currentNode.right) {
//       res.push((currentNode.right || 0) && (currentVal + _thief(currentNode.right.left)));
//       currentNode = currentNode.right;
//     }
//     currentNode = node;
//     while(currentNode.right) {
//       res.push((currentNode.right || 0) && (currentVal + _thief(currentNode.right.right)));
//       currentNode = currentNode.right;
//     }
//     let _tmpMax2 = Math.max(...res);
//     if (node === root) console.log(_tmpMax2);
//     return _tmpMax1 + (_tmpMax2 - currentVal);
//   }

//   return _thief(root);
// };
