# 概况
husky是什么？用来作什么的？
husky是一个为 git 客户端增加 hook 的工具，githooks - git使用的工具 (githook在官网的介绍)，比如 pre-commit 钩子就会在你执行 git commit 的触发。

由于钩子可以在git commit中触发，所以我们可以在提交到暂缓区时，做一些lint 检查、单元测试、代码美化等操作。

lint-staged是什么？
一个仅仅过滤出 Git 代码暂存区文件(被 git add 的文件)的工具

对个人要提交的代码的一个规范和约束

是一个在 git 暂存文件上（也就是被 git add 的文件）运行已配置的 linter（或其他）任务。lint-staged 总是将所有暂存文件的列表传递给任务。
## husky介绍
Install husky
```
npm install husky --save-dev
```
Enable Git hooks
```
npx husky install
```
To automatically have Git hooks enabled after install, edit package.json
npm set-script prepare "husky install"
You should have:
```
// package.json
{
  "scripts": {
    "prepare": "husky install"
  }
}
```
Yarn 2 doesn't support prepare lifecycle script, so husky needs to be installed differently (this doesn't apply to Yarn 1 though). See Yarn 2 install.

Create a hook
To add a command to a hook or create a new one, use husky add <file> [cmd] (don't forget to run husky install before).
```
npx husky add .husky/pre-commit "npm test"
git add .husky/pre-commit
```
Try to make a commit
```
git commit -m "Keep calm and commit"
```
If npm test command fails, your commit will be automatically aborted.

Using Yarn to run commands? There's an issue on Windows with Git Bash, see Yarn on Windows.

For Windows users, if you see the help message when running npx husky add ..., try node node_modules/.bin/husky add ... instead. This isn't an issue with husky code and is fixed in recent versions of npm 8.

Uninstall
```
npm uninstall husky && git config --unset core.hooksPath
```