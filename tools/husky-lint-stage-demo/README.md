# 概况

husky 是什么？用来作什么的？
husky 是一个为 git 客户端增加 hook 的工具，githooks - git 使用的工具 (githook 在官网的介绍)，比如 pre-commit 钩子就会在你执行 git commit 的触发。

由于钩子可以在 git commit 中触发，所以我们可以在提交到暂缓区时，做一些 lint 检查、单元测试、代码美化等操作。

lint-staged 是什么？
一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具

对个人要提交的代码的一个规范和约束

是一个在 git 暂存文件上（也就是被 git add 的文件）运行已配置的 linter（或其他）任务。lint-staged 总是将所有暂存文件的列表传递给任务。

## husky 介绍

安装 husky

```sh
npm install husky --save-dev
```

启动 Git hooks

```sh
npx husky install
```

要在安装后自动启用 Git 挂钩，请编辑 package.json

```json
// package.json
{
    "scripts": {
        "prepare": "husky install"
    }
}
```

创建钩子
use `husky add <file> [cmd]`

```sh
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```

提交

```sh
git commit -m "Keep calm and commit"
```

卸载

```
npm uninstall husky && git config --unset core.hooksPath
```
