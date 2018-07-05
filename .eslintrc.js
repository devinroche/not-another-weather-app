module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "no-use-before-define": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-one-expression-per-line": 0,
    }
};