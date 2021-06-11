module.exports = {
  extends: ["eslint:recommended"],
  env: { node: true },
  overrides: [
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint", "react"],
      rules: {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-namespace": "off",
      },
    },
  ],
};
