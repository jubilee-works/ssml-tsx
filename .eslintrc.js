module.exports = {
  extends: ["timetree/react"],
  settings: { react: { version: "18" } },
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^ssml$" },
    ],
    "functional/prefer-readonly-type": "off",
  },
};
