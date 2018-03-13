const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode : 'development',
  entry: {
    'app' : './src/index.js',
    'vendor' : ['jquery', 'lodash', 'pixi.js']
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename : 'index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/cms/zone-list.html',
      filename : 'cms/zone-list.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/directory/index.html',
      filename : 'directory/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};