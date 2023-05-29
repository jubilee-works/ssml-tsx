module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  transform: {
    "\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  testMatch: ["**/__tests__/**/*.spec.(js,jsx,ts|tsx)"],
};
