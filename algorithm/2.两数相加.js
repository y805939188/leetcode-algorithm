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
var addTwoNumbers = function(l1, l2) {
  let t = 0;
  let vnode = new ListNode(0, null);
  const root = vnode;
  while(true) {
    const sum = l1.val + l2.val + t;
    t = (sum / 10) | 0;
    const mol = sum % 10;
    vnode.next = new ListNode(mol, null);
    vnode = vnode.next;
    if (!l1.next && !l2.next) {
      if(t) {
        vnode.next = new ListNode(t, null);
      }
      break;
    };
    l1 = l1.next || { val: 0 };
    l2 = l2.next || { val: 0 };
  }
  return root.next;
};