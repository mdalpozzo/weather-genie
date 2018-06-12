const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDir = 'public/dist';

module.exports = {
  entry: './src/client/components/index.jsx',
  output: {
    path: path.join(__dirname, outputDir),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    private: true,
    proxy: {
      '/api': 'http://localhost:1337'
    }
  },
  plugins: [
    new CleanWebpackPlugin([outputDir])
    // new HtmlWebpackPlugin({
    //     template: "./public/index.html",
    //     favicon: "./public/favicon.ico"
    // })
  ]
};
