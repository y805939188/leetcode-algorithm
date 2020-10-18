/**
 * 这个方法可以对系统的递归进行抽象
 * 
 * 比如普通的前序递归遍历
 *   function recursion(root) {
 *      if (root) {
 *         console.log(root);
 *         recursion(root.left);
 *         recursion(root.right);
 *      }
 *   }
 * 
 * 对于系统来说, 所做的事情就是
 * 
 * 首先外部要开始调用函数 然后 goto root 是第一条指令
 *      
 *      goto   root
 * 
 * 之后 goto root 执行的时候会往栈中推入三条指令
 *      
 *      print  root
 *      goto   root.left
 *      goto   root.right
 * 
 * 然后从栈顶取出 print root 的指令 进行打印相关的操作 之后变成这样
 * 
 *      goto   root.left
 *      goto   root.right
 * 
 * 再然后从栈顶取出 goto root.left 的指令 这个指令会以 root.left 为 root 然后做一样的指令入栈
 *
 *      print  root.left
 *      goto   root.left.left
 *      goto   root.left.right
 *      goto   root.left
 *      goto   root.right
 * 
 * 之后就一直以此类推 知道栈空了为止
 * 
 */


// 更抽象更牛逼的思路:
class Command {
  cmd = ""; // 表示要进行的命令 比如 print, goto 等
  node = null;
  constructor(cmd, node) {
    this.cmd = cmd;
    this.node = node;
  }
}

var NB = function(root) {
  const res = [];
  if (!root) return res;
  const stack = [];
  stack.push(new Command('goto', root));
  while(stack.length) {
    const command = stack.pop();
    if (command.cmd === 'print') {
      res.push(command.node.val);
    } else {
      if (command.cmd === 'goto') {
        const { left, right } = command.node;
        if (right) stack.push(new Command('goto', right));
        if (left) stack.push(new Command('goto', left));
        // 这个是前序遍历 中序和后序只需要改变这条指令的位置就可以了
        stack.push(new Command('print', node));
      }
    }
  }
  return res;
};
