#include "iostream"
#include "string"
#include "vector"
#include "assert.h"
using namespace std;

/**
 * 插入和出队都是 logn 级别的
 * 是一棵树
 * 
 * 二叉堆
 *  任何一个节点都不大于它的父节点
 *  并且必须是一棵完全二叉树
 *  也就是除了最后一层之外, 其他所有层的都必须有两个子节点
 *  同时多出来的那一层的元素都必须在左侧
 * 
 * 
 *              ------------- 88 -------------
 *              ↓                             ↓
 *        ----- 66 ------            -------- 49 ------
 *        ↓             ↓            ↓                ↓
 *   ---  33  ---   --- 36           47               28
 *   ↓          ↓   ↓
 *   7          1   2        
 * 
 *  以上叫最大堆
 *  最小堆和它相反 父节点的值总是小于子节点
 * 
 *  可以使用数组来存储二叉堆
 *  假设索引从 1 开始,
 *  88 为 1
 *  66 为 2
 *  49 为 3
 *  33 为 4
 *  36 为 5
 *  ......
 *  以此类推
 *  每个左节点的 index 是父节点 index 的 二倍
 *  每个右节点的 index 是父节点 index 的 二倍 + 1
 * 
 * 
 *  堆的适用场景
 *    对一个数组进行 N 路的归并排序
 *    比如要对一个 n 位的数组进行 m 路的归并排序
 *    那当对 m 取 n 的时候 相当于归并排序就退化为了堆排序
 *    或者在 N 个元素中选出前 M 个 (NlogM)
 * 
 */

template<typename Item>
class MaxHeap{
  private:
    vector<Item> items;
    int count;
    void shiftUp(int index) {
      while(index > 1 && this -> items[index / 2] < this -> items[index]) {
        swap(items[index / 2], items[index]);
        index /= 2;
      }
    };
    void shiftDown(int index) {
      // 判断其是否有左节点, 有左节点的时候说明有子节点, 就可以做 shift down
      while(index * 2 < count) {
        int i = index * 2; // i
        if (i + 1 <= count && this -> items[i + 1] > this -> items[i]) i++;
        if (this -> items[index] > this -> items[i]) break;
        swap(this -> items[index], this -> items[i]);
        index = i;
      }
    }
  public:
    MaxHeap() {
      this -> items.push_back(0);
      this -> count = 0;
    }
    MaxHeap(vector<Item> arr) {
      // 这个初始化数组为堆的过程 时间复杂度是 O(n)
      // 而每次 insert 那种排序成堆的复杂度是 O(logn)
      // 证明起来相对复杂
      this -> items.push_back(0);
      this -> count = arr.size();
      for (unsigned i = 1; i <= this -> count; i++) {
        this -> items[i] = arr[i - 1];
      }
      // heapify
      // heapify 是把一个数组处理成堆的操作
      // 从 length / 2 的位置开始
      // 因为 length / 2 就是最后一个叶子节点的父节点的索引
      // 然后每次都把索引 --
      // 找前一个索引位置的节点对其进行 shiftDown 操作
      for (unsigned j = this -> count / 2; j >= 1; j--) {
        this -> shiftDown(j);
      }
    }
    int size() {
      return this -> count;
    }
    bool isEmpty() {
      return this -> count == 0;
    }
    void insert(Item item) {
      this -> items.push_back(item);
      this -> count++;
      this -> shiftUp(this -> count);
    }

    Item getMax() {
      assert(this -> count > 0);

      Item res = this -> items[1];
      swap(this -> items[1], this -> items[this -> count]);
      this -> count--;
      this -> shiftDown(1);

      return res;
    }

    void printItems() {
      for (unsigned i = 1; i < this -> items.size(); i++) {
        cout << this -> items[i] << " ";
      }
      cout << endl;
    }
};


/**
 * 原地堆排序
 *  对于一个无序数组 先进行 heapify 的操作把它处理成一个堆排序好的数组
 *  此时第一个元素一定是最大的 然后最大的和最后一个元素交换位置
 *  此时由于第一位的元素已经不符合堆排序了
 *  所以要给第一位置的元素进行 shiftDown 操作
 *  接下来再把第一位和最后一位交换位置
 *  之后再做同样的 shiftDown 操作
 *  以此类推
 */

template<typename T>
void _shiftDown(T arr[], int n, int k) {
  // 当数组的时候 索引是从 0 开始的 所以它的左节点的索引变成了 k * 2 + 1
  while(k * 2 + 1 <= n) { // 说明有左节点
    int i = k * 2 + 1; // 先假设要和它的左节点交换位置
    if (i + 1 <= n && arr[i + 1] > arr[i]) {
      i++; // 这里判断它的左节点和右节点的值谁大
    }
    if (arr[k] > arr[i]) break; // 如果子节点的值都小于它自己 就不用交换
    swap(arr[k], arr[i]); // 否则交换
    k = i; // 然后再对交换过后的它的子节点做同样的循环操作
  }
}

template<typename T>
void heapSort(T arr[], int n) {
  // 先 heapify 把数组处理成堆
  // 最后一个叶子节点的爹的索引应该为 数组长度减一再减一再除以二
  for (unsigned i = (n - 1 - 1) / 2; i >= 0; i--) {
    _shiftDown(arr, n, i);
  }
  // 然后把最后第一个元素和最后一个元素交换位置 这样最后一个元素就是最大的
  // 之后循环着对第一个元素做shiftDown
  for (unsigned j = n - 1; j > 0; j--) {
    swap(arr[j], arr[0]);
    _shiftDown(arr, j, 0);
  }
}


/**
 * 索引堆
 *  不对元素直接进行堆的创建
 *  而是对元素的索引进行堆创建
 *  因为有时候如果依赖元素之前的原始索引的话
 *  可能会有问题
 */

int main(void) {

  MaxHeap<int> maxHeap = MaxHeap<int>();
  cout << maxHeap.size() << endl;

  srand(time(NULL));
  for (unsigned i = 0; i < 15; i++) {
    maxHeap.insert( rand() % 100 );
  }

  maxHeap.printItems();

  while(!maxHeap.isEmpty()) {
    cout << maxHeap.getMax() << " ";
  }
  cout << endl;

  return 0;
}
