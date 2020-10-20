
// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
class NestedInteger {
  // If value is provided, then it holds a single integer
  // Otherwise it holds an empty nested list
  constructor(value?: number) {
    // ...
  };

  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  // @ts-ignore
  isInteger(): boolean {
    // ...
  };

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  // @ts-ignore
  getInteger(): number | null {
    // ...
  };

  // Set this NestedInteger to hold a single integer equal to value.
  setInteger(value: number) {
    // ...
  };

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  add(elem: NestedInteger) {
    // ...
  };

  // Return the nested list that this NestedInteger holds,
  // or an empty list if this NestedInteger holds a single integer
  // @ts-ignore
  getList(): NestedInteger[] {
    // ...
  };
};


class NestedIterator {
  private flattenList: NestedInteger[];
  constructor(nestedList: NestedInteger[]) {
    this.flattenList = this.initFlattenList(nestedList);
  }

  initFlattenList = (list: NestedInteger[]): NestedInteger[] => (list.reduce((a, b) => (b.isInteger() ? b : this.initFlattenList(b.getList()) as any), []));

  hasNext(): boolean {
    return !!this.flattenList.length;
  }

  next(): number | null {
    return this.flattenList.shift().getInteger();
  }
}

/**
* Your ParkingSystem object will be instantiated and called as such:
* var obj = new NestedIterator(nestedList)
* var a: number[] = []
* while (obj.hasNext()) a.push(obj.next());
*/