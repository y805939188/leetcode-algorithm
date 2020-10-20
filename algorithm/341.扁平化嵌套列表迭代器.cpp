#include "iostream"
#include "string"
#include "vector"
#include "algorithm"
#include "stack"
#include "queue"
using namespace std;

class NestedInteger {
public:
  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  bool isInteger() const;

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // The result is undefined if this NestedInteger holds a nested list
  int getInteger() const;

  // Return the nested list that this NestedInteger holds, if it holds a nested list
  // The result is undefined if this NestedInteger holds a single integer
  const vector<NestedInteger> &getList() const;
};

class Command {
  public:
    string cmd = "";
    vector<NestedInteger> ni;
    NestedInteger interger;
    Command(string cmd, vector<NestedInteger> ni): cmd(cmd), ni(ni) {};
    Command(string cmd, NestedInteger interger): cmd(cmd), interger(interger) {};
};

class NestedIterator {
private:
  queue<NestedInteger> flattenList;
public:
  NestedIterator(vector<NestedInteger> &nestedList) {
    if (nestedList.size()) {
      stack<Command*> myStack;
      NestedInteger one = nestedList[0];
      Command *head = new Command("goto", nestedList);
      myStack.push(head);
      while(myStack.size()) {
        Command *command = myStack.top();
        myStack.pop();
        if (command -> cmd == "push") {
          this -> flattenList.push(command -> interger);
        } else {
          if (command -> cmd == "goto") {
            vector<NestedInteger> temp = command -> ni;
            for (int i = temp.size() - 1; i >= 0; i--) {
              Command *cmd;
              if (temp[i].isInteger()) {
                cmd = new Command("push", temp[i]);
              } else {
                cmd = new Command("goto", temp[i].getList());
              }
              myStack.push(cmd);
            }
          }
        }
      }
    }
  }
  
  int next() {
    NestedInteger temp = this -> flattenList.front();
    this -> flattenList.pop();
    return temp.getInteger();
  }
  
  bool hasNext() {
    return !!flattenList.size();
  }
};

/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i(nestedList);
 * while (i.hasNext()) cout << i.next();
 */