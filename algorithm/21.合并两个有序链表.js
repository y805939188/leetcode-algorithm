/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  const _mergeTwoLists = (a, b) => {
    if (!a) return b;
    if (!b) return a;
    if (a.value < b.value) {
      a.next = _mergeTwoLists(a.next, b);
      return a;
    } else {
      b.next = _mergeTwoLists(a, b.next);
      return b;
    }
  }
  return _mergeTwoLists(l1, l2);
};

var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  let a = l1, b = l2;
  const res = { next: null };
  let current = res;
  while(true) {
    if (a.val < b.val) {
      current.next = a;
      a = a.next;
      current = current.next;
    } else {
      current.next = b;
      b = b.next;
      current = current.next;
    }
    if (!a) {
      current.next = b;
      break;
    } else if (!b) {
      current.next = a;
      break;
    }
  }
  return res.next;
};