const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },

    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
