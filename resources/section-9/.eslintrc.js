module.exports = {
    "extends": [
        "@Un2mercey/eslint-config-vue",
        "plugin:vue/vue3-essential",
    ],
    "rules": {
        "import/extensions": [0],
        "no-throw-literal": [1],
        "no-param-reassign": [1],
        "no-useless-escape": [1],
        "class-methods-use-this": [0],
        "import/no-unresolved": [0],
        "no-template-curly-in-string": [1],
        "camelcase": [1, {"properties": "never", "ignoreDestructuring": true}],
        "linebreak-style": [0],
    },
    "overrides": [
        {
            "files": [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            "env": {
                "jest": true,
            },
        },
    ],
}
