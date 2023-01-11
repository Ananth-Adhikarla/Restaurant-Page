const path = require("path");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: ["html-loader"]
      // },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
    ],
  },
};