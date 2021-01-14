/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 
 * 思路:
 *  自己构建一个最小堆
 *  最开始先把每个链表的第一个node干进去
 *  取出最小
 *  然后把该最小所在的node的next的node放进最小堆里头
 *  以此类推
 */

class nodeHeap{
  constructor() {
    this.items = [NaN];
    this.length = 0;
  }
  insert = (node) => {
    this.items.push(node);
    this.length++;
    this.shiftUp(this.length);
  }
  shiftUp = (index) => {
    while((index / 2) >= 1) {
      const parentIndex = (index / 2) | 0;
      if(this.items[parentIndex].val > this.items[index].val) {
        [ [this.items[parentIndex]], [this.items[index]] ] = [ [this.items[index]], [this.items[parentIndex]] ];
      } else {
        break;
      }
      index = parentIndex;
    }
  }
  shiftDown = (index) => {
    while(index >= 1 && index * 2 <= this.length) {
      const i = this.items[index * 2 + 1] ?
        this.items[index * 2 + 1].val < this.items[index * 2].val ?
          index * 2 + 1 :
            index * 2 : index * 2;
      if (this.items[index].val < this.items[i].val) break;
      [ this.items[index], this.items[i] ] = [ this.items[i], this.items[index] ];
      index = i;
    }
  }
  getMin = () => {
    [ this.items[1], this.items[this.length] ] = [ this.items[this.length], this.items[1] ];
    const res = this.items[this.length];
    this.items.pop();
    this.length--;
    this.shiftDown(1);
    return res;
  }
  print = () => {
    const temp = [];
    this.items.forEach((item, index) => index && temp.push(item.val));
    console.log(JSON.stringify(temp));
  }
}

var mergeKLists = function(lists) {
  if (!lists.length) return null;
  const heap = new nodeHeap();
  const res = [];
  lists.forEach((item) => {
    item && heap.insert(item);
  });
  if (!heap.length) return null;
  while(heap.length) {
    const tempRes = heap.getMin();
    res.push(tempRes);
    if (tempRes.next) {
      heap.insert(tempRes.next);
    }
  }
  res.reduce((a, b) => (b ? (a.next = b) : null));
  return res[0];
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const node9 = new ListNode(6, null)
const node8 = new ListNode(2, node9);

const node7 = new ListNode(4, null);
const node6 = new ListNode(3, node7);
const node5 = new ListNode(1, node6);

// const node4 = new ListNode(4, null);
// const node3 = new ListNode(3, node4);
const node3 = new ListNode(5, null);
const node2 = new ListNode(4, node3);
const node1 = new ListNode(1, node2);

const list = [node1, node5, node8];

let res = mergeKLists(list);

while(res.next) {
  console.log(res.val);
  res = res.next
}
