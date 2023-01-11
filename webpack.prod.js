const path = require("path");
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
   mode: "production",
   output: {
    filename: "[name][hash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader", ],
      },
    ],
  },
   optimization: {
    minimizer: [
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        title: "PizzaVerse",
        filename: "index.html",
        template: "./src/index.html",
        favicon: "./src/assets/favicon.ico",  
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      }),
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name][contenthash].css" }),
  ],
})