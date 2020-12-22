const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.plugins.push(new ESLintPlugin({
        extensions: ["js", "jsx"]
      }));
    }
    return config;
  }
};
