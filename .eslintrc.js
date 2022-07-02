module.exports = {
  extends: ["timetree/react"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^ssml$" },
    ],
    "functional/prefer-readonly-type": "off",
  },
};
