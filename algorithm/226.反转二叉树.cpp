#include "iostream"
#include "stack"
#include "string"
using namespace std;

/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {};
};

class Command {
  public:
    string cmd; // goto change
    TreeNode *node;
    Command(string cmd, TreeNode *node): cmd(cmd), node(node) {};
};

class Solution {
  private:
    stack<Command*> myStack;
  public:
    TreeNode* invertTree(TreeNode* root) {
      if (!root) return nullptr;
      Command *cmd = new Command("goto", root);
      myStack.push(cmd);
      while(!myStack.empty()) {
        Command *currentCmd = myStack.top();
        myStack.pop();
        if (currentCmd -> cmd == "change") {
          TreeNode *temp = currentCmd -> node -> right;
          currentCmd -> node -> right = currentCmd -> node -> left;
          currentCmd -> node -> left = temp;
        } else {
          Command *newCmd;
          if (currentCmd -> cmd == "goto") {
            if (currentCmd -> node -> left) {
              newCmd = new Command("goto", currentCmd -> node -> left);
              myStack.push(newCmd);
            }
            if (currentCmd -> node -> right) {
              newCmd = new Command("goto", currentCmd -> node -> right);
              myStack.push(newCmd);
            }
            newCmd = new Command("change", currentCmd -> node);
            myStack.push(newCmd);
          }
        }
      }

      return root;
    }
};
