/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
      react: {
        version: "detect", // Automatically detects the React version
      },
    },
  },
];
