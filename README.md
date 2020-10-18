# LeetCode 刷题
---
> 看心情使用语言

vscode中设置快捷键以便运行不同语言代码:
```json
[
  {
    "key": "cmd+r",
    "command": "workbench.action.tasks.runTask",
    "args": "compileRun"
  },
  {
    "key": "cmd+t",
    "command": "workbench.action.tasks.runTask",
    "args": "runTs"
  },
  {
    "key": "cmd+y",
    "command": "workbench.action.tasks.runTask",
    "args": "runJs"
  }
]
```
然后快捷键:</br>
  * cmd + r: 运行cpp
  * cmd + t: 运行ts (需要 npm install -g ts-node)
  * cmd + y: 运行js