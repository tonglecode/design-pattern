const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  // entry: "./src/index.ts",
  //   entry: "./src/iterator/index.ts",
  //   entry: "./src/strategy/index.ts",
  //   entry: "./src/template/index.ts",
  //   entry: "./src/adapter/index.ts",
  //   entry: "./src/bridge/index.ts",
  //   entry: "./src/decorator/index.ts",
  //   entry: "./src/singleton/index.ts",
  //   entry: "./src/flyweight/index.ts",
  //   entry: "./src/composite/index.ts",
  //   entry: "./src/factory/index.ts",
  //   entry: "./src/observer/index.ts",
  entry: "./src/mediator/index.ts",

  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
