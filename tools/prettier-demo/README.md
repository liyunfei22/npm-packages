# 概况

换句话说，使用 Prettier 进行格式化，使用 linter 来捕捉错误！

## 安装

首先，在本地安装 Prettier：

```sh
npm install --save-dev --save-exact prettier
```

然后，创建一个空配置文件，让编辑器和其他工具知道您正在使用 Prettier：

```sh
echo {}> `.prettierrc.json`
```

接下来，创建一个`.prettierignore`文件，让 `Prettier CLI`和编辑器知道哪些文件不能格式化。这是一个例子：

```sh
# Ignore artifacts:
build
coverage
```

提示！将 `.prettierignore` 建立在 ` .gitignore 和 ``.eslintignore ` 上（如果有的话）。

另一个提示！如果您的项目尚未准备好格式化 HTML 文件，请添加\*.html.

现在，使用 `Prettier` 格式化所有文件：

```sh
npx prettier --write .
```

prettier --write .非常适合格式化所有内容，但对于大型项目可能需要一点时间。你可以运行 prettier --write app/格式化某个目录，或者 prettier --write app/components/Button.js 格式化某个文件。或者使用`glob` `likeprettier` --write "app/\*_/_.test.js"格式化目录中的所有测试（请参阅 fast-glob 以了解支持的 glob 语法）。

如果您有 CI 设置，请在其中运行以下命令以确保每个人都运行 Prettier。这避免了合并冲突和其他协作问题！

```sh
npx prettier --check .
```

--check 就像--write，但只检查文件是否已经格式化，而不是覆盖它们。prettier --write 并且 prettier --check 是运行 Prettier 最常用的方法。

## eslint-config-prettier

关闭所有不必要或可能与 Prettier 冲突的规则。
这使您可以使用自己喜欢的可共享配置，而不会在使用 Prettier 时妨碍其风格选择。
请注意，此配置仅关闭规则，因此仅将其与其他配置一起使用才有意义。

## 参考文章

[学习 Prettier](https://mp.weixin.qq.com/s/Dsthw1hgX68Epd3f3LpAYQ)
[husky+lint-staged 助力前端代码规范](https://www.shouxicto.com/article/512.html)
[prettier 官网](https://prettier.io/)
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
