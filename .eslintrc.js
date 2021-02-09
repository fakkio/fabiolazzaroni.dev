module.exports = {
  globals: {
    graphql: true,
    __PATH_PREFIX__: true,
  },
  extends: ["react-app", "plugin:jsx-a11y/recommended"],
  plugins: ["graphql", "jsx-a11y"],
};
