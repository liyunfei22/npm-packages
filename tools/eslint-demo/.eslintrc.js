module.exports = {
    "env": { // 一个环境定义了一组预定义的全局变量
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    // 解析器
      // espima(默认), babel-eslint, @typescript-eslint/parse
    "parser": "@typescript-eslint/parser",
    "parserOptions": { // 解析器配置参数
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // 全局规则
        ""
    }
}
