module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint", "react"],
  env: { node: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "@typescript-eslint/no-explicit-any": "off"
  }
};
