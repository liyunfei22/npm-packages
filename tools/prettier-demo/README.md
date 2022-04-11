# 概况
换句话说，使用Prettier 进行格式化，使用 linter来捕捉错误！


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

提示！将 `.prettierignore` 建立在 `.gitignore 和 ``.eslintignore` 上（如果有的话）。

另一个提示！如果您的项目尚未准备好格式化 HTML 文件，请添加*.html.

现在，使用 `Prettier` 格式化所有文件：

```sh
npx prettier --write .
```

prettier --write .非常适合格式化所有内容，但对于大型项目可能需要一点时间。你可以运行prettier --write app/格式化某个目录，或者prettier --write app/components/Button.js格式化某个文件。或者使用`glob` `likeprettier` --write "app/**/*.test.js"格式化目录中的所有测试（请参阅fast-glob以了解支持的 glob 语法）。

如果您有 CI 设置，请在其中运行以下命令以确保每个人都运行 Prettier。这避免了合并冲突和其他协作问题！

```sh
npx prettier --check .
```

--check就像--write，但只检查文件是否已经格式化，而不是覆盖它们。prettier --write并且prettier --check是运行 Prettier 最常用的方法。
