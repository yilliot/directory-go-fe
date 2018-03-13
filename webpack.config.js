const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'app' : './src/index.js',
    'jquery' : 'jquery'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename : 'index.html',
      title : 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};