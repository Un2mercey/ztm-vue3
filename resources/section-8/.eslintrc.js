module.exports = {
    "extends": [
        "@Un2mercey/eslint-config-vue",
        "plugin:vue/essential",
    ],
    "rules": {
        "no-console": process.env.NODE_ENV === "production" ? 2 : 0,
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        "import/extensions": [0],
        "no-throw-literal": [1],
        "no-useless-escape": [1],
        "class-methods-use-this": [0],
        "import/no-unresolved": [0],
        "no-template-curly-in-string": [1],
        "linebreak-style": [0],
    },
}
