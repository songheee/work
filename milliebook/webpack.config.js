const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index:'./src/index.js'
  },
  output: {
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "./dist"),
    filename: 'index.js'
  },
  devServer: {
    static: './dist',
    client: {
      logging: 'error',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      hash: true,
      showErrors:true
    }),
    new MiniCssExtractPlugin({
      filename: './style.css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude:/node_modules/,
      }
    ]
  },
}