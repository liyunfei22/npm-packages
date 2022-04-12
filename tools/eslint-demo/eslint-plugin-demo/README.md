# eslint-plugin-demo

eslin plugin demo

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-demo`:

```sh
npm install eslint-plugin-demo --save-dev
```

## Usage

Add `demo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["demo"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "demo/rule-name": 2
    }
}
```

## Supported Rules

-   Fill in provided rules here
