module.exports = {
  root: true,
  env: {
    es6: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "no-debugger": 2,
    "object-curly-spacing": 2,
    "semi": 2,
  },
};
