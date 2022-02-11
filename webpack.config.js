const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  target: ["web", "es7"],
};
