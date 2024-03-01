const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'webpack-config-Atelier',
  mode: 'development',
  entry: path.join(__dirname, './src', './index.jsx'),
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:/\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src", 'index.html'),
    }),
  ],
};
