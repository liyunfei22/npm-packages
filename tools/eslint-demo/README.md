# 概况

ESLint最初是由Nicholas C. Zakas 于2013年6月创建的开源项目。它的目标是提供一个插件化的javascript代码检测工具。

- ESLint 使用 Espree 解析 JavaScript。
- ESLint 使用 AST 去分析代码中的模式
- ESLint 是完全插件化的。每一个规则都是一个插件并且你可以在运行时添加更多的规则

## 说明

运行 eslint --init 之后，.eslintrc 文件会在你的文件夹中自动创建。你可以在 .eslintrc 文件中看到许多像这样的规则：

```json
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```

"semi" 和 "quotes" 是 ESLint 中 规则 的名称。第一个值是错误级别，可以使下面的值之一：

"off" or 0 - 关闭规则
"warn" or 1 - 将规则视为一个警告（不会影响退出码）
"error" or 2 - 将规则视为一个错误 (退出码为1)
这三个错误级别可以允许你细粒度的控制 ESLint 是如何应用规则（更多关于配置选项和细节的问题，请查看配置文件）

你的 .eslintrc 配置文件可以包含下面的一行：

    "extends": "eslint:recommended"
由于这行，所有在 规则页面 被标记为 “” 的规则将会默认开启。另外，你可以在 npmjs.com 搜索 “eslint-config” 使用别人创建好的配置。只有在你的配置文件中扩展了一个可分享的配置或者明确开启一个规则，ESLint 才会去校验你的代码。

## 命令行

使用以下格式运行 ESLint：

```
eslint [options] [file|dir|glob]*
```

比如：

```
eslint file1.js file2.js
```

或者：

```
eslint lib/**
```

## 配置

### 解析器

ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器
以下解析器与 ESLint 兼容：

- Esprima
- Babel-ESLint - 一个对Babel解析器的包装，使其能够与 ESLint 兼容。
- @typescript-eslint/parser - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。

```json
{
    "parser": "esprima",
    "rules": {
        "semi": "error"
    }
}
```

### Parser Options

ESLint 允许你指定你想要支持的 JavaScript 语言选项
ecmaVersion - 默认设置为 3，5（默认）
sourceType - 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
ecmaFeatures - 这是个对象，表示你想使用的额外的语言特性:

- globalReturn - 允许在全局作用域下使用 return 语句
- impliedStrict - 启用全局 strict mode (如果 ecmaVersion 是 5 或更高)
- jsx - 启用 JSX
- experimentalObjectRestSpread - 启用实验性的 object rest/spread properties 支持

### env

一个环境定义了一组预定义的全局变量。可用的环境包括：
`browser` - 浏览器环境中的全局变量。
`node` - Node.js 全局变量和 Node.js 作用域。
`commonjs` - CommonJS 全局变量和 CommonJS 作用域 (用于 Browserify/WebPack 打包的只在浏览器中运行的代码)。
`shared-node-browser` - Node.js 和 Browser 通用全局变量。
`es6` - 启用除了 modules 以外的所有 ECMAScript 6 特性（该选项会自动设置 ecmaVersion 解析器选项为 6）。
`worker` - Web Workers 全局变量。
`amd` - 将 require() 和 define() 定义为像 amd 一样的全局变量。
`mocha`- 添加所有的 Mocha 测试全局变量。
`jasmine` - 添加所有的 Jasmine 版本 1.3 和 2.0 的测试全局变量。
`jest` - Jest 全局变量。
`phantomjs` - PhantomJS 全局变量。
`protracto`r - Protractor 全局变量。
`qunit` - QUnit 全局变量。
`jquery` - jQuery 全局变量。
`prototypejs` - Prototype.js 全局变量。
`shelljs` - ShellJS 全局变量。
`meteor` - Meteor 全局变量。
`mongo` - MongoDB 全局变量。
`applescript` - AppleScript 全局变量。
`nashorn` - Java 8 Nashorn 全局变量。
`serviceworker` - Service Worker 全局变量。
`atomtest` - Atom 测试全局变量。
`embertest` - Ember 测试全局变量。
`webextensions` - WebExtensions 全局变量。
`greasemonkey` - GreaseMonkey 全局变量。
这些环境并不是互斥的，所以你可以同时定义多个。

可以在源文件里、在配置文件中或使用 命令行 的 --env 选项来指定环境。

### globals

当访问当前源文件内未定义的变量时，no-undef 规则将发出警告。如果你想在一个源文件里使用全局变量，推荐你在 ESLint 中定义这些全局变量，这样 ESLint 就不会发出警告了。你可以使用注释或在配置文件中定义全局变量。

```json
{
    "globals": {
        "var1": "writable",
        "var2": "readonly"
    }
}
```

### plugins

在配置文件里配置插件时，可以使用 plugins 关键字来存放插件名字的列表。插件名称可以省略 eslint-plugin- 前缀。

```json
{
    "plugins": [
        "plugin1",
        "eslint-plugin-plugin2"
    ]
}
```

### rules

ESLint 附带有大量的规则。你可以使用注释或配置文件修改你项目中要使用的规则。要改变一个规则设置，你必须将规则 ID 设置为下列值之一：

- "off" 或 0 - 关闭规则
- "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
- "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)

还可以使用 rules 连同错误级别和任何你想使用的选项，在配置文件中进行规则配置。例如：

```json
{
    "rules": {
        "eqeqeq": "off",
        "curly": "error",
        "quotes": ["error", "double"]
    }
}
```

### 使用内联注释禁用规则

```javaScript
/* eslint-disable */

alert('foo');

/* eslint-enable */
```

### 使用配置文件

有两种方式使用配置文件。
第一种方式是通过 .eslintrc.* 和 package.json 文件
第二种方式是使用 -c 选项传递命令行将文件保持到你喜欢的地方。

```shell
eslint -c myconfig.json myfiletotest.js
```

### 扩展配置文件 extends

一个配置文件可以被基础配置中的已启用的规则继承。
extends 属性值可以是：

- 指定配置的字符串(配置文件的路径、可共享配置的名称、eslint:recommended 或 eslint:all)
- 字符串数组：每个配置继承它前面的配置

1. Using "eslint:recommended"
值为 "eslint:recommended" 的 extends 属性启用一系列核心规则，这些规则报告一些常见问题，在 规则页面 中被标记为  。这个推荐的子集只能在 ESLint 主要版本进行更新。
2.使用可共享的配置包
可共享的配置 是一个 npm 包，它输出一个配置对象。要确保这个包安装在 ESLint 能请求到的目录下。

extends 属性值可以省略包名的前缀 eslint-config-。

eslint --init 命令可以创建一个配置，这样你就可以扩展一个流行的风格指南（比如，eslint-config-standard）
3. 使用插件中的配置
插件 是一个 npm 包，通常输出规则。一些插件也可以输出一个或多个命名的 配置。要确保这个包安装在 ESLint 能请求到的目录下。

plugins 属性值 可以省略包名的前缀 `eslint-plugin-`。

extends 属性值可以由以下组成：

`plugin:`包名 (省略了前缀，比如，react)`/`配置名称 (比如 recommended)
JSON 格式的一个配置文件的例子：

```json
{
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
       "no-set-state": "off"
    }
}

```

### 基于glob模式匹配

有时，你可能需要更精细的配置，比如，如果同一个目录下的文件需要有不同的配置。因此，你可以在配置中使用 overrides 键，它只适用于匹配特定的 glob 模式的文件，使用你在命令行上传递的格式 (e.g., `app/**/*.test.js`)。

```json
{
  "rules": {
    "quotes": ["error", "double"]
  },

  "overrides": [
    {
      "files": ["bin/*.js", "lib/*.js"],
      "excludedFiles": "*.test.js",
      "rules": {
        "quotes": ["error", "single"]
      }
    }
  ]
}
```

### 忽略文件和目录

你可以通过在项目根目录创建一个 `.eslintignore` 文件告诉 ESLint 去忽略特定的文件和目录。
`.eslintignore` 文件是一个纯文本文件，其中的每一行都是一个 glob 模式表明哪些路径应该忽略检测。例如，以下将忽略所有的 JavaScript 文件：

## 参考文章

[深入理解eslint](https://segmentfault.com/a/1190000019896962)

[eslint官网](http://eslint.cn/)

[typescript-eslint](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
