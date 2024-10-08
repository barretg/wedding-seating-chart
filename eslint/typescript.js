module.exports = {
    extends: ["./base"],

    parser: "@typescript-eslint/parser",

    plugins: ["@typescript-eslint"],

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {},
        },
    },

    rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        "no-shadow": "off",
        "no-redeclare": "off",
        "no-restricted-syntax": "off",
        "no-unused-vars": "off",
        "no-console": "off",
        "@typescript-eslint/no-unused-vars": [
            "off", {
                ignoreRestSiblings: true,
            },
        ],
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["off"],
        "no-useless-constructor": "off",
        "no-empty-function": [
        "off", {
                allow: ["constructors"],
            },
        ],
    },
};