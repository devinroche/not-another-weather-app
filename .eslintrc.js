module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "react-native"
    ],
    "ecmaFeatures": {
        "jsx": true
    },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react-native/no-unused-styles": 2,
        "react-native/split-platform-components": 2,
        "no-use-before-define": 0,
        "indent": ["error", 4],
        "react/jsx-indent": ["error", 4],
        "react/jsx-one-expression-per-line": 0,
        "react/forbid-prop-types": 0,
        "arrow-body-style": 0,
        "react/no-array-index-key":0,
        "max-len": [2, 140, 4],
        "react/jsx-indent-props": ["error", 4],
    }
};