# LeetCode 刷题
---
> 刷题还是 js/python 大法好, 人生苦短, 静态语言耗不起

vscode中设置快捷键以便运行不同语言代码:
```json
[
  {
    "key": "cmd+r",
    "command": "workbench.action.tasks.runTask",
    "args": "compileRun"
  },
    {
    "key": "cmd+u",
    "command": "workbench.action.tasks.runTask",
    "args": "runPy"
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
  * cmd + u: 运行python